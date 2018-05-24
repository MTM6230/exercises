const farmAnimal = {
  name: 'Bob',
  numberOfFeet: 3,
  sound: 'Neigh'
}

if (farmAnimal.name) {
  console.log(`Hi, I'm ${farmAnimal.name}`)
}

if (farmAnimal.sound === 'Moo') {
  console.log('I am a Cow.')
} else {
  console.log('I am not a Cow.')
}

if (farmAnimal.numberOfFeet === 2) {
  console.log('I walk upright.')
} else if (farmAnimal.numberOfFeet === 4) {
  console.log('I walk on all fours.')
} else {
  console.log('I walk in a very unusual way.')
}

farmAnimal['favoriteFoods'] = ['carrots', 'lettuce', 'apples']

for (let i = 0; i < farmAnimal['favoriteFoods'].length; i++) {
  console.log(farmAnimal['favoriteFoods'][i])
}

for (const food of farmAnimal['favoriteFoods']) {
  console.log(food)
}

for (const key in farmAnimal) {
  console.log(key, farmAnimal[key])
}

farmAnimal.birthMonth = 5

/**
 * Born in winter
 * BirthMonth must equal 1,2,or 3
 * Create range from 1 to 3
 */
if (farmAnimal.birthMonth >= 1 && farmAnimal.birthMonth <= 3) {
  console.log(`Winter`)
} else if (farmAnimal.birthMonth === 4 || farmAnimal.birthMonth === 5 || farmAnimal.birthMonth === 6) {
  console.log(`Spring`)
} else if (farmAnimal.birthMonth >= 7 && farmAnimal.birthMonth <= 9) {
  console.log(`Summer`)
} else if (farmAnimal.birthMonth >= 10 && farmAnimal.birthMonth <= 12) {
  console.log(`Fall`)
} else {
  console.log(`Not a valid month`)
}

/**
 * Verse 1: one, drum
 * Verse 2: two, shoe
 * Verse 3: three, knee
 *
 * Repeat verse template filling in changed words for each verse.
 * - Need to know what verse we are on
 * - Need a way to identify each word
 */

const verses = [
  { number: 'one', word: 'drum' },
  { number: 'two', word: 'shoe' },
  { number: 'three', word: 'knee' },
  { number: 'four', word: 'door' }
]

for (const verse of verses) {
  console.log(`This old man, he played ${verse.number},
He played knick-knack on my ${verse.word};
With a knick-knack paddywhack,
Give a dog a bone,
This old man came rolling home.`)
}

/**
 I don't know why she swallowed a fly - perhaps she'll die!
That wriggled and jiggled and tickled inside her!
How absurd to swallow a bird!
Imagine that! She swallowed a cat!
What a hog, to swallow a dog!
She just opened her throat and swallowed a goat!
I don't know how she swallowed a cow!
...She died, of course!
 */

/*
fly, spider, bird, cat, dog, goat, cow, horse
*/

/**
 * Loop through each animal
 * - output the animal line
 * - then starting from the current animal
 * - work backwards to the beginnning of the list
 */

const animals = [
  'fly',
  'spider',
  'bird',
  'cat',
  'dog',
  'goat',
  'cow',
  'horse'
]
const lines = [
  `I don't know why she swallowed a fly - perhaps she'll die!`,
  `That wriggled and jiggled and tickled inside her!`,
  `How absurd to swallow a bird!`,
  `Imagine that! She swallowed a cat!`,
  `What a hog, to swallow a dog!`,
  `She just opened her throat and swallowed a goat!`,
  `I don't know how she swallowed a cow!`,
  `...She died, of course!`
]

for (let i = 0; i < animals.length; i++) {
  console.log(``)
  console.log(`There was an old lady who swallowed a ${animals[i]};`)
  console.log(lines[i])

  // if not on horse
  if (i !== animals.length - 1) {
    for (let j = i; j > 0; j--) {
      console.log(`She swallowed the ${animals[j]} to catch the ${animals[j - 1]};`)

      if (j === 2) {
        console.log(lines[1])
      }
    }

    if (i > 0) {
      console.log(lines[0])
    }
  }
}
