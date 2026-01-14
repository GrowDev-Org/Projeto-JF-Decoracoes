// Importando client do prisma
import { PrismaClient } from "../../generated/prisma";

// Importando acesso as variáveis de ambiente
import "dotenv/config"
// Importando adaptador específico
import { PrismaPg } from "@prisma/adapter-pg";

// Variável com URL do DB
const connectionString = `${process.env.DATABASE_URL}`

// Instânciando adaptador
const adapter = new PrismaPg({connectionString})

// Instânciando Prisma
const prisma = new PrismaClient({adapter})

// Verificando DATABASE_URL
console.log("DATABASE_URL =", process.env.DATABASE_URL)

// Exportando prisma para conexões
export { prisma }
