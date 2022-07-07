let table = document.querySelector('#table')
let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let button = document.querySelector('#button')



button.addEventListener('click', function () {
	let lines = Number(elem1.value)
	let columns = Number(elem2.value)
	
	for (let i = 0; i < lines; i++) {
	let tr = document.createElement('tr')
	
	for (let j = 0; j < columns; j++) {
		let td = document.createElement('td')
		td.innerHTML = 'x'
		tr.appendChild(td)
	}

	table.appendChild(tr)
}


})
	




