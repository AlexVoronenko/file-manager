import path from "path";

export const upPath = (currentPath) => {
  const newPath = currentPath.split(path.sep);
  newPath.pop();
  return newPath.length > 1 ? newPath.join(path.sep) : `${newPath[0] + path.sep}`;
}