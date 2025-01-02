const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

//Buildind mini calculater functions

//addition
function add(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}

console.log(add(1, 2, 3));

//substraction
function substract(...args) {
  let value = args[0];

  for (let i = 1; i < args.length; i++) {
    value -= args[i];
  }
  return value;
}

console.log(substract(20, 5, 5));

//multiplication
function multiply(...args) {
  let value = args[0];
  for (let i = 1; i < args.length; i++) {
    value *= args[i];
  }
  return value;
}

console.log(multiply(2, 5, 5));

//division
function divide(...args) {
  let value = args[0];

  for (let i = 1; i < args.length; i++) {
    if (args[i] === 0) {
      return "Error: cannot start the division with zero";
    }
    value /= args[i];
  }

  return value;
}

console.log(divide(100, 5, 2));

//type conversion challenges

// Write a function that takes a string containing a number and returns its square.
function squareNumber(n) {
  return Number(n) ** 2;
}

console.log(squareNumber("5"));

//Write a function that takes a boolean value and returns its string equivalent.
function booleanToString(boolean) {
  return String(boolean);
}

console.log(typeof booleanToString(true));

//Write a function that takes an array of numbers and returns them as a single comma-separated string.

function arrayToString(arr) {
  return String(arr);
}

console.log(typeof arrayToString([1, 2, 3, 4, 5]));

//function declarations and function expressions

//function declarations

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

//function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(2000);
console.log(age2);
