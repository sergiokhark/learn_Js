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

function range(start, stop) {
    let result = [];
    for (let i = start; i <= stop; i++) {
        result.push(i);
    }
    return result;
}

function rangeRand(start, stop) {
    
    return shuffle(range(start, stop));
}

console.log(rangeRand(1, 15));
