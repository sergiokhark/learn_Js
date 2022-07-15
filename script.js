let app = new Vue({
	el: '#app',
	data: {
		str1: '',
		str1: '',
		
	},
	methods: {
		calc: function () {
			let box = this.str1
			this.str1 = this.str2
			this.str2 = box
			
		}
	}
});

