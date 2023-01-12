// YOUR CODE BELOW
function onlyOdds(num) {
  let total = 0;
  for (let i = num; i >= 1; i--) {
    if (i % 2 === 1) {
      total += i;
    }
  }
  return total;
}
