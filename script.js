let parent = document.querySelector('#parent')
let lis = parent.querySelectorAll('li')

for (let li of lis) {
	li.addEventListener('click', function () {
		parent.removeChild(this)
	})
}