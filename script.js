$(document).ready(function($) {
console.log("hi")
let score=0;
var data1=null
let current = []

const newQuestion = () => {
let newData = data1
current.push(newData[0])
current.forEach((data, index) => {

    //append the current question to the questionsc class div
    let question = data.question
    $('.questionc').append(`<p class="question">${question}</p>`)


    //go and grab the incorrect answer selections and insert the correct solution in the array
    let answer_selections = data.incorrect_answers
    let position = Math.floor((answer_selections.length +1)* Math.random())
    let answer = data.correct_answer
    answer_selections.splice(position, 0 ,(answer))


      //If tthe question answer is True Or False add class and remove two bottom divs
      if(answer_selections.length===2){
      $('.row').last().addClass('remove')
      }
      else{
      $('.row').last().removeClass('remove')
      }

      // iterate over each answer and append the answer to the option class
      answer_selections.forEach((data,index) => {
      let selections = data
      let selection = ".option"+(index+1)
      $(selection).append(`<p class="opt">${selections}</p>`)
      })

      //call this function to add event listeners to the answer selections
      eventhandler()
})
}

const eventhandler=()=>{

$('.options').click((e)=>{
    //check if the clicked div is equal to the current answer if so add 1
    if( e.target.textContent === current[0].correct_answer) {
    $('.score').text(score+=1)
    }
    else{
    console.log("close")
    }

    //remove click event once the click event has occured
    $('.options').unbind('click')

    //delete the first element in the data1 array, delete the element from the current array
    data1.shift()
    current.pop()

    //remove the contents from the div class questionc and opt
    $('.questionc').empty()
    $('.opt').remove()

    //if statement that checks if there are more question and continues the trivia game else finish the game
    if(data1.length>0){
    newQuestion()}
    else{

}
})
}


$.ajax({
url: 'https://opentdb.com/api.php?amount=10',
})
.done(function(data) {
data1 = data.results
newQuestion()
console.log("success");
})
.fail(function() {
console.log("error");
})
.always(function() {
console.log("complete");
});
});
