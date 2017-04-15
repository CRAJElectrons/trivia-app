$(document).ready(function() {

const one = $('.circleone')
const two = $('.circletwo')
const three = $('.circlethree')
const four = $('.circlefour')
const five = $('.circlefive')


setInterval(() => {
    $(one).toggleClass('big');
},1000)

setTimeout(() =>{
setInterval(() => {
    $(two).toggleClass('lim');
},1000)
},1000)

setTimeout(() =>{
setInterval(() => {
    $(three).toggleClass('mag');
},1000)
},2000)

setTimeout(() =>{
setInterval(() => {
    $(four).toggleClass('lim');
},1000)
},3000)

setTimeout(() =>{
setInterval(() => {
    $(five).toggleClass('mag');
},1000)
},4000)

$('.tri' ).click(() => {
  $('.catm').toggleClass('hide');
});

    console.log("hi")
    const sorter = (data) => {
        let newData = data.results
        newData.forEach((data, index) => {
            let newnew = data.incorrect_answers.map((data) => {
                return $(`<div>${data}</div>`)
            })
            position = Math.floor((
              newnew.length +1)* Math.random())
            console.log(position)
            newnew.splice(position, 0 ,$(`<div>${data.correct_answer}</div>`))
            console.log((newnew))
            $('.container').append($(`<div class=questions><p>${data.question}</p></div>`))
            newnew.sort((a,b)=>{ a.length < b.length}).forEach((data) => {
                $('.questions').last().append(data)
            })
        })
        $('.questions').each((index, question) => {
            let selections = question.children
            for (var i = 0; i < selections.length; i++) {
                if (selections[i].nodeName === "DIV") {
                    selections[i].addEventListener('click', (e) => {
                      console.log(newData[index].correct_answer)
                        e.target.textContent === newData[index].correct_answer ? console.log("win") : console.log("close")
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
            sorter(data)
            console.log("success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });



console.log('JQ Linked');
});
