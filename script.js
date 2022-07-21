let app = new Vue({
	el: '#app',
	data: {
		task: '',
		shedule: [],
		show: false,
	},
	computed: {
		countDaysInMonths() {
			return new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()
		},
	},
	created() {
		for (let i = 1; i <= this.countDaysInMonths; i++) {
			this.shedule.push({tasks: [], show: false})
		}
	},
	methods: {
		showTasks: function (index) {
			this.shedule[index].show = !this.shedule[index].show
		},
		addTask: function (index) {
			this.shedule[index].tasks.push({task: this.task, show: false, showEdit: false})
			this.task = ''
		},
		completeTask: function (index, taskIndex) {
			this.shedule[index].tasks[taskIndex].show = !this.shedule[index].tasks[taskIndex].show
		},
		delTask: function (index, taskIndex) {
			this.shedule[index].tasks.splice(taskIndex, 1)
		},
		editTask: function (index, taskIndex) {
			this.shedule[index].tasks[taskIndex].showEdit = true
		},
		completeEdit: function (index, taskIndex) {
			this.shedule[index].tasks[taskIndex].showEdit = false
		}

	}
	
})

