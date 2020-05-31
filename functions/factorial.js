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

showFactorial(1);
showFactorial(2);
showFactorial(3);
showFactorial(4);
showFactorial(5);