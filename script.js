let app = new Vue({
	el: '#app',
	data: {
		text: '',
		show: false
	},
	methods: {
		leftClick: function () {
			this.text = 'left'
			this.show = true
		},
		middleClick: function () {
			this.text = 'middle'
			this.show = true
		},
		rightClick: function () {
			this.text = 'right'
			this.show = true
		}

	}
	
})

