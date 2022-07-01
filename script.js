let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
button1.addEventListener('click', function () {
    alert(elem1.innerHTML);
});
button2.addEventListener('click', function () {
    alert(elem2.innerHTML);
});