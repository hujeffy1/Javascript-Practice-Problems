/* eslint-disable no-unused-vars */
function repeat(str, num) {
  let result = '';
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

function join(arr, delim = '') {
  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (delim !== undefined && i !== arr.length - 1) {
      result += delim;
    }
  }
  return result;
}

function gridGenerator(num) {
  let board = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      if ((i + j) % 2) {
        board += ' ';
      } else {
        board += '#';
      }
    }
    board += '\n';
  }
  return board;
}

function paramify(obj) {
  let result = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      result.push(`${prop}=${obj[prop]}`);
    }
  }
  return result.sort().join('&');
}

function paramifyObjectKeys(obj) {
  let result = [];
  for (let prop of Object.keys(obj)) {
    result.push(`${prop}=${obj[prop]}`);
  }
  return result.sort().join('&');
}

function sort(arr) {
  let result = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          result = arr[j];
          arr[j] = arr[i];
          arr[i] = result;
        }
      }
    }
    return arr;
  }
}
