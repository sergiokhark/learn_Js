let trs = document.querySelectorAll('tr')

for (let tr of trs) {
	let tds = tr.querySelectorAll('td')
	for (let td of tds) {
		td.addEventListener('click', function () {
			let tdsActive = tr.querySelectorAll('td.active')
			if (tdsActive.length < 5) {
				td.classList.add('active')
			}
		})
	}
}

