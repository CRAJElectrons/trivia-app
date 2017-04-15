jQuery(document).ready(function($) {
console.log("hi")
var data1=null
let current = []
    const sorter = () => {
        let newData = data1
        current.push(newData[0])

        current.forEach((data, index) => {
            let newnew = data.incorrect_answers
            position = Math.floor((newnew.length +1)* Math.random())
            newnew.splice(position, 0 ,(data.correct_answer))
            console.log(String(`${data.question}`))
            question = data.question.split(('&quot;' || '&#039;'),2).join()
            console.log(question)
            $('.question').text(question)
            if(newnew.length===2){
            $('.row').last().addClass('remove')
            }
            else{
            $('.remove').addClass('row')
            }
            newnew.forEach((data,index) => {
                $('.opt')[index].textContent=`${data}`
            })
        })

        $('.row').each((index, question) => {
            let selections = question.children
                for (var i = 0; i < selections.length; i++) {
                    if (selections[i].nodeName === "DIV") {
                        selections[i].addEventListener('click', (e) => {
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
            data1 = data.results
            console.log(data1)
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
