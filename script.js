let elem = document.querySelector('#elem')

elem.addEventListener('blur', func)

function func() {
    let arr = elem.value.split('.')
    let [day, month, year] = arr
    let date = new Date(year, month - 1, day)
    let dayName = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    alert(dayName[date.getDay()])
}
