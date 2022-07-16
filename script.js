let app = new Vue({
	el: '#app',
	data: {
		isValid: true,
		isDone: false,
	},
	methods: {
		changeCSS: function () {
			this.isDone = !this.isDone
		}
	}
	
});

