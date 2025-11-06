//This is where the user will input their name
let userName = "Travis";
//This is an if else statement using interpolation which will print he users name if entered and just welcome them if not
if (userName){
  console.log(`Hello, ${userName}!`);
} else {
  console.log("Hello!");
}
// this is where the user will input a question
let userQuestion = "will i ever be famous?";
// this console log prints the users question and name using interpolation
console.log(`${userName} Your Question is: ${userQuestion}`);
//This variable generates a random number using two methods.
let randomNumber = Math.floor(Math.random() * 8);
//this is the eightball variable
let eightBall = "";
// Switch statement brings in the number from random number and assigns it to a case.

switch(randomNumber){
  case 0:
  eightBall = 'It is Certain';
  break;
  case 1:
  eightBall = 'It is decidedly so';
  break;
  case 2:
  eightBall = 'Reply hazy try again';
  break;
  case 3:
  eightBall = 'Cannot predict now';
  break;
  case 4:
  eightBall = 'Do not count on it';
  break;
  case 5:
  eightBall = 'My sources say no';
  break;
  case 6:
  eightBall = 'Outlook not so good';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  default:
  break;
}

console.log(`Eight Ball: ${eightBall}`);