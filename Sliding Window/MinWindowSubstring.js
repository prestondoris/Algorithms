/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

Note:

    If there is no such window in S that covers all characters in T, return the empty string "".
    If there is such window, you are guaranteed that there will always be only one unique minimum window in S.


*/

var minWindow = function (s, t) {
  let charsToFind = {};
  let foundChars = 0;
  let back = 0
  let ans = [0, Infinity];

  for (let char of t) {
    charsToFind[char] = charsToFind[char] === undefined ? 1 : charsToFind[char] += 1, foundChars++;
  }

  for(let front=0; front < s.length; front++ ) {
    let frontChar = s[front];

    if(frontChar in charsToFind) {
      if(charsToFind[frontChar] > 0) {
        foundChars--;
      } 
      charsToFind[frontChar]--;
    }
    
    while(foundChars === 0) {
      if(ans[1] - ans[0] > front - back) {
        ans[0] = back;
        ans[1] = front;
      }

      let backChar = s[back];

      if(backChar in charsToFind) {
        charsToFind[backChar] += 1;

        if(charsToFind[backChar] > 0) {
          foundChars++;
        }
      }
      back++;
    }
  }

  return ans[1] === Infinity ? '' : s.slice(ans[0], ans[1]+1);
}

let s= "ADOBECODEBANC"
let t = "ABCB";
console.log(minWindow(s,t))