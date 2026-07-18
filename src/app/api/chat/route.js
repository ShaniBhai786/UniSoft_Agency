export async function POST(req) {
    try {
        const { message, sessionId } = await req.json();

        const response = await fetch("https://n8n-production-15a5.up.railway.app/webhook/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message, sessionId }),
        });

        const text = await response.text();

        try {
            return Response.json(JSON.parse(text), {
                status: response.status,
            });
        } catch {
            return Response.json(
                { output: text },
                { status: response.status }
            );
        }
    } catch (error) {
        return Response.json(
            { error: error.message },
            { status: 500 }
        );
    }
}