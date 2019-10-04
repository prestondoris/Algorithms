/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0

Input: 3
Output: [1,3,3,1]


We only need to know the previous row. Recursively go through and pass the previous row not the whole triangle.
at each recursion we need
  prevrow as array,
  index we are looking for
  the cur row we are on
*/
const pascalTriangle = require('./Recursion_generatePascalsTriangle');

function getPascalRow(index) {
  let triangle = pascalTriangle(index+1);
  return triangle[index];
}

console.log(getPascalRow(4))


function getPascalRow2(index) {
  if(index === 0) {
    return [1];
  }

  let prevRow = [1,1];
  return (function helper(prevRow, rowIndex, curRow){
    if(curRow === rowIndex) {
      return prevRow;
    }

    let nextRow = []
    let length = prevRow.length;

    for(let i=0; i<=length; i++) {
      if(i === 0 || i === length) {
        nextRow.push(1);
      } else {
        let thisVal = prevRow[i] + prevRow[i-1];
        nextRow.push(thisVal);
      }
    }
    return helper(nextRow, rowIndex, curRow+1);
  })(prevRow, index, 1)
}

console.log(getPascalRow2(4));