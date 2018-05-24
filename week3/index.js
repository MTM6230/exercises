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
