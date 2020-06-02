let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let newArray = removeNonInteger(array);
console.log(newArray);

function removeNonInteger(arr) {
    return arr.filter(value => Number.isInteger(value));
}