export async function POST(req) {
    try {
        const body = await req.json();

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbzi0-mZZ5DD731ybtn7dRB8tflevdq10qXLeVZJsKlpamxk1t1solc_nwan9dW_t9VW/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
                redirect: "follow",
            }
        );

        const text = await response.text();

        console.log("Status:", response.status);
        console.log("Response:", text);

        return new Response(text, {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        console.error(err);

        return Response.json({
            success: false,
            message: err.message,
        });
    }
}