import path from 'path';
import { writeFile } from 'node:fs/promises';

export const createFile = async (currentDir, fileName) => {
  const pathToFile = path.join(currentDir, fileName);

  try {
    await writeFile(pathToFile, "", { flag: 'wx' });;
    console.log('\x1b[32m%s\x1b[32m', `File ${pathToFile} create sucseefully.`);
  } catch (error) {
    console.log('\x1b[31m%s\x1b[31m', "FS operation failed");
  }
}