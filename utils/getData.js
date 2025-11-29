import path from "node:path"
import fs from 'node:fs/promises'

export const getData = async () => {
  try {
    const pathData = path.join('data', 'data.json')
    const data = await fs.readFile(pathData, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error(error)
    return []
  }
  // return 'I am from getData()'
}