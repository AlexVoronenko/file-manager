import os from 'node:os';

export const osInformation = async (arg) => {

  console.log(arg);
  switch (arg) {
    case "--EOL":
      console.log("The operating system-specific end-of-line marker: ", JSON.stringify(os.EOL));
      break;
    case "--cpus":
      console.log("Logical CPU core: ", os.cpus().map(({ model, speed }, index) => [`Core N:${index + 1}`, `Model: ${model}`, `Speed: ${speed / 1000}GHz`]));
      break;
    case "--homedir":
      console.log("Home directory: ", os.homedir());
      break;
    case "--username":
      console.log("Current system user name: ", os.userInfo().username);
      break;
    case "--architecture":
      console.log("CPU architecture: ", os.arch());
      break;
    default:
      console.log("Missing or wrong parameter");
      break;
  }

}