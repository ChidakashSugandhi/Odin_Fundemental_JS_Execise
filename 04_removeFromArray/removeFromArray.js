const removeFromArray = function(array, ...optional) {
    // Method 1
    return array.filter((element) =>  !optional.includes(element)); 
    
    // let newArray = [];
    
    // Method 2
    // for (n of array) {
    //     if (!optional.includes(n)){
    //         newArray.push(n)
    //     }
    // }
    
    // Method 3
    // array.forEach(element => {
    //     if (!optional.includes(element)){
    //         newArray.push(element)
    //     }
    // });
    // return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
