let div = document.querySelector('#elem')
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function createTableByArr(arr) {
	let table = document.createElement('table')
	for (let subArr of arr) {
		let tr = document.createElement('tr')
		for (let elem of subArr) {
			let td = document.createElement('td')
			td.innerHTML = elem
			tr.appendChild(td)
		}
		table.appendChild(tr)
	}
	return table
}

div.appendChild(createTableByArr(arr))