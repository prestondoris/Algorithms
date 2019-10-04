/*Reverse String

Write a function that reverses a string. The input string is given as an array of characters char[].

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

You may assume all the characters consist of printable ascii characters.
Input is array of characters
Output is null - reverse in place by modifying the str

[h, e, l, l, o, , w, o, r, l, d]

[w,o,r,t,l,d]
[d,o,r,t,l,w]
[d,l,r,t,o,w]
[d,l,t,r,o,w]

[w,o,r,l,d]
[d,o,r,l,w]
[d,l,r,o,w]

1st
  lastChar = 0
  arr = [o,h,e,l,l]
*/

function reverseString(arrStrs) {
  return (function helper(arr, ind){
    if(ind >= arr.length) {
      return;
    }
    let lastChar = arr.pop();
    arr.splice(ind,0,lastChar);
    helper(arr,ind+1);
  })(arrStrs, 0)
}

let arr = ['h', 'e', 'l', 'l','o']
reverseString(arr);
console.log(arr);

function reverseString2(arrStrs) {
  let start = 0
  let end = arrStrs.length-1;
  return (function helper(arr){
    if(start === end || start > end) {
      return;
    }
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp;
    start++;
    end--;
    helper(arr)
  })(arrStrs);
}

let arr2 = ['w', 'o', 'r', 'l','d']
let arr3 = ['w', 'o', 'r', 't', 'l','d']
reverseString2(arr2);
console.log(arr2);
reverseString2(arr3);
console.log(arr3);