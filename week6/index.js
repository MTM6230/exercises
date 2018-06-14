for (let i = 1; i <= 1000; i++) {
  console.log(i)
}

for (let i = 0; i <= 1000; i++) {
  console.log(i++)
}

for (let i = 0; i <= 1000; i+=2) {
  console.log(i)
}

for (let i = 0; i <= 500; i++) {
  console.log(i*2)
}

for (let i = 0; i <= 1000; i++) {
  // 4/2 remainder of 0
  // 3/2 remainder of 1
  // 4%2 === 0
  // 3%2 === 1
  if (i % 2 === 0) {
    console.log(i)
  }
}

const arrays = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

const sums = []

for (const array of arrays) {
  let sum = 0
  for (const number of array) {
    sum = sum + number
  }
  sums.push(sum)
}
console.log(sums)

function multiply (a, b) {
  return a * b
}

console.log(multiply(3, 5))

function multiplyAll (...numbers) {
  let product = 1
  for (const number of numbers) {
    product = product * number
  }
  return product
}

console.log(multiplyAll(5, 18, 4, 92))

function multiplyArray (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 3
  }

  return numbers
}

const num = [1, 2, 3, 4, 5]

// [3, 6, 9, 12, 15]
console.log(multiplyArray(num))

function reverseString (string) {
  // // convert string to array
  // const array = string.split('')
  // // reverse the array
  // array.reverse()
  // // convert array to string
  // const string = array.join('')
  return string.split('').reverse().join('')
}

console.log(reverseString('hello'))