const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']

const families = ['clubs', 'diamonds', 'hearts', 'spades']

/**
 * <div class="card">
      <div class="number red">2</div>
      <div class="suit"><img src="images/hearts.png"></div>
      <div class="number red">2</div>
    </div>
 */

const deck = document.getElementById('deck')
const cards = document.createDocumentFragment()

for (const family of families) {
  for (const rank of ranks) {
    const card = document.createElement('div')
    card.classList.add('card')

    const numbers = []

    for (let i = 0; i < 2; i++) {
      const number = document.createElement('div')
      number.classList.add('number', family)
      number.textContent = rank
      numbers.push(number)
    }

    const suit = document.createElement('div')
    suit.classList.add('suit')
    
    const img = document.createElement('img')
    img.src = `images/${family}.png`

    suit.appendChild(img)
    card.appendChild(numbers[0])
    card.appendChild(suit)
    card.appendChild(numbers[1])

    cards.appendChild(card)
  }

}

deck.appendChild(cards)

// const cards = []

// for (const family of families) {
//   for (const rank of ranks) {
//     cards.push(`<div class="card">
//       <div class="number ${family}">${rank}</div>
//       <div class="suit"><img src="images/${family}.png"></div>
//       <div class="number ${family}">${rank}</div>
//     </div>`)
//   }
// }
// deck.innerHTML = cards.join(' ')
