let arr = [];
function func(prevPrevNum, prevNum) {
	let num = prevPrevNum + prevNum;
	arr.push(prevPrevNum);
	prevPrevNum = prevNum;
	prevNum = num;
	if (arr.length < 10) {
		func(prevPrevNum, prevNum);	
	}
	return arr;
}

console.log(func(1, 2));