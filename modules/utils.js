import { homedir } from 'os';

export const getHomeDir = () => {
  return homedir();
};

export const getUserName = () => {
  if (process.argv[2]) return process.argv[2].split("=")[1];
  return "Username ";
};

export const getCmdArgs = (string) => {
  // const quotes = ["'", '"'];
  // let result = [];
  // const paramString = string.split(" ");
  // let QuotParam = false;
  // let index = 0;
  // param = "";

  // console.log("=cmd1=>", string);
  // console.log("=cmd2=>", string.split(" "));

  // while (index < string.length) {


  //   if (!QuotParam) {
  //     result.push(paramString[index]);
  //   } else {

  //   }


  //   index++;
  // }
}