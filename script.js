let tds = document.querySelectorAll('#table td')

for (let i = 0; i < tds.length; i++) {
	tds[i].addEventListener('click', function () {
		tds[i].innerHTML = tds.length - i
	})
}

