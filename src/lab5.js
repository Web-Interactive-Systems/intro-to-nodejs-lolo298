/**
 Todo: Complete this lab 

 - Explore node `path` module
 - Add console log in addition to
  a brief explanation of the most important functions of path module
 
 */

const path = require("path");

console.log(path);

console.log("Resolve: ", path.resolve(__dirname, "src", "lab5.js"));
console.log("join: ", path.join(__dirname, "src", "lab5.js"));
console.log("basename: ", path.basename(__dirname));
console.log("dirname: ", path.dirname(__dirname));

/**
 * path.resolve(): This function will return an absolute path by trying combining the pathes.
 * path.join(): This function will return a path by combining the pathes.
 * path.basename(): This function will return the last portion of a path.
 * path.dirname(): This function will return the directory name of a path.
 */
