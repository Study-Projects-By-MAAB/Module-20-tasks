// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arrayOfIntegers) {
    let sum = 0;
    for (elements of arrayOfIntegers) {
        sum += elements
        result = sum / arrayOfIntegers.length
    }
    return result
}
console.log(make_avg([2, 3, 4, 5, 6, 40]));