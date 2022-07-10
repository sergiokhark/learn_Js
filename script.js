let trs = document.querySelectorAll('tr')

for (let tr of trs) {
	let td = document.createElement('td')
	let link = document.createElement('a')
	link.innerHTML = 'Color'
	link.href = '#'
	td.appendChild(link)
	tr.appendChild(td)
	link.addEventListener('click', function () {
		tr.classList.add('colgreen')
	})
}