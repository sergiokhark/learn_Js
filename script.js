let button = document.querySelector('#button')
let table = document.querySelector('#table')
let tds = document.querySelectorAll('#table td')


button.addEventListener('click', function () {
	for (let td of tds) {
		td.innerHTML *= 2
	}
})