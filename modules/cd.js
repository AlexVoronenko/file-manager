import path from "path";
import { access } from 'node:fs/promises';
import { upPath } from "./up.js"

export const cdPath = async (currentPath, newPath) => {
  if (newPath === "..") {
    return upPath(currentPath);
  }
  const createPath = path.isAbsolute(newPath) ? newPath : path.join(currentPath, newPath);

  try {
    await access(createPath);
    return createPath;
  } catch (err) {
    console.log(err);
    return currentPath;
  }
}