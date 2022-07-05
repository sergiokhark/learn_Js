let select = document.querySelector('#select')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
    alert(select[select.selectedIndex].text)
})