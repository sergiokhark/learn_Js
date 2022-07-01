let picture = document.querySelector('#picture');
let button1 = document.querySelector('#button1');
let button2 = document.querySelector('#button2');

button1.addEventListener('click', function () {
    picture.src = 'img/pic1.jpg';
});
button2.addEventListener('click', function () {
    picture.src = 'img/pic2.jpg';
});

