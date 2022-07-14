let app = new Vue({
	el: '#app',
	data: {
		text: 'hello'
	},
	methods: {
		show: function () {
			alert(this.text)
		}
	}
})

