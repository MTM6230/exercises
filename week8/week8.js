const parent = document.getElementById('parent')
console.log([parent])

const children = document.querySelectorAll('.child')
console.log('children', children)

const kids = document.getElementsByClassName('child')
console.log('kids', kids)

const third = document.querySelector('.child:nth-child(3)')
console.log(third)

// third.remove()
console.log('children', children)
console.log('kids', kids)

for (const child of children) {
  child.classList.add('grow')
}

third.classList.remove('grow')

third.style.flexGrow = 3

third.href = 'http://google.ca'
third.target = '_blank'