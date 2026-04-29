import { prisma } from "./lib/prisma.js";

const main = async () => {
  const user = await prisma.user.create({
    data: {
      name: "Olise",
      email: "Olise@prisma.io",
      posts: {
        create: {
          title: "Hello World",
          content: "This is my first post!",
          published: true,
        },
      },
    },
    include: {
      posts: true,
    },
  });

  console.log("Created user ", user);
  console.log("DB URL:", process.env.DATABASE_URL);

  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  console.log("All users:", JSON.stringify(allUsers, null, 2));
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
