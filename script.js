let elem = document.querySelector('#elem')
let res = document.querySelector('.new')

elem.addEventListener('keydown', function () {
    if (event.code == 'Enter') {
        res.innerHTML = res.innerHTML + elem.value + ', '
        elem.value = ''
    }
           
})