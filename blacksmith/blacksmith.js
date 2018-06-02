/**
 * randomInt:
 * Returns a random positive integer from min to max
 * @Parameters: min - the smallest possible number, max - largest possible number
 * @Return: Int
 * @Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 */
const randomInt = function (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * The settings object keeps track of all the exchange rates
 * for the game.
 */
const settings = {
  fireWood: 1,
  oreCost: 3,
  woodCost: 1,
  swordOre: 2,
  swordWood: 1,
  axeOre: 1,
  axeWood: 2,
  swordPriceMin: 5,
  swordPriceMax: 10,
  axePriceMin: 4,
  axePriceMax: 8
}

/**
 * Create an object to hold blacksmith's inventory
 * - gold: number
 * - ore: number
 * - wood: number
 * - swords: number
 * - axes: number
 * - fire: boolean
 */
const blacksmith = {
  gold: 10,
  ore: 0,
  wood: 0,
  swords: 0,
  axes: 0,
  fire: false
}
/**
 * Buy Command
 * Is used to buy ore or wood with gold
 * Steps: 
 * - Check if the fire is burning
 * - Check if there is enough gold for item
 * - Check if item is valid
 *    - Update the game status after purchase
 *    - Return a message
 */
function buy(item) {
  // if fire is not burning
  if (blacksmith.fire === false) {
    // check it the is ore AND if there is enough gold
    if (item === 'ore' && blacksmith.gold >= settings.oreCost) {
      blacksmith.ore++
      blacksmith.gold = blacksmith.gold - settings.oreCost
      return `You have bought ${item}`
      // check if item is wood and if there is enough gold
    } else if (item === 'wood' && blacksmith.gold >= settings.woodCost) {
      blacksmith.wood++
      blacksmith.gold = blacksmith.gold - settings.woodCost
      return `You have bought ${item}.`
    } else {
      return `You cannot buy ${item}.`
    }
  } else {
    return `You must put out the fire.`
  }
}
/**
 * Sell Command
 * Used to sell swords and axes for gold
 * Steps:
 * - Check if the fire is burning
 * - Check if the item in the inventory and valid
 *    - Randomly select amount of gold from range
 *    - Update the inventory
 *    - return a message 
 */

/**
 * Make Command
 * Used to make swords and axes from ore and wood
 * Steps:
 * - Check if the fire is burning
 * - Check if the item is valid
 * - Check if there is enough resources to make item
 *    - Update the inventory
 *    - return a message
 */

/**
 * Fire Command
 * Use to start or stop the fire
 * Steps: 
 * - Check if the fire is burning
 *    - if yes:
 *      - set fire to false
 *    - if no: 
 *      - Check if there is enough wood
 *        - set fire to true
 *        - update the wood
 * - return a message
 */
function fire() {
  // if fire is burning
  if (blacksmith.fire) {
    blacksmith.fire = false
    return `You have put out the fire.`
    // if the fire is not burning
  } else {
    if (blacksmith.wood >= settings.fireWood) {
      blacksmith.fire = true
      blacksmith.wood = blacksmith.wood - settings.fireWood
      return `You have started the fire.`
    } else {
      return `You do not have enough wood.`
    }
  }
}
/**
 * Inventory Command
 * Return a list of current inventory
 * - looping over the object and return the key and values
 */
function inventory() {
  const inventory = []
  for (const item in blacksmith) {
    if (item === 'fire') {
      if (blacksmith[item]) {
        inventory.push(`The fire is burning.`)
      } else {
        inventory.push(`The fire is not burning.`)
      }
    } else {
      inventory.push(`${item}: ${blacksmith[item]}`)
    }
  }
  return inventory.join(`\n`)
}

/**
 * Help Command
 * Display a list of instructions.
 */