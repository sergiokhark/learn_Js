let select = document.querySelector('#select')
    
select.addEventListener('change', function () {
    if (select.value == 6 || select.value == 7) {
        alert('Выбран выходной день')
    } else {
        alert('Выбран рабочий день')
    }
})