/**
 * @param {string} s
 * @return {number}
 
 Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "bactghaxzyb"
          ^    ^       
Output: 

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

var lengthOfLongestSubstring = function (s) {
  let map = {}
  let back = 0, front = 0, ans = 0;
  let countMultiples = 0;

  while(front < s.length) {
    let fChar = s[front];

    if(fChar in map) {
      map[fChar] += 1;
      countMultiples++;
    } else {
      map[fChar] = 1;
    }
    front++;

    //Move Back Pointer Forward
    while (countMultiples > 0 && back < front) {
      ans = Math.max(ans, front - back);
      let bChar = s[back];

      if(map[bChar] > 1) {
        countMultiples--;
      }
      map[bChar] -= 1;
      back++;
    }
    
    
  }
  return ans;
};

let s = "bactghaxzyb"
let t = "bbbbb"
let m = "tmmzuxt"
console.log(lengthOfLongestSubstring(s));
console.log(lengthOfLongestSubstring(t));
console.log(lengthOfLongestSubstring(m));