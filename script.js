let elem = document.querySelector('#elem')
elem.addEventListener('blur', function () {
    
    if (elem.value.length < elem.dataset.min || elem.value.length > elem.dataset.max ) {
        alert('Error')
    }
})