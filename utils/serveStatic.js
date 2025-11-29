import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'
import { getContentType } from './getContentType.js'

export const serveStatic = async (req, res, dirname) => {

  const publicDir = path.join(dirname, 'public')
  const filePath = path.join(publicDir, req.url === '/' ? 'index.html' : req.url)

  const ext = path.extname(filePath)
  const contentType = getContentType(ext)

  try {
    const content = await fs.readFile(filePath)
    sendResponse(res, 200, contentType, content)

  } catch (error) {
    if (error.code === 'ENOENT') {
      const filePath = path.join(publicDir, '404.html')
      const content = await fs.readFile(filePath)
      sendResponse(res, 404, 'text/html', content)
    } else {
      const content = `
        <html>
          <h1>Server Error: ${error.code}</h1>
        </html>
      `
      sendResponse(res, error.code, 'text/html', content)
    }

    console.error(error)
  }
}
