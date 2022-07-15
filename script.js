let app = new Vue({
	el: '#app',
	data: {
		arr: [4, 8, 12, 15, 18, 22],
		inputValue: '',
		
	},
	methods: {
		addItem: function () {
			this.arr.push(this.inputValue)
			
		}
	}
});

