let app = new Vue({
	el: '#app',
	data: {
		str: 'год-месяц-день'
	},
	filters: {
		formatDate: function (value) {
			return value.split('-').reverse().join('.')
		}
	}
})

