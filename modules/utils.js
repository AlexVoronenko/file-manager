import { homedir } from 'os';

export const getHomeDir = () => {
  return homedir();
};

export const getUserName = () => {
  if (process.argv[2]) return process.argv[2].split("=")[1];
  return "Username ";
};