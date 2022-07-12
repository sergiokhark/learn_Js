let trs = document.querySelectorAll('tr')

for (let i = 0; i < trs.length; i++) {
	let tds = trs[i].querySelectorAll('td')
	for (let j = 0; j < tds.length; j++) {
		tds[j].dataset.row = i + 1
		tds[j].dataset.col = j + 1
	}
}

let tds = document.querySelectorAll('td')

for (let td of tds) {
	td.addEventListener('click', function () {
		let upRowIndex = +td.dataset.row - 1
		let upColIndex = td.dataset.col
		let downRowIndex = +td.dataset.row + 1
		let downColIndex = td.dataset.col
		let upChild = document.querySelector('#table tr:nth-child(' + upRowIndex + ') td:nth-child(' + upColIndex + ')')
		let downChild = document.querySelector('#table tr:nth-child(' + downRowIndex + ') td:nth-child(' + downColIndex + ')')
	
		if (upChild === null && !downChild.classList.contains('active')) {
			td.classList.add('active')
		}

		if (downChild === null && !upChild.classList.contains('active')) {
			td.classList.add('active')
		}

		if (downChild !== null && upChild !== null && !downChild.classList.contains('active') && !upChild.classList.contains('active')) {
			td.classList.add('active')
		}
	})
}
