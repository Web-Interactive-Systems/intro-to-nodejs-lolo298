/**
 Todo: Complete this lab by importing the needed 
 module
 and a comment to each function used inside `_os` object to explain 
 ./utils/constants.js and ./utils/helpers.js
 */

const os = require("os");

const _os = {
  // The name of the current operating system
  name: os.type(),
  // The Uname of the operating system
  release: os.release(),
  // The total amount of RAM on the system
  totalMem: os.totalmem(),
  // The avaiable amount of RAM on the system
  freeMem: os.freemem(),
  // The time since the last shutdown of the system
  uptime: os.uptime(),
  // Information about the current user (uid, gid, username, homedir, default shell)
  user: os.userInfo(),
};

console.log(_os);
