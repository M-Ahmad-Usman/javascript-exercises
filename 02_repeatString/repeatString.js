const repeatString = function(string, num) {
    
    if (num < 0) {
        return `ERROR`;
    }

    else if (!string) {
        return ``;
    }

    let result = ``;
    while (num >= 1) {
        result += string;
        num--;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
