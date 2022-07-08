let lis = document.querySelectorAll('#parent li')

for (let li of lis) {
	let link = document.createElement('a')
	link.href = '#'
	link.innerHTML = 'Remove'
	link.addEventListener('click', function () {
		li.parentElement.removeChild(li)
		//li.remove()
	})
	
	li.appendChild(link)
	


}