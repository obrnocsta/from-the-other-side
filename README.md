# From the Other Side (Desafio Backend Node.js)

![Demonstração](./docs/demo.gif)

Foi desafiador criar esses módulos, mas muito recompensador ao final. Entendi de verdade como é o funcionamento do Node.js nos casos em que precisamos montar paths com path.join, ler ou escrever arquivos de forma segura, e até criar streams com eventos.

## Objetivo

Criar um servidor HTTP do zero, **apenas com o módulo http nativo do Node.js**, para uma plataforma de relatos paranormais, seguindo os requisitos:
- Servir arquivos estáticos (HTML, CSS, JS, imagens) do diretório `/public`
- Expor uma API RESTful que lê e adiciona avistamentos
- Implementar parsing manual de JSON body em requisições `POST`s
- Usar EventEmitter para arquitetura orientada a eventos
- Suportar Server-Sent Events (SSE) para streams em tempo real
- Sanitizar inputs contra XSS e persiste dados em arquivo JSON

## Funcionalidades

| Rota | Método | Descrição | Exemplo de resposta |  
|---------------|--------|-----------|---------------------|  
| `GET /` ou `/public/*` | GET | Serve arquivos estáticos (index.html, CSS, JS, imagens) | HTML/CSS/JS servido com Content-Type correto |  
| `GET /api` | GET | Lista todos os avistamentos fantasmagóricos | `[{ "title": "Ghost in the attic", "story": "...", "location": "..." }]` |  
| `POST /api` | POST | Adiciona novo avistamento (com sanitização e persistência) | `201 Created` com o novo objeto JSON |  
| `GET /api/stream` | GET | Server-Sent Events: Stream de histórias aleatórias em tempo real | `data: { "event": "new-story", "story": "..." }\n\n` |  
| Qualquer rota inválida | - | Tratamento de 404 com página personalizada | `<h1>404 – Avistamento não encontrado</h1>` | 

## Estrutura

```  
.  
├── json  
│   └── data.json -> Array de avistamentos (persistência)  
├── public  
│   ├── index.html -> Frontend principal  
│   ├── style.css -> Estilos  
│   ├── app.js -> Lógica do frontend (formulários, SSE)  
│   └── 404.html -> Página de erro 404  
├── utils  
│   ├── serveStatic.js -> Servir arquivos estáticos com `fs/path`
│   ├── sendResponse.js -> Helper para respostas JSON/HTML
│   ├── parseJSONBody.js -> Parsing manual de body em POST
│   └── sanitize.js -> Sanitização com sanitize-html (anti-XSS)
├── events
│   └── sightingEvents.js -> EventEmitter para eventos como 'sighting-added'
├── package.json
├── README.md
├── server.js -> Servidor HTTP nativo + roteamento + SSE
└── TODO -> Ideias futuras (error handling avançado, UUIDs)
```

## Tecnologias

- Node.js >= 18 (módulos nativos: `http`, `fs/promises`, `path`, `events`, `crypto`)
- Dependência: `sanitize-html` (para proteção contra XSS)
- Dados persistidos no arquivo JSON (sem banco de dados)
- ES Modules (`"type": "module"`)

## Como executar

```bash
# 1. Clone o repositório
git clone https://github.com/obrnocsta/from-the-other-side.git
# 2. Entre na pasta
cd from-the-other-side
# 3. Instale as dependências
npm install
# 4. Inicie o servidor
npm start
```

Servidor rodará em **http://localhost:8000**

## Exemplo

```bash
# Lista todos os avistamentos
curl http://localhost:8000/api

# Adiciona novo avistamento
curl -X POST http://localhost:8000/api \ 
  -H "Content-Type: application/json" \ 
  -d '{"title":"The Widow in the Rocking Chair","story":"The hotel was ancient...","location":"São Paulo, Brazil"}'
```

```js
// Stream SSE (mensagem exibida via console.log)

// sightingEvents.js
import { EventEmitter } from 'node:events'
import { createAlert } from '../utils/createAlert.js'
export const sightingEvents = new EventEmitter()
sightingEvents.on('sighting-added', createAlert)

// createAlert.js
export const createAlert = (sighting) => {
  console.log(`Send alert to Ghost Hunters in ${sighting.location}`)
}
```

## Erros

- `404` → Rota ou arquivo não encontrado (serve `404.html`)  
- `500` → Erro interno (ex: falha no `fs`, retorna `HTML` com código de erro)  
- `400` → `JSON` inválido no `POST` (com mensagem de erro sanitizada)  

Feito com ☕ por [Bruno Costa](https://github.com/obrnocsta) – Pronto para produção (ou quase!).