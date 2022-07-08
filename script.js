let table = document.querySelector('#table')
let trs = document.querySelectorAll('#table tr')

for (let tr of trs) {
	let td = document.createElement('td')
	
	let link = document.createElement('a')
	link.href = '#'
	link.innerHTML = 'Del'
	
	td.appendChild(link)
	tr.appendChild(td)

	link.addEventListener('click', function () {
		tr.remove()
	})


}

