// What is Array?
// Collects of elements present inside a contiguous memory space.

// How do you create an empty array in JS?
const arr = [];
const arr2 = new Array();
const arr3 = [1, 2, 3, 4, "Hello", { name: "Rishabh" }, [1, 2, 3]];
const arr4 = new Array(5).fill(0);
console.log(arr, arr2);
console.log(arr3);
console.log(arr4);

// How to access first and the last element of the array.
console.log(arr3[0]); // first
console.log(arr3[arr3.length - 1]); // last

// How do you remove the last element of the array?
const lastElement = arr3.pop();
console.log(lastElement);
console.log(arr3);

// How do you add an element to the end of the array?
arr.push(10);
console.log(arr);

// How do you add an element to the start of the array?
arr.unshift(0);
console.log(arr);

// How do you delete an element to the start of the array?
arr.shift();
console.log(arr);

// How to loop through an array

// for in loop
for (let index in arr4) {
  console.log(arr4[index]);
}

// traditional for loop
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

// forEach loop
arr4.forEach((ele, index) => {
  console.log(ele);
  console.log(arr4[index]);
});

// for of loop
for (let ele of arr4) {
  console.log(ele);
}

// Question 1: How do you check if the element present in the array or not?
function findElement(arr, target) {
  for (let index in arr) {
    if (arr[index] === target) {
      return index;
    }
  }
}

const foundElement = findElement([1, 2, 3, 4], 2); // give index of found element

console.log(foundElement);
