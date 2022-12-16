import path from 'path';
import { writeFile } from 'node:fs/promises';

export const createFile = async (currentDir, fileName) => {
  const pathToFile = path.join(currentDir, fileName);

  try {
    await writeFile(pathToFile, "", { flag: 'wx' });;
  } catch (error) {
    throw new Error("FS operation failed");
  }
}