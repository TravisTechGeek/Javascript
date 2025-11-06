//  Javascript
// Conditional Statements
// Logical Operators

// The and operator (&&) both must evalute true
// the or operator (||) either can be true
// the not operator or bang operator (!) reverses the value of a boolean

// In main.js, there are two variables — mood and tirednessLevel.

// Let’s create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8.

// If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bedtime yet'.

After you press “Run”, play around with the || operator and the ! operator. What happens if you negate the value of the entire statement with ! and switch to || instead of &&?



let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bedtime yet');
}