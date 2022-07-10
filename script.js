let tds = document.querySelectorAll('td')

for (let td of tds) {
	
	td.addEventListener('click', function () {
		activeTds = document.querySelectorAll('td.active')
		if (activeTds.length < 3) {
			td.classList.add('active')
		}
	})
}