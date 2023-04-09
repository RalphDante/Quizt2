import{
    questions
} from "../Quizes/PE.js";

const flashCard = document.querySelector(".flashCard");
let myQuestion = document.querySelector("#myQuestion");


let randomNumber = Math.floor(Math.random() * questions.length)
let [question, answer] = questions[randomNumber];



flashCard.addEventListener("click", () => {
    if(myQuestion.textContent == question){
        myQuestion.innerHTML = answer;
    }
    else{
        myQuestion.innerHTML = question;
    }
    
})

function questionPicker(){
    while(question.length != 0){
        
    }
}


// quiz()

// function quiz(){
//     let currentIndex = questions.length;
//     while(currentIndex != 0){
//         currentIndex--;
//         let randomNumber = Math.floor(Math.random() * questions.length);
//         let temp = questions[currentIndex];
//         questions[currentIndex] = questions[randomNumber];
//         questions[randomNumber] = temp;

//     }
// }

myQuestion.innerHTML = question;
console.log(questions.length)
console.log(question)
