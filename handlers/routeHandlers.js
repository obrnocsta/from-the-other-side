import { getData } from "../utils/getData.js"
import { sendResponse } from "../utils/sendResponse.js"

export const handleGet = async (res, dirname) => {
  let data = await getData(dirname)
  data = JSON.stringify(data)
  sendResponse(res, 200, 'appllication/json', data)
}

export const handlePost = async (req, res) => {

  const buffers = []
  for await (const chunk of req) {
    buffers.push(chunk)
  }

  const data = Buffer.concat(buffers).toString()

  let body = []
  try {
    body = JSON.parse(data)
  } catch (error) {
    body = data
    console.log(error)
  }

  console.log(body)
}