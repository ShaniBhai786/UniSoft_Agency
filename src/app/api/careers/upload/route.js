import { NextResponse } from "next/server";

export const runtime = "nodejs";

const N8N_WEBHOOK =
    "https://n8n-production-15a5.up.railway.app/webhook/submit-resume";

export async function POST(request) {
    try {
        const formData = await request.formData();

        const resume = formData.get("resume");

        if (!resume || typeof resume === "string") {
            return NextResponse.json(
                {
                    success: false,
                    message: "No CV uploaded.",
                },
                { status: 400 }
            );
        }

        if (resume.type !== "application/pdf") {
            return NextResponse.json(
                {
                    success: false,
                    message: "Only PDF files are allowed.",
                },
                { status: 400 }
            );
        }

        if (resume.size > 5 * 1024 * 1024) {
            return NextResponse.json(
                {
                    success: false,
                    message: "CV must be smaller than 5MB.",
                },
                { status: 400 }
            );
        }

        const n8nFormData = new FormData();

        const buffer = await resume.arrayBuffer();

        const blob = new Blob([buffer], {
            type: resume.type,
        });

        /*
         * IMPORTANT:
         * Field name MUST match
         * "Input Binary Field" in n8n.
         */

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

        const n8nResponse = await fetch(
            N8N_WEBHOOK,
            {
                method: "POST",
                body: n8nFormData,
            }
        );

        if (!n8nResponse.ok) {
            const errorText = await n8nResponse.text();

            console.error(
                "n8n Webhook Error:",
                errorText
            );

            return NextResponse.json(
                {
                    success: false,
                    message: "n8n webhook failed.",
                },
                { status: 502 }
            );
        }

        return NextResponse.json({
            success: true,
            message: "CV uploaded successfully.",
            event: "CV_UPLOADED",
            fileName: resume.name,
        });

    } catch (error) {
        console.error(
            "Resume Upload Error:",
            error
        );

        return NextResponse.json(
            {
                success: false,
                message:
                    "Something went wrong while uploading the CV.",
            },
            { status: 500 }
        );
    }
}