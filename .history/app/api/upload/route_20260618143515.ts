import { HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";



export const function POST(request: Request): Promise<NextResponse>{
    const body = (await request.json()) as HandleUploadBody;
    try {
        
    } catch (error) {
        const 
    }
}