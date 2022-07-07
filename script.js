let table = document.querySelector('#table')
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	let tr = document.createElement('tr')
	let td = document.createElement('td')

	tr.appendChild(td)
	table.appendChild(tr)

})

