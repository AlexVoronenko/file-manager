import { readdir } from "node:fs/promises";

export const listContent = async (folderName) => {
  const tableFooter = ["Name", "Type"];

  try {
    console.log(folderName);

    const list = await readdir(folderName, { withFileTypes: true });
    const resultForTable = list
      .map((file) => { return { Name: file.name, Type: file.isFile() ? "file" : "directory" } })
      .sort((a, b) => (a.Name > b.Name ? -1 : 1))
      .sort((a, b) => (a.Type > b.Type ? 1 : -1));

    console.table(resultForTable, tableFooter);

  } catch (error) {
    console.log('\x1b[31m%s\x1b[31m', "FS operation failed");
  }

}