/** @format */

const fs = require("fs");

// create new file
// fs.writeFileSync("read.txt", "Welcome to node fs");

// update file
// delete previous data and write new one
// fs.writeFileSync("read.txt", "Welcome to node fs 2");

// update file without deleting
// fs.appendFileSync("read.txt", " 3245");

// read file data
// const buf_data = fs.readFileSync("read.txt");
// console.log("bufdata " + buf_data);
// org_data = buf_data.toString();
// console.log("org data " + org_data);

// rename file
// // fs.renameSync("read.txt", "readWrite.txt");
// fs.renameSync("readWrite.txt", "read.txt");

// create folder
// fs.mkdirSync("balaji");
// fs.writeFileSync("./balaji/biodata.txt", "my name is balaji");
// fs.appendFileSync("./balaji/biodata.txt", ". i am mechanical engineer");

// to read data without getting buffer data at first //we have to encode the file using "utf8"
// const data = fs.readFileSync("./balaji/biodata.txt", "utf8");
// console.log(data);

// // delete file
// fs.unlinkSync("./balaji/biodata.txt");

// delete folder
// fs.rmdirSync("balaji");
