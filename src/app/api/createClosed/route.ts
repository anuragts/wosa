import { NextResponse } from "next/server";
import createClosed from "@/lib/db/prismaFunctions/createClosed";

export async function POST(request: Request) {
    const body = await request.json();

    const name = body.name;
    const imageUrl = body.imageUrl;

    const data = await createClosed({
        name,
        imageUrl,
    });
    console.log(data);
    return NextResponse.json(data);
}