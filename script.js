let elem = document.querySelector('#elem')

elem.addEventListener('click', function () {
	elem.parentElement.removeChild(elem)

})

