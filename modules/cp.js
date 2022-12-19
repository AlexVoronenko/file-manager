import { resolve } from "path";
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
// import { rename, access } from "node:fs/promises";

export const copyFile = async (currentDir, fileName, newDir, newFileName) => {
  const pathToFile = resolve(currentDir, fileName);
  const pathToNewFile = resolve(newDir, newFileName);

  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToNewFile);

  try {
    pipeline(source, destination, (err) => {
      if (err) {
        console.error('\x1b[31m%s\x1b[31m', 'An error occurred:', err);
      }
    });
    console.log('\x1b[32m%s\x1b[32m', `File ${pathToFile} copy to ${pathToNewFile}`);

  } catch (error) {
    console.log('\x1b[31m%s\x1b[31m', 'An error occurred:', error);
  }

}