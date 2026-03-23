# Build A Routed Site

A full-stack web application built with Node.js that allows users to share and explore paranormal sightings. The platform features a REST API backend and an interactive frontend with real-time news streaming.

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Running the Server

```bash
npm start
```

The server runs on `http://localhost:8000`

## 📍 Project Structure

```
build-a-routed-site/
├── server.js                      # Main server with HTTP routing
├── package.json                   # Project metadata and dependencies
├── public/                        # Frontend static files
│   ├── index.html                # Home page - sightings gallery
│   ├── index.js                  # Sightings page logic
│   ├── index.css                 # Styling for all pages
│   ├── sightings.html            # Sightings view page
│   ├── upload-sighting.html      # Form to submit new sightings
│   ├── upload-sighting.js        # Upload form handling
│   ├── news.html                 # Real-time news feed page
│   ├── news.js                   # News stream handling
│   ├── 404.html                  # Error page
│   └── images/                   # Image assets
├── data/
│   ├── data.json                 # Sightings database
│   └── stories.js                # Paranormal news stories data
├── handlers/
│   └── routeHandlers.js          # Request handlers for all API routes
├── utils/
│   ├── serverStatic.js           # Static file serving
│   ├── sendResponse.js           # HTTP response utility
│   ├── getContentType.js         # MIME type determination
│   ├── getData.js                # Read sightings from JSON
│   ├── addData.js                # Write new sightings to JSON
│   ├── getIncomingData.js        # Parse incoming request body
│   ├── sanitizeData.js           # HTML sanitization for user input
│   └── alert.js                  # Client-side alerts
└── events/
    └── events.js                 # Event emitter for sighting notifications
```

## 🔗 API Endpoints

### Get All Sightings

**GET** `/api`

Returns all paranormal sightings stored in the database.

**Response Example:**
```json
[
  {
    "id": 1,
    "title": "Strange lights in the sky",
    "location": "Phoenix, Arizona",
    "timeStamp": "2026-03-23",
    "text": "Witnessed unusual glowing orbs moving erratically...",
    "description": "Detailed account of the sighting"
  }
]
```

### Submit a Sighting

**POST** `/api`

Submit a new paranormal sighting to the database.

**Request Body:**
```json
{
  "title": "Mysterious Figure",
  "location": "Salem, Massachusetts",
  "timeStamp": "2026-03-22",
  "text": "Shadow figure appeared at midnight...",
  "description": "Full description of the encounter"
}
```

**Response:** 
Returns the newly created sighting object with HTTP 201 status.

### Real-time News Stream

**GET** `/api/news`

Server-Sent Events (SSE) stream that delivers paranormal news updates every 3 seconds.

**Response:** Text event stream format
```
data: {"event":"news-update","story":"..."}
```

## 🎨 Frontend Features

- **Sightings Gallery** - Browse all submitted paranormal sightings with expandable details
- **Submit Sightings** - Contribute your own paranormal experiences through a secure form
- **Real-time News** - Stream of paranormal news stories updated in real-time
- **Responsive Design** - Mobile-friendly interface with modern CSS
- **Accessibility** - ARIA labels and semantic HTML for screen readers

## 🔒 Security Features

- **HTML Sanitization** - All user input is sanitized using `sanitize-html` to prevent XSS attacks
- **Input Validation** - Server-side validation of incoming sightings data
- **Error Handling** - Graceful error responses for invalid requests

## 🛠️ Core Technologies

- **Node.js** - JavaScript runtime for the server
- **Native HTTP Module** - `node:http` for handling requests
- **ES Modules** - Modern JavaScript module system
- **File System API** - `node:fs` for persistent data storage
- **EventEmitter** - Event-driven architecture for real-time updates
- **Server-Sent Events (SSE)** - Real-time streaming to clients

## 📦 Dependencies

- **sanitize-html** ^2.17.2 - Sanitize HTML input to prevent XSS vulnerabilities

## 📝 How It Works

### Backend Flow

1. **Request Routing** - `server.js` routes incoming requests to appropriate handlers
2. **Data Retrieval** - `GET /api` fetches sightings from `data/data.json`
3. **Data Submission** - `POST /api` accepts new sightings, sanitizes input, and persists to JSON
4. **Event Publishing** - New submissions trigger `sighting-added` events for real-time updates
5. **News Streaming** - `GET /api/news` establishes SSE connection and pushes story updates

### Frontend Flow

1. **Load Sightings** - On page load, fetch all sightings from `/api`
2. **Render Cards** - Display sightings as expandable cards with timestamp and location
3. **User Interaction** - Toggle card expansion to read full sighting details
4. **Submit Form** - Post new sightings to `/api` with form validation
5. **News Feed** - Connect to `/api/news` SSE stream for real-time updates

## 📚 Key Concepts Learned

- **HTTP Server Creation** - Building a full HTTP server from Node's native module
- **Request Routing** - Dynamic URL-based request handling
- **HTTP Methods** - Handling GET and POST requests appropriately
- **Response Status Codes** - Using 200, 201, 404, 500 codes correctly
- **Headers** - Setting Content-Type and streaming headers
- **Static File Serving** - Serving HTML, CSS, and JavaScript files
- **Data Persistence** - Reading and writing JSON files
- **Input Sanitization** - Protecting against XSS attacks
- **Server-Sent Events** - Real-time streaming communication
- **Event-Driven Architecture** - Using EventEmitter for loose coupling

## 🎯 Stretch Goals

- [x] API endpoint for retrieving sightings
- [x] Form submission for new sightings
- [x] Input sanitization and validation
- [x] Real-time news streaming with SSE
- [x] Responsive frontend design
- [ ] User authentication system
- [ ] Image uploads for sightings
- [ ] Advanced filtering (by location, date range, etc.)
- [ ] Database migration (from JSON to MongoDB/PostgreSQL)
- [ ] Pagination for large datasets
- [ ] Comment/discussion system

## 🌍 Pages Overview

| Page | Purpose |
|------|---------|
| `/` | Home - displays sightings gallery with expandable cards |
| `/sightings.html` | Dedicated sightings view page |
| `/upload-sighting.html` | Form to submit new paranormal sightings |
| `/news.html` | Real-time paranormal news stream |

## 💡 Technologies

- **Node.js** - Server-side JavaScript runtime
- **HTTP Module** - Node's native HTTP server
- **Vanilla JavaScript** - Frontend logic without frameworks
- **CSS3** - Modern styling and responsive layouts
- **HTML5** - Semantic markup with accessibility features
- **ES Modules** - Native JavaScript modules

---

Made with ❤️ for those interested in the paranormal
