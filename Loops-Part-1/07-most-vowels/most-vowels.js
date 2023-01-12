// YOUR CODE BELOW
function mostVowels(str) {
  let currWord = '';
  let currVowelTotal = 0;
  let maxWord = '';
  let maxVowelTotal = 0;

  for (let i = 0; i < str.length; i++) {
    let newStr = str[i];
    if (newStr !== ' ' && i !== str.length - 1) {
      currWord += newStr;
      if ('aeiouAEIOU'.indexOf(newStr) >= 0 === true) {
        currVowelTotal += 1;
      }
    } else {
      if (currVowelTotal > maxVowelTotal) {
        maxVowelTotal = currVowelTotal;
        maxWord = currWord;
      }
      currWord = '';
      currVowelTotal = 0;
    }
  }
  return maxWord;
}
