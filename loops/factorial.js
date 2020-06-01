function factorial(number){
    let sum = 1;
    for (let i = 0; i < number; i++){
        sum += i * sum;
    }
    return sum;
}

function showFactorial(number){
    console.log(factorial(number));
}

showFactorial(7);
showFactorial(8);
