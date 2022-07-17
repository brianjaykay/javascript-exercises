const reverseString = function(string) {
    let stringList = string.split("");
    let reverseArray = stringList.reverse();
    let reverseString = reverseArray.toString();
    let finished = reverseString.replace(/,/g,'');
    return finished;
};

// Do not edit below this line
module.exports = reverseString;
