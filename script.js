let str = 'word1 word2 word3';
let arr = str.split(' ');
for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
let res = arr.join(' ');
console.log(res);

