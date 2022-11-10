import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const news = await prisma.newsletter.create({
    data: {
      nome: 'John Doe',
      email: 'jhon@email.com',
      telefone: '1234233'
    }
  })

}

main()