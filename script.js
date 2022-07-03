let elem = document.querySelector('p')
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#button3')

button1.addEventListener('click', function () {
    elem.classList.add('decorated')
})

button2.addEventListener('click', function () {
    elem.classList.add('bolded')
})

button3.addEventListener('click', function () {
    elem.classList.add('colored')
})

