let tds = document.querySelectorAll('td')

for (let td of tds) {
	td.addEventListener('click', function () {
		let prev = td.previousElementSibling
		let next = td.nextElementSibling
		if (prev === null && !next.classList.contains('active')) {
			td.classList.add('active')
		}
		if (next === null && !prev.classList.contains('active')) {
			td.classList.add('active')
		}
		if (next !== null && prev !== null && !next.classList.contains('active') && !prev.classList.contains('active')) {
			td.classList.add('active')
		}
	})		
}	
