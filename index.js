// Quiz
//     questions
//     score
//     questionIndex

// Question
//     questionText
//     answer
//     choices

// TODO: Question functional constructor

//isEnded
// 0 1 2 3
// question.length =

function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;
}
 
Quiz.prototype.isEnded = function(){
    return this.questionIndex === this.questions.length;
}
Quiz.prototype.getQuestionByIndex = function(){
    return this.questions[this.questionIndex];
}
Quiz.prototype.checkOptionWithAnswer = function(userAnswer){
    if(this.getQuestionByIndex().isCorrectAnswer(userAnswer)){
        this.score++;
    }
    this.questionIndex++;
}

function Question(questionText,choices,answer){
    this.questionText=questionText;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.isCorrectAnswer = function(userAnswer){
    return this.answer===userAnswer;
}

function loadQuestions(){
    //if quiz is ended
    //else
    //load questions
    if(quiz.isEnded()){
        showScores();
    }else{

        let questionText = quiz.getQuestionByIndex().questionText;
        document.getElementById('question').innerHTML = questionText;

        // console.log(quiz.getQuestionByIndex().choices);
        //show question

        quiz.getQuestionByIndex().choices.forEach(function callback(choice, key) {
            let preparedId = 'choice'+key;
            document.getElementById(preparedId).innerHTML = choice;
            handleOptionButtonClick("btn"+key, choice);
        });

        //show options
            //in a for loop
            //Only update the options
            //TODO: event handles

        //show progress
        showProgress();
    }
}

function handleOptionButtonClick(btnId, choice) {
    document.getElementById(btnId).onclick = function(){
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    }
}

function showProgress(){
    document.getElementById('progress').innerHTML = "Question "+(quiz.questionIndex + 1)+" of "+quiz.questions.length;
}

function showScores(){
    let scoreHTML = '<h1>Result</h1>';
    scoreHTML += '<h2 id="score">Your scores: '+quiz.score+'</h2>';
    scoreHTML += '<h2 id="score">Your winning percentage is: '+((quiz.score * 100) / quiz.questions.length)+'%</h2>';
    document.getElementById('quiz').innerHTML = scoreHTML;
    //Scores to be shown
}

let questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

let quiz = new Quiz(questions);

loadQuestions();

//getQuestionByIndex
    // return the questionIndex question from questions array

//checkOptionWithAnswer...userAnswer as an argumen
    //something... TODO

//Question
    // isCorrectAnswer arg userAnswer
        //return answer===userAnswer
