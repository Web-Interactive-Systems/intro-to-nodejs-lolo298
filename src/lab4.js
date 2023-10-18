/**
 Todo: Complete this lab 

 - Add a new task in scripts of package.json to run `lab4.js`
 - Use argv of process module to get `filename` (a path to an existing file './utils/content.txt') and `text` (a text)
 - Use writeFile of fs module to write text in filename
 - Use readFile of fs module to read nameFile
 */

const fs = require("fs");

const filename = process.argv[2]; // Todo;
const text = process.argv[3]; // Todo;

if (!filename) {
  console.error("Please pass a file path");
  process.exit(1);
}

// Todo writeFile
if (text) {
  fs.writeFileSync(filename, text, {
    encoding: "utf-8",
    flag: "w",
  });
  console.log("data Written to file");
}
// Todo readFile
else {
  if (!fs.existsSync(filename)) {
    console.error("Le fichier n'existe pas");
    process.exit(1);
  }
  const data = fs.readFileSync(filename, "utf-8");
  console.log(data);
}
