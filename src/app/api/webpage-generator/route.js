import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { query } = await req.json();

        const response = await fetch(
            "https://n8n-production-15a5.up.railway.app/webhook/generate-webpage",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    query,
                }),
            }
        );

        const data = await response.json();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error.message,
            },
            { status: 500 }
        );
    }
}