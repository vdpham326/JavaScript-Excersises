
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));


function oddLengths(arr) {
    return arr.reduce((filteredNumbersArray, letters) => {
      let length = letters.length;
      if (length % 2 === 1) {
        filteredNumbersArray.push(length);
      }
  
      return filteredNumbersArray;
    }, []);
  }