let elem = document.querySelector('#elem')
let button = document.querySelector('#button')
button.addEventListener('click', function () {
    if (elem.getAttribute('value') === elem.value) {
        console.log('Пользователь не изменил данные')
    } else {
        console.log('Пользователь изменил значение')
    }
})