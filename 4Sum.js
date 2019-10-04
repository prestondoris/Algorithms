/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 * Given an array nums of n integers and an integer target, are there elements 
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique 
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * The solution set must not contain duplicate quadruplets.
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * -2 -1 0 0 1 2
 * 
 * A solution set is:
 * [
 * [-1,  0, 0, 1],
 * [-2, -1, 1, 2],
 * [-2,  0, 0, 2]
 * ]
 * 
 * a + b + c + d = target
 * 
 * a + b + c = target - d
 */
var fourSum = function(nums, target) {
//     let sumMap = {};
//     let length = nums.length;
//     let ans = [];
    
//     for(let i=0; i<length; i++) {
//         for(let j=i+1; j<length; j++) {
//             for(let k=j+1; k<length; k++) {
//                 let sum = nums[i] + nums[j] + nums[k];
//                 let key = target - sum;
//                 if(key in sumMap) {
//                     sumMap[key].push([nums[i],nums[j],nums[k]]);
//                 } else {
//                     sumMap[key] = [[nums[i],nums[j],nums[k]]];
//                 }
//             }


//         }
//     }

//     let seen = {}
//     for(let h=0; h<length; h++){
//         let val = nums[h]
//         if(val in sumMap) {
//             sumMap[val].forEach(function(triple) {
//                 let quad = triple;
//                 quad.push(val)
//                 quad.sort((a,b)=> a-b);
//                 console.log('quad is: ', quad);
//                 if(!(quad in seen)) {
//                     seen[quad] = true;
//                     ans.push(quad)
//                 }
//             });
//         }
//     }

//     return ans
// };

let nums = [1, 0, -1, 0, -2, 2]
let t = 0

console.log(fourSum(nums,t));