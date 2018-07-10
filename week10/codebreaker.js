/**
 * randomInt
 */
function randomInt (max) {
  return Math.floor(Math.random() * max)
}

const tries = document.getElementById('tries')
const correct = document.getElementById('correct')
const board = document.getElementById('board')
const blocks = document.getElementsByClassName('block')
const submit = document.getElementById('submit')
const reset = document.getElementById('reset')
const message = document.getElementById('message')

const game = {
  active: false,
  tries: 0,
  correct: 0,
  codeLength: blocks.length,
  code: [],
  colors: ['red', 'blue', 'green', 'orange']
}

function setCode () {
  const colors = game.colors.slice(0)
  for (let i = 0; i < game.codeLength; i++) {
    const color = colors.splice(randomInt(colors.length), 1)[0]
    game.code.push(color)
  }
}

function checkCode () {
  game.correct = 0
  if (game.active) { game.tries++ }
  for (let i = 0; i < game.codeLength; i++) {
    console.log(blocks[i].dataset.color, game.code[i])
    if (blocks[i].dataset.color === game.code[i]) {
      game.correct++
    }
  }

  if (game.correct === game.codeLength) {
    tries.textContent = game.tries
    correct.textContent = game.correct
    endGame()
  } else {
    tries.textContent = game.tries
    correct.textContent = game.correct
  }
}

function resetBoard () {
  for (const block of blocks) {
    block.classList.remove(block.dataset.color)
    block.classList.add('red')
    block.dataset.color = 'red'
  }
}

function rotateColor (el) {
  const index = game.colors.indexOf(el.dataset.color)
    
    const color = (index + 1 < game.colors.length ? game.colors[index+1] : game.colors[0])

    el.classList.remove(el.dataset.color)
    el.classList.add(color)
    el.dataset.color = color
}

function endGame () {
  game.active = false
  message.classList.add('show')
}

function startGame () {
  game.active = false
  game.tries = 0
  game.correct = 0
  resetBoard()
  setCode()
  checkCode()
  message.classList.remove('show')
  game.active = true
}

board.addEventListener('click', function (event) {
  if (event.target.classList.contains('block')) {
    rotateColor(event.target)
  }
})

document.addEventListener('keyup', function (event) {
  if (blocks[event.key - 1]) {
    rotateColor(blocks[event.key - 1])
  }
})

reset.addEventListener('click', startGame)
submit.addEventListener('click', checkCode)

startGame()
