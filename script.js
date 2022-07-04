let select = document.querySelector('#select')

select.addEventListener('change', func)

function func() {
    let year = select.value
    let date = new Date(year, 2, 0)
    if (date.getDate() == 29) {
        alert('Год високосный')
    } else {
        alert('Год не високосный')
    }
}