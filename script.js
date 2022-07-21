let app = new Vue({
	el: '#app',
	data: {
		timeCreate: '',
		notes: [],
		note: '',
	},
	methods: {
		addNote: function () {
			let now = new Date()
			let date = this.normalizeDate(now.getDate()) + '.' + this.normalizeDate((now.getMonth() + 1)) + '.' + now.getFullYear() + '-' + this.normalizeDate(now.getHours()) + ':' + this.normalizeDate(now.getMinutes())
			this.notes.push({date: date, note: this.note})
			this.note = ''
		},
		showNote: function (index) {
			this.note = this.notes[index].note
		},
		normalizeDate: function (num) {
			if (num < 10) {
				num = '0' + num
			}
			return num
		}
	}
		
})

