import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { getUserName, getHomeDir } from "./modules/utils.js"

import { upPath } from "./modules/up.js"
import { cdPath } from "./modules/cd.js"
import { listContent } from "./modules/ls.js"
import { showContent } from "./modules/cat.js"
import { createFile } from "./modules/add.js"
import { renameFile } from "./modules/rn.js"
import { copyFile } from "./modules/cp.js"
import { moveFile } from "./modules/mv.js"
import { removeFile } from "./modules/rm.js"
import { osInformation } from "./modules/os.js"
import { calculateHash } from "./modules/hash.js"
import { compressFile, decompressFile } from "./modules/compress.js"

let userName = getUserName();
let currentDir = getHomeDir();

const rl = readline.createInterface({ input, output });

console.log("Welcome to the File Manager,", `\x1b[33m${userName}\x1b[0m!`);
console.log("\x1b[36m%s\x1b[0m", `You are currently in ${currentDir}> `);

rl.on('line', async (line) => {

  let [command, ...argString] = line.match(/"(.*?)"(?: |$)|[^ ]+/g);

  const cmdWithParams = { "cd": 1, "cat": 1, "add": 1, "rn": 2, "cp": 2, "mv": 1, "rm": 1, "hash": 1, "compress": 2, "decompress": 2 };

  for (let key in cmdWithParams) {
    if (key == command && argString.length <= cmdWithParams[key] - 1) {
      command = "invalidParameters";
    }
  }

  switch (command) {
    case ".exit":
      process.exit();
      break;
    case "up":
      currentDir = await upPath(currentDir);
      break;
    case "cd":
      currentDir = await cdPath(currentDir, argString[0]);
      break;
    case "ls":
      await listContent(currentDir);
      break;
    case "cat":
      await showContent(currentDir, argString[0]);
      break;
    case "add":
      await createFile(currentDir, argString[0]);
      break;
    case "rn":
      await renameFile(currentDir, argString[0], argString[1]);
      break;
    case "cp":
      await copyFile(currentDir, argString[0], currentDir, argString[1]);
      break;
    case "mv":
      await moveFile(currentDir, argString[0], argString[1]);
      break;
    case "rm":
      await removeFile(currentDir, argString[0]);
      break;
    case "os":
      await osInformation(argString[0]);
      break;
    case "hash":
      await calculateHash(currentDir, argString[0]);
      break;
    case "compress":
      await compressFile(currentDir, argString[0], argString[1]);
      break;
    case "decompress":
      await decompressFile(currentDir, argString[0], argString[1]);
      break;
    case "invalidParameters":
      console.log('\x1b[31m%s\x1b[31m', "Invalid parameters in command string...");
      break;
    default:
      console.log('\x1b[31m%s\x1b[31m', "Operation failed");
      break;
  }

  console.log('\x1b[36m%s\x1b[0m', `You are currently in ${currentDir}> `);

}).on('close', () => {
  process.exit();
});

process.on('exit', () => console.log(`Thank you for using File Manager, \x1b[33m${userName}\x1b[0m. Goodbye!`));

//rl.close();