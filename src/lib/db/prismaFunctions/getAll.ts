import prisma from "../client";

const getAll = async () => {
    const res = await prisma.openSourceAlter.findMany({
    include:{
        closedSrc: true,
    }
    });
    return res;
};

export default getAll;