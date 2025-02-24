const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (array) {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function (array) {
  let product = 1;
  array.forEach(element => {
    product *= element;
  });
  return product;
};

const power = function (x, pow) {
  return x ** pow;
};

const factorial = function (num) {
  if (num < 0) return "ERROR";
  let product = 1;
  for (let i = 1; i <= num; i++) product *= i;
  return product;
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
