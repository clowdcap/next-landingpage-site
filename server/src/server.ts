import Fastify from "fastify"
import cors from "@fastify/cors"
import { newsRouter } from "./routes/news"

async function bootstrap() {
  const fastify = Fastify({
    logger: true
  })

  await fastify.register(cors, {
    origin: true
  })

  fastify.register(newsRouter)

  // ligar o server
	await fastify.listen({ port: 5000, host: '0.0.0.0' })

 }

bootstrap() 