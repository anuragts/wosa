import { NextResponse } from "next/server";
import createPost from '@/lib/db/prismaFunctions/createPost'

export async function POST(request:Request) {
    const body = await request.json();
    
    const name =  body.name;
    const description = body.description;
    const url = body.url;
    const githubUrl = body.githubUrl;
    const imageUrl = body.imageUrl;
    const ClosedSrcId = body.ClosedSrcId;

    const data = await createPost({name, description, url, githubUrl, imageUrl, ClosedSrcId});
    console.log(data);
    return NextResponse.json(data)
}