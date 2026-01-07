# 🗺️ Roadmap do Projeto — Sistema de Gestão de Eventos

Este documento descreve **as etapas de desenvolvimento** do projeto
e serve como guia de alto nível para o time.

As tarefas detalhadas estão organizadas em **Issues no GitHub** e serão disponibilizadas por partes (Backend e Frontend)

---

🎯 Objetivo do MVP

Criar um sistema simples que permita a uma empresa de decoração de eventos:
- Cadastrar produtos
- Criar eventos
- Vincular produtos a eventos
- Saber quais produtos estão alugados em uma determinada data

Se isso funcionar bem, o MVP está completo.

---

### 🧠 Roadmap Backend

1️⃣ Fase 1 - Preparação do Backend (base do projeto)

**Objetivo**: Deixar o backend rodando e pronto para receber os códigos futuros.

**Issue 1.1** - Inicializar o projeto backend
**Tipo**: Task
**Descrição**:
- Criar pasta backend/
- Inicializar projeto Node com TypeScript
- Configurar tsconfig.json
- Configurar scripts básicos

**Issue 1.2** - Configurar Express
**Tipo**: Task
**Descrição**:
- Instalar Express
- Criar app.ts
- Criar servidor HTTP
- Criar rota de teste (GET /health)

**Issue 1.3** - Configurar a arquitetura MVC
**Tipo**: Task
**Descrição**:
- Criar estrutura de pastas:
  - Pasta controllers/
  - Pasta models/
  - Pasta routes/
- Criar exemplo simples para validação do padrão

---

2️⃣ Fase 2 - Banco de Dados
**Objetivo**: Configurar a conexão para permitir persistência de dados

**Issue 2.1** - Configurar conexão com PostgreSQL
**Tipo**: Task
**Descrição**:
- Escolher ORM para conexão (ex: Prisma/Sequelize...)
- Criar pasta e arquivo para conexão (ex: db/connection.ts)
- Testar conexão

**Issue 2.2** - Modelagem Incial do Banco
**Tipo**: Task
**Descrição**:
- Definir entidades principais:
  - Produto
  - Evento
  - Evento_Produto (Aluguel)
- Criar diagrama simples (texto ou markdown)
- Criar migrations iniciais

---

3️⃣ Fase 3 - Primeiros Models (MVC)
**Objetivo**: Criar a base das regras do negócio.

**Issue 3.1**: - Criar Model do Produto
**Tipo**: Feature
**Descrição**:
- Criar entidade Produto
- Atributos básicos (nome, quantidade, descrição...)
- Criar o CRUD básico no Model

**Issue 3.2**: - Criar Model de Evento
**Tipo**: Feature
**Descrição**:
- Criar entidade Evento
- Atributos básicos (nome, data, cliente...)
- Criar o CRUD básico no Model

**Issue 3.3**: - Criar Model de Aluguel
**Tipo**: Feature
**Descrição**:
- Relacionar Produtos a Eventos
- Controlar quantidade alugada
- Validar disponibilidade

---

4️⃣ Fase 4 — Controllers e Rotas
**Objetivo**: expor a API para o frontend.

**Issue 4.1** — Criar rotas de Produto
**Tipo**: Feature
**Endpoints**:

- POST /products
- GET /products
- PUT /products/:id
- DELETE /products/:id

**Issue 4.2** — Criar rotas de Evento
**Tipo**: Feature
**Endpoints**:

- POST /events
- GET /events
- PUT /events/:id
- DELETE /events/:id

**Issue 4.3** — Criar rotas de Aluguel
**Tipo**: Feature
**Endpoints**:
- POST /rentals
- GET /rentals
- Validação de estoque

---

5️⃣ Fase 5 — Regras de Negócio

**Objetivo**: evitar erros no uso do sistema.
**Issue 5.1** — Validação de dados
**Tipo**: Feature
**Descrição**:
- Validar campos obrigatórios
- Validar datas
- Retornar erros padronizados

**Issue 5.2** — Controle de estoque
**Tipo**: Feature
**Descrição**:
- Não permitir aluguel acima do estoque
- Atualizar estoque corretamente

---

6️⃣ Fase 6 — Qualidade e Infra

**Objetivo**: preparar o backend para crescer.
**Issue 6.1** — Configurar Docker
**Tipo**: Task
**Descrição**:
- Criar Dockerfile
- Criar docker-compose com PostgreSQL

