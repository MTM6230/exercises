# Hangman

## Objective

To help practice using the skills we learned in the prior weeks, we will be create a text-based verison of Hangman that will be played entirely in the browser's console.

## Game Play

When the page loads, instructions explain how to play and the available commands will appear in the console. After the player starts a new game, the player will be presented with a puzzle of blanks representing letters. A category related to the puzzle will also be presented. Next, the player will guess a letter. If the guessed letter is in the puzzle, then the puzzle will reappear with the guessed letter replaces all blank spots where that letter should go. If player guesses a letter that is not in the puzzle, the player receives a strike. This will continue until the player completes the puzzle or the player receives a predefined number of strikes.

## Commands

There will be 3 commands that a player can used to preform actions for Hangman.

### Start

The `start()` will start a new game with a new puzzle and strikes set back to zero. A blank puzzle will be displayed a long with the puzzles category. If a game of Hangman has already been started, and message should return informing the player of the current game, and the current puzzle should be displayed.

### Guess

The `guess()` command is the the main action the player will use throughout the game. The player will provide a letter that they wish to guess. If the letter is in the puzzle the player will be displayed the puzzle again with a letter filled in. If the letter is not in the puzzle the player will receive a strike and the puzzle will be displayed as it was previously. If the letter is not a valid letter (e.g a number or symbol) or the letter has been previously guessed the guess action should response stating that letter was invalid. After a guess, if the max number strikes has been met the player has lost and the game should end. If the puzzle has been completed the player has won and the game should end.

### Help

The `help()` command will display a set of instructions on how to play the game.
