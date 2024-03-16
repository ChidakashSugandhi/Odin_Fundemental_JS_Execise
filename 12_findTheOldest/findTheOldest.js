const findTheOldest = function(array) {
    let oldest = array[0];
    let maxAge = 0;
    for (let obj of array) {
        if (obj.yearOfDeath-obj.yearOfBirth >= maxAge){
            oldest = obj;
        }
    }
    // let fu = "fu"
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
