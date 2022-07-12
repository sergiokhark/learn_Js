let div = document.querySelector('#elem')
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let cols = 4
let table = createTableByArr(convertArr(arr, cols))
div.appendChild(table)

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

function convertArr(arr, cols) {
	let result = []
	while (arr.length > 0) {
		result.push(arr.slice(0, cols))
		arr.splice(0, cols)
	}
	return result
	
}

