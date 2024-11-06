const firstName = "Rishabh";

// Length of a string
console.log(firstName.length);

// Find character at a particular index
console.log(firstName.charAt(4));
console.log(firstName[4]);
console.log(firstName.charCodeAt(4)); // ASCII value of 'a'

// Find if a character is present in the string or not like find if h is there or not
console.log(firstName.includes("h"));
console.log(firstName.includes("ish"));

// Find the index of a character present in the string
console.log(firstName.indexOf("s"));
const name = "Rishabhs";
console.log(name.lastIndexOf("s"));

// Compare string
console.log(firstName.localeCompare(name)); // -ve = not equal, 0 = equal

// Replace a string
const sentence =
  "Rishabh will become the best frontend developer. Rishabh.....";
const replaced = sentence.replace("Rishabh", "Vansh");
const replaceAllUsingRegex = sentence.replace("/Rishabh/g", "Vansh"); // Find Rishabh globally and replace
const replacedAll = sentence.replaceAll("Rishabh", "Vansh");

console.log(sentence);
console.log(replaced);
console.log(replaceAllUsingRegex);
console.log(replacedAll);

// Find substring in a string
const substr = sentence.slice(2, 20);
const lastString = sentence.slice(-10);
const substring = sentence.substring(2, 20); // Original remains intact
console.log(sentence);
console.log(lastString);
console.log(substr);
console.log(substring);

// Split string by a character
console.log(sentence.split(""));
console.log(sentence.split("."));
console.log(sentence.split(" "));

// Join words to form a string
const words = sentence.split(" ");
console.log(words);
const joined = words.join(" ");
console.log(joined);

// startsWith and endsWith
console.log(sentence.startsWith("Rishabh"));
console.log(sentence.endsWith("..."));

// To remove beginning and ending white spaces
const string = "             string            ";
console.log(string.trim());
console.log(string.trimStart());
console.log(string.trimEnd());

// toUpperCase and toLowerCase
console.log(string.trim().toLowerCase());
console.log(string.trim().toUpperCase());
console.log(string.trim().toLocaleLowerCase("en-US"));
console.log(string.trim().toLocaleUpperCase("tr"));

// Convert number to string
const num = 123;
console.log(num, num.toString());

// Convert string to number
const st = "1234";
console.log(st, +st, Number(st));

// Convert object to string
const obj = {
  name: "Rishabh",
  city: "New Delhi",
};
console.log(obj);
console.log(JSON.stringify(obj));

const stringifiedJSON = JSON.stringify(obj);
console.log(JSON.parse(stringifiedJSON));

// concat two strings
const lastName = " Kumar";
console.log(firstName.concat(lastName, " ", st));

// Leetcode question
// Question 1: Find the Index of the First Occurrence in a String
// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/

const haystack = "sadbutsad";
const needle = "sad";

// Approach 1:
console.log(haystack.indexOf(needle));

// Approach 2:
function findOcc(haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }

  let haystackLength = haystack.length;
  let needleLength = needle.length;

  // Iterate through the haystack up to the point where the needle could fit
  for (let i = 0; i <= haystackLength - needleLength; i++) {
    // Check if the substring of haystack matches needle
    if (haystack.substring(i, i + needleLength) === needle) {
      return i; // Return the starting index of the match
    }
  }

  return -1;
}

const result = findOcc(haystack, needle);
console.log(result);

// Question 2: Reverse a string
// https://leetcode.com/problems/reverse-string/

const input = ["h", "e", "l", "l", "o"];
// Approach 1:
console.log(input.reverse());

// Approach 2:
// Two - pointer approach
function reverse(str) {
  const copy = str;
  let i = 0,
    j = copy.length - 1;

  while (i <= j) {
    let c = copy[i];
    copy[i] = copy[j];
    copy[j] = c;
    i++;
    j--;
  }

  return copy;
}

console.log(input); // original string impacted by reverse
console.log(reverse(input));

// Question 3: Valid anagram
// https://leetcode.com/problems/valid-anagram/description/

const s = "anagram";
const t = "nagaram";

// Approach 1:
function validAnagram(s, t) {
  const sc = s.split("");
  console.log(sc);
  const tc = t.split("");
  console.log(tc);
  sc.sort();
  console.log(sc);
  tc.sort();
  console.log(tc);
  return sc.join("") === tc.join("");
}

console.log(validAnagram(s, t));

// Approach 2:
// use map
function validAna(s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1);
  }
  for (let i = 0; i < t.length; i++) {
    map.set(t[i], (map.get(t[i]) || 0) - 1);
    if (map.get(s[i]) === 0) map.delete(s[i]);
  }
  return map.size === 0;
}

console.log(validAna("rat", "car"));

// Question 4:
// Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/description/

const strs = ["flower", "flow", "flight"];

function longestCommonPrefix(strs) {
  if (!strs.length) return "";

  // Start with the first string as the potential prefix
  let prefix = strs[0];

  // Loop through the rest of the strings
  for (let i = 1; i < strs.length; i++) {
    // Adjust the prefix to match the current string
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return ""; // No common prefix found
    }
  }
  return prefix;
}

function l2(strs) {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (const str of strs) {
      if (str[i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}

console.log(longestCommonPrefix(strs));
