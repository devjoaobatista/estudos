const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    // ... you will write your Prisma Client queries here
    const create = await prisma.user.create({
      data: {
        name: 'Gustavo',
        email: 'gustavo@prisma.com',
      }
    })
    console.log("O dado foi registrado");
    console.log(create);
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