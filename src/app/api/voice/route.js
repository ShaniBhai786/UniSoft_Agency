import { twiml } from "twilio";

const WEBHOOK = process.env.N8N_WEBHOOK_URL;

export async function POST(req) {
    try {
        const form = await req.formData();

        const speech = form.get("SpeechResult");
        const callSid = form.get("CallSid");

        const response = new twiml.VoiceResponse();

        // First time the caller connects
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
                language: "en-US",
                action: "/api/voice",
                method: "POST",
            });

            return new Response(response.toString(), {
                headers: {
                    "Content-Type": "text/xml",
                },
            });
        }

        console.log("Caller Said:", speech);

        let aiReply = "Sorry, I didn't understand that.";

        if (WEBHOOK) {
            const ai = await fetch(WEBHOOK, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: speech,
                    sessionId: callSid,
                }),
            });

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

        response.say(
            {
                voice: "alice",
            },
            aiReply
        );

        response.gather({
            input: ["speech"],
            speechTimeout: "auto",
            language: "en-US",
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
            "Sorry. An unexpected error occurred."
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

    response.say("UniSoft AI Voice API is running.");

    return new Response(response.toString(), {
        headers: {
            "Content-Type": "text/xml",
        },
    });
}