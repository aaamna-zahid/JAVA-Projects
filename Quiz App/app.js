const questions = [
    {
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "b",
    }
];
let index = 0
let total = questions.length
let right = 0
let wrong = 0
const quesBox = document.getElementById('quesBox')
const optionsInput = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    } else {
        reset()
        const data = questions[index]
        //console.log(data)
        quesBox.innerText = `${index + 1} ) ${data.question}`
        optionsInput[0].nextElementSibling.innerText = data.a
        optionsInput[1].nextElementSibling.innerText = data.b
        optionsInput[2].nextElementSibling.innerText = data.c
        optionsInput[3].nextElementSibling.innerText = data.d
    }
}
//initial call
loadQuestion();

const submitQuiz = () => {
    const data = questions[index];
    const answer = getAnswer();
    if (answer === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}
const getAnswer = () => {
    let selectedAnswer = null;
    optionsInput.forEach(
        (input) => {
            if (input.checked) {
                selectedAnswer = input.value;
                //console.log(selectedAnswer)
            }
        }
    )
    //console.log(selectedAnswer)
    return selectedAnswer;
}
function reset()  //Now you can call reset() anywhere in the file, even before its declaration.
 {
    optionsInput.forEach(input => input.checked = false);
}
function endQuiz(){
    document.getElementById('box').innerHTML=`
    <div style="text-align:center"><h3>THANK YOU FOR PLAYING THE QUIZ </h3>
    <h2> ${right}/${total} are correct </h2>  </div> `
}