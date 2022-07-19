const removeFromArray = function(arr, argus) {
    const args = Array.from(argus);
    let newArray = [];
    if (args.length > 1){
        for ( let i = 0; i < args.length; i++){
            console.log(newArray, args);
            valueToRemove = arr.indexOf(args);
            newArray = arr.splice(valueToRemove);
            return newArray;
            }
        } else {
        valueToRemove = arr.indexOf(args);
        newArray = arr.splice(valueToRemove);
        return newArray;
    }r
    
};

// Do not edit below this line
module.exports = removeFromArray;
