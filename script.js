let trs = document.querySelectorAll('#table tr')

for (let tr of trs) {
	let tds = tr.querySelectorAll('td')
	for (let i = 0; i < tds.length; i++) {
		tds[i].dataset.col = i + 1
	}
}
