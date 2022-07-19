let app = new Vue({
	el: '#app',
	data: {
		num: null,
	},
	computed: {
		localeNum: function () {
			return Number(this.num).toLocaleString()
		}
	}
	
})

