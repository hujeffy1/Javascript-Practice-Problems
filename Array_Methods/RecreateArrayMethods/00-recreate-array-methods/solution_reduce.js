/* eslint-disable no-unused-vars */
function mapReduce(arr, func) {
  return arr.reduce((acc, curr) => {
    acc.push(func(curr));
    return acc;
  }, []);
}

function everyReduce(arr, func) {
  if (!arr.length) return true;
  const newArr = arr.reduce((acc, curr) => {
    if (func(curr)) {
      acc.push(true);
      return acc;
    } else {
      acc.push(false);
      return acc;
    }
  }, []);
  if (newArr.includes(false)) return false;
  return true;
}
