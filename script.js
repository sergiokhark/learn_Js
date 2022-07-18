let app = new Vue({
	el: '#app',
	data: {
		str: 'london is the capital of'
	},
	filters: {
		capitalizeWords: function (str) {
			let result = []
			let arr = str.split(' ')
			for (let elem of arr) {
				result.push(elem[0].toUpperCase() + elem.slice(1))
			}
			return result.join(' ')
		
		}
	}
})

