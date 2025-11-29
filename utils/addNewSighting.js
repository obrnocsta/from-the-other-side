import fs from 'node:fs/promises'
import path from 'node:path'
import { getData } from './getData.js'

export const addNewSighting = async (body) => {
  try {
    const data = await getData()
    data.push(body)
    const pathFile = path.join('data', 'data.json')
    await fs.writeFile(pathFile, JSON.stringify(data, null, 2), 'utf-8')

  } catch (error) {
    console.log(error)
  }
}