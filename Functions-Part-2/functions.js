/* eslint-disable no-unused-vars */
function concatString() {
  return Array.from(arguments).join('');
}

function yourFunctionRunner() {
  let result = '';
  for (const func of arguments) result += func();
  return result;
}

function makeAdder(num1) {
  return (num2) => {
    return num1 + num2;
  };
}

function once(func) {
  let notCalled = true;
  return () => {
    if (notCalled) {
      notCalled = false;
      return func();
    }
    return 'the function has already been called...';
  };
}

function createObjectWithClosures() {
  let total = 0;
  return {
    oneIncrementer() {
      total++;
    },
    tensIncrementer() {
      total += 10;
    },
    getValue() {
      return total;
    },
    setValue(val) {
      total = val;
    },
  };
}

function dontSpillTheBeans(secret) {
  return {
    getSecret() {
      return secret;
    },
    setSecret(newSecret) {
      secret = newSecret;
    },
  };
}
