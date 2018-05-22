const fourthLittlePig = {
  name: 'Pork Chop'
}

fourthLittlePig.house = 'steel'
fourthLittlePig.favoriteHobby = 'dancing'
console.log(fourthLittlePig)

fourthLittlePig['favoriteHobby'] = 'Running from the Big Bad Wolf'
console.log(fourthLittlePig)

delete fourthLittlePig['favoriteHobby']
console.log(fourthLittlePig)

const favoriteFood = [
  'pork',
  'bacon',
  'ham'
]
console.log(favoriteFood)
favoriteFood.unshift('tendorloin')
console.log(favoriteFood)
favoriteFood.push('greens')
console.log(favoriteFood)
favoriteFood[2] = 'Pizza'
console.log(favoriteFood)

const threeLittlePigs = {
  number: 5,
  adjective: 'cute',
  noun: 'dog',
  verbs: ['run', 'dance', 'jump', 'eat', 'drink', 'lie'],
  pluralNouns: ['students', 'geese', 'boys']
}

console.log(`Once upon a time a time, there were ${threeLittlePigs.number} ${threeLittlePigs['adjective']} pigs. One day, their ${threeLittlePigs.noun} said, "You are all grown up and must ${threeLittlePigs.verbs[0]} on your own." So they left to ${threeLittlePigs.verbs[1]} their houses.The first little pig wanted only to ${threeLittlePigs.verbs[2]} all day and quickly built his house out of ${threeLittlePigs.pluralNouns[0]}.The second little pig wanted to ${threeLittlePigs.verbs[3]} and ${threeLittlePigs.verbs[4]} all day so he built his house with ${threeLittlePigs.pluralNouns[1]}.The third little pig knew the wolf lived nearby and worked hard to ${threeLittlePigs.verbs[5]} his house out of ${threeLittlePigs.pluralNouns[2]}.`)
