/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbeababacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/


var findAnagrams = function(s, p) {
    let anagramInd = [];
    let back = 0, front = 0;
    let anagramChars = {};
    let charCount = 0;
    let wordLen = p.length;

    for(let char of p) {
      anagramChars[char] = anagramChars[char] === undefined ? 1 : anagramChars[char] + 1, charCount++;
    }

    // Move Front pointer forward
    while(front < s.length) {
      let fChar = s[front];

      if(fChar in anagramChars) {
        if(anagramChars[fChar] > 0 ) {
          charCount--;
        }
        anagramChars[fChar] -= 1;
      }
      front++;

      // Once anagram found then move back pointer forward
      while(charCount === 0) {
        let bChar = s[back];

        if(front - back  === wordLen) {
          anagramInd.push(back);
        }

        if(bChar in anagramChars) {
          anagramChars[bChar] += 1

          if(anagramChars[bChar] > 0) {
            charCount++;
          }
        }
        back++;
      }
    }
    return anagramInd;
};

let s = "cbaebabacb" 
let p = "abcb"
console.log(findAnagrams(s,p));