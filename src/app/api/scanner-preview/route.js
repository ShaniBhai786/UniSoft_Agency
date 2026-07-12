// In-memory store for the latest frame per session.
// Note: this resets on server restart / cold start, and won't work
// across multiple serverless instances (fine for a single Vercel
// instance during a live scan session, but not guaranteed at scale).
let latestFrame = null;
let lastUpdated = null;

export async function POST(req) {
    try {
        const body = await req.json();
        const { frame } = body;

        if (!frame || typeof frame !== "string") {
            return Response.json(
                { success: false, message: "No frame provided" },
                { status: 400 }
            );
        }

        latestFrame = frame;
        lastUpdated = Date.now();

        return Response.json({ success: true });
    } catch (err) {
        console.error(err);
        return Response.json(
            { success: false, message: err.message },
            { status: 500 }
        );
    }
}

export async function GET() {
    if (!latestFrame) {
        return Response.json({ success: false, message: "No frame yet" });
    }

    // Treat frames older than 5 seconds as stale (scanner tab closed/idle)
    const isStale = Date.now() - lastUpdated > 5000;

    return Response.json({
        success: true,
        frame: latestFrame,
        stale: isStale,
        lastUpdated,
    });
}