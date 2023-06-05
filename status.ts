import fs from "fs";
import path from "path";

function countFilesInDirectory(dir: string): {
  count: number;
  easy_count: number;
  medium_count: number;
  hard_count: number;
} {
  let count = 0;
  let medium_count = 0;
  let easy_count = 0;
  let hard_count = 0;
  const items = fs.readdirSync(dir);

  items.forEach((item) => {
    const fullPath = path.join(dir, item);
    // if (!/^medium-(.+).ts$/.test(item)) {
    //   const newPath = path.join(dir, "easy-" + item);
    //   fs.renameSync(fullPath, newPath);
    // }
    if (fs.statSync(fullPath).isFile()) {
      count++;
      if (/^easy-(.+).ts$/.test(item)) easy_count++;
      if (/^medium-(.+).ts$/.test(item)) medium_count++;
      if (/^hard-(.+).ts$/.test(item)) hard_count++;
    } else {
      count += countFilesInDirectory(fullPath).count;
      easy_count += countFilesInDirectory(fullPath).easy_count;
      medium_count += countFilesInDirectory(fullPath).medium_count;
      hard_count += countFilesInDirectory(fullPath).hard_count;
    }
  });

  return { count, easy_count, medium_count, hard_count };
}

// Usage example:
const dir = "./problems";
const fileCount = countFilesInDirectory(dir);
console.log(`Total ${fileCount.count} files`);
console.log(`Easy  ${fileCount.easy_count} files`);
console.log(`Medium ${fileCount.medium_count} files`);
console.log(`Hard ${fileCount.hard_count} files`);
console.table(fileCount);
