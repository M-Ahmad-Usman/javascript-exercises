const removeFromArray = function (array, ...number) {
    return array.filter((value)=> {
        for (let i = 0; i < number.length; i++) {
            if (number[i] === value)
                return false;
        }
        return true;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
