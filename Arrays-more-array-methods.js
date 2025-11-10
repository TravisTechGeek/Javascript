// Javascript
// Arrays
// More Array Methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// Use the .shift() method to remove the first item from the array groceryList.
// Log the updated groceryList to the console.
groceryList.shift('orange juice')
console.log(groceryList)

/* Following your code from the previous step, use the .unshift() method to add 'popcorn' to the beginning of the grocery list.
After calling .unshift() on groceryList, log groceryList to the console.*/
groceryList.unshift('popcorn')
console.log(groceryList)

/* You’re in a hurry, so you ask a friend to help with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'.
Following your code from the previous step, use .slice() to provide your friend with a list of these three things.
Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line.*/
console.log(groceryList.slice(1, 4))

/* After calling .slice() on groceryList, log the grocery list to the console one more time.
Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating!*/
console.log(groceryList)

/* Let’s find the index of a particular element in groceryList using .indexOf().
Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex.
Then, log pastaIndex to the console. To declutter the terminal, you may remove previous console.log() statements.*/
const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex)