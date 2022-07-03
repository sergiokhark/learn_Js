let button = document.querySelector('#elem')

button.addEventListener('click', function () {
    button.dataset.user = Number(button.dataset.user) + 1  
})

button.addEventListener('dblclick', function () {
    alert(button.dataset.user) 
})