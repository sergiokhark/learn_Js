let i = 0;

function func(prevPrevNum, prevNum) {
	let num = prevPrevNum + prevNum;
	console.log(prevPrevNum);
	prevPrevNum = prevNum;
	prevNum = num;
	i++;
	if (i < 10) {
		func(prevPrevNum, prevNum);
		
	}
}

func(1, 2);