function createTable(rows, cols, parent) {
	let table = document.createElement('table');
	
	
	for (let i = 0; i < rows; i++) {
		let tr = document.createElement('tr')
		for (let j = 0; j < cols; j++) {
			let td = document.createElement('td')
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
	
	parent.appendChild(table)
}

let parent = document.querySelector('#parent')

createTable(8, 10, parent)