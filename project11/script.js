const questions=[
    {
        question:"what is large animanl ",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Indias national animal",
        answers:[
            {text:"shark",correct:false},
            {text:"Blue whale",correct:false},
            {text:"Elephant",correct:false},
            {text:"tiger",correct:true},
        ]
    },{
        question:"pm of india ",
        answers:[
            {text:"shark",correct:false},
            {text:"Modi",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"js is a  ",
        answers:[
            {text:"shark",correct:false},
            {text:"programming language",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    }
];



const questionelement=document.getElementById("question");
const answerbuttons=document.getElementById("answerbuttons");
const nextbutton=document.getElementById("nextbtn");

let currentquestionIndex=0;
let score=0;
function startQuiz(){
    currentquestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion=questions[currentquestionIndex];
    let questionNumber=currentquestionIndex+1;
    questionelement.innerHTML=questionNumber+"."+currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerbuttons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextbutton.style.display="none";
    while(answerbuttons.firstChild){
        answerbuttons.removeChild(answerbuttons.firstChild);
    }
}



function selectAnswer(e){
    const selectBtn=e.target;
    const isCorrect = selectBtn.dataset.correct==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerbuttons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextbutton.style.display="block";
}


function handleNextButton(){
    currentquestionIndex++;
    if(currentquestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionelement.innerHTML=`You scored${score} out of ${questions.length}`;
    nextbutton.innerHTML="play again";
    nextbutton.style.display="block";
}


nextbutton.addEventListener("click",()=>{
    if(currentquestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();



