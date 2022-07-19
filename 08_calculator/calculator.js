const add = function(numOne, numTwo) {
  return numOne + numTwo;
};

const subtract = function(numOne, numTwo) {
	return numOne - numTwo;
};

const sum = function(args) {
  let sum = 0;
  const argLength = (args.length)
    for (let i=0; i < argLength; i++){
      sum += args[i];
    }
    return sum;
  };

const multiply = function(args) {
  let sum = 1;
  const argLength = (args.length)
    for (let i=0; i < argLength; i++){
      sum *= args[i];
    }
    return sum;
};

const power = function(numOne, numTwo) {
   return numOne ** numTwo;
};

const factorial = function(num) {
  let numArray = [];
  
  for (let i = 1; i < (num); i++){
    numArray.push(i);
  }
  numArray.push(num);

  const numLength = (numArray.length);

  if (numLength > 1){
    let start = numArray[0]
    for (let i=1; i < numLength; i++){
        start *= numArray[i];
      }
      return start;
    } else {
      return 1;
    }
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
