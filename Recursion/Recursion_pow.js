/*
Implement pow(x, n), which calculates x raised to the power n (xn).
Example 1:

Input: 2.00000, 10
2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2
Output: 1024.00000

Example 2:

Input: 2.10000, 3
Output: 9.26100

Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25


*/

function pow(x,n) {
  let isPowNeg = n < 0 ? true:false;
  if(isPowNeg) {
    n = Math.abs(n);
  }

  return (function helper(total, base, pow, isPowNeg){
    if(pow === 0) {
      if(isPowNeg) {
        return 1/total;
      } else {
        return total;
      }
    }
    total *= base;
    return helper(total, base, pow-1, isPowNeg);
    
  })(1,x,n,isPowNeg);
}

function pow2(base,pow) {
  let isPowNeg = pow < 0 ? true:false;

  let total = 1;
  for(let i=0; i<Math.abs(pow); i++) {
    total *= base;
  }

  if(isPowNeg) {
    return 1/total
  } else {
    return total;
  }
}

console.log(pow(2,3));
console.log(pow2(1.000001,12345));