export async function POST(req) {
    try {
        const { message, sessionId } = await req.json();

        const response = await fetch("https://unisoftagency.app.n8n.cloud/webhook/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message,
                sessionId,
            }),
        });

        const text = await response.text();

        return new Response(text, {
            status: response.status,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        console.error(err);

        return Response.json(
            {
                error: err.message,
            },
            {
                status: 500,
            }
        );
    }
}