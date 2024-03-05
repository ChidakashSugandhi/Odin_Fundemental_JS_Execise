const repeatString = function(string, n) {
    if (n<0) {
        return ("ERROR");
    }
    // else if (n==0) {
    //     return ("");
    // }
    let returnString = "";
    for (let i = 0; i<n; i++) {
        returnString += string;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;  
