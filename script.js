let start = document.querySelector('#start')
let stop  = document.querySelector('#stop')
let timerId

start.addEventListener('click', func)
	
function func() {
	timerId = setInterval(function() {
		let date = new Date
		console.log(date.getMinutes() + ' ' + date.getSeconds())
	}, 1000)
	this.removeEventListener('click', func)
}
	
stop.addEventListener('click', function() {
	clearInterval(timerId)
	start.addEventListener('click', func)
});