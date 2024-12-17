const arr = [1, 2, 3, 4, 5, 6];

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(arr, 3));
console.log(arr.includes(2));
console.log(arr.indexOf(4));
console.log(arr.find((ele) => ele > 3));
console.log(arr.findIndex((ele) => ele > 2));

// Question 1:
// Find the Index of the First Occurrence in a String

const haystack = "leetcode",
  needle = "leeto";

const strStr = function (haystack, needle) {
  // Here indexOf will find he string "leeto" inside "leetcode"
  return haystack.indexOf(needle);
};
