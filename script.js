let elems = document.querySelectorAll('#parent p')
let spans = document.querySelectorAll('#parent span')

for (let elem of elems) {
	let link = document.createElement('a')
	link.innerHTML = 'Delete'
	link.href = '#'
	elem.appendChild(link)
	link.addEventListener('click', function () {
		elem.parentElement.removeChild(elem)
	})
}

for (let span of spans) {
	span.addEventListener('click', function func() {
		let input = document.createElement('input')
		input.value = span.innerHTML
		span.innerHTML = ''
		span.appendChild(input)
		span.removeEventListener('click', func)

		input.addEventListener('blur', function () {
			span.innerHTML = input.value
			span.addEventListener('click', func)
		})
	})
}
