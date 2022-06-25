function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(random(arr) + random(arr) + random(arr));