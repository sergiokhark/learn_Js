let elem = document.querySelector('#elem')
let str = document.querySelector('p')

elem.addEventListener('blur', function () {
    str.innerHTML = elem.value

})


