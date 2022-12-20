import { isAbsolute, resolve } from "path";
import { stat } from 'node:fs/promises';
import { upPath } from "./up.js"

export const cdPath = async (currentPath, newPath) => {

  if (newPath === "..") {
    return upPath(currentPath);
  }

  try {
    const createPath = isAbsolute(newPath) ? newPath : resolve(currentPath, newPath);

    const stats = await stat(createPath);
    if (stats.isDirectory()) {
      console.log("\x1b[32m%s\x1b[0m", `Change current path to: ${createPath}`);
      return createPath;
    } else {
      throw new Error();
    }

  } catch (error) {
    console.log('\x1b[31m%s\x1b[31m', `Path don't exist`);
    return currentPath;
  }

}