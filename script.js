let trs = document.querySelectorAll('#table tr')

for (let i = 0; i < trs.length; i++) {
	let tds = trs[i].querySelectorAll('td')
	
	for (let j = 0; j < tds.length; j++) {
		tds[j].dataset.row = i + 1
		tds[j].dataset.col = j + 1
		
	}
}
