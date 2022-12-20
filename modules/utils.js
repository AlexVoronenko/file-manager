import { homedir } from 'os';

export const getHomeDir = () => {
  return homedir();
};

export const getUserName = () => {
  // console.log(process.argv[2]);
  // console.log(process.argv[2].split("="));
  // console.log(process.argv[2].split("=")[1]);

  if (process.argv[2]) return process.argv[2].split("=")[1];
  return "Username ";
};