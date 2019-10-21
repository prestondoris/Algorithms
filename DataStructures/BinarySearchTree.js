class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(value = null) {
    this.root = null;
    if(value) {
      this.insert(value);
    }
  }
  insert(value) {
    let curNode = this.root;
    if(curNode === null) {
      this.root = new Node(value);
      return value;
    }

    while(curNode) {
      if(value < curNode.value) {
        if(curNode.left !== null) {
          curNode = curNode.left
        } else {
          curNode.left = new Node(value);
          break;
        }
        
      } else {
        if(curNode.right !== null) {
          curNode = curNode.right
        } else {
          curNode.right = new Node(value);
          break;
        }
      }
    }
    return value;
  }
  lookup(value) {
    let curNode = this.root;
    if(curNode) {
      while(curNode) {
        if(curNode.value === value) {
          return true;
        } else if(value < curNode.value) {
          curNode = curNode.left;
        } else {
          curNode = curNode.right;
        }
      }
    }
    return false;
  }
  findLargestSmallerKey(num) { //Pramp question
    let ans = -1;
    
    return (function helper(node){
      if(node.left === null && node.right === null) {
        return ans;
      }
      
      if(node.value >= num) {
        helper(node.left);
        
      } else {
        if(node.right.value < num) {
          ans = node.right.value
        } else {
          ans = node.value
        }
        helper(node.right)
      }
      
      return ans;
    }(this.root))
  }
}



const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.findLargestSmallerKey(21))
console.log(JSON.stringify(traverse(tree.root)));

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}