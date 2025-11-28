import { getData } from '../utils/getData.js'
import { sendResponse } from '../utils/sendResponse.js'
import { parseJSONBody } from '../utils/parseJSONBody.js'
import { addNewSighting } from '../utils/addNewSighting.js'
import { sanitizeInput } from '../utils/sanitizeInput.js'
import { sightingEvents } from '../events/sightingEvents.js'

export const handleGet = async (res) => {
  let data = await getData()
  data = JSON.stringify(data)
  sendResponse(res, 200, 'appllication/json', data)
}

export const handlePost = async (req, res) => {
  try {
    const parsedBody = await parseJSONBody(req)
    const sanitizedBody = sanitizeInput(parsedBody)

    await addNewSighting(sanitizedBody)

    sightingEvents.emit('sighting-added', sanitizedBody)

    sendResponse(res, 201, 'application/json', JSON.stringify(sanitizedBody))

  } catch (error) {
    sendResponse(res, 400, 'application/json', JSON.stringify({ error: error }))
  }
}