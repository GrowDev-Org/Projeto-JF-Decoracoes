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

