const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple']

const die1 = document.getElementById('die1')
const side = die1.querySelector('.side')

function randomInt(max) {
  return Math.floor(Math.random() * max)
}

const random = randomInt(colors.length)
const color = colors[random]
die1.classList.add(color)

side.textContent = random + 1

const die2 = document.getElementById('die2')
const sides = die2.getElementsByClassName('side')

for (const side of sides) {
  side.classList.add('hide')
}

sides[randomInt(sides.length)].classList.remove('hide')
