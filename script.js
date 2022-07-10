let elems = document.querySelectorAll('#elem li')

for (let elem of elems) {
	elem.addEventListener('click', function func() {
		let input = document.createElement('input')
		input.value = elem.innerHTML
		elem.innerHTML = ''

		elem.appendChild(input)
		elem.removeEventListener('click', func)

		input.addEventListener('blur', function () {
			elem.innerHTML = input.value
			elem.addEventListener('click', func)
		})

	})
}