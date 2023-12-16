import prisma from "../client";

type User = {
    email: string;
    name: string;
};

export const createUser = async (data: User) => {
   const res =  await prisma.user.create({
        data: {
            email: data.email,
            name: data.name,
        },
    });
    // console.log(res);
    return res;
};


export default createUser;