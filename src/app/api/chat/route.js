export async function POST(req) {
    try {
        const { message, sessionId } = await req.json();

        const response = await fetch(
            process.env.N8N_WEBHOOK_URL ||
            "https://unisoftagency.app.n8n.cloud/webhook/chat" || "https://n8n-production-15a5.up.railway.app/webhook-test/chat",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message,
                    sessionId,
                }),
            }
        );

        const text = await response.text();

        console.log("Status:", response.status);
        console.log("Response:", text);

        if (!text.trim()) {
            return Response.json(
                {
                    success: false,
                    error: "n8n returned an empty response.",
                },
                { status: 500 }
            );
        }

        try {
            const json = JSON.parse(text);

            return Response.json(json, {
                status: response.status,
            });
        } catch {
            return Response.json(
                {
                    success: false,
                    error: "n8n did not return valid JSON.",
                    raw: text,
                },
                { status: 500 }
            );
        }
    } catch (err) {
        return Response.json(
            {
                success: false,
                error: err.message,
            },
            { status: 500 }
        );
    }
}