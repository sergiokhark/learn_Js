let app = new Vue({
	el: '#app',
	data: {
		inputValue: '',
		p1: '',
		p2: '',
		p3: '',
		
	},
	methods: {
		calc: function () {
			let arr = this.inputValue.split(' ')
			this.p1 = arr[0]
			this.p2 = arr[1]
			this.p3 = arr[2]
			
		}
	}
});

