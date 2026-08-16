import { NextResponse } from "next/server";

export const runtime = "nodejs";

const N8N_WEBHOOK =
    "https://n8n-production-15a5.up.railway.app/webhook/submit-resume";

export async function POST(request) {
    try {
        const formData = await request.formData();

        const resume = formData.get("resume");

        // Validate file
        if (!resume || typeof resume === "string") {
            return NextResponse.json(
                {
                    success: false,
                    message: "No CV uploaded.",
                },
                { status: 400 }
            );
        }

        // PDF only
        if (resume.type !== "application/pdf") {
            return NextResponse.json(
                {
                    success: false,
                    message: "Only PDF files are allowed.",
                },
                { status: 400 }
            );
        }

        // Maximum 5 MB
        if (resume.size > 5 * 1024 * 1024) {
            return NextResponse.json(
                {
                    success: false,
                    message: "CV must be smaller than 5MB.",
                },
                { status: 400 }
            );
        }

        // --------------------------------
        // Create multipart/form-data
        // --------------------------------

        const n8nFormData = new FormData();

        const buffer = await resume.arrayBuffer();

        const blob = new Blob([buffer], {
            type: "application/pdf",
        });

        n8nFormData.append(
            "resume",
            blob,
            resume.name
        );

        n8nFormData.append(
            "event",
            "CV_UPLOADED"
        );

        n8nFormData.append(
            "fileName",
            resume.name
        );

        n8nFormData.append(
            "uploadedAt",
            new Date().toISOString()
        );

        // --------------------------------
        // Call n8n
        // --------------------------------

        const n8nResponse = await fetch(
            N8N_WEBHOOK,
            {
                method: "POST",
                body: n8nFormData,
            }
        );

        // --------------------------------
        // Handle n8n error
        // --------------------------------

        if (!n8nResponse.ok) {

            const errorText =
                await n8nResponse.text();

            console.error(
                "n8n Webhook Error:",
                errorText
            );

            return NextResponse.json(
                {
                    success: false,
                    message:
                        "Resume analysis workflow failed.",
                    details: errorText,
                },
                { status: 502 }
            );
        }

        // --------------------------------
        // Get n8n response
        // --------------------------------

        const n8nData =
            await n8nResponse.json();

        console.log(
            "n8n Analysis Response:",
            n8nData
        );

        // --------------------------------
        // Return n8n result to frontend
        // --------------------------------

        return NextResponse.json(
            n8nData
        );

    } catch (error) {

        console.error(
            "Resume Upload Error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message:
                    "Something went wrong while analyzing the CV.",
                error: error.message,
            },
            { status: 500 }
        );
    }
}