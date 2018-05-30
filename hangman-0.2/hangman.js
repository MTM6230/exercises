/**
 * Hangman
 */

/**
 * Create a list of phrases. Each phrase should have a related category.
 */
const phrases = [
  { phrase: 'The Three Little Pigs', category: 'Title' },
  { phrase: 'Little Red Riding Hood', category: 'Title' },
  { phrase: 'The Princess and the Pea', category: 'Title' },
  { phrase: 'Beauty and the Beast', category: 'Title' },
  { phrase: 'Jack and the Beanstalk', category: 'Title' },
  { phrase: 'Snow White and the Seven Dwarfs', category: 'Title' },
  { phrase: 'Alice in Wonderland', category: 'Title' },
  { phrase: 'Wizard of Oz', category: 'Title' },
  { phrase: 'Goldilocks and the Three Bears', category: 'Title' },
  { phrase: 'Hansel and Gretel', category: 'Title' },
  { phrase: 'Maleficent', category: 'Character' },
  { phrase: 'Cruella De Vil', category: 'Character' },
  { phrase: 'Ursula', category: 'Character' },
  { phrase: 'Wicked Witch of the West', category: 'Character' },
  { phrase: 'Queen of Hearts', category: 'Character' },
  { phrase: 'The Big Bad Wolf', category: 'Character' },
  { phrase: 'Captain Hook', category: 'Character' },
  { phrase: 'Rumpelstiltskin', category: 'Character' },
  { phrase: 'Peter Pan', category: 'Character' },
  { phrase: 'Robin Hood', category: 'Character' },
  { phrase: 'Mulan', category: 'Character' },
  { phrase: 'Hercules', category: 'Character' },
  { phrase: 'Moana', category: 'Character' },
  { phrase: 'Cinderella', category: 'Character' },
  { phrase: 'Tinkerbell', category: 'Character' }
]

/**
 * Create a container to hold the current game status
 * - An active game indicator
 * - The current phrase and category
 * - A list of guessed letters
 * - The number of strikes
 * - The maximum number of allowed strikes
 */
const game = {
  active: false,
  numberOfStrikes: 5,
  maxNumberOfStrikes: 5,
  currentPuzzle: null,
  guessedLetters: []
}

/**
 * Create help command
 * - Display instructions
 */
function help() {
  return `HANGMAN
Try to solve the puzzle by guessing letters using guess(letter). If you have guess wrong you will get a strike. To start the game use the start() command.`
}

/**
 * Create and display a list of instructions to explain how to play the game and which commands can be used.
 */
console.log(help())
/**
 * Create a start command to start a new game
 * - Check if there is a current game
 *    - If no:
 *      - Set game to active
 *      - Select a current phrase
 *      - Reset the number of strikes
 *      - Reset the list of guessed letters
 *      - Convert phrase to a puzzle
 *      - Display the puzzle with the current category
 *    - If yes:
 *      - Convert current phrase to a puzzle
 *      - Display the puzzle
 */
function start() {
  if (game.active) {
    console.log(`A game has already been started.`)
  } else {
    // set the game to be active
    game.active = true
    // Randomly Select the current phrase
    game.currentPuzzle = Math.floor(Math.random() * phrases.length)
    // Reset the number of strikes
    game.numberOfStrikes = game.maxNumberOfStrikes
    // Reset the guessed letters
    game.guessedLetters = ['R', 'S', 'T', 'L', 'N', 'E']
  }

  // Convert phrase to puzzle and display
  return buildPuzzle()
}
/**
 * Convert phrase to puzzle
 * - convert each letter to underscore
 *    - Convert all letters to uppercase
 *    - But leave spaces as spaces
 *    - Use list of guessed letters to determine which letters not to convert
 * - Check if puzzle is complete (no underscores)
 *    - Display game won message
 */
function buildPuzzle() {
  // Convert all letter to uppercase
  const phrase = phrases[game.currentPuzzle].phrase.toUpperCase()

  // Retrieve the category of the selected phrase
  const category = phrases[game.currentPuzzle].category

  // create an array to hold the puzzle
  const puzzle = []

  /**
   * Loop over the phrase converting all letter that are not
   * guessed letters or spaces to underscores
   */
  for (let i = 0; i < phrase.length; i++) {
    // Check for guessed letters or spaces
    if (phrase[i] === ' ' || game.guessedLetters.indexOf(phrase[i]) !== -1) {
      puzzle.push(phrase[i])
    } else {
      puzzle.push('_')
    }
  }

  return `The category is ${category}\n${puzzle.join(' ')}`
}
/**
 * Create guess command
 * - Check if guessed letter is valid and display message
 * - Check if guessed letter has already guessed and display message
 * - Check if guessed letter is in puzzle
 *  - If yes
 *    - display message
 *    - check if won
 *      - if yes, display message, display completed puzzle and end game
 *      - if no, update and display puzzle
 *  - If no
 *    - display message
 *    - update strikes
 *    - check if lost
 *       - if yes, display message and end game
 *          - Don't display full puzzle
 *       - if no, display puzzle
 */
