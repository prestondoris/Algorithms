class Stack {
  constructor(value = null) {
    this.data = []
    if(value) {
      this.data.push(value);
    }
  }
  peek() {
    return this.data[this.data.length-1];
  }
  pop() {
    return this.data.pop();
  }
  push(value) {
    this.data.push(value);
    return this.data;
  }
}

module.exports = Stack;