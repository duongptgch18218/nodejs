let fs = require("fs");
let fileModule = {
    createFile: (nameFile, content) => {
        fs.writeFile(nameFile, content, err => {
            if(err) throw err;
                
                console.log("Write file complete")
            
        });
    },
    readFile: nameFile => {
        fs.readFile(nameFile,"utf-8", (err,data) => {
            if(err) throw err;
            else{
                console.log(data);
            }
        });
    },
    updateFile: (nameFile, infomation) => {
        fs.appendFile(nameFile, infomation, (err) => {
            if(err) throw err;
            console.log("update file successful");
        });
    },
    deleteFile: nameFile => {
        fs.unlink(nameFile, () =>{
            
            console.log("Delete file successfull");
        });
    }
};

module.exports = fileModule;

/* string module.js--- viet ham finsubString(str, a)  --- tim xem a nam trong str hay khong,return true or false.
changeUppercase(str) -- chuyển đổi chữ
findLenth(str) */