jQuery(document).ready(function($) {
console.log("hi")
var data1=null
let current = []
    const sorter = () => {
      console.log(data1)
        let newData = data1
        current.push(newData[0])
        current.forEach((data, index) => {
            let newnew = data.incorrect_answers
            position = Math.floor((newnew.length +1)* Math.random())
            console.log(position)
            console.log(data.correct_answer)
            newnew.splice(position, 0 ,(data.correct_answer))
            $('.question').text(`${data.question}`)
            if(newnew.length===2){
            $('.row').last().addClass('remove')
            }
            else{
            $('.remove').addClass('row')
            }
            newnew.forEach((data,index) => {
              console.log($('.opt')[index])
                $('.opt')[index].textContent=`${data}`
            })
        })
        $('.row').each((index, question) => {
            let selections = question.children
            console.log(selections)
            for (var i = 0; i < selections.length; i++) {
              // debugger
                if (selections[i].nodeName === "DIV") {
                    selections[i].addEventListener('click', (e) => {
                      console.log(newData[0].correct_answer)
                       if( e.target.textContent === newData[0].correct_answer) {
                         data1.shift()
                                current.pop()
                                sorter(data1)
                                               console.log("win") }
                                               else{
                      console.log("close")}
                    }, false)
                }
            }
        })
    }
    $.ajax({
            url: 'https://opentdb.com/api.php?amount=10',
        })
        .done(function(data) {
            console.log(data)
            data1 = data.results
            sorter(data)
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });

});
