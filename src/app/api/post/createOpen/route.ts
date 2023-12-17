import { NextResponse } from "next/server";
import createPost from "@/lib/db/prismaFunctions/createPost";

export async function POST(request: Request) {
  const body = await request.json();

  const name = body.name;
  const description = body.description;
  const url = body.url;
  const githubUrl = body.githubUrl;
  let imageUrl = body?.imageUrl;
  const ClosedSrcId = body?.ClosedSrcId;

  if (imageUrl == null || imageUrl == undefined || imageUrl == "") {
    imageUrl =
      "https://sbuhgxmlcyhshccdinho.supabase.co/storage/v1/object/sign/images/wosapl.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvd29zYXBsLnBuZyIsImlhdCI6MTcwMjgyNjQxNCwiZXhwIjoxODYwNTA2NDE0fQ.fIcuvAlCX2wMoYXTSLQrRqc1cSRV-ow2CuB5pZn_bA8&t=2023-12-17T15%3A20%3A14.606Z";
    const data = await createPost({
      name,
      description,
      url,
      githubUrl,
      imageUrl,
      ClosedSrcId,
    });
    console.log(data);
    return NextResponse.json(data);
  } else {
    const data = await createPost({
      name,
      description,
      url,
      githubUrl,
      imageUrl,
      ClosedSrcId,
    });

    console.log(data);
    return NextResponse.json(data);
  }
}
