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
  guessedLetters: [],
  letters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
}

/**
 * Create help command
 * - Display instructions
 */
function help () {
  return `HANGMAN\nTry to solve the puzzle by guessing letters using guess(letter). If you miss a letter you get a strike. Get ${game.maxStrikes} stikes and you lose the game.\n\nTo start a new game type start().`
}
/**
 * Create and display a list of instructions to explain how
 * to play the game and which commands can be used.
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
function start () {
  // Check if there is a current game
  if (game.active) {
    console.log(`A game has already been started.`)
  } else {
    // Set game status to active
    game.active = true
    // Randomly select a puzzle, only the index will be stored.
    game.currentPuzzle = Math.floor(Math.random() * phrases.length)
    // Set number of strikes to max number of strikes
    game.numberOfStrikes = game.maxNumberOfStrikes
    // Reset the guessed letters array
    game.guessedLetters = []
  }

  // Retrieve the Category
  const category = phrases[game.currentPuzzle].category

  return `The catogory is ${category}.
  ${buildPuzzle()}`
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
function buildPuzzle () {
  // Convert all the phrases letters to uppercase
  const phrase = phrases[game.currentPuzzle].phrase.toUpperCase()

  // Create an array to hold the puzzle
  const puzzle = []

  /**
   * Loop over the phrase converting all letters that have not
   * been guessed or are not spaces to underscores
   */
  for (let i = 0; i < phrase.length; i++) {
    /**
     * Check for spaces and guessed letters
     * if yes, add character to the puzzle
     * if no, add an underscore
     */
    if (phrase[i] === ' ' || game.guessedLetters.indexOf(phrase[i]) !== -1) {
      puzzle.push(phrase[i])
    } else {
      puzzle.push('_')
    }
  }

  // Display category and puzzle
  return puzzle.join(' ')
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
function guess (letter) {
  if (game.active) {
    // if game is active

    // convert letter to upper case
    letter = letter.toUpperCase()
    
    // check if the letter is valid
    if (game.letters.includes(letter)) {
      // this is a valid letter
      if (game.guessedLetters.includes(letter)) {
        // the letter has already been guessed
        return `You have already guessed ${letter}.`
      } else {
        // this is a new letter
        // add to guessed letter array
        game.guessedLetters.push(letter)
        
        const phrase = phrases[game.currentPuzzle].phrase
        if (phrase.toUpperCase().includes(letter)) {
          // the letter is in the puzzle 
          // Build the puzzle
          const puzzle = buildPuzzle()

          if (puzzle.includes('_')) {
              // there are letters to be guessed
              return `Yes, there are ${letter}s in the puzzle.\n${puzzle}`
          } else {
            // the puzzle is complete, game won
            // deactivating the game
            game.active = false
            return `Yes, there are ${letter}s in the puzzle.\n${puzzle}\n You have solved the puzzle.\nUse start() to play again.`
          }
        } else {
          // the letter is not in the puzzle, update strikes
          game.numberOfStrikes--

          // check if there are any strikes left
          if (game.numberOfStrikes) {
            // there are still strike left
            const puzzle = buildPuzzle()
            return `Sorry, there are no ${letter}s in the puzzle.\n${puzzle}`
          } else {
            // there are no more strikes, game over
            game.active = false
            return `There are no more strike left. Game over.\nUse start() to play again.`
          }
        }
      }
    } else {
      // this is not a valid letter
      return `Please provide a valid letter.`
    }
  } else {
    return `There is no active game. Use start() to start game.`
  }
}