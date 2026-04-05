# Construindo um Site com Roteamento (Build A Routed Site)

Uma aplicação web full-stack construída com Node.js que permite aos usuários compartilhar e explorar avistamentos paranormais. A plataforma possui um backend com API REST e um frontend interativo com streaming de notícias em tempo real.

## 🚀 Primeiros Passos

### Instalação

```bash
npm install
```

### Executando o Servidor

```bash
npm start
```

O servidor roda em `http://localhost:8000`

## 📍 Estrutura do Projeto

```
build-a-routed-site/
├── server.js                  # Servidor principal com roteamento HTTP
├── package.json               # Metadados do projeto e dependências
├── public/                    # Arquivos estáticos do frontend
│   ├── index.html             # Página inicial - galeria de avistamentos
│   ├── index.js               # Lógica da página de avistamentos
│   ├── index.css              # Estilização para todas as páginas
│   ├── sightings.html         # Página de visualização de avistamentos
│   ├── upload-sighting.html   # Formulário para enviar novos avistamentos
│   ├── upload-sighting.js     # Manipulação do formulário de upload
│   ├── news.html              # Página de feed de notícias em tempo real
│   ├── news.js                # Manipulação do stream de notícias
│   ├── 404.html               # Página de erro
│   └── images/                # Assets de imagem
├── data/
│   ├── data.json              # Banco de dados de avistamentos
│   └── stories.js             # Dados de notícias paranormais
├── handlers/
│   └── routeHandlers.js       # Manipuladores de requisição para rotas da API
├── utils/
│   ├── serverStatic.js        # Serviço de arquivos estáticos
│   ├── sendResponse.js        # Utilitário de resposta HTTP
│   ├── getContentType.js      # Determinação de tipo MIME
│   ├── getData.js             # Leitura de avistamentos do JSON
│   ├── addData.js             # Escrita de novos avistamentos no JSON
│   ├── getIncomingData.js     # Parsing do corpo da requisição
│   ├── sanitizeData.js        # Sanitização de HTML para entrada do usuário
│   └── alert.js               # Alertas do lado do cliente
└── events/
    └── events.js              # Emissor de eventos para notificações
```

## 🔗 Endpoints da API

### Listar Todos os Avistamentos

**GET** `/api`

Retorna todos os avistamentos paranormais armazenados no banco de dados.

**Exemplo de Resposta:**
```json
[
  {
    "id": 1,
    "title": "Luzes estranhas no céu",
    "location": "Phoenix, Arizona",
    "timeStamp": "2026-03-23",
    "text": "Vi globos luminosos incomuns se movendo erraticamente...",
    "description": "Relato detalhado do avistamento"
  }
]
```

### Enviar um Avistamento

**POST** `/api`

Envia um novo avistamento paranormal para o banco de dados.

**Corpo da Requisição (Request Body):**
```json
{
  "title": "Figura Misteriosa",
  "location": "Salem, Massachusetts",
  "timeStamp": "2026-03-22",
  "text": "Uma figura de sombra apareceu à meia-noite...",
  "description": "Descrição completa do encontro"
}
```

**Resposta:** Retorna o objeto do avistamento recém-criado com status HTTP 201.

### Stream de Notícias em Tempo Real

**GET** `/api/news`

Stream de Server-Sent Events (SSE) que entrega atualizações de notícias paranormais a cada 3 segundos.

**Resposta:** Formato de stream de evento de texto
```
data: {"event":"news-update","story":"..."}
```

## 🎨 Recursos do Frontend

- **Galeria de Avistamentos** - Navegue por todos os relatos enviados com detalhes expansíveis.
- **Envio de Avistamentos** - Contribua com suas próprias experiências paranormais através de um formulário seguro.
- **Notícias em Tempo Real** - Feed de notícias paranormais atualizado em tempo real.
- **Design Responsivo** - Interface adaptada para dispositivos móveis com CSS moderno.
- **Acessibilidade** - Rótulos ARIA e HTML semântico para leitores de tela.

## 🔒 Recursos de Segurança

- **Sanitização de HTML** - Toda entrada do usuário é limpa usando `sanitize-html` para prevenir ataques XSS.
- **Validação de Entrada** - Validação no lado do servidor para os dados recebidos.
- **Tratamento de Erros** - Respostas de erro amigáveis para requisições inválidas.

