let button = document.querySelector('#button')
let table = document.querySelector('#table')


button.addEventListener('click', function () {
	let tr = document.createElement('tr')
	
	for (let i = 1; i <= 2; i++) {
		let td = document.createElement('td')
		tr.appendChild(td)
		table.appendChild(tr)
	}

	let trs = document.querySelectorAll('#table tr')

	for (let tr of trs) {
		let td = document.createElement('td')
		tr.appendChild(td)
		table.appendChild(tr)
	}
	
})