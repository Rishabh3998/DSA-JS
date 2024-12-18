// We can only run binary search in the sorted array or data.

const arr = [1, 2, 3, 4, 5, 6];

// Find: 5 in the arr
// Solution: We need to find 5 in the array (arr), one solution is to find it using linear search
// but the time complexity would be O(n) for this algo, to improve time complexity we can use the
// binary search which will search between the intervals where the possibility of target being there
// is more. Time complexity for this will be O(logN).

// To find an element in an array with sorting algo (if array is not sorted) will take O(logN) + O(nlogN).

// Iterative method
const binarySearch = (data, target) => {
  let left = 0;
  let right = data.length - 1;

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (data[mid] === target) {
      return mid;
    } else if (data[mid] < target) {
      left = mid + 1;
    } else if (data[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, 5));

// Recursion method
const binarySearchRec = (arr, target) => {
  return binarySearchUtil(arr, target, 0, arr.length - 1);
};

const binarySearchUtil = (data, target, left, right) => {
  if (left > end) {
    return -1;
  }
  let mid = Math.floor(left + (right - left) / 2);
  if (data[mid] === target) {
    return mid;
  } else if (data[mid] < target) {
    return binarySearchUtil(data, target, mid + 1, right);
  } else if (data[mid] > target) {
    return binarySearchUtil(data, target, left, mid - 1);
  }
};

// Question 1:
// Search Insert position
// https://leetcode.com/problems/search-insert-position/description/

const nums = [1, 3, 5, 6];

const searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return start;
};

console.log(searchInsert(nums, 5));
console.log(searchInsert(nums, 2));

// Question 2:
// Find floor and ceil value of 9 in the given array.

const a = [1, 5, 8, 11, 12];

// Example:
// num = 8.7
// Floor: Greatest integer smaller than num, i.e. 8
// Ceil: Smaller integer greater than num, i.e. 9

// Using linear search
const findFloorValue = (arr, target) => {
  // array is sorted so we can take the first value as the minimum here.
  let val = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      val = arr[i];
    }
  }
  return val;
};

// Using linear search
const findCeilValue = (arr, target) => {
  let val = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > target) {
      val = arr[i];
    }
  }
  return val;
};

console.log(findFloorValue(a, 9));
console.log(findCeilValue(a, 9));

// Using binary search
const floorCeil = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let floor = -1;
  let ceil = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      floor = mid;
      ceil = mid;
      return [ceil, mid];
    } else if (arr[mid] > target) {
      ceil = mid;
      end = mid - 1;
    } else {
      floor = mid;
      start = mid + 1;
    }
  }

  return [ceil, floor];
};
