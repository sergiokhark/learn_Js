let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')

for (let i = 0; i < 5; i++) {
	let inp = document.createElement('input')
	inp.addEventListener('blur', function () {
		elem2.innerHTML = this.value
	})

	elem1.appendChild(inp)
}