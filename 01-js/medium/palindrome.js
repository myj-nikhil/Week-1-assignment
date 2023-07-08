/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  var result = str.replace(regex, '');
  function isNotAGAp (element) {
    return element != ' '
  }
  let loweredString = result.toLowerCase();
  let arr1 = Array.from(loweredString);
  console.log(arr1.length)
  if(arr1.length <=1) return true;
  
  arr1 = arr1.filter(isNotAGAp);
  console.log(arr1);
  if (arr1.length/2 === 0) return false;
  console.log((arr1.length/2)-0.5);
  let arr2 = arr1.splice((arr1.length/2)-0.5);
  console.log(arr2);
  arr3 = arr2.splice(1);
  console.log(`arr3 ${arr3} `)
  console.log(`arr1 ${arr1}`)
  arr1.sort();
  
  let filtered1 = arr1.filter(isNotAGAp);
  

  console.log("fil1",filtered1);
  
  arr3.sort();
  let filtered2 = arr3.filter(isNotAGAp);
  console.log("fil2", filtered2);

  return filtered1.every((element, index) => element === filtered2[index]);
}
let ans = isPalindrome("");

console.log(ans);

module.exports = isPalindrome;
