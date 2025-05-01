# Portal Ingressos Backend
Backend for the Ticket Sales Portal. RESTful API built with Node.js and Express to manage clients, events, and tickets.

# Portal de Ingressos - API de Clientes (Sprint 2)

Este módulo da aplicação representa a entidade `Cliente` e fornece uma API RESTful com operações CRUD (Create, Read, Update, Delete).

## 🚀 Endpoints da API

### 📌 Base URL

http://localhost:3001/clientes


---

### ➕ Criar cliente
**POST** `/clientes`

**Body (JSON):**
```json
{
  "nome": "Carlos Henrique",
  "cpf": "11122233344",
  "email": "carlos@email.com"
}
Resposta: 201 Created
{
  "id": 7,
  "nome": "Carlos Henrique",
  "cpf": "11122233344",
  "email": "carlos@email.com"
}

📋 Listar todos os clientes
GET /clientes

Resposta: 200 OK

[
  {
    "id": 1,
    "nome": "João da Silva",
    "cpf": "12345678900",
    "email": "joao@email.com"
  },
  ...
]

🔍 Buscar cliente por ID
GET /clientes/{id}

Exemplo: /clientes/1

Resposta: 200 OK

{
  "id": 1,
  "nome": "João da Silva",
  "cpf": "12345678900",
  "email": "joao@email.com"
}

✏️ Atualizar cliente
PUT /clientes/{id}

Exemplo: /clientes/3

Body (JSON):

{
  "nome": "Felipe Moura Atualizado",
  "cpf": "33344455577",
  "email": "felipe.moura@atualizado.com"
}

Resposta: 200 OK

❌ Remover cliente
DELETE /clientes/{id}

Exemplo: /clientes/3

Resposta: 204 No Content

📦 Tecnologias
Node.js

Express.js

Postman (testes manuais)

📁 Estrutura do módulo

src/
└── cliente/
    ├── clienteModel.js
    ├── clienteDTO.js
    ├── clienteService.js
    ├── clienteController.js
    └── clienteRoutes.js


✅ Testes realizados
Todos os endpoints foram testados com sucesso usando o Postman.


---

### ✅ O que você deve fazer agora:

1. Crie o arquivo `README.md` dentro da pasta raiz do backend:


portal-ingressos-backend/README.md

