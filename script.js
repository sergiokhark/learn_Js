let tds = document.querySelectorAll('td')
let colors = ['color1', 'color2', 'color3']
let i = 0

for (let td of tds) {
	td.addEventListener('click', function () {
		td.classList.add(colors[i])
		i++
		if (i == colors.length) {
			i = 0
		}
	})
}