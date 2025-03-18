const fibonacci = function(n) {
    if (n < 0)
        return `OOPS`;

    if (n == 0)
        return 0;
    if (n == 1) 
        return 1;
    if (n == 2)
        return 1;
    else {
        let first = 0, second = 1;
        let sum = first + second;
        while (n > 2) {
            first = second;
            second = sum;
            sum = first + second;
            n--;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = fibonacci;
