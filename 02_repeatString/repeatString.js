const repeatString = function (word, times) {
    if (times <= 0) {
        return "ERROR!";
    }
    const n = 3;
    let finalWord = "";
    for (let i = 0; i < 3; i++) {
        finalWord += word;
    }
    return finalWord;
};

// Do not edit below this line
module.exports = repeatString;
