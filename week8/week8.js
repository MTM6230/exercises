const parent = document.getElementById('parent')
console.log(parent)

const children = document.querySelectorAll('.child')
console.log(children)

const kids = document.getElementsByClassName('child')
console.log(kids)

const third = parent.querySelector('.child:nth-child(3)')
console.log(third)

// third.remove()

console.log(children)
console.log(kids)
console.log(third)

for (const kid of kids) {
  kid.classList.add('grow')
}

third.classList.remove('grow')
third.style.flexGrow = 3
third.href = 'http://google.ca'