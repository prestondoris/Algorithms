class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value = null) {
    this.firstEl = null;
    this.lastEl = null;
    this.length = 0;
    if(value) {
      this.enqueue(value)
    }
  }
  enqueue(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.firstEl = newNode;
      this.lastEl = newNode;

    } else {
      this.lastEl.next = newNode;
      this.lastEl = newNode;
    }
    this.length++;
    return this.lastEl.value;
  }
  dequeue() {
    if(this.length === 0) {
      return null;
    }
    let returnVal = this.firstEl;
    this.firstEl = this.firstEl.next;
    this.length--;
    return returnVal.value;
  }
  peek() {
    if(this.length === 0) {
      return null;
    }
    return this.firstEl.value;
  }
  has(value) {
    if(this.length === 0) {
      return false;
    }

    let curNode = this.firstEl;
    while(curNode){
      if(curNode.value === value) {
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  }
}

module.exports = Queue;