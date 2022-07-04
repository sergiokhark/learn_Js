let elem = document.querySelector('#elem')
let str = document.querySelector('p')

elem.addEventListener('change', function () {
    str.innerHTML = this.value
})