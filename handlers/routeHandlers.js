import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'

export const handleGet = async (res, dirname) => {
  let data = await getData(dirname)
  data = JSON.stringify(data)
  sendResponse(res, 200, 'appllication/json', data)
}

export const handlePost = async (req, res) => {
  const parsedBody = await parseJSONBody(req)
}