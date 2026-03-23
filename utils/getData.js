import fs from "node:fs/promises";
import path from "node:path";

export const getData = async () => {
  try {
    const filePath = path.join("data", "data.json");
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error(error);
    return [];
  }
};
