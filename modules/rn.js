import { resolve } from "path";
import { rename, access } from "node:fs/promises";

export const renameFile = async (currentDir, fileName, newFileName) => {
  const oldFile = resolve(currentDir, fileName);
  const newFile = resolve(currentDir, newFileName);

  const isFileExist = async (path) => {
    try {
      await access(path, constants.F_OK);
      return true;
    } catch {
      return false;
    }
  }

  if (await isFileExist(newFile)) {
    console.log("FS operation failed. File allredy exist");
  } else {
    try {
      await rename(oldFile, newFile);
      console.log('\x1b[32m%s\x1b[32m', `File ${oldFile} renamed to ${newFile}`);
    } catch (error) {
      console.log("FS operation failed.");
    }
  }
}