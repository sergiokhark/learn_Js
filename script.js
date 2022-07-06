let str = document.querySelector('#str')

setInterval(function () {
	let now = new Date
	str.innerHTML = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()

}, 1000)