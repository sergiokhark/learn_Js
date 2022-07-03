let elem = document.getElementById('elem')
elem.addEventListener('click', function () {
    
    let result = elem.dataset.productPrice * elem.dataset.productAmount
    elem.innerHTML += result

    })