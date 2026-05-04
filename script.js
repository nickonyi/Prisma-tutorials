import { prisma } from "./lib/prisma.js";

const main = async () => {
  const user = await prisma.user.create({
    data: {
      name: "Demarco",
      email: "Demarco@email.com",
    },
  });

  console.log(user);
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
