const sumAll = function(num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {return "ERROR"}
    min = Math.min(num1, num2);
    max = Math.max(num1, num2);
    if (min < 0) {return "ERROR"}


    let sum = 0;
    for (let i = min; i<=max; i++) { sum += i; }
    return sum;

}


//     if (typeof(num1) == "number" && typeof(num2) == "number"){
//         min = Math.min(num1, num2);
//         max = Math.max(num1, num2);
//         if (min < 0) {return "ERROR"}
//         let sum = 0;
//         for (let i = min; i<=max; i++){
//             sum = sum + i;
//         }
//         return sum
//     }
//     else {return "ERROR"}

// };

// Do not edit below this line
module.exports = sumAll;
