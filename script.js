let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')

elem1.addEventListener('input', function () {
    if (elem1.value.length == 2) {
        elem2.focus()
    }   
})

elem2.addEventListener('input', function () {
    if (elem2.value.length == 2) {
        elem2.blur()
    }
})

