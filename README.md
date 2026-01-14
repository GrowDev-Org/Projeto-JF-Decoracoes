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

⚠️ Este projeto ainda está em fase inicial de estruturação.

As instruções completas para execução local (frontend, backend, banco de dados e Docker) serão adicionadas após a definição da estrutura de pastas e do setup inicial do projeto.

Por enquanto:
- O repositório está sendo preparado
- As primeiras issues tratam da inicialização do projeto

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

O client é gerado em: `src/generated/prisma`

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
