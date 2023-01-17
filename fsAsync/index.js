/** @format */

const fs = require("fs");

// in async we have to use callbacks
// fs.writeFile("read.txt", "async fs module", (err) => {
//     console.log(err);
//     console.log("file is created");
// });

// fs.appendFile("read.txt", ". async fs module 2.", (err) => {
//     console.log(err);
//     console.log("file is apended");
// });

// fs.readFile("read.txt", "utf-8", (err, res) => {
//     console.log(res);
// });
// console.log(data);

// challange
// fs.mkdir("balaji", (err) => console.log(err));
// fs.writeFile("./balaji/bio.txt", "myname is balaji", (err) => console.log(err));
// fs.appendFile("./balaji/bio.txt", ". i am mechanical engineer", (err) => console.log(err));
// fs.readFile("./balaji/bio.txt", "utf-8", (err, res) => console.log(res));
// fs.rename("./balaji/bio.txt","./balaji/bioData.txt" , (err) => console.log(res));
// fs.unlink("./balaji/bioData.txt", (err) => console.log());
// fs.rmdir("./balaji", (err) => console.log(err));
