let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let total = arr[0][0][0] + arr[0][0][1] + arr[0][1][0] + arr[0][1][1] +
            arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1];
console.log(total);