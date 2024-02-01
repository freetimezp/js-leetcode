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

const strs = ["flowers", "flowers", "flowers"];

var longestCommonPrefix = function (strs) {
    let prefix = "";
    let check = "";
    let arrCheck = [];
    let arr = [];

    const sortArr = strs.sort((a, b) => {
        return a.length - b.length;
    })

    if (strs.length === 1) {
        prefix = strs[0];
    } else {
        for (let i = 0; i < sortArr[0].length; i++) {
            check = sortArr[0].substr(i, 1);
            arrCheck.push(check);
        }

        for (let j = 0; j < arrCheck.length; j++) {
            arr = sortArr.filter(str => str.substr(j, 1) === arrCheck[j]);

            if (arr.length !== sortArr.length) return prefix;

            prefix += arrCheck[j];
        }

        return prefix;
    }

    return prefix;
};

let result = longestCommonPrefix(strs);
console.log(result);

/** LEETCODE #14 :: Longest Common Prefix :: SOLVED end **/












