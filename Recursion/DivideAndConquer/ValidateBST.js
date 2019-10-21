var isValidBST = function(root) {
  return (function helper(node, lowLim, upLim){
      if(node === null) {
          return true;
      }
      
      let val = node.val;
      
      if(val <= lowLim || val >= upLim) {
          return false;
      }

      if(!helper(node.right, val, upLim)){
          return false;
      }
      if(!helper(node.left, lowLim, val)) {
          return false;
      }
      return true;
  })(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

/*
[2,1,4,null,null,3,6]
      2

  1				4

        3		6


Node Step where Val = 2
The lower limit is = -9007199254740991
The upper limit is = 9007199254740991
Passing these values into right subtree
lower limit is 2
upper limit is 9007199254740991

Node Step where Val = 4
The lower limit is = 2
The upper limit is = 9007199254740991
Passing these values into right subtree
lower limit is 4
upper limit is 9007199254740991

Node Step where Val = 6
The lower limit is = 4
The upper limit is = 9007199254740991
Passing these values into right subtree
lower limit is 6
upper limit is 9007199254740991
Node is null
Passing these values into left subtree
Node Step where cur Val = 6 and passing node.left
lower limit is 4
upper limit is 6
Node is null
Passing these values into left subtree
Node Step where cur Val = 4 and passing node.left
lower limit is 2
upper limit is 4

Node Step where Val = 3
The lower limit is = 2
The upper limit is = 4
Passing these values into right subtree
lower limit is 3
upper limit is 4
Node is null
Passing these values into left subtree
Node Step where cur Val = 3 and passing node.left
lower limit is 2
upper limit is 3
Node is null
Passing these values into left subtree
Node Step where cur Val = 2 and passing node.left
lower limit is -9007199254740991
upper limit is 2

Node Step where Val = 1
The lower limit is = -9007199254740991
The upper limit is = 2
Passing these values into right subtree
lower limit is 1
upper limit is 2
Node is null
Passing these values into left subtree
Node Step where cur Val = 1 and passing node.left
lower limit is -9007199254740991
upper limit is 1
Node is null
*/