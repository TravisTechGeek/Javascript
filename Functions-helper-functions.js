// Javascript
// Functions
// Helper Functions

// In the previous exercise, we created a function to find the number of monitors to order for an office. Now let’s write another function that uses the monitorCount() function to figure out the price.

// Below monitorCount(), create a function declaration named costOfMonitors with two parameters: rows and columns. Leave the function body empty for now.


function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}
// Time to add some code to the function body of costOfMonitors() to calculate the total cost.
// Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.

// We should save the cost in a variable.

// Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.

const totalCost = costOfMonitors(5, 4);
// To check that the function worked properly, log totalCost to the console.

console.log(totalCost)