function generatePascalsTriangle(numRows) {
  if(numRows === 0) {
    return [];
  } else if(numRows === 1) {
    return [[1]];
  } else if(numRows === 2) {
    return [[1],[1,1]];
  }

  let ans = [[1],[1,1]];
  return (function helper(ans, numRows, row){
    if(row === numRows) {
      return ans;
    }

    ans.push([]);
    let prevRow = row-1;
    let prevRowLen = ans[prevRow].length;

    for(let i=0; i<prevRowLen+1; i++) {
      if(i === 0 || i === prevRowLen) {
        ans[row].push(1);
      } else {
        let thisVal = ans[prevRow][i] + ans[prevRow][i-1];
        ans[row].push(thisVal)
      }
    }
    
    ans = helper(ans, numRows, row+1);
    return ans;
  })(ans, numRows, 2);
}

module.exports = generatePascalsTriangle;