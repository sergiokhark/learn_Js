let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let timeId

start.addEventListener('click', func)

function func() {
	let i = 100
	timeId = setInterval(function () {
		console.log(--i)
		if (i <= 0) {
			clearInterval(timeId)
	}
	}, 500)
	this.removeEventListener('click', func)	
}

stop.addEventListener('click', function () {
	clearInterval(timeId)
})