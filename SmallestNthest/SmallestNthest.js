
function findNthestLowestNumber(array, NthestSmallestNumber) {
    //duplicate the randomArray
    var orderedArray = array.slice(0)
    //Order the duplicated Array
    orderedArray.sort(function(a, b) {
        return a - b
    });
    //Remove duplicates from the array to avoid mistakes like this : [2,2,3] --> second lowest number is 3, not 2
    var newOrderedArray = [orderedArray[0]];
    for (var i = 1; i < orderedArray.length; i++) {
        if (orderedArray[i] != orderedArray[i - 1]) newOrderedArray.push(orderedArray[i]);
    }
    //console.log(newOrderedArray)
    //Get the Nthest smallest Number
    var solution = newOrderedArray[NthestSmallestNumber - 1];
    return solution + " is the " + NthestSmallestNumber + "th smallest number of the array";
}

//Generate 500 random numbers between 0 and 1000 in an Array
var randomArray = [];
var sizeArray = 500;
var maxNumber = 1000;
for (var i = 0; i < sizeArray; i++) {
    randomArray.push(Math.round(Math.random() * maxNumber))
}
console.log(randomArray);


console.log(findNthestLowestNumber(randomArray, 6));
