function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
    let result = [];
    while (arr.length > 0) {
        let cutElem = arr.splice(getRandomInt(0, arr.length - 1), 1);
        result.push(cutElem[0]);
    }  
    return result;
}

function randoms(arr, length) {
    let shuffArr = shuffle(arr);
    return shuffArr.slice(0, length);
}
console.log(randoms([1, 2, 3, 4, 5], 3));