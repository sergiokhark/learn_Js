let elem = document.querySelector('#elem')

elem.addEventListener('blur', func)

function func() {
    let arr = elem.value.split(' ')
    console.log('Количество введенных слов: ', arr.length)

}
    
