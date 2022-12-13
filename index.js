import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

import { getUserName, getHomeDir } from "./modules/utils.js"

import { fileURLToPath } from 'url';
import { dirname } from 'path';

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

rl.on('line', line => {



  console.log(`You are currently in ${currentDir}> `);

}).on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit(0);
});


//rl.close();