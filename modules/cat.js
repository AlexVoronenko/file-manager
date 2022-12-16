import { createReadStream } from 'node:fs';
import path from 'path';
import { stdout } from 'process';
import { access } from 'node:fs/promises';

export const showContent = async (currentDir, fileName) => {

  const pathToFile = path.join(currentDir, fileName);
  console.log(pathToFile);

  try {
    await access(pathToFile);
    createReadStream(pathToFile).pipe(stdout);
  } catch (err) {
    console.log(`No such access for ${pathToFile}`);
  }

}