## 🛠️ Tecnologias Core

- **Node.js** - Ambiente de execução JavaScript no servidor.
- **Módulo HTTP Nativo** - `node:http` para lidar com requisições.
- **ES Modules** - Sistema de módulos moderno do JavaScript.
- **File System API** - `node:fs` para armazenamento persistente de dados.
- **EventEmitter** - Arquitetura orientada a eventos para atualizações em tempo real.
- **Server-Sent Events (SSE)** - Streaming em tempo real para os clientes.

## 📦 Dependências

- **sanitize-html** ^2.17.2 - Sanitiza entradas HTML para prevenir vulnerabilidades XSS.

## 📝 Como Funciona

### Fluxo do Backend

1. **Roteamento de Requisição** - O `server.js` direciona as requisições para os manipuladores (handlers) apropriados.
2. **Recuperação de Dados** - `GET /api` busca os avistamentos em `data/data.json`.
3. **Envio de Dados** - `POST /api` aceita novos relatos, sanitiza a entrada e persiste no JSON.
4. **Publicação de Eventos** - Novos envios disparam eventos `sighting-added` para atualizações em tempo real.
5. **Streaming de Notícias** - `GET /api/news` estabelece uma conexão SSE e envia atualizações de histórias.

### Fluxo do Frontend

1. **Carregar Avistamentos** - Ao carregar a página, busca todos os avistamentos em `/api`.
2. **Renderizar Cards** - Exibe os avistamentos como cards expansíveis com data e localização.
3. **Interação do Usuário** - Alterna a expansão dos cards para ler os detalhes completos.
4. **Enviar Formulário** - Envia novos avistamentos para `/api` com validação de formulário.
5. **Feed de Notícias** - Conecta ao stream SSE de `/api/news` para atualizações em tempo real.

## 📚 Principais Conceitos Aprendidos

- **Criação de Servidor HTTP** - Construção de um servidor completo usando o módulo nativo do Node.
- **Roteamento de Requisições** - Manipulação dinâmica de requisições baseada em URL.
- **Métodos HTTP** - Lidando com requisições GET e POST adequadamente.
- **Códigos de Status de Resposta** - Uso correto dos códigos 200, 201, 404, 500.
- **Headers (Cabeçalhos)** - Configuração de Content-Type e headers de streaming.
- **Serviço de Arquivos Estáticos** - Entrega de arquivos HTML, CSS e JavaScript.
- **Persistência de Dados** - Leitura e escrita em arquivos JSON.
- **Sanitização de Entrada** - Proteção contra ataques XSS.
- **Server-Sent Events** - Comunicação de streaming em tempo real.
- **Arquitetura Orientada a Eventos** - Uso de EventEmitter para baixo acoplamento.

## 🎯 Objetivos (Stretch Goals)

- [x] Endpoint de API para recuperar avistamentos
- [x] Envio de formulário para novos avistamentos
- [x] Sanitização e validação de entrada
- [x] Streaming de notícias em tempo real com SSE
- [x] Design de frontend responsivo
- [ ] Sistema de autenticação de usuários
- [ ] Upload de imagens para os avistamentos
- [ ] Filtragem avançada (por localização, intervalo de datas, etc.)
- [ ] Migração de banco de dados (de JSON para MongoDB/PostgreSQL)
- [ ] Paginação para grandes conjuntos de dados
- [ ] Sistema de comentários/discussão

## 🌍 Visão Geral das Páginas

| Página | Propósito |
|------|---------|
| `/` | Home - exibe a galeria de avistamentos com cards expansíveis |
| `/sightings.html` | Página dedicada para visualização de avistamentos |
| `/upload-sighting.html` | Formulário para enviar novos avistamentos paranormais |
| `/news.html` | Stream de notícias paranormais em tempo real |

## 💡 Tecnologias

- **Node.js** - Runtime JavaScript server-side
- **Módulo HTTP** - Servidor HTTP nativo do Node
- **Vanilla JavaScript** - Lógica de frontend sem frameworks
- **CSS3** - Estilização moderna e layouts responsivos
- **HTML5** - Marcação semântica com recursos de acessibilidade
- **ES Modules** - Módulos nativos do JavaScript

---

Feito com ❤️ para os interessados no paranormal
