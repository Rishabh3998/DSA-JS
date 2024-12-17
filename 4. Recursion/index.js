// Question 1:
// Factorial of a number

const number = 10;

const factorial = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

console.log(factorial(number));

// Question 2:
// Sum of array

const arr = [1, 2, 3, 4, 5, 6];

const sumOfArray = (arr, n) => {
  if (n === 0) {
    return 0;
  }
  return sumOfArray(arr, n - 1) + arr[n - 1];
};

console.log(sumOfArray(arr, arr.length));

// Question 3:
// Fibonacci

const fibonacci = (n) => {
  if (n === 0 || n == 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(5));
