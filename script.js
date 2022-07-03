let elem = document.querySelector('#elem')
elem.addEventListener('blur', function () {
    
    if (elem.value.length != elem.dataset.length) {
        alert('Error')
    }
})