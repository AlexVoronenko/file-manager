import { resolve } from 'path';
import { rm } from 'node:fs/promises';

export const removeFile = async (currentDir, fileName) => {

  const pathToFile = resolve(currentDir, fileName);

  try {
    await rm(pathToFile);
    console.log('\x1b[32m%s\x1b[32m', `File (${pathToFile}) deleted successfully`);
  } catch (error) {
    console.error('\x1b[31m%s\x1b[31m', 'An error occurred:', err);
  }

}