let app = new Vue({
	el: '#app',
	data: {
		name: 'Ivan',
		surname: 'Ivanov',
	},
	computed: {
		fullName: function () {
			return this.name + ' '+ this.surname
		}
	}
	
})

