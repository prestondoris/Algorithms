var sortArray = function(nums) {
  if(nums.length <= 1) {
      return nums
  }
  
  //Divide the problem into subproblems
  let mid = Math.floor(nums.length/2);
  let leftSide = nums.slice(0,mid);
  let rightSide = nums.slice(mid);

  //Conquer Part of D&V
  // We conquer in this case by reducing to a single element which is sorted by definition
  sortArray(leftSide);
  sortArray(rightSide);
  
  //This is the combine step where we combine the smaller subproblems
  //In this case we are merge progressively larger sorted arrays together
  return (function merge(arr1, arr2){
      let ans = []
      let p1 = 0 //arr1 pointer
      let p2 = 0 //arr2 pointer
      
      while(p1 < arr1.length && p2 < arr2.length) {
          if(arr1[p1] < arr2[p2]) {
              ans.push(arr1[p1])
              p1++;
          } else {
              ans.push(arr2[p2]);
              p2++;
          }
      }
      
      ans = ans.concat(arr1.slice(p1))
      ans = ans.concat(arr2.slice(p2))
      return ans;
  })(leftSide, rightSide)
};