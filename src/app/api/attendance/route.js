export async function POST(req) {
    try {
        const body = await req.json();

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbykZMZ0wO4QQnzTQWxRMzm8I4nxGySrjdlJOqS6LG54zZlJHt9o2YIX58TE8wlczrr7/exec",
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