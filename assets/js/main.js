/** LEETCODE #1 :: Two Sum **/

/** Given an array of integers nums and an integer target, return indices
 * of the two numbers such that they add up to target. You may assume that
 * each input would have exactly one solution, and you may not use the same
 * element twice. You can return the answer in any order. **/

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

/** LEETCODE #1 :: Two Sum :: SOLVED start **/
// const nums = [2, 7, 11, 15];
// const target = 9;

// var twoSum = function (nums, target) {
//     const arr = [];
//     for (let i = 0; i < nums.length; i++) {
//         for (let k = i + 1; k < nums.length; k++) {
//             if ((nums[i] + nums[k]) === target) {
//                 arr.push(i);
//                 arr.push(k);

//                 //console.log(arr);
//                 return arr;
//             }
//         }
//     }

//     return arr;
// };

// twoSum(nums, target);
/** LEETCODE #1 :: Two Sum :: SOLVED end **/


/***************************************************************************************/

/** LEETCODE #9 :: Palindrome Number **/

// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/** LEETCODE #9 :: Palindrome Number :: SOLVED start **/
// var isPalindrome = function (x) {
//     if (x < 0) return false;

//     let rev = 0;
//     let cur = x;

//     while (cur !== 0) {
//         rev = rev * 10 + cur % 10;
//         cur = Math.floor(cur / 10);
//     }

//     return (x === rev);
// };

// let result = isPalindrome(-121);
// console.log(result); // false
/** LEETCODE #9 :: Palindrome Number :: SOLVED end **/

/***************************************************************************************/

/** LEETCODE #13 :: Roman to Integer **/


// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII,
// which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is
// written as IV. Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX. There
// are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].


/** LEETCODE #13 :: Roman to Integer :: SOLVED start **/
// const roman = ["I", "V", "X", "L", "C", "D", "M"];
// const nums = [1, 5, 10, 50, 100, 500, 1000];

// var romanToInt = function (s) {
//     let arr = s.split("");
//     const resultNums = [];
//     let newNum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let position = roman.indexOf(arr[i]);

//         if (position === -1) alert("Wrong ROMAN number");

//         resultNums.push(nums[position]);
//     }

//     for (let j = 0; j < resultNums.length; j++) {
//         if (resultNums[j] > resultNums[j - 1]) {
//             newNum = newNum - 2 * resultNums[j - 1];
//         }

//         newNum += resultNums[j];
//     }


//     return newNum;
// };

// let result = romanToInt("CMXLIY");
// console.log(result);
/** LEETCODE #13 :: Roman to Integer :: SOLVED end **/


/***************************************************************************************/

/** LEETCODE #14 :: Longest Common Prefix **/

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/** LEETCODE #14 :: Longest Common Prefix :: SOLVED start **/

// const strs = ["flowers", "flowers", "flowers"];

// var longestCommonPrefix = function (strs) {
//     let prefix = "";
//     let check = "";
//     let arrCheck = [];
//     let arr = [];

//     const sortArr = strs.sort((a, b) => {
//         return a.length - b.length;
//     })

//     if (strs.length === 1) {
//         prefix = strs[0];
//     } else {
//         for (let i = 0; i < sortArr[0].length; i++) {
//             check = sortArr[0].substr(i, 1);
//             arrCheck.push(check);
//         }

//         for (let j = 0; j < arrCheck.length; j++) {
//             arr = sortArr.filter(str => str.substr(j, 1) === arrCheck[j]);

//             if (arr.length !== sortArr.length) return prefix;

//             prefix += arrCheck[j];
//         }

//         return prefix;
//     }

//     return prefix;
// };

// let result = longestCommonPrefix(strs);
// console.log(result);

/** LEETCODE #14 :: Longest Common Prefix :: SOLVED end **/


/***************************************************************************************/


/** LEETCODE #20 :: Valid Parentheses **/

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false


/** LEETCODE #20 :: Valid Parentheses :: SOLVED start **/

//let = "(){}[]";
//let s = "(";
//let s = "()()";
// let s = "({[([{}])]})";

// var isValidOne = function (s) {
//     let strCheck = "() {} []";
//     const arr = [];
//     let index = 0;

//     if (s.length <= 1 || (s.length + 2) % 2 == 1) {
//         return false;
//     }

//     while (index < s.length) {
//         arr.push(s[index]);
//         index++;

//         let start = arr[arr.length - 2];
//         let end = arr[arr.length - 1];
//         let startEnd = start + end;

//         console.log(arr);

//         if (strCheck.includes(startEnd)) {
//             arr.pop();
//             arr.pop();
//         }
//     }

//     if (arr.length === 0) return true;

//     return false;
// };

// var isValidTwo = function (s) {
//     const MAP = {
//         ")": "(",
//         "}": "{",
//         "]": "[",
//     };
//     const stack = [];

//     for (let i = 0; i < s.length; i++) {
//         console.log(s[i]);
//         if (s[i] in MAP) {
//             const item = stack.pop();
//             console.log(stack);

//             if (MAP[s[i]] !== item) {
//                 return false;
//             }
//         } else {
//             stack.push(s[i]);
//             console.log(stack);
//         }
//     }

//     return stack.length === 0;
// };

// let result = isValidTwo(s);
// console.log(result);

/** LEETCODE #20 :: Valid Parentheses :: SOLVED end **/


