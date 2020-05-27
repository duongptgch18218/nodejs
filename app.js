// var myModule = require("./myModel.js");
// myModule.myPrint("hello");
// myModule.myPrint2();

// let operator = require("./math.js");

// console.log(operator.sqrt(4));

// console.log(operator.square(2,2));



let myFile = require("./file_module");
let fs = require("fs");


// myFile.createFile("hello.txt", "Hello, this is first file");
myFile.readFile("hello.txt");
console.log(fs.readFileSync("hello.txt","utf-8"));