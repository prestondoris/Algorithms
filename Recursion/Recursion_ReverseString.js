/*
  recurse to end of string, then add character to string.
  'hello'
  h(5) - return
  h(4) - ans = str[4] = 0
*/

function reverseString(str) {
  return helper(str, 0, '');
}

function helper(str, ind, ans) {
  if(ind >= str.length) {
    return '';
  }

  ans += helper(str, ind+1, ans) + str[ind];
  return ans
}


function reverseString1(str) {
  let ans = '';
  return (function helper(str, ind){
    if(ind >= str.length) {
      return '';
    }
  
    ans += helper(str, ind+1, ans) + str[ind];
    return ans
  })(str,0)
}

console.log(reverseString('hello'));
console.log(reverseString1('hello'));