import path from 'node:path'
import fs from 'node:fs/promises'
import { sendResponse } from './sendResponse.js'

export const serveStatic = async (req, res, dirname) => {
  const filePath = path.join(dirname, 'public', 'index.html')

  try {
    const content = await fs.readFile(filePath)
    sendResponse(res, 200, 'text/html', content)

  } catch (error) {
    console.error(error)
  }
}