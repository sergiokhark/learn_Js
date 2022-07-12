let div = document.querySelector('#elem')
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let cols = 5
let twoDimArr = convertArr(arr, cols)
let normalTwoDimArr = normalizeArr(twoDimArr, cols, '')
let table = createTableByArr(normalTwoDimArr)
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

function normalizeArr(arr, cols, fill) {
	let result = []
	for (let subArr of arr) {
		while (subArr.length < cols) {
			subArr.push(fill)
		}
		result.push(subArr)
	}
	return result
}
