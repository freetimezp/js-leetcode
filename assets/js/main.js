/** LEETCODE #1 **/

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

/** LEETCODE #1 :: SOLVED start **/
const nums = [2, 7, 11, 15];
const target = 9;

var twoSum = function (nums, target) {
    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let k = i + 1; k < nums.length; k++) {
            if ((nums[i] + nums[k]) === target) {
                arr.push(i);
                arr.push(k);

                //console.log(arr);
                return arr;
            }
        }
    }

    return arr;
};

twoSum(nums, target);
/** LEETCODE #1 :: SOLVED end **/