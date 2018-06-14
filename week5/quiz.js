const hero = {
  name: 'Hercules',
  items: [],
  gold: 15
}

const prices = {
  sword: 5,
  shield: 3,
  armor: 8
}

function greeting () {
  return `Hello, I am ${hero.name}.`
}

function buy (item) {
  if (prices[item] && hero.gold >= prices[item]) {
    hero.gold = hero.gold - prices[item]
    hero.items.push(item)
    return `You bought a ${item}`
  } else {
    return `You cannot buy ${item}`
  }
}