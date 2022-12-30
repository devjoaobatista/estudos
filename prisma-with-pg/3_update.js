const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const update = await prisma.user.update({
        where: { id: 1 },
        data:  { email: 'joao@prisma.com'},

    })
    console.log("O dado foi alterado para:");
    console.log(update);
  }
  
  main()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })