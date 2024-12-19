const arr = [1, 5, 2, 9, 7, 4, 3, -3, -1, -6];

// ascending order sorting (smallest to largest)
console.log(arr.sort((a, b) => a - b));

// descending order sorting (largest to smallest)
console.log(arr.sort((a, b) => b - a));

const fruits = ["banana", "apple", "mango", "kiwi"];

// By default sort assume that each element in the array is string and if it is not a string it
// converts it into a string and then perform the sorting. If we don't want to compare the values
// as string we can pass a comparator function inside the sort function and write our own logic
// for sorting.
console.log(fruits.sort());

const string = "Rishabh";

// The below will not work because we need each element spread out into an array to sort.
// console.log(string.sort());

// The below code will spread each character into an array perform a sort and joins them back comparison.
// will be done on the basis of ASCII value here.
console.log(string.split("").sort().join(""));

const nums = [1, 5, 7, 8, 2, 3];

// Bubble sort
// Check the pair by pair value and swap them if left side value is greater than right side value
const bubbleSort = (data) => {
  let swapped = false;
  do {
    swapped = false;
    for (let i = 0; i < data.length - 1; i++) {
      if (data[i] > data[i + 1]) {
        let temp = data[i];
        data[i] = data[i + 1];
        data[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return data;
};

console.log(bubbleSort(nums));

// Selection sort
// select the minimum value and place it in the correct position, then skip that position and find the
// next minimum in the next part of the array and put that in its correct position.

const nums2 = [1, 5, 7, 8, 2, 3];

const findMinBetweenIndexes = (data, start, end) => {
  let minIndex = start; // Start by assuming the first index in the range has the minimum value
  for (let i = start + 1; i <= end; i++) {
    if (data[i] < data[minIndex]) {
      minIndex = i; // Update the index of the minimum value
    }
  }
  return minIndex; // Return the index of the minimum value
};

const selectionSort = (data) => {
  for (let i = 0; i < data.length - 1; i++) {
    const minIndex = findMinBetweenIndexes(data, i, data.length - 1); // Find the index of the smallest element
    if (minIndex !== i) {
      // Swap only if the minimum index is not the current index
      const temp = data[i];
      data[i] = data[minIndex];
      data[minIndex] = temp;
    }
  }
  return data;
};

console.log(selectionSort(nums2));
