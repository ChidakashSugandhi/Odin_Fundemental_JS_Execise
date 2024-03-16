const add = function(a, b) {
  return (a+b);
};

const subtract = function(a, b) {
  return (a-b);
};

const sum = function(arr) {
  return arr.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => total * currentItem, 1);
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(num) {
  if (num == 0) {return 1;}
  const arr = [];
  for (let i = 1; i <= num; i ++) {
    arr.push(i)
  }
  return arr.reduce((fact, currentItem) => fact*currentItem, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
