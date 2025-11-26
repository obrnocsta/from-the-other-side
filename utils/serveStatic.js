import path from 'node:path'

export const serveStatic = (dirname) => {
  const filePath = path.join(dirname, 'public', 'index.html')
  console.log(filePath)
}