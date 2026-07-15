import { twiml } from "twilio";

const N8N_WEBHOOK = process.env.N8N_WEBHOOK_URL;

export async function POST(req) {
    try {
        const formData = await req.formData();

        const callSid = formData.get("CallSid");
        const speech = formData.get("SpeechResult");

        const response = new twiml.VoiceResponse();

        // First interaction
        if (!speech) {
            response.say(
                {
                    voice: "alice",
                },
                "Hello. Welcome to UniSoft. I am your AI assistant. How may I help you today?"
            );

            response.gather({
                input: ["speech"],
                speechTimeout: "auto",
                action: "/api/voice",
                method: "POST",
            });

            return new Response(response.toString(), {
                headers: {
                    "Content-Type": "text/xml",
                },
            });
        }

        let aiReply = "I'm sorry, I couldn't process your request.";

        if (N8N_WEBHOOK) {
            const ai = await fetch(N8N_WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    callSid,
                    message: speech,
                }),
            });

            if (ai.ok) {
                const text = await ai.text();

                try {
                    const json = JSON.parse(text);

                    aiReply =
                        json?.output ||
                        json?.message ||
                        json?.text ||
                        json?.[0]?.output ||
                        aiReply;
                } catch {
                    aiReply = text;
                }
            }
        }

        response.say(
            {
                voice: "alice",
            },
            aiReply
        );

        response.gather({
            input: ["speech"],
            speechTimeout: "auto",
            action: "/api/voice",
            method: "POST",
        });

        return new Response(response.toString(), {
            headers: {
                "Content-Type": "text/xml",
            },
        });
    } catch (err) {
        console.error(err);

        const response = new twiml.VoiceResponse();

        response.say(
            "Sorry. An unexpected error occurred. Please call again later."
        );

        return new Response(response.toString(), {
            headers: {
                "Content-Type": "text/xml",
            },
        });
    }
}

export async function GET() {
    const response = new twiml.VoiceResponse();

    response.say(
        {
            voice: "alice",
        },
        "UniSoft AI Voice API is running."
    );

    return new Response(response.toString(), {
        headers: {
            "Content-Type": "text/xml",
        },
    });
}