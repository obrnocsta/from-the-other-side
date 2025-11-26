export const sendResponse = (res, statusCode, contentType, resource) => {
  res.statusCode = statusCode
  res.setHeader('Content-Type', contentType)
  res.end(resource)
}