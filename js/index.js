/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'What is the biggest animal in the world?',
      o: ['Great white Shark', 'Brown Bear', 'Blue Whale', 'Anaconda'],
      a: 2,
    },
    {
      q: 'What is a baby rabbit called?',
      o: ['baby buck', 'A kit', 'Fur Ball', 'Cuties'],
      a: 1,
    },
  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap'); //(B) QUIZ CONTAINER
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };

  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => { //.map() returns a new array from an argument of the callback function.
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          //liElement.style.backgroundColor = '#ddf2da';
        }

        if (radioElement.checked) { // radio element checked
          if (quizItem.a === i) {
            console.log(score);
            score++;
          }
        }
      }
    });
    return score;
  };
// add eventlistener for the submit button.
let btnSubmit = document.querySelector('#btnSubmit');//grab button
btnSubmit.addEventListener('click', () => {//event listener
  calculateScore();
  let score = document.querySelector('#score');
  score.innerHTML = `You got ${calculateScore()} right answers!`; 
  btnSubmit.style.display = 'none';
})

//timer 60 secs
let countDown = 60; //set count down duration 
let interval = setInterval(function(){ // at each end
  document.querySelector('#time').innerHTML=countDown; // grab #id and set .innerhtml
  countDown--; // countdown --
  if (countDown === 0){ // countdown condition met
    clearInterval(interval);
    document.querySelector('#time').innerHTML='0';
    alert("You're out of time!");
  }
}, 1000);
// reset button event listener to reload the page
//reset.addEventListener('click', () => {
//window.location.reload();
// call the displayQuiz function
displayQuiz();
});







