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
// let s = "   fly me   to   the moon  ";

// var lengthOfLastWord = function (s) {
//     let str = s.split(" ");
//     let newArr = str.filter(el => el !== "");

//     return newArr[newArr.length - 1].length;
// };
// let result = lengthOfLastWord(s);
// console.log(result);

/** LEETCODE #58 :: Length of Last Word :: SOLVED end **/


/***************************************************************************************/


/** LEETCODE #66 :: Plus One **/

// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer. The digits are ordered
// from most significant to least significant in left-to-right order. The large
// integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.


// Example 1:
// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Example 2:
// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].

// Example 3:
// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

/** LEETCODE #66 :: Plus One :: SOLVED start **/

//const digits = [4, 3, 2, 1];
// const digits = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 9, 9];

// var plusOne = function (digits) {
//     if (digits.length <= 0) return;

//     let strNum = digits.toString().replaceAll(",", "");

//     strNum = BigInt(strNum);
//     strNum++;

//     let str = strNum.toString();

//     const arr = [];
//     for (let i = 0; i < str.length; i++) {
//         arr.push(str[i]);
//     }

//     return arr;
// };

// let result = plusOne(digits);
// console.log(result);

/** LEETCODE #66 :: Plus One :: SOLVED end **/


/***************************************************************************************/

/** LEETCODE #67 :: Add Binary **/

// Given two binary strings a and b, return their sum as a binary string.

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"

/** LEETCODE #67 :: Add Binary :: SOLVED start **/

// let a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101";
// let b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011";

// var addBinary = function (a, b) {
//     if (!a || !b) return;

//     let num1 = BigInt('0b' + a);
//     let num2 = BigInt('0b' + b);

//     return (num1 + num2).toString(2);
// };

// let result = addBinary(a, b);
// console.log(result);
/** LEETCODE #67 :: Add Binary :: SOLVED end **/


/***************************************************************************************/

/** LEETCODE #69 :: Sqrt(x) **/

// Given a non-negative integer x, return the square root of x rounded down to
// the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842...,
// and since we round it down to the nearest integer, 2 is returned.


/** LEETCODE #69 :: Sqrt(x) :: SOLVED start **/
// let x = 4;

// var mySqrt = function (x) {
//     if (x < 0) return;
//     if (x === 0) return 0;

//     let i = 1;

//     while (i * i <= x) {
//         i++;
//     }

//     return i * i < x ? i : i - 1;
// };

// let result = mySqrt(x);
// console.log(result);

/** LEETCODE #69 :: Sqrt(x) :: SOLVED end **/


/***************************************************************************************/

/** LEETCODE #70 :: Climbing Stairs **/
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/** LEETCODE #70 :: Climbing Stairs :: SOLVED start **/
// const n = 7;

// var climbStairs = function (n) {
//     let arr = [];
//     arr[0] = 1;
//     arr[1] = 2;

//     if (n === 0) return 0;
//     if (n === 1) return 1;
//     if (n === 2) return 2;

//     for (let i = 3; i < n; i++) {
//         let sum = arr[0] + arr[1];
//         arr[0] = arr[1];
//         arr[1] = sum;

//         //console.log(arr[1]);
//     }

//     return arr[0] + arr[1];
// };

// let result = climbStairs(n);
// console.log(result);
/** LEETCODE #70 :: Climbing Stairs :: SOLVED end **/

/***************************************************************************************/

/** LEETCODE #83 :: Remove Duplicates from Sorted List **/
// Given the head of a sorted linked list, delete all duplicates such that
// each element appears only once.Return the linked list sorted as well.

// Example 1:
// Input: head = [1,1,2]
// Output: [1,2]

// Example 2:
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

/** LEETCODE #83 :: Remove Duplicates from Sorted List :: SOLVED start **/
//create ListNode object
// function linkedList(arr) {
//     return arr.reduceRight((next, value) => ({ value, next }), null);
// }

// const arr = [1, 2, 3, 3, 5, 6, 7, 7];
// const head = linkedList(arr);

// var deleteDuplicates = function (head) {
//     let current = head;

//     while (current && current.next) {
//         if (current.value === current.next.value) {
//             current.next = current.next.next;
//         } else {
//             current = current.next;
//         }
//     }

//     // console.log(current.value);
//     // console.log(prev.value);

//     return head;
// };

// let result = deleteDuplicates(head);
// console.log(result);

// let nums = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];

// var testFunc = (nums) => {
//     let current = nums;
//     let i = 0;

//     while (i < current.length) {
//         if (current[i] === 5) {
//             current[i] = 'hello';
//         }
//         i++;
//     }

//     return nums;
// }
// let result1 = testFunc(nums);
// console.log(result1);

/** LEETCODE #83 :: Remove Duplicates from Sorted List :: SOLVED end **/

/***************************************************************************************/


/** LEETCODE #88 :: Merge Sorted Array **/

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing
// order, and two integers m and n, representing the number of elements
// in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead
// be stored inside the array nums1. To accommodate this, nums1 has a length
// of m + n, where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:
// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the
// underlined elements coming from nums1.

// Example 2:
// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1.
// The 0 is only there to ensure the merge result can fit in nums1.

/** LEETCODE #88 :: Merge Sorted Array :: SOLVED start **/

// const nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// const nums2 = [2, 5, 6];
// let n = 3;

// var merge = function (nums1, m, nums2, n) {
//     let i = nums1.length;
//     while (i !== m) {
//         nums1.pop();
//         i--;
//     }

//     let x = nums2.length;
//     while (x !== n) {
//         nums2.pop();
//         x--;
//     }

//     for (let y = 0; y < n; y++) {
//         nums1.push(nums2[y]);
//     }

//     return nums1.sort((a, b) => { return a - b; });
// };

// let result = merge(nums1, m, nums2, n);
// console.log(result);

/** LEETCODE #88 :: Merge Sorted Array :: SOLVED end **/


/***************************************************************************************/


/** LEETCODE #94 :: Binary Tree Inorder Traversal **/
// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]

// Example 2:
// Input: root = []
// Output: []

// Example 3:
// Input: root = [1]
// Output: [1]

/** LEETCODE #94 :: Binary Tree Inorder Traversal :: SOLVED start **/
// function TreeNode(val, left, right) {
//     this.val = (val === undefined ? 0 : val)
//     this.left = (left === undefined ? null : left)
//     this.right = (right === undefined ? null : right)
// }

// var inorderTraversal = function (root) {
//     let res = [];

//     inorder(root);

//     function inorder(root) {
//         if (!root) return null;

//         inorder(root.left);
//         res.push(root.val);
//         inorder(root.right);
//     };

//     return res;
// }

// let result = inorderTraversal(binary);

// /** LEETCODE #94 :: Binary Tree Inorder Traversal :: SOLVED end **/



/***************************************************************************************/


// /** LEETCODE #100 :: Same Tree **/
// Given the roots of two binary trees p and q, write a function
// to check if they are the same or not.

// Two binary trees are considered the same if they are structurally
// identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false


// /** LEETCODE #100 :: Same Tree :: SOLVED start **/
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};

var isSameTree = function (p, q) {
    if (!p && !q) return true;

    if ((!p && q) || (p && !q) || (p.val != q.val)) return false;

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// /** LEETCODE #100 :: Same Tree :: SOLVED end **/
















