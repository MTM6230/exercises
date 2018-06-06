const title = 'One Fish, Two Fish, Red Fish, Blue Fish'

console.log(title.toUpperCase())
console.log(title.toLowerCase())

console.log(title.indexOf('One'))
console.log(title.indexOf('Fish'))

console.log(title.includes('One'))
console.log(title.includes('Red'))

console.log(title.indexOf('Green'))
console.log(title.includes('Green'))

const fish = title.split(', ')
console.log(fish)

console.log(Array.isArray(fish))
// where is it? use indexOf
console.log(fish.indexOf('Blue Fish'))
// Is it there? use includes
console.log(fish.includes('Two Fish'))

// Getting a portion of the fish array
const colorFish = fish.slice(2)
console.log(colorFish)

// Creating a copy of the fish array
const copyFish = fish.slice(0)
console.log(copyFish)

const numberFish = fish.slice(0, 2)
console.log(numberFish)

console.log(fish.join('\n'))

const book = {
  title: title,
  author: 'Dr Seuss',
  publishedDate: 1960
}

console.log('keys', Object.keys(book))
console.log('values', Object.values(book))
