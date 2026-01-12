// Importando express
import express from "express"

// Instânciando o servidor
const app = express()

app.use(express.json())

app.get("/health", (req,res) => {

  return res.status(200).json({status: "OK"})

})

const PORT = 3000

app.listen(PORT, () => {

  console.log(`🚀 Servidor rodando na porta ${PORT}`)

})