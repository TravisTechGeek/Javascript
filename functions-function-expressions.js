// Javascript
// Functions
// Function Expressions

/* Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered:*/

/* Create a variable named plantNeedsWater using the const variable keyword.
Assign an anonymous function that takes in a parameter of day to plantNeedsWater.*/

/*Now we need to add some code to the function body of plantNeedsWater():
In the function body, add an if conditional that checks day === 'Wednesday'.
If the conditional is truthy, inside the if code block, use the return keyword to return true.*/

const plantNeedsWater = function(day) {
  if(day === 'Wednesday'){
    return true;
  } else {
    return false;
  }
};

// Call the plantNeedsWater() and pass in 'Tuesday' as an argument.
/* Let’s check that plantNeedsWater() returned the expected value.

Log plantNeedsWater('Tuesday') to the console. If it worked correctly, false should be logged to the console. */
console.log(plantNeedsWater('Tuesday'))