# From the Other Side (Desafio Backend Node.js)

![Demonstração](./docs/demo.gif)

## Objetivo

## Funcionalidades

## Estrutura

```  
.  
├── json  
│   └── data.json → Array de avistamentos (persistência)  
├── public  
│   ├── index.html → Frontend principal  
│   ├── style.css → Estilos  
│   ├── app.js → Lógica do frontend (formulários, SSE)  
│   └── 404.html → Página de erro 404  
├── utils  
│   ├── serveStatic.js → Servir arquivos estáticos com fs/path  
│   ├── sendResponse.js → Helper para respostas JSON/HTML  
│   ├── parseJSONBody.js → Parsing manual de body em POST  
│   └── sanitize.js → Sanitização com sanitize-html (anti-XSS)  
├── events  
│   └── sightingEvents.js → EventEmitter para eventos como 'sighting-added'  
├── package.json  
├── README.md  
├── server.js → Servidor HTTP nativo + roteamento + SSE  
└── TODO → Ideias futuras (error handling avançado, UUIDs)  
```

## Tecnologias

## Como executar

## Exemplo

## Erros

Feito com ☕ por [Bruno Costa](https://github.com/obrnocsta) – Pronto para produção (ou quase!).