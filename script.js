let elem = document.querySelector('#elem')
let str = document.querySelector('p')

elem.addEventListener('input', function () {
    if (this.value.length <= 5) {
        str.innerHTML = 'Разрешено ввести еще символов:' + (5 - this.value.length)
    } else {
        str.innerHTML = 'Ввод превышен на ' + (this.value.length - 5)
    }


})