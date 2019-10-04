var swapPairs = function(head) {
  return (function helper(node){
      if(node === null || node.next === null) {
          return node;
      }
      
      let nextNodeToCheck = node.next.next;
      let temp = node;
      node = node.next;
      node.next = temp;
      node.next.next = helper(nextNodeToCheck);
      return node;
  })(head);
};