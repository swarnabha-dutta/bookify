import { HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";



export const function POST(request: Request): Promise<NextResponse>{
    const body = (await request.json()) as HandleUploadBody;
    try {
        
    } catch (e) {
        const message = e instanceof Error ? e.message : 'An unknown error occurred';
        const status = message.includes('Unauthorized') ? 401 : 500;
        console.error('Upload error', e);
        const clientMessage = status === 401 ? 'Unauthorized' : 'Upload failed';
        return NextResponse.json({ error: clientMessage }, { status });
    }
}