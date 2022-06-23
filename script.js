//[1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(-1, 0, 'c')
arr.push('e');
console.log(arr);
