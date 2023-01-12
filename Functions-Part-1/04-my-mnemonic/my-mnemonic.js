// YOUR CODE BELOW
function myMnemonic(str1, str2, str3, str4) {
  let mnemonic = '';
  if (str1 !== undefined) mnemonic += str1[0];
  if (str2 !== undefined) mnemonic += str2[0];
  if (str3 !== undefined) mnemonic += str3[0];
  if (str4 !== undefined) mnemonic += str4[0];
  return mnemonic;
}
