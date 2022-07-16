let app = new Vue({
	el: '#app',
	data: {
		temp: null,
	},
	methods: {
		calc: function (temp) {
			return (temp - 32) * 5/9
		}
	}
	
	

});

