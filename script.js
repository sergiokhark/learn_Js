let select = document.querySelector('#select')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
    let option = select[select.selectedIndex]
    option.text += '!'
})