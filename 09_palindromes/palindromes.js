const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let cleanString = string.toLowerCase().split('');
    cleanString = cleanString.filter((arr) => alphanumerical.includes(arr));
    // cleanString = cleanString.join('')

    // console.log(cleanString);
    // return cleanString

    return cleanString.join('') == cleanString.reverse().join('');


const string2 = string





};

// Do not edit below this line
module.exports = palindromes;
