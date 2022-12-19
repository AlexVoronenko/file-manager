import { createReadStream } from 'node:fs';
import path from 'path';
import { stdout } from 'process';
import { access } from 'node:fs/promises';

export const showContent = async (currentDir, fileName) => {

  const pathToFile = path.resolve(currentDir, fileName);

  try {
    await access(pathToFile);
    console.log("\x1b[32m%s\x1b[0m", `---Start file ${pathToFile}---`);
    const stream = createReadStream(pathToFile, "utf-8");

    await new Promise((resolve, reject) => {
      stream.on("data", (chunk) => {
        stdout.write(chunk);
      });
      stream.on("error", () => {
        reject();
      });
      stream.on("end", () => {
        console.log("\x1b[32m%s\x1b[0m", "\n---End of file---");
        resolve();
      });
    });

  } catch (err) {
    console.log('\x1b[31m%s\x1b[31m', `No such access for ${pathToFile}`);
  }

}