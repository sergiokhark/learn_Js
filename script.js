let app = new Vue({
	el: '#app',
	data: {
		str: 'год-месяц-день'
	},
	filters: {
		formatDate: function (str) {
			return str.split('-').reverse().join('.')
		}
	}
})

