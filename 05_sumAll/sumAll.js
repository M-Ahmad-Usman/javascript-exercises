const sumAll = function(num1, num2) {
    
    // Error handling
    if (num1 < 0 || num2 < 0)
        return `ERROR`;
    else if (!Number.isInteger(num1) || !Number.isInteger(num2))
        return `ERROR`;
    
    // Calculating the sum
    let result = 0;
    if (num1 < num2) {
        while (num2 >= num1) {
            result += num2;
            num2--;
        }
    }
    else {
        while (num1 >= num2) {
            result += num1;
            num1--;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
