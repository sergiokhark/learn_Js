let app = new Vue({
	el: '#app',
	data: {
		str: '',
		arr: [],
		
		
	},
	methods: {
		getWords: function () {
			this.arr = this.str.split(' ')
		
		}
		
		
	}
});

