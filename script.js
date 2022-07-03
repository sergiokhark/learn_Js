let elem = document.querySelector('#elem')

elem.addEventListener('blur', func)

function func() {
    let num = String(elem.value)
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i])
    }
    alert(sum)
}