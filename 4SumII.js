/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 * 
 * a + b + c + d = 0
 * 
 * a+b = -c - d
 * 
 * 
Input:
A = [ 1, 2]
B = [-2,-1]
C = [-1, 2]
D = [ 0, 2]

Output:
2

Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0
 * 
 */
var fourSumCount = function(A, B, C, D) {
    let sumMap = {}
    let ans = 0

    A.forEach(function(b, i) {
        B.forEach(function(a, j){
            let sum = a+b;
            if(sum in sumMap) {
                sumMap[sum] += 1
            } else {
                sumMap[sum] = 1
            }
        });
    });

    C.forEach(function(c,i) {
        D.forEach(function(d,j){
            let thisSum = -c-d;
            if(thisSum in sumMap) {
                ans += sumMap[thisSum]
            }
        });
    });

    return ans;
};
let A = [ 1, 2, 10, -7]
let B = [-2,-1, -4, 9]
let C = [-1, 2, 13, 6]
let D = [ 0, 2, 1, 5]

console.log(fourSumCount(A,B,C,D))