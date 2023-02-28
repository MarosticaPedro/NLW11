import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'
import { appRoutes } from './lib/routes'

const app = Fastify()

app.register(appRoutes)
app.register(cors,{
    origin: true,
})

app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then((url)=>{
    console.log(`HTTP Server Running on ${url}`)
}) 