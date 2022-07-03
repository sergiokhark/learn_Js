let elem = document.querySelector('#elem')

elem.addEventListener('blur', func)

function func() {
    let digits = elem.value.split('')
    for (let elem of digits) {
        if (elem == '3') {
            alert('Число содержит 3')
            break
        } 
    }
}
    