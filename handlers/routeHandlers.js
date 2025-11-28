import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { addNewSighting } from '../utils/addNewSighting.js'

export const handleGet = async (res) => {
  let data = await getData()
  data = JSON.stringify(data)
  sendResponse(res, 200, 'appllication/json', data)
}

export const handlePost = async (req, res) => {
  try {
    const parsedBody = await parseJSONBody(req)
    await addNewSighting(parsedBody)
    sendResponse(res, 201, 'application/json', JSON.stringify(parsedBody))

  } catch (error) {
    sendResponse(res, 400, 'application/json', JSON.stringify({ error: error }))
  }
}