let tds = document.querySelectorAll('td')
let color = 'color1'

for (let td of tds) {
	
	td.addEventListener('click', function () {
		if (color === 'color1') {
			color = 'color2'
		} else {
			color = 'color1'
		}
		td.classList.add(color)
	})
}