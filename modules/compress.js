import path from 'path';
import { createBrotliCompress, createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';

export const compressFile = async (currentDir, fileName, newDir) => {
  const pathToFile = path.resolve(currentDir, fileName);
  const pathToNewFile = path.resolve(newDir, fileName + ".br");


  const brotli = createBrotliCompress();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToNewFile);
  console.log('\x1b[32m%s\x1b[32m', `Compressed file ${pathToFile} to ${pathToNewFile}`);


  pipeline(source, brotli, destination, (err) => {
    if (err) {
      console.error('\x1b[31m%s\x1b[31m', 'An error occurred:', err);
    }
  });
}

export const decompressFile = async (currentDir, fileName, newfileName) => {
  const pathToFile = path.resolve(currentDir, fileName);
  const pathToNewFile = path.resolve(currentDir, newfileName);

  console.log('\x1b[32m%s\x1b[32m', `Trying to decompressed file ${pathToFile} to ${pathToNewFile}`);

  const brotli = createBrotliDecompress();
  const source = createReadStream(pathToFile);
  const destination = createWriteStream(pathToNewFile);

  pipeline(source, brotli, destination, (err) => {
    if (err) {
      console.error('\x1b[31m%s\x1b[31m', 'An error occurred:', err);
    }
  });
}