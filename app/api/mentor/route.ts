import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { userMessage } = await req.json();
        const aiResponse = `Echo: ${userMessage}`;
        return NextResponse.json({ success: true, aiResponse });
    } catch (err: any) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 });
    }
}
