import getAll from "@/lib/db/prismaFunctions/getAll";
import { NextResponse } from "next/server";

export async function GET() {
    const data = await getAll();
    return NextResponse.json(data);
}