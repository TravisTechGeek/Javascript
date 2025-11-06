let tool = 'marker';

// Use short-circuit evaluation to assign  writingUtensil variable below:
// Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet — we’ll return to tool in the next step.

// Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.

let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Notice that the text 'The pen is mightier than the sword' is logged to the console. Which means the value of writingUtensil is 'pen'.
// What if we reassign the value of tool to 'marker'? Let’s see what happens to the value of writingUtensil.