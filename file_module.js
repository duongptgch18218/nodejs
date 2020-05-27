let fs = require("fs");
let fileModule = {
    createFile: (nameFile, content) => {
        fs.writeFile(nameFile, content, err => {
            if(err){
                console.log(err);
            }else{
                console.log("Write file complete")
            }
        });
    },
    readFile: nameFile => {
        fs.readFile(nameFile,"utf-8", (err,data) => {
            if(err) throw err;
            else{
                console.log(data);
            }
        });
    }
};

module.exports = fileModule;