import { NextResponse } from "next/server";



export const function POST(request: Request): Promise<NextResponse>{
    const body = (await request.json()) as Handle
}