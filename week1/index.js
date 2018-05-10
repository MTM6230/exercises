/**
 * Get the median average of the height of everyone in the room
 * 1. Get the number of people in the room
 * 2. Get a list of everyone in the room
 * 3. Ask each person in the list for the their height
 * 4. Sort height in order
 * 5. To get middle number, take total number of people divide by two
 */

// Creating variables
const myName = 'Michael'
let myAge = 36
let myFavoriteColor = 'Blue'

// Sending the messages to the console
console.log(myName)
console.log(myAge)
console.log(myFavoriteColor)

// Attempting to change a constant will result in error
// myName = 'Fred'

// Change the value of age
myAge = 37
console.log(myAge)

// Output message to console using a template literal
console.log(`Hello, my name is ${myName}. I am ${myAge} years old.`)

const adjective = 'hard'
const adverb = 'terrorfied'

// Output message to console using a template literal
console.log(`Learning JavaScript is ${adjective}. 
I am ${adverb} to learn more.`)

// Output message to console using string concatenation
console.log('Learning JavaScript is ' + adjective + '. I am ' + adverb + ' to learn more.')

// Out put message to console using a template literal with expression
console.log(`2 + 2 = ${2 + 2}.`)
