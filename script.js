let trs = document.querySelectorAll('#table tr')

for (let i = 0; i < trs.length; i++) {
	let tr = trs[i]
	let tds = tr.querySelectorAll('td')

	for (let j = 0; j < tds.length; j++) {
		tds[j].innerHTML = j + 1
	}
}