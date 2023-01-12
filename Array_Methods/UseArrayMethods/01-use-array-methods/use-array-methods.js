/* eslint-disable no-unused-vars */
function indexAndValue(arr) {
  return arr.map((value, index) => ({ index, value }));
}

function capitalize(str) {
  return str.toUpperCase();
}

function swapCase(str) {
  return str
    .split(' ')
    .map((word, i) => {
      if (i % 2 === 0) {
        return capitalize(word);
      }
      return word;
    })
    .join(' ');
}

function extensionSearch(ext, arr) {
  return arr.filter((file) => file.includes(ext));
}

function getPopulation(countryArr, arr) {
  return countryArr.reduce((acc, curr) => {
    if (arr.includes(curr.name) || arr.length === 0) {
      return acc + curr.population;
    }
    return acc;
  }, 0);
}

function keyifyArrayOfObjects(key, arr) {
  return arr.reduce((acc, curr) => {
    acc[curr[key]] = curr;
    return acc;
  }, {});
}

function powerLevelAverage(arr) {
  return Math.round(
    arr.reduce((acc, { powerLevel }) => acc + powerLevel, 0) / arr.length
  );
}

function mapReduce(arr, func) {
  return arr.reduce((acc, curr) => {
    acc.push(func(curr));
    return acc;
  }, []);
}

function filterReduce(arr, func) {
  return arr.reduce((acc, curr) => {
    func(curr) ? acc.push(curr) : null;
    return acc;
  }, []);
}

function inYourBudget(budget, arr) {
  return arr
    .filter(({ item, price }) => (price < budget ? item : null))
    .map((x) => x.item)
    .reduce((acc, curr) => {
      acc.push(curr);
      return acc;
    }, []);
}

function separateAndReturnNames(arr, desiredName, num) {
  return arr
    .map((hero) => {
      hero.firstName = hero.name.split(' ')[0];
      return hero;
    })
    .map((hero) => {
      hero.lastName = hero.name.split(' ')[1];
      return hero;
    })
    .filter((hero) => (hero[desiredName].length <= num ? hero : null))
    .reduce((acc, curr) => {
      acc.push(curr[desiredName]);
      return acc;
    }, []);
}

function priorityTodoDuration(arr) {
  return arr
    .filter((list) => list.priority === 'high')
    .reduce((acc, curr) => {
      return acc + curr.duration;
    }, 0);
}
