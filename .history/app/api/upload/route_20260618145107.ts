import { NextResponse } from "next/server";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { auth } from "@clerk/nextjs/server";
import { MAX_FILE_SIZE } from "@/lib/constants";

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const body = (await request.json()) as HandleUploadBody;

        const jsonResponse = await handleUpload({
        token: process.env.BLOB_READ_WRITE_TOKEN,

        request,
        body,

        onBeforeGenerateToken: async () => {
            const { userId } = await auth();

            if (!userId) {
            throw new Error("Unauthorized: User not authenticated");
            }

            return {
            allowedContentTypes: [
                "application/pdf",
                "image/jpeg",
                "image/png",
                "image/webp",
            ],
            addRandomSuffix: true,
            maximumSizeInBytes: MAX_FILE_SIZE,
            tokenPayload: JSON.stringify({ userId }),
            };
        },

        onUploadCompleted: async ({ blob, tokenPayload }) => {
            console.log("File uploaded:", blob.url);

            const payload = tokenPayload
            ? JSON.parse(tokenPayload)
            : null;

            console.log("User:", payload?.userId);
        },
        });

        return NextResponse.json(jsonResponse);
    } catch (error) {
        console.error("Upload error:", error);

        return NextResponse.json(
        {
            error:
            error instanceof Error
                ? error.message
                : "Upload failed",
        },
        { status: 500 }
        );
    }
}