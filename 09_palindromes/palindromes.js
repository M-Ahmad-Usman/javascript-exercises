const palindromes = function (str) {
    // Filter non alphanumerical characters from parameter
    // Convert the array of alphanumerical characters into string 
    // Convert the string into lowercase
    let filteredStr = str
    .match(/[A-Za-z0-9]/g)
    .toString()
    .toLowerCase();

    let reversedStr = filteredStr
    .split("")
    .reverse()
    .join("");

    return reversedStr === filteredStr;
};

// Do not edit below this line
module.exports = palindromes;
