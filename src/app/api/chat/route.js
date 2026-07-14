export async function POST(req) {
    try {
        const { message, sessionId } = await req.json();

        const response = await fetch(process.env.N8N_WEBHOOK_URL || "https://unisoftagency.app.n8n.cloud/webhook/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message,
                sessionId,
            }),
        });

        console.log("Status:", response.status);
        console.log("Content-Type:", response.headers.get("content-type"));

        const text = await response.text();

        console.log("Response:", text);

        return new Response(text, {
            status: response.status,
            headers: {
                "Content-Type": response.headers.get("content-type") || "application/json",
            },
        });
    } catch (error) {
        console.error(error);

        return Response.json(
            {
                error: error.message,
            },
            {
                status: 500,
            }
        );
    }
}