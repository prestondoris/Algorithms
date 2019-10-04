function replaceString(str) {
  let i = 0;
	while(i<str.length) {
		if(str[i] === ' ') {
      str = str.slice(0,i) + '%20' + str.slice(i+1);
      i += 3;
    } else {
      i++;
    }
	}
	return str;
}

function replaceSpace(str) {
	let ans = '';

	for(let i=0; i<str.length; i++) {
		if(str[i] === ' ') {
			ans += '%20';
		} else {
			ans += str[i];
    }	
	}
	return ans;
}

let newStr = replaceString('hello my name is preston');
let newStr2 = replaceSpace('hello my name is preston');
console.log(newStr);
console.log(newStr2);

function stringSplosion(str) {
	let ans = '';

	for(let i=0; i<str.length; i++) {
		ans += str.slice(0,i+1);
	}
	return ans;
}

let strSplo = stringSplosion('Code');
console.log(strSplo);


function wordCount(arrStrings) {
	let map = {};
	
	arrStrings.forEach(str => {
		if(str in map) {
			map[str] += 1
		} else {
			map[str] = 1
		}
	});
	return map;
}

console.log(wordCount(["a", "b", "a", "c", "b"]));


function wordLen(arrStrings) {
	let map = {};
	
	arrStrings.forEach(str => {
		if(!(str in map)) {
			map[str] = str.length
		}
	});
	return map;
}

console.log(wordLen(["a", "bb", "a", "bb"]))
console.log(wordLen(["this", "and", "that", "and"]))
console.log(wordLen(["code", "code", "code", "bug"])) 

function canBalance(arr) {
	let left = 1;
	let right = arr.length-2;
	let rightSum = arr[arr.length-1];
	let leftSum = arr[0];
	console.log(leftSum, rightSum);
	while(left <= right) {
    
		if(rightSum === leftSum) {
      rightSum += arr[right];
      leftSum += arr[left];
			right--
			left++
		} else if(rightSum > leftSum) {
      leftSum += arr[left];
			left++;
		} else {
      rightSum += arr[right];
			right--;
    }
    console.log(leftSum, rightSum);
	}
  
	return rightSum === leftSum;
}

console.log('arr is [3, 1, 1, 3, 1]: ',canBalance([3, 1, 1, 3, 1]));
console.log(canBalance([2, 1, 1, 2]));
console.log(canBalance([1,3,9,10,7,5,1,8,15,6,18]));