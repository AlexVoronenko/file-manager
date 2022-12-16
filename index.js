import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { getUserName, getHomeDir, getCmdArgs } from "./modules/utils.js"

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { upPath } from "./modules/up.js"
import { cdPath } from "./modules/cd.js"
import { listContent } from "./modules/ls.js"
import { showContent } from "./modules/cat.js"
import { createFile } from "./modules/add.js"
import { renameFile } from "./modules/rn.js"
import { osInformation } from "./modules/os.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//let userName = "Username";
let userName = getUserName();
let currentDir = getHomeDir();

const rl = readline.createInterface({ input, output });

console.log(`Welcome to the File Manager, ${userName}!`);
//console.log(`Press CTRL + C  or enter ".exit" for exit.`);

//rl.write(`Press CTRL + C  or enter ".exit" for exit.`);

console.log(`You are currently in ${currentDir}> `);

rl.on('line', async (line) => {
  let [command, ...args] = line.split(" ");

  console.log("arguments==> ", args);
  // getCmdArgs(line);


  let argString = "";
  if (args.length !== 0) {
    // console.log("======>", args, "|||", args.join(" "));
    if (args[0].startsWith(`"`) || args[0].startsWith(`'`)) {
      argString = args.join(" ").split(/'|"/).join(" ").trim();
    } else {
      argString = args.join(" ").trim();
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
      currentDir = await cdPath(currentDir, argString);
      break;
    case "ls":
      await listContent(currentDir);
      break;
    case "cat":
      await showContent(currentDir, argString);
      break;
    case "add":
      await createFile(currentDir, argString);
      break;
    case "rn":
      await renameFile(argString);
      break;
    case "os":
      await osInformation(argString);
      break;

    default:
      console.log("Operation failed");
      break;
  }

  console.log(`You are currently in ${currentDir}> `);

}).on('close', () => {
  process.exit();
});

process.on('exit', () => console.log(`Thank you for using File Manager, ${userName}, goodbye!`));

//rl.close();