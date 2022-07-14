let app = new Vue({
	el: '#app',
	data: {
		text: 'cтрока',
	},
	methods: {
		upperCaseFirst: function () {
			this.text = this.text[0].toUpperCase() + this.text.slice(1)
		},
		upperCaseLast: function () {
			this.text = this.text.slice(0, this.text.length - 1) + this.text[this.text.length - 1].toUpperCase()
		},
		upperCase: function () {
			this.upperCaseFirst()
			this.upperCaseLast()
		}
	}
});

