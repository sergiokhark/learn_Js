let app = new Vue({
	el: '#app',
	data: {
		text: '12345',
	},
	methods: {
		changeMessage: function() {
			this.text = 'abcde';
		}
	}
});

