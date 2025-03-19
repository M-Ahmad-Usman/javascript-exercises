const findTheOldest = function(people) {
    let oldest = people.reduce((currentPerson, nextPerson) => {
        let DOB = "yearOfBirth";
        let DOT = "yearOfDeath";

        // If persons's year of death is undefined then get the current year
        // The precedence of ?? is less than -, that's why it is enclosed in paranthesis
        let currentPersonAge = 
        (currentPerson[DOT] ?? new Date().getFullYear()) - currentPerson[DOB];
        
        let nextPersonAge = 
        (nextPerson[DOT] ?? new Date().getFullYear()) - nextPerson[DOB];

        return (currentPersonAge > nextPersonAge)? currentPerson: nextPerson;

    }, people[0])

    return oldest;
    
};

// Do not edit below this line
module.exports = findTheOldest;
