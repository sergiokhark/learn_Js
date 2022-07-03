let elem = document.querySelector('#elem')

elem.addEventListener('blur', func)

function func() {
    let arr = elem.value.split('.')
    elem.value = arr.reverse().join('-')
}
    
