const sumAll = function(numOne, numTwo) {
    let numArray = [];
    let sumArray = 0;

    if (typeof(numOne) === 'number' && typeof(numTwo) === 'number'){
        if (numOne < numTwo){
            numOne = numOne;
            numTwo = numTwo;
        } else {
            let numThree = numTwo;
            numTwo = numOne;
            numOne = numThree;
        } 
        
        if (numOne > 0 && numTwo > 0){
            for (let i = numOne; i < (numTwo + 1); i++){
                numArray.push(i);
            }
            for (const num of numArray){
                sumArray += num;
                
            } 
            return sumArray;
        } else {
            return "ERROR";
        }  
    } else {
        return "ERROR";
    }
    }


// Do not edit below this line
module.exports = sumAll;
