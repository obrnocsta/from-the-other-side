export const parseJSONBody = async (req) => {
  let body = []

  for await (const chunk of req) {
    body.push(chunk)
  }

  try {
    return JSON.parse(body)
  } catch (error) {
    throw new Error(`Invalid JSON: ${error}`)
  }
}