import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    await prisma.user.create({
        data: {
            name: "John",
            mind:   0,
            body:   0,
            social: 0,
            work:   0,
        }
    })

    await prisma.advice.createMany({
        data: [
            { name: "mind1", advice: "Mind advice 1" },
            { name: "mind2", advice: "Mind advice 2" },
            { name: "mind3", advice: "Mind advice 3" },
            { name: "mind4", advice: "Mind advice 4" },
            { name: "mind5", advice: "Mind advice 5" },
            { name: "body1", advice: "Body advice 1" },
            { name: "body2", advice: "Body advice 2" },
            { name: "body3", advice: "Body advice 3" },
            { name: "body4", advice: "Body advice 4" },
            { name: "body5", advice: "Body advice 5" },
            { name: "social1", advice: "Social advice 1" },
            { name: "social2", advice: "Social advice 2" },
            { name: "social3", advice: "Social advice 3" },
            { name: "social4", advice: "Social advice 4" },
            { name: "social5", advice: "Social advice 5" },
            { name: "work1", advice: "Work advice 1" },
            { name: "work2", advice: "Work advice 2" },
            { name: "work3", advice: "Work advice 3" },
            { name: "work4", advice: "Work advice 4" },
            { name: "work5", advice: "Work advice 5" },
        ]
    })
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