const leapYears = function(year) {
    year = Number.parseInt(year);
    
    if (year == undefined)
        return `ERROR`;

    if (year % 4 == 0) {
        
        if (year % 400 != 0 && year % 100 == 0)
            return false;
        else
            return true;
    }
    else
        return false;
};

// Do not edit below this line
module.exports = leapYears;
