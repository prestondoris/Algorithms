/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 
 * Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]

Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7


 */
var buildTree1 = function(preorder, inorder) {
  return (function helper(){
      if(preorder.length === 0 || inorder.length === 0) {
          return null;
      }
      
      let root = new TreeNode(preorder[0]);
      let mid=0;
      while(root.val !== inorder[mid]) {
          mid++;
      }
      root.left = buildTree(preorder.slice(1,mid+1), inorder.slice(0,mid));
      root.right = buildTree(preorder.slice(mid+1), inorder.slice(mid+1));
      return root;
  })(preorder, inorder)
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

/*

Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]

Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7


In order:
    Left Tree
    Root
    Right Tree

Post Order
    Left Tree
    Right Tree 
    Root
    
inorder = [4,9,6,3,15,20,7]
postorder = [4,6,9,15,7,20,3]


              3
            /    \
          9      20
        /   \   /  \
       4    6  15   7
    
    
Root = postorder.pop()
iterate through preorder until you find root val
    set midPoint value

root.left = buildtree(inorder.slice(0,mid), postorder.slice(0,mid))
root.right = buildtree(inorder.slice(mid+1), postorder.slice(mid))

*/
var buildTree = function(inorder, postorder) {
  return (function helper(inorder,postorder){
      if(inorder.length === 0 || postorder.length === 0) {
          return null;
      }

      let root = new TreeNode(postorder.pop());
      let i=0;
      while(root.val !== inorder[i]) {
          i++;
      }
      let mid = i;
      root.left = buildTree(inorder.slice(0,mid), postorder.slice(0,mid));
      root.right = buildTree(inorder.slice(mid+1), postorder.slice(mid));
      return root;
  })(inorder,postorder)

}
