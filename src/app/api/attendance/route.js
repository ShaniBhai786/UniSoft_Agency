export async function POST(req) {
    try {
        const body = await req.json();

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbx33GF6M1ohj3DDmF1iM_AbPYnhi6KkF9rtpdTFMpr-Yah60TwXYrYmIYLIgEynpqHn/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            }
        );

        const text = await response.text();

        return new Response(text, {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        return Response.json(
            {
                success: false,
                message: err.message,
            },
            { status: 500 }
        );
    }
}