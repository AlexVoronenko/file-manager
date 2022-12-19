import os from 'node:os';

export const osInformation = async (arg) => {

  switch (arg) {
    case "--EOL":
      console.log('\x1b[32m%s\x1b[32m', "The operating system-specific end-of-line marker: ", JSON.stringify(os.EOL));
      break;
    case "--cpus":
      console.log("Logical CPU core: ", os.cpus().map(({ model, speed }, index) => [`Core N:${index + 1}`, `Model: ${model}`, `Speed: ${speed / 1000}GHz`]));
      break;
    case "--homedir":
      console.log('\x1b[32m%s\x1b[32m', "Home directory: ", os.homedir());
      break;
    case "--username":
      console.log('\x1b[32m%s\x1b[32m', "Current system user name: ", os.userInfo().username);
      break;
    case "--architecture":
      console.log('\x1b[32m%s\x1b[32m', "CPU architecture: ", os.arch());
      break;
    default:
      console.log('\x1b[31m%s\x1b[31m', "Missing or wrong parameter");
      break;
  }

}