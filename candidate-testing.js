const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "Emily";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer "Sally Ride";
let questions =   ;
let correctAnswers =  ;
let candidateAnswers ;


function askForName()
let candidateName = "What Is Your Name?"
console.log(candidateName); {
  // TODO 1.1b: Ask for candidate's name //

}

function askQuestion(Who was the first American woman in space?) {
  if (candidateName === "Emily";
    console.log(candidateName + question);
let candidateResponse = "Sally Ride";
let candidateResponse = candidateAnswer
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //


}

function gradeQuiz(candidateAnswers) {
  if (candidateAnswer === "Sally Ride" )
    console.log(candidateAnswer + correctAnswer);

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  


  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
