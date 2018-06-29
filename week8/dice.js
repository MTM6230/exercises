const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple']

const die1 = document.getElementById('die1')
const side = die1.querySelector('.side')
console.log(die1)
console.log(side)

// generate a random number
const randomNum = Math.floor(Math.random() * colors.length)
// use random number to get color from colors
const color = colors[randomNum]
// Add a class to the die that matches the color
die1.classList.add(color)
// Add random number to side 
// Increase by 1 so it displays 1 through 6
side.textContent = randomNum + 1

// Retrieve all the sides from die2
const sides = document.querySelectorAll('#die2 .side')

// Alternate way of retrieve all the sides
// const die2 = document.getElementById('die2')
// const sides = die2.getElementsByClassName('side')

// Add the 'hide' class to each side
// Must use a loop for iterate over the sides array
for (const side of sides) {
  side.classList.add('hide')
}

// Generate a random number to select which side to unhide
const randomSide = Math.floor(Math.random() * sides.length)

// Remove the class 'hide' from the selected side
sides[randomSide].classList.remove('hide')