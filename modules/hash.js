import { readFile } from 'node:fs/promises';
import { resolve } from 'path';
import { createHash } from 'node:crypto';

export const calculateHash = async (currentDir, fileName) => {

  const pathToFile = resolve(currentDir, fileName);
  // console.log("1->", currentDir, "2->", fileName, "3->", pathToFile);

  try {
    const hash = createHash("sha256");
    const fileContents = await readFile(pathToFile, { encoding: 'utf8' });

    console.log(`Hash for (${fileName}): `, hash.update(fileContents).digest('hex'));
  } catch (err) {
    console.log("FS operation failed");
  }
};
