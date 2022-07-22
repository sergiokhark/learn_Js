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
				right: [3], 			
				showLink: true,
				showQuestion: true,
				userAnswers: [],
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
				right: [1],
				showLink: true,
				showQuestion: false,
				userAnswers: [],
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
				right: [0, 4],
				showLink: false,
				showQuestion: false,
				userAnswers: [],
			},
		],
		total: 0,
	},
	methods: {
		toNextQuestion(index) {
			
			if (index < this.questions.length - 1) {
				this.questions[index].showQuestion = false
				this.questions[index + 1].showQuestion = true
			}
			if (this.questions[index].userAnswers.join('') == this.questions[index].right.join('')) {
				this.total += 1
			}
			console.log(this.total)	
		},
		showResult (index) {
			if (this.questions[index].userAnswers.join('') == this.questions[index].right.join('')) {
				this.total += 1
			}
			alert('Количество правильных ответов: '+ this.total)
		}	
	}
})


