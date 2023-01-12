/* eslint-disable no-unused-vars */
function useMapToUpperCase(str) {
  const words = str.split(' ');
  return words.map((word) => word.toUpperCase());
}

function useFilter(arr) {
  return arr.filter((word) => {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === '@') {
        return true;
      }
    }
    return false;
  });
}

function sumWithReduce(arr, startVal = 0) {
  return arr.reduce((acc, curr) => {
    return acc + curr;
  }, startVal);
}

function filterEvensDoubleAndSum(arr) {
  const filteredArr = arr.filter((num) => num % 2 === 0);
  const doubledArr = filteredArr.map((num) => num * 2);
  const sum = doubledArr.reduce((acc, curr) => acc + curr, 0);
  return sum;
}
