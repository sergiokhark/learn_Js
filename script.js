let elem = document.querySelector('#elem');
let button = document.querySelector('#button');
button.addEventListener('click', function () {
    let arr = elem.className.split(' ');
    console.log(arr);
})