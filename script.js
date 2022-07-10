let tds = document.querySelectorAll('#table td')

for (let td of tds) {
	td.addEventListener('click', function func() {
		let input = document.createElement('input')
		input.value = td.innerHTML
		td.innerHTML = ''
		td.appendChild(input)
		td.removeEventListener('click', func)

		input.addEventListener('blur', function () {
			td.innerHTML = input.value
			td.addEventListener('click', func)
		})
	})
	
}