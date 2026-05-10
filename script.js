import { prisma } from "./lib/prisma.js";

const main = async () => {
  const user = await prisma.user.create({
    data: {
      email: "ariadne@prisma.io",
      name: "Ariadne",
      posts: {
        create: [
          {
            title: "My first day at prisma",
            categories: { create: { name: "office" } },
          },
        ],
      },
    },
  });
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
