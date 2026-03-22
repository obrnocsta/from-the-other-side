import http from "node:http";

const PORT = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`
      <!doctype html>
      <html lang="en">
          <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Build A Routed Site</title>
          </head>
          <body>
              <header>
                  <h1>The server is working</h1>
              </header>
          </body>
      </html>
    `);
});

server.listen(PORT, () => {
  console.log(`Server is runing on: http://localhost:${PORT}`);
});
