let string = {
    findSubString: (str, sub) => {
        if(str.includes(sub)){
            return true;
        };
        return false;
    },
    findLength: str => {
        let length = str.length;
        return length;
    },
    changeUpper: str => {
        let newStr = str.toUpperCase();
        return newStr;
    },
    changeLower: str => {
        let newStr = str.toLowerCase();
        return newStr;
    }
}

module.exports = string;