// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function odd_Even(number) {
    if (number % 2 === 1) {
        let result = number * 2
        return result
    }
    else {
        let result = number / 2
        return result
    }

}

console.log(odd_Even(22));