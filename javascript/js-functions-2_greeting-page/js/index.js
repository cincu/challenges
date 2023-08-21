console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting(time) {
  if ( time > 5 && time < 13) {
  console.log("Good Morning")
} else if ( time > 11 && time < 19) {
  console.log("Good Afternoon")
} else if ( time > 18 && time < 23) {
    console.log("Good Evening")
} else if ( time === 23 && time === 24 && time >0 && time <6) {
  console.log("Good Night");
}}




function getDayColor() {
  let getDay = new Date().getDay();
  if (getDay === 1) {
    return 'darkgrey'} 
  if (getDay>1 && getDay<8){
    return 'lightblue'}
  if (getDay === 8) {
    return 'hotpink'
  }
  
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
