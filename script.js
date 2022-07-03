let elem = document.querySelector('#elem')

elem.addEventListener('blur', func)

function func() {
    let arr = elem.value.split(',')
    let sum = 0
    for (let elem of arr) {
        sum += Number(elem)
    }
    let res = sum / arr.length
    
    console.log('Среднее арифм =', res)
}