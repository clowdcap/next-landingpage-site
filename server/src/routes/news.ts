import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from './../lib/prisma'

export async function newsRouter(fastify: FastifyInstance) {
  // rotas
  await fastify.get('/newsletter/count', async () => {
    const count = await prisma.newsletter.count()
    return { count }
  })

  await fastify.post('/newsletter', async (request, reply) => {
    const createNewsBody = z.object({
      nome: z.string(),
      email: z.string(),
      telefone: z.string()
    })

    const { nome, email, telefone } = createNewsBody.parse(request.body)
    
    await prisma.newsletter.create({
      data: {
        nome,
        email,
        telefone
      }
    })

    return reply.status(201).send("Contato criado com sucesso!")
  }) 
}