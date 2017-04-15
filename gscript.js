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
console.log('JQ Linked');
});
