const fibonacci = function(num) {
    if (num < 0) {return "OOPS"}
    let i = 1;
    let fub = [0,1];
    while (i<num){
        fub.push(fub[i-1] + fub[i]);
        i+=1;
    }
    return fub[num];
};

// Do not edit below this line
module.exports = fibonacci;
