let row = 2   //строка
let col = 3   //столбец
let button = document.querySelector('#button')

button.addEventListener('click', function () {
	let rows = document.querySelectorAll('#table td[data-row="' + row + '"]')
	for (let elem of rows) {
		if (elem.dataset.col == col) {
			elem.classList.add('colred')
		}
	}
})
