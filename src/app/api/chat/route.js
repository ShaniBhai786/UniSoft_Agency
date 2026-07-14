export async function POST(req) {
    try {
        console.log("N8N URL:", process.env.N8N_WEBHOOK_URL);

        const { message, sessionId } = await req.json();

        const response = await fetch(process.env.N8N_WEBHOOK_URL || "https://n8n-production-15a5.up.railway.app/webhook/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message, sessionId }),
        });

        const text = await response.text();

        console.log("Status:", response.status);
        console.log("Body:", text);

        return Response.json({
            status: response.status,
            body: text,
        });
    } catch (err) {
        console.error("API ERROR:", err);

        return Response.json(
            {
                message: err.message,
                stack: err.stack,
            },
            {
                status: 500,
            }
        );
    }
}