**Issue 6.2** — Configurar testes (Vitest)
**Tipo**: Task
**Descrição**:
- Testes unitários de Models
- Testes básicos de Controllers

**Issue 6.3** — Padronizar respostas e erros
Tipo: Task
**Descrição**:
- Criar padrão de resposta JSON
- Criar middleware de erro

---

### 🎨 Roadmap Fronted

Fase 1 — Preparação do Frontend
**Objetivo**: deixar o frontend rodando, organizado e pronto para evoluir.

**Issue 1.1** — Inicializar projeto React

**Tipo**: Task

**Descrição**:

- Criar pasta frontend/
- Inicializar projeto React com TypeScript (Vite)
- Garantir que o projeto sobe localmente

**Issue 1.2** — Configurar Tailwind CSS

**Tipo**: Task

**Descrição**:

- Instalar Tailwind
- Configurar arquivos necessários
- Criar página de teste usando Tailwind

**Issue 1.3** — Estrutura inicial de pastas

**Tipo**: Task

**Descrição**:

Criar estrutura base:

```
src/
 ├─ components/
 ├─ pages/
 ├─ services/
 ├─ hooks/
 ├─ styles/
```

---

Fase 2 — Base de Navegação e Layout

**Objetivo**: criar a base visual do sistema.

**Issue 2.1** — Configurar rotas do frontend

**Tipo**: Feature

**Descrição**:

- Instalar React Router
- Criar rotas principais:
  - /
  - /events
  - /products

**Issue 2.2** — Criar layout base da aplicação

**Tipo**: Feature

**Descrição**:

- Criar Header
- Criar Footer (opcional)
- Criar layout reutilizável

---

Fase 3 — Integração com Backend

**Objetivo**: preparar o frontend para consumir a API.

**Issue 3.1** — Configurar serviço de API

**Tipo**: Task

**Descrição**:

- Criar services/api.ts
- Configurar baseURL
- Padronizar chamadas HTTP

**Issue 3.2** — Tipagem dos dados (TypeScript)

**Tipo**: Task

**Descrição**:

- Criar interfaces:
  - Produto
  - Evento
  - Aluguel
- Centralizar tipagens

---

Fase 4 — Telas de Produto

**Objetivo**: gerenciar produtos no sistema.

**Issue 4.1** — Tela de listagem de produtos

**Tipo**: Feature

**Descrição**:
- Criar página de listagem
- Buscar produtos da API
- Exibir tabela ou cards

**Issue 4.2** — Tela de cadastro de produto

**Tipo**: Feature

**Descrição**:

- Criar formulário
- Validar campos
- Enviar dados para API

**Issue 4.3** — Edição e remoção de produto

**Tipo**: Feature

**Descrição**:

- Editar produto
- Remover produto
- Atualizar listagem

---

Fase 5 — Telas de Evento

**Objetivo**: gerenciar eventos e seus produtos.

**Issue 5.1** — Tela de listagem de eventos

**Tipo**: Feature

**Descrição**:

- Exibir eventos cadastrados
- Mostrar data e cliente

**Issue 5.2** — Tela de cadastro de evento

**Tipo**: Feature

**Descrição**:

- Formulário de criação
- Seleção de produtos
- Quantidade por produto

**Issue 5.**3 — Detalhes do evento

**Tipo**: Feature

**Descrição**:

- Visualizar evento
- Listar produtos alugados
- Mostrar status

---

Fase 6 — Experiência do Usuário

**Objetivo**: tornar o sistema mais amigável.

**Issue 6.1** — Feedback visual

**Tipo**: Feature

**Descrição**:
- Loading
- Mensagens de sucesso
- Mensagens de erro

**Issue 6.2** — Validações no frontend

**Tipo**: Feature

**Descrição**:

- Campos obrigatórios
- Mensagens claras
- Prevenir erros comuns

---

Fase 7 — Qualidade e Organização

**Objetivo**: melhorar manutenção e legibilidade.

**Issue 7.1** — Componentização

**Tipo**: Task

**Descrição**:

- Extrair componentes reutilizáveis
- Evitar código duplicado

---

**Issue 7.2** — Padronização de código

**Tipo**: Task

**Descrição**:

- Organização de imports
- Nomes claros
- Estrutura consistente




