/**
 * Hangman
 */

/**
 * Create a list of phrases with related category
 */
const phrases = [
  { phrase: 'The Three Little Pigs', category: 'Title' }
]

/**
 * Create container to hold game status
 * - An active game indicator
 * - The number of strikes
 * - The list of guessed letters
 * - The current puzzle and category
 * - The maximum allow number of strikes
 */
const game = {
  active: false,
  numberOfStrikes: 5,
  maxNumberOfStrikes: 5,
  guessedLetters: []
}
/**
 * Create and display instructions and commands
 */

/**
 * Create start command to start game
 * - Check if a game is active
 * - If no, set game to active 
 * - Select a phrase
 * - Convert phrase to a puzzle
 * - Reset the number of strikes
 * - Reset list of guessed letters 
 * - Display puzzle and category
 * - Display all available letters
 */

/**
 * Create guess command
 * - Check if game is active
 * - Check if guessed letter is valid
 * - Add / Remove guessed letter to / from list
 * - Check if guessed letter is in phrase
 * - If yes:
 *    - Display success message
 *    - Display puzzle with guessed letter in place
 * - IF no:
 *    - Add a strike
 *    - Display strike message
 *        - If number of strike is at max
 *          - Display game over message
 *          - End the game
 *        - IF not
 *           - Display previous puzzle
 */

/**
 * Create a help command
 * - Display instructions
 */

/**
 * Convert phrase to puzzle
 * - Convert each letter to a underscore
 *    - But if letter is in guessed letter list leave alone
 *    - Ignore spaces 
 * - If no underscores remaining
 *    - Game has been won, provide message
 */