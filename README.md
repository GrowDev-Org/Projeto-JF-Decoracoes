# ⭐ Projeto Gerenciador de Itens para JF Decorações

### 📌 Sobre o Projeto
O projeto tem como objetivo solucionar um problema real enfrentado pela empresa JF Decorações que realiza decorações de eventos e a organização dos produtos alugados para cada evento. Atualmente, esse controle é feito de forma manual, o que gera retrabalho, erros e dificuldade de rastreabilidade.

---

### 🎯 Problema que Resolve
O projeto visa solucionar o problema que a JF Decorações possui relacionar os itens decorativos e os eventos existentes, facilitando no conhecimento dos itens disponíveis para uso e dos itens já alugados para algum evento

---

### 🛠️ Stack Utilizada
Como stack utilizada, a GrowDev optou pelas seguintes tecnologias:

- Frontend: TypeScript, React.js e TailwindCSS
- Backend: TypeScript, Node.js e PostgreSQL
- Arquitetura: MVC (Model - View - Control)
- Ferramentas e Infraestrutura: Git e GitHub, Teste Automatizados (Vitest), CI/CD, Docker, Vercel (Deploy)

---

### 🧱 Arquitetura
Como arquitetura para o projeto, a equipe da GrowDev decidiu usar MVC para o backend por ser didática e simples.  Somado ao uso do React.js comunicando via HTTP/JSON com o backend, seguindo diagrama de exemplo:
```
┌──────────────────────────────┐
│        FRONTEND (React)      │
│                              │
│  • Componentes               │
│  • Páginas                   │
│  • Hooks                     │
│  • Serviços (API)            │
│                              │
│  Responsável pela INTERFACE  │
└───────────────┬──────────────┘
                │ HTTP (JSON)
                │
                ▼
┌──────────────────────────────┐
│        BACKEND (Node)        │
│      Arquitetura MVC         │
│                              │
│  ┌────────────┐              │
│  │ Controller │◄──────────┐  │
│  └─────┬──────┘           │  │
│        │                  │  │
│        ▼                  │  │
│  ┌────────────┐           │  │
│  │   Model    │───────────┘  │
│  └─────┬──────┘              │
│        │                     │
│        ▼                     │
│   Banco de Dados             │
│   (PostgreSQL)               │
│                              │
│  View = Resposta JSON        │
└──────────────────────────────┘
```

---

### ▶️ Como rodar o projeto

🧠 Como rodar o Backend

Esta seção descreve como configurar e executar o **backend do projeto** localmente até a fase atual do desenvolvimento.

### 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado na sua máquina:

- **Node.js** (versão LTS recomendada)
- **NPM** (vem junto com o Node)
- **Docker** e **Docker Compose**

> ⚠️ O Docker é obrigatório para subir o banco de dados PostgreSQL localmente.

📁 Acessando o backend

A partir da raiz do repositório, entre na pasta do backend:

```bash
cd backend
```

Instale as dependências usando o comando:
```bash
npm install
```

Após isso, nas pasta `backend/` crie um arquivo `.env` baseado no `.env.example` com o comando:
```bash
cp .env.example .env
```

Agora é hora de subir o banco de dados com o docker, na pasta `backend/` execute:
```bash
docker compose up -d
```

Como penúltima etepa, você precisa gerar o Prisma Client, execute:
```bash
npx prisma generate
```

E para finalizar, agora é rodar o servidor usando o comando:
```bash
npm run dev
```

---

### 🤝 Como contribuir

Este projeto é desenvolvido de forma colaborativa pela GrowDev.
Para mais detalhes sobre como pegar sua primeira Issue ou sobre o fluxo de trabalho acesse os seguintes links:

- [Fluxo Oficial de Trabalho](https://github.com/GrowDev-Org/.github/blob/main/FLUXO-DE-TRABALHO.md#-fluxo-oficial-de-trabalho--growdev)
- [Como Pegar a Primeira Issue](https://github.com/GrowDev-Org/.github/blob/main/PRIMEIRA-ISSUE.md)

---

### ⚠️ Vulnerabilidades 

- 1° Vulnerabilidade conhecida em dependência de desenvolvimento do Prisma (hono). Não afeta runtime da aplicação, será tratada antes do deploy(issue 2.1 do backend).

---

### ❗ Prisma Client

Este projeto utiliza o Prisma na versão nova com `prisma.config.ts`.

O client é gerado em: `src/generated/prisma`.

Vale ressaltar que, cada integrante deve ter o Docker instalado em sua máquina para o comando `docker compose up -d` funcionar.

Após clonar o projeto:

```bash
npm install
docker compose up -d
npx prisma generate
npm run dev
```

Por isso, utilize sempre:
```ts
import { PrismaClient } from "../../generated/prisma";
