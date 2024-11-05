// Question 1: Sum of all natural numbers from 1 to n
// sum of 1 to 5: 15

function sumOfNaturalNumber(num) {
  // let sum = 0;
  // General approach:
  // for (let i = 1; i <= num; i++) {
  //   sum += i;
  // }
  // Formula: (n*(n+1)) / 2
  let result = (num * (num + 1)) / 2;
  return result;
}

// const result = sumOfNaturalNumber(10);
// console.log(result);

// Question 2: Find the sum of digits of a number

function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let digit = num % 10; // last digit
    num = Math.floor(num / 10);
    sum += digit;
  }
  return sum;
}

// const result = sumOfDigits(1500);
// console.log(result);

// Question 3: Count the number of digits of a number: eg:34252

function countNumberOfDigits(num) {
  // To handle negative numbers
  num = Math.abs(num); // Make it positive
  let count = 0;
  // We are using do-while loop because user can enter 0 as the number as well and if we use while
  // loop the result will comes out to be 0, which is wrong.
  do {
    count++;
    num = Math.floor(num / 10);
  } while (num > 0);
  return count;
}

// const result = countNumberOfDigits(34252);
// console.log(result);

// Leetcode -  Top interview 150
// Question 4: Palindrome number
// https://leetcode.com/problems/palindrome-number/description/?envType=study-plan-v2&envId=top-interview-150

// Approach 1:
// 1. Convert the given number to string.
// 2. Reverse the string
// 3. Then match both the strings

// Approach 2:
// 1. We need to reverse the given number and store it inside a separate variable.
// 2. Compare the reversed number and the given number.
// 3. If both the number are equal then the number is palindrome.
// 4. Same check will be applied here as well for -ve numbers.

function reverseStringInbuiltFunc(str) {
  return str.split("").reverse().join("");
}

function reverseStringLoop(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

// Approach 1 for reversing number
function reverseNumber(num) {
  let reversed = 0;
  let i = countNumberOfDigits(num) - 1;
  while (num > 0) {
    reversed += (num % 10) * Math.pow(10, i);
    num = Math.floor(num / 10);
    i--;
  }
  return reversed;
}

// Approach 2 for reversing number
function reverseNumber2(num) {
  let reversed = 0;
  while (num > 0) {
    let lastDigit = num % 10;
    reversed = reversed * Math.pow(10, 1);
    reversed += lastDigit;
    num = Math.floor(num / 10);
  }
  return reversed;
}

// const res = reverseNumber(120);
// console.log({ res });

function validPalindrome(num) {
  let number = num;
  let isPalindrome = false;

  // Approach 1:
  // if (num < 0) {
  //   return isPalindrome;
  // } else {
  //   let string = num.toString();
  //   let reversed = reverseStringInbuiltFunc(string);
  //   if (reversed === string) {
  //     isPalindrome = true;
  //   }
  // }

  // Approach 2:
  if (num < 0) {
    // If the number is negative return false
    // -121 !== 121-
    return isPalindrome;
  } else {
    const reversed = reverseNumber2(num); // reverseNumber2 is more optimized
    if (reversed === number) {
      isPalindrome = true;
    }
  }
  return isPalindrome;
}

// const result = validPalindrome(123);
// console.log(result);

// Leetcode
// Question 5: Fibonacci number
// https://leetcode.com/problems/fibonacci-number/description/

// Logic:
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// 0 1 1 2 3 5 8 13 => Fibonacci series

// F(5) = F(4) + F(3) = 3 + 2 = 5

// Approach 1:
// 1. Here we are initializing first 2 numbers i.e. 0 and 1
// 2. Then we are calculating the next result using loop and adding the prev and curr
// 3. We are also updating the next every time.

function fibonacciNumber(n) {
  if (n < 2) {
    return n;
  }
  let prev = 0,
    curr = 1,
    next;
  for (let i = 2; i <= n; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
  }

  return next;
}

// const result = fibonacciNumber(3);
// console.log(result);

// Leetcode
// Question 6: Missing number
// https://leetcode.com/problems/missing-number/description/

// Approach 1: (Brute force)
// Input: nums = [3,0,1]
// 1. I have nums array so i can find the nums.length which is my n [0, nums.length] => range
// 2. Now i know the range in which the numbers will lie.
// 3. I can run a for loop from 0 to nums.length and inside this for loop in can run another
//    for loop which will check if the current i of the parent loop is present inside the array
//    or not.
// Output: 2
// Time complexity: O(n) [n is nums.length] * O(n) [To traverse the array] = O(n^2)

// Approach 2:
// Input: nums = [3,0,1]
// 1. Sort the array
//    [0,1,3]
// 2. Run through the array and check if index === nums[i]
//    [{0,0}, {1,1}, {2,3}] => {index, value}
// 3. If not then the index will be the answer because that particular index is not present there.
// Output: 2
// Time complexity: O(n * logN) [sorting] + O(n) [traversing the array] = O(n * logN)

// Approach 3:
// Input: nums = [3,0,1]
// 1. Create an array (arr) of size max + 1 present in nums array initialize it with 0
// 2. Traverse through nums and and if arr[nums[i]]++
// 3. Traverse through the arr array and return the index which contains 0
// Time complexity: O(n) + O(n) + O(n) = O(n)
// Space complexity: O(n) [new array]

// Approach 4:
// As we know the range is [0,n] and all number should be present so we can calculate the sum of all
// numbers present inside the nums array and using formula let's calculate the sum of natural numbers
// from 0 to n.
// In the end we can return the difference between both calculated sum.

function missingNumber(nums) {
  // Approach 3:
  // let max = -Infinity;
  // let missing;
  // nums.forEach((num) => {
  //   if (num > max) {
  //     max = num;
  //   }
  // });
  // let arr = Array(max + 1).fill(0);
  // nums.forEach((num) => {
  //   arr[num]++;
  // });
  // arr.forEach((num, index) => {
  //   if (num === 0) {
  //     missing = index;
  //   }
  // });
  // return missing;

  // Approach 4:
  let n = nums.length;
  let sumOfNaturalNumber = (n * (n + 1)) / 2;
  const sumOfNums = nums.reduce((acc, curr) => acc + curr, 0);
  return sumOfNaturalNumber - sumOfNums;
}

const result = missingNumber([3, 0, 1]);
console.log(result);
