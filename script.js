let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let link = document.querySelector('a')
let str = document.querySelector('p')

link.addEventListener('click', function (event) {
    event.preventDefault()
    str.innerHTML = str.innerHTML + (Number(elem1.value) + Number(elem2.value))
})

