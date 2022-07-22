let app = new Vue({
	el: '#app',
	data: {
		questions: [
			{
				question: 'Вопрос 1',
				answers: [
					'Ответ 1',
					'Ответ 2',
					'Ответ 3',
					'Ответ 4',
					'Ответ 5',
				],
				right: 3, 
				userAnswer: '',
				radioValue: '',
			},
			{
				question: 'Вопрос 2',
				answers: [
					'Ответ 1',
					'Ответ 2',
					'Ответ 3',
					'Ответ 4',
					'Ответ 5',
				],
				right: 1, 
				userAnswer: '',
				radioValue: '',
			},
			{
				question: 'Вопрос 3',
				answers: [
					'Ответ 1',
					'Ответ 2',
					'Ответ 3',
					'Ответ 4',
					'Ответ 5',
				],
				right: 5,
				userAnswer: '',
				radioValue: '',
			},
		],
	},
	methods: {
		checkAnswer (index) {
			
			if (this.questions[index].radioValue == this.questions[index].right) {
				this.questions[index].userAnswer = true
			} else {
				this.questions[index].userAnswer = false
			}
			console.log(this.questions[index].userAnswer)
		}
	}	
})

