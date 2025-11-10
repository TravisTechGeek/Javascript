// Javascript
// Arrays
// Secret Message Project
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length)
 
// Use an array method to remove the last string of the array secretMessage.
secretMessage.pop()
// Great! You can check your work by logging the .length of the array.
//At this point, the length should be one less than the original length.
console.log(secretMessage.length)
// Use an array method to add the words 'to' and 'Program' as separate strings to the end of the secretMessage array.
secretMessage.push('to', 'Program')
// Replace the string 'easily' in the array with 'right' by accessing its index and assigning the new value.
secretMessage[7] = 'right'
// Use an array method to remove the first string of the array.
secretMessage.shift()
// Use an array method to add the string 'Programming' to the beginning of the array.
secretMessage.unshift('Programming')
// Use an array method to remove the strings 'get', 'right', 'the', 'first', 'time,', and replace them with the single string 'know,'.
secretMessage.splice(6, 5, 'know,')
console.log(secretMessage.join(' '))
