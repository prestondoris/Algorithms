const Queue = require('./Queue');
const Stack = require('./Stack');

let myQueue = new Queue(4);
console.log(myQueue.peek());
console.log(myQueue.enqueue(5));
console.log(myQueue.enqueue(6));
console.log(myQueue.enqueue(8));
console.log('has 4?',myQueue.has(4));
console.log('has 6?',myQueue.has(6));
console.log('has 8?',myQueue.has(8));
console.log(myQueue.dequeue());
console.log('has 4?',myQueue.has(4));

let stack = new Stack();
console.log(stack.push(4))
console.log(stack.push(5))
console.log(stack.push(6))
console.log(stack.push(7))
console.log(stack.pop());
console.log(stack.peek());