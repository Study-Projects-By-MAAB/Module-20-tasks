// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(integerValue) {
    if (integerValue % 2 === 0) {
        const value = `${integerValue} is Even`
        return value
    }
    else {
        const value = `${integerValue} is Odd`
        return value
    }
}

console.log(odd_even(9));