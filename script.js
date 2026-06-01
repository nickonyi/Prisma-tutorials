import { prisma } from "./lib/prisma.js";
import { getUsersWithPosts } from "./generated/prisma/sql/getUsersWithPosts.js";
import { getUsersByAge } from "./generated/prisma/sql/getUsersByAge.js";
const main = async () => {
  const usersWithPostCounts = await prisma.$queryRawTyped(getUsersWithPosts());
  const usersAges = await prisma.$queryRawTyped(getUsersByAge(2, 10));
  console.log(usersAges);
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
