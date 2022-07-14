let app = new Vue({
	el: '#app',
	data: {
		showName: true,
		name: 'Вася'
	},
	methods: {
		hideElem: function () {
			this.showName = false
		},
		showElem: function () {
			this.showName = true
		}
	}
	
});

