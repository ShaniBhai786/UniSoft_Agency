export async function POST(req) {
    try {
        const body = await req.json();

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbx70mlQ6Z7SHnLt4iK_KjN12NrBmnwDcRnjN90gjd2PjD2Il87f3i1cS2qyWu5er_tS/exec",
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