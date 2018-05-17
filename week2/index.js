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
