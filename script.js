let tds = document.querySelectorAll('td')

for (let td of tds) {
	td.addEventListener('click', function () {
		
		if ((!td.previousElementSibling.classList.contains('active') &&
			!td.nextElementSibling.classList.contains('active')) ||
			td.previousElementSibling === null || td.nextElementSibling === null) {
			
			td.classList.add('active')
		}
	})
}
