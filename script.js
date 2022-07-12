function createTable(rows, cols) {
	let table = document.createElement('table');
	for (let i = 0; i < rows; i++) {
		let tr = document.createElement('tr')
		for (let j = 0; j < cols; j++) {
			let td = document.createElement('td')
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
	return table
}

let div = document.querySelector('#elem')
div.appendChild(createTable(5, 5))
