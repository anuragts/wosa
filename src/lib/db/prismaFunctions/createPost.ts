import prisma from "../client";

type Post = {
    name: string;
    description: string;
    url: string;
    githubUrl: string;
    imageUrl: string;
    ClosedSrcId: String; 
};

const createPost = async (data: Post) => {
   const res =  await prisma.openSourceAlter.create({
        data:{
            name: data.name,
            description: data.description,
            url: data.url,
            githubUrl: data.githubUrl,
            imageUrl: data.imageUrl,
            closedSrc:{
                connect: {
                    id: data.ClosedSrcId.toString(),
                }
            }
        },
    });

    // console.log(res);
    return res;
};

export default createPost;