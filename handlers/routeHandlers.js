import { sendResponse } from "../utils/sendResponse.js";

// handleGet
export const handleGet = (res, data) => {
  sendResponse(res, 200, "application/json", JSON.stringify(data));
};

// handlePost
