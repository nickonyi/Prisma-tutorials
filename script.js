import { prisma } from "./lib/prisma.js";

async function main() {
  // Create a new user with a post
  const user = await prisma.user.create({
    data: {
      name: "Darius",
      email: "Darius_234@gmail.com",
      posts: {
        create: {
          title: "Hello  world",
          content: "Hello to the world",
        },
      },
    },
    include: { posts: true },
  });

  console.log("Created user:", user);

  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  });

  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
