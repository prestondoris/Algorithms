function getFibBotUpRecurse(n) {
  return (function helper(n, prev, prevPrev, count){
    if(count === n) {
      return (prev + prevPrev);
    }
    let next = prev + prevPrev;
    return helper(n, next, prev, count+1);
  })(n,1,0,2);
}

function getFibBotUp(n) {
  let prevPrev = 0;
  let prev = 1;
  let count = 1;
  
  while(count < n) {
    let next = prev + prevPrev;
    prevPrev = prev;
    prev = next;
    count++;
  }
  return prev;
}

function getFibTopDownRecurse(n) {
  let cache = {};
  return (function helper(num){
    if(num <= 1) {
       return num;
    } else if(num === 2) {
      return 1;
    }

    if(num in cache) {
      return cache[num];
    } else {
      cache[n] = helper(num-1) + helper(num-2);
      return cache[n]
    }
  })(n);
}

console.time('Bottom Up Recurse');
console.log(getFibBotUpRecurse(30));
console.timeEnd('Bottom Up Recurse');

console.time('Bottom Up');
console.log(getFibBotUp(30));
console.timeEnd('Bottom Up');

console.time('Top Down Recurse');
console.log(getFibTopDownRecurse(30));
console.timeEnd('Top Down Recurse');