/**
 * <div class="card">
      <div class="number hearts">2</div>
      <div class="suit"><img src="images/hearts.png"></div>
      <div class="number hearts">2</div>
    </div>
 */

const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const families = ['clubs', 'diamonds', 'hearts', 'spades']

/**
 * create a cards array
 * 
 * Loop through the suits
 *    Loop through the ranks
 *      Change the suit and rank inside the template literal
 *      push card to cards
 * 
 * Retreive deck from HTML
 * Insert cards to deck 
 */

const cards = []

for (const family of families) {
  for (const rank of ranks) {
    const card = `<div class="card">
    <div class="number ${family}">${rank}</div>
    <div class="suit"><img src="images/${family}.png"></div>
    <div class="number ${family}">${rank}</div>
  </div>`
    cards.push(card)
  }
}

const deck = document.getElementById('deck')
deck.innerHTML = cards.join(' ')

/**
 * <div class="card">
      <div class="number hearts">2</div>
      <div class="suit"><img src="images/hearts.png"></div>
      <div class="number hearts">2</div>
    </div>
 */

/**
 * Create document fragment
 * 
 * Loop through the suits
 *    Loop through the ranks
 *      create card div
 *        add class of 'card'
 * 
 *      create a div
 *         add class of 'number' and *suit*
 *         add text of *rank*
 *      append div to card
 * 
 *      create a div
 *        add class of 'suit'
 * 
 *      create an img
 *        add src to img 
 *      append img to suit div
 *      append suit to card 
 * 
 *      create a div
 *         add class of 'number' and *suit*
 *         add text of *rank*
 *      append div to card
 * 
 *    append card to fragment  
 * Retrieve the deck
 * Append the fragment to the deck
 */

const fragment = document.createDocumentFragment()

for (const family of families) {
  for (const rank of ranks) {
    // create the div with class of card
    // <div class="card"></div>
    const card = document.createElement('div')
    card.classList.add('card')

    // create the first number
    // <div class="number hearts">2</div>
    const number1 = document.createElement('div')
    number1.classList.add('number', family)
    number1.textContent = rank
    card.appendChild(number1)

    // create the div with class of suit
    // <div class="suit"></div>
    const suit = document.createElement('div')
    suit.classList.add('suit')

    // create the img tag
    // <img src="images/hearts.png">
    const img = document.createElement('img')
    img.src = `images/${family}.png`
    suit.appendChild(img)
    card.appendChild(suit)

    // create the second number
    // <div class="number hearts">2</div>
    const number2 = document.createElement('div')
    number2.classList.add('number', family)
    number2.textContent = rank
    card.appendChild(number2)

    fragment.appendChild(card)
  }
}

deck.appendChild(fragment)