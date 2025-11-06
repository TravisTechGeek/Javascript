// Javascript
// Conditional Statements
// Else-if statements

// Let’s create a program that keeps track of the way the environment changes with the seasons. Write a conditional statement to make this happen!

// In main.js, an if...else statement is already in place. Let’s add an else if statement that checks if season is equal to 'winter'.

// Inside the code block of the else if statement, add a console.log() that prints the string 'It\'s winter! Everything is covered in snow.'.

// Make sure that the structure uses if, else if, and else.

// dd a final else if statement that checks if season is equal to 'summer'.

// Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s sunny and warm because it\'s summer!'.
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}
