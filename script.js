let str = document.querySelector('#str')

setInterval(function () {
	let now = new Date
	str.innerHTML = getZero(now.getHours()) + ':' + getZero(now.getMinutes()) + ':' + getZero(now.getSeconds())

}, 1000)

function getZero(num) {
	if (num <= 9) {
		return '0' + num
	}
	else {
		return num
	}
}