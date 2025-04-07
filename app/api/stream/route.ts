import { NextRequest } from "next/server";
import { Readable } from "stream";

// This route just streams partial AI tokens. No React/JSX here!

export async function POST(req: NextRequest) {
    // Parse userText from the request body
    const { userText } = await req.json() || {};

    // Example partial tokens (like from an AI)
    const tokens = [
        `AI partial #1 about "${userText}"...`,
        "AI partial #2...",
        "Final partial, done!"
    ];

    // Create a Readable for SSE
    const readable = new Readable({ read() {} });
    let index = 0;

    const interval = setInterval(() => {
        if (index >= tokens.length) {
            clearInterval(interval);
            readable.push("event: done\ndata: done\n\n");
            readable.push(null); // end stream
            return;
        }
        // SSE format "data: <chunk>\n\n"
        readable.push(`data: ${tokens[index]}\n\n`);
        index++;
    }, 800);

    return new Response(readable as any, {
        headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            Connection: "keep-alive"
        }
    });
}
