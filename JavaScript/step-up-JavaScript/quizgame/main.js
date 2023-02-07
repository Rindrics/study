class WordQuiz {
    constructor(rootElm) {
        this.rootElm = rootElm;
    }

    async init() {
        const response = await fetch('quiz.json');
        this.quizData = await response.json();
        console.log(this.quizData);
    }
}
new WordQuiz(document.getElementById('app')).init();