/***************************************************************************************/

/** LEETCODE #21 :: Merge Two Sorted Lists **/

// ou are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.


// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]


/** LEETCODE #21 :: Merge Two Sorted Lists :: SOLVED start **/

//create ListNode object
// function linkedList(arr) {
//     return arr.reduceRight((next, value) => ({ value, next }), null);
// }

// const arr1 = [1, 2, 4];
// const arr2 = [1, 3, 4];

// const list1 = linkedList(arr1);
// const list2 = linkedList(arr2);

// var mergeTwoLists = function (list1, list2) {
//     if (!list1) return list2;
//     if (!list2) return list1;

//     if (list1.value <= list2.value) {
//         list1.next = mergeTwoLists(list1.next, list2);
//         return list1;
//     }

//     if (list1.value > list2.value) {
//         list2.next = mergeTwoLists(list2.next, list1);
//         return list2;
//     }
// };

// let result = mergeTwoLists(list1, list2)
// console.log(result);

/** LEETCODE #21 :: Merge Two Sorted Lists :: SOLVED end **/


/***************************************************************************************/

/** LEETCODE #26 :: Remove Duplicates from Sorted Array **/

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Custom Judge:
// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.


// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


/** LEETCODE #26 :: Remove Duplicates from Sorted Array :: SOLVED start **/
// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
//const nums = [1, 1, 2];

// var removeDuplicates = function (nums) {
//     if (!nums || nums.length === 0) return;
//     let k = 1;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i + 1]) {
//             nums[k] = nums[i + 1];
//             k++;
//         }
//     }

//     return k;
// };

// var removeDuplicates = function (nums) {
//     if (!nums || nums.length === 0) return;

//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (nums[i] === nums[i - 1]) {
//             //remove item by index (position) and set 1 (how many items for remove)
//             nums.splice(i, 1);
//         }
//     }

//     return nums.length;
// };

// let result = removeDuplicates(nums);
// console.log(result);

/** LEETCODE #26 :: Remove Duplicates from Sorted Array :: SOLVED end **/



/***************************************************************************************/

/** LEETCODE #27 :: Remove Element **/

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted,
// you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which
// are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Custom

// Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int val = ...; // Value to remove
// int[] expectedNums = [...]; // The expected answer with correct length.
//                             // It is sorted with no values equaling val.

// int k = removeElement(nums, val); // Calls your implementation

// assert k == expectedNums.length;
// sort(nums, 0, k); // Sort the first k elements of nums
// for (int i = 0; i < actualLength; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).


/** LEETCODE #27 :: Remove Element :: SOLVED start **/

// const nums = [4, 4, 0, 1, 0, 2];
// const val = 0;

// var removeElement = function (nums, val) {
//     if (!nums || nums.length === 0) return;

//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (nums[i] === val) {
//             //remove item by index (position) and set 1 (how many items for remove)
//             nums.splice(i, 1);
//         }
//     }

//     return nums.length;
// };

// let result = removeElement(nums, val);
// console.log(result);
/** LEETCODE #27 :: Remove Element :: SOLVED end **/


/***************************************************************************************/

/** LEETCODE #28 :: Find the Index of the First Occurrence in a String **/

// Given two strings needle and haystack, return the index of the first occurrence
// of needle in haystack, or -1 if needle is not part of haystack.


// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.


/** LEETCODE #28 :: Find the Index of the First Occurrence in a String :: SOLVED start **/
// let haystack = "sadbutsad asdasdas";
// let needle = "asd";

// var strStr = function (haystack, needle) {
//     if (!haystack || !needle) return;

//     let str = haystack.indexOf(needle);

//     return str;
// };

// let result = strStr(haystack, needle);
// console.log(result);
/** LEETCODE #28 :: Find the Index of the First Occurrence in a String :: SOLVED end **/


/***************************************************************************************/


/** LEETCODE #35 :: Search Insert Position **/
// Given a sorted array of distinct integers and a target value, return
// the index if the target is found. If not, return the index where it
// would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

/** LEETCODE #35 :: Search Insert Position :: SOLVED start **/

// const nums = [1, 3, 5, 6];
// let target = 4;

// var searchInsert = function (nums, target) {

//     let i = 0;
//     let pos = 0;

//     if (nums[nums.length - 1] < target) {
//         return nums.length;
//     }

//     while (i < nums.length) {
//         if (nums[i] === target) return i;

//         if (nums[i] < target) {
//             pos = i;
//         }

//         if (nums[i] > target) {
//             return i;
//         }

//         i++;
//     }

//     return pos;
// };
// let result = searchInsert(nums, target);
// console.log(result);

/** LEETCODE #35 :: Search Insert Position :: SOLVED end **/


/***************************************************************************************/


/** LEETCODE #58 :: Length of Last Word **/

// Given a string s consisting of words and spaces, return the length 
// of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.


// Example 1:
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.


/** LEETCODE #58 :: Length of Last Word :: SOLVED start **/
let s = "   fly me   to   the moon  ";

var lengthOfLastWord = function (s) {
    let str = s.split(" ");
    let newArr = str.filter(el => el !== "");



    return newArr[newArr.length - 1].length;
};
let result = lengthOfLastWord(s);
console.log(result);

/** LEETCODE #58 :: Length of Last Word :: SOLVED end **/









