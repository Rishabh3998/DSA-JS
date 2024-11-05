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
  return -1;
}

const foundElement = findElement([1, 2, 3, 4], 3); // give index of found element

console.log(foundElement);

// Using includes to check is present or not
console.log(arr3);
console.log(arr3.includes("Hello"));
console.log(arr3.indexOf("Hello"));

// How to delete, add & update element from specific index
// array.splice(startingIndex, deleteCount, ...items);

console.log(arr3);

// Deleting entities using splice
const deletedEntitiesFromArray = arr3.splice(1, 3); // Modify the original array => Deleted 3 elements from 1st index
console.log(arr3);
console.log(deletedEntitiesFromArray);

// Adding entities using splice
// array.splice(startingIndex, deleteCount, ...newEntitiesToAdd);
const deletedEntitiesFromArray2 = arr3.splice(1, 0, 9, 8, 7, 6);
console.log(arr3);
console.log(deletedEntitiesFromArray2); // Nothing is deleted because deleteCount = 0

// Updating entities using splice
const deletedEntitiesFromArray3 = arr3.splice(1, 3, "x", "y", "z");
console.log(arr3);
console.log(deletedEntitiesFromArray3); // Deleted 3 numbers after startingIndex and added 3 other numbers.

// splice vs slice:

// splice is used to add, delete and update values from specific index.

// slice helps use to give the subArray or a part of array present between specified indexes
// Syntax: array.slice(startingIndex, endingIndex); range: [start, end)
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const subArray = array.slice(2, 6); // returns an altogether new subarray and original is intact;
console.log(subArray);
console.log(array);

// Shallow copy & Deep copy

// Shallow
const arrayB = array;
arrayB.push("Rishabh");
console.log(array);
console.log(arrayB);

// Deep
const arrayForDeep = [1, 2, 3, 4];

const deep = [...arrayForDeep];
const deep2 = Array.from(arrayForDeep);
const deep3 = arrayForDeep.concat();

deep.push("Rishabh");
deep2.push("Ritik");
deep3.push("Vansh");

console.log(arrayForDeep);

console.log(deep);
console.log(deep2);
console.log(deep3);

// Question 2: How to add 2 arrays in JS?
const firstArray = [1, 2, 3, 4];
const secondArray = [5, 6, 7, 8];

const merged = [...firstArray, ...secondArray];
const merged2 = firstArray.concat(secondArray);

console.log(firstArray);
console.log(secondArray);

console.log(merged);
console.log(merged2);

// Question 3: How to check if 2 arrays are equal or not
const isArrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const isArrayEqual2 = (arr1, arr2) => {
  // arr.every((currentEle, index) => condition);
  // This every will check if the given condition is applying on all the elements or not.
  // return a boolean.

  // A method opposite to this one is
  // array.some((currentEle, index) => condition);
  // This every will check if the given condition is applying on any one of the element or not.
  // return a boolean.

  return (
    arr1.length === arr2.length && arr1.every((ele, i) => arr1[i] === arr2[i])
  );
};

console.log(isArrayEqual([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(isArrayEqual([1, 2, 3, 4], [1, 2]));
console.log(isArrayEqual2([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(isArrayEqual2([1, 2, 3, 4], [1, 2]));

// Question 4: How to sort an array in ascending or descending order?
const beforeSorting = [1, 4, 6, 0, -9, -5];
const afterSorting = beforeSorting.sort(); // modify the original array.

const copy = [...beforeSorting];
const afterSortingCopy = copy.sort(); // modify the original array. (n * logN)

console.log(beforeSorting);
console.log(afterSorting);
console.log(afterSortingCopy);

const beforeSortingNew = [1, 2, 3, 4, 5];
const descending = [...beforeSortingNew];

descending.sort((first, second) => {
  // If returned number is +ve swap will happen
  // If -ve no swap;

  // second is greater then first so the number will be +ve therefore they will swap.
  return second - first;
});

console.log(descending);

// Reverse the array
const beforeReverse = [1, 2, 5, 6, 3, 9];
const reversed = beforeReverse.reverse(); // modify the original array;

console.log(beforeReverse);
console.log(reversed);

// Flat
// Suppose we have a nested array and we want to make it flat

const nested = [1, 2, [3, 4], [5, 6, [7, 8]]];
// Syntax: array.flat(depth); => depth is like to which extent you need your array to be flattened.
const flattened = nested.flat(); // original is intact

console.log(nested);
console.log(flattened);
