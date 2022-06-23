function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
let arr = [];
for (let i = 0; i < 10; i++) {
	arr.push(getRandomInt(1, 100));
}
console.log(arr);