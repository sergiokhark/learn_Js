let tds = document.querySelectorAll('td')

for (let td of tds) {
	td.addEventListener('click', function () {
		let num = this.dataset.col
		let tds1 = document.querySelectorAll('#table td[data-col="' + num + '"]')
		for (let td of tds1) {
			td.classList.add('colred')
		}
	})
}