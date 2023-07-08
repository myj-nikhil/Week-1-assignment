/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let l1 = str1.toLowerCase();
  let l2 = str2.toLowerCase();
  let arr1 = Array.from(l1);
  let arr2 = Array.from(l2);
  console.log(arr2);
  arr1.sort();
  console.log(arr1);
  arr2.sort();
  console.log(arr2);
  return arr1.every((element, index) => element === arr2[index]);
}

const ana = isAnagram("raj", "jar");
console.log( `the ans is ${ana}`)
module.exports = isAnagram;
