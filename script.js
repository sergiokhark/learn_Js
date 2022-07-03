let elem = document.querySelector('#elem')

elem.addEventListener('blur', func)

function func() {
    let fio = elem.value.split(' ')
    let arr = []
    for (let i = 0; i < fio.length; i++) {
        arr.push(fio[i][0].toUpperCase() + fio[i].slice(1))
    }
    elem.value = arr.join(' ')

}
    
