import prisma from "../client";

type Closed = {
    name: string;
    imageUrl: string;
}

const createClosed = async (data:Closed) => {
    const res = await prisma.closedSource.create({
        data: {
            name: data.name,
            imageUrl: data.imageUrl,
        },
    });
    return res;
}

export default createClosed;