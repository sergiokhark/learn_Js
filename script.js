let tds = document.querySelectorAll('#table tr:nth-child(even) td:nth-child(odd)')

for (let td of tds) {
	td.classList.add('colred')
}