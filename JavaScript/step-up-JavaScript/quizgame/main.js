class WordQuiz {
    constructor() {
        console.log('instance created');
    }

    async init() {
        const response = await fetch('quiz.json');
        this.quizData = await response.json();
        console.log(this.quizData);
    }
}

new WordQuiz().init();
