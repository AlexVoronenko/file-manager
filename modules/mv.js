import { copyFile } from "./cp.js";
import { removeFile } from "./rm.js"
import { resolve } from "path";

export const moveFile = async (currentDir, fileName, newDir) => {
  const pathToFile = resolve(currentDir, fileName);
  const pathToNewFile = resolve(newDir, fileName);

  try {
    await copyFile(currentDir, fileName, newDir, fileName);
    await removeFile(currentDir, fileName);

    console.log('\x1b[32m%s\x1b[32m', "Move file pathToFile to pathToNewFile")
  } catch (err) {
    console.log('\x1b[31m%s\x1b[31m', 'An error occurred:', err);
  }
}
