/* eslint-disable no-unused-vars */
function forEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i], i, arr);
  }
}

function doubler(num) {
  return num * 2;
}

function map(arr, func) {
  let result = [];
  arr.forEach((val) => result.push(func(val)));
  return result;
}

function filter(arr, func) {
  let result = [];
  arr.forEach((val) => {
    if (func(val)) {
      result.push(val);
    }
  });
  return result;
}

function includes(obj, val) {
  for (const key in obj) if (obj[key] === val) return true;
  return false;
}

function countWords(val, sentence) {
  return val + sentence.split(' ').length;
}

function reduce(arr, val, func) {
  let acc = val;
  arr.forEach((value) => (acc = func(acc, value)));
  return acc;
}

function sum(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

function every(arr, func) {
  return reduce(arr, true, (acc, curr) => {
    if (!func(curr)) return false;
    return acc;
  });
}

function some(arr, func) {
  return reduce(arr, false, (acc, curr) => {
    if (func(curr)) return true;
    return acc;
  });
}
