let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers)); // => 83

function sumOfSquares (arr) {
    return arr.reduce((acc, element) => acc + (element * element), 0);
}
