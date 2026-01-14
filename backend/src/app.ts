// Importando variáveis de ambiente
import "dotenv/config";

import express from "express";
import healthRoutes from "./routes/health.route";

// Importando conexão
import {prisma} from "./database/prisma"


const app = express();

app.use(express.json());
app.use(healthRoutes);

const PORT = 3000;

// Função de teste de conexão
async function testDbConnection(){

  try {

    await prisma.$connect();
    console.log("✅ Conectado ao PostgreSQL com sucesso\n📦 Conectado ao banco de dados");

  } catch (error) {

    console.error("❌ Erro ao conectar no banco:", error);

  }

}

testDbConnection()

app.listen(PORT, () => {
  console.log(`🚪 Servidor rodando na porta ${PORT}`);
});
