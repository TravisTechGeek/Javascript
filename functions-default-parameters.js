// Javascript
// Functions
// Default Parameters

// The function makeShoppingList() creates a shopping list based on the items passed to it as arguments.

/*Imagine we always purchase milk, bread, and eggs every time we shop for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList().*/

// Change the parameters of makeShoppingList() into default parameters :

// Assign 'milk' as the default value of item1.
// Assign 'bread' as the default value of item2.
// Assign 'eggs' as the default value of item3.

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
