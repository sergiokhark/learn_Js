let app = new Vue({
	el: '#app',
	data: {
		color: 'yellow',
		
	},
	methods: {
		changeCSS: function () {
			this.color = 'red'
		}
	}
	

});

