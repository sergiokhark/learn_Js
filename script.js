let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('.new')

elem1.addEventListener('blur', function () {
    elem2.innerHTML += elem1.value
})