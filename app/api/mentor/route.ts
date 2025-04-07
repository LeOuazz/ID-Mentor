// app/api/mentor/route.ts
import { NextRequest } from "next/server";
import { disclaimers } from "@/lib/disclaimers";
import { getUserDomainSummary } from "@/lib/memory";
import { callGeminiStream } from "@/lib/vapi";
import { Readable } from "stream";

export async function POST(req: NextRequest) {
    try {
        const { userId, domain, userMessage } = await req.json() || {};
        if (!domain || !userMessage) {
            return new Response("Missing domain or userMessage", { status: 400 });
        }

        // disclaimers[domain] might be empty if domain not recognized
        const domainDisclaimer = disclaimers[domain] || "No domain disclaimer found. This is general info.";

        // fetch short summary from Firestore if you want memory
        let summary = "";
        if (userId) {
            summary = await getUserDomainSummary(userId, domain);
        }

        const systemPrompt = `
You are a holistic AI Mentor specialized in the domain: ${domain}.
${domainDisclaimer}
Remember to be empathetic and personal, referencing user’s memory:
${summary}
`
            .trim();

        // call Gemini via VAPI
        const geminiStream = await callGeminiStream({
            systemPrompt,
            userMessage
        });

        // We'll wrap geminiStream in an SSE response:
        const transform = new Readable({ read() {} });

        geminiStream.on("data", (chunk) => {
            // chunk is partial data from Gemini
            const partialText = chunk.toString();
            // You might parse JSON lines or might be raw text
            // We'll assume raw text for demonstration
            transform.push(`data: ${partialText}\n\n`);
        });

        geminiStream.on("end", () => {
            transform.push("event: done\ndata: done\n\n");
            transform.push(null);
        });

        geminiStream.on("error", (err) => {
            console.error("Gemini stream error:", err);
            transform.push("event: done\ndata: error\n\n");
            transform.push(null);
        });

        return new Response(transform as any, {
            headers: {
                "Content-Type": "text/event-stream",
                "Cache-Control": "no-cache",
                Connection: "keep-alive"
            }
        });

    } catch (err: any) {
        console.error("Mentor route error:", err);
        return new Response("Internal error", { status: 500 });
    }
}
