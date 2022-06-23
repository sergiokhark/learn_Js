let str = 'var_test_text_tt';
let arr = str.split('_');
for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
}
let res = arr.join('');
console.log(res);
