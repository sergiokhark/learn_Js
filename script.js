let elem = document.querySelector('#elem')

elem.addEventListener('click', function () {
	let input = document.createElement('input')
	input.value = elem.innerHTML
	elem.parentElement.appendChild(input)

	input.addEventListener('blur', function () {
		elem.innerHTML = input.value
		elem.parentElement.removeChild(input)
	})



})

