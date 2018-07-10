const a = document.querySelector('.child:first-child')

// setTimeout(function () {
//   a.classList.add('grow')
// }, 1000)

// setTimeout(function () {
//   a.classList.remove('grow')
// }, 2000)

const children = document.querySelectorAll('.child')
// let child = 0; 

// const growInterval = setInterval(function () {
//   children[child].classList.toggle('grow')
// }, 1000)

// const childInterval = setInterval(function () {
//   if (child >= children.length - 1) {
//     clearInterval(growInterval)
//     clearInterval(childInterval)
//   } else {
//     child++
//   }
// }, 2010)

for (const child of children) {
  child.addEventListener('mouseover', function (event) {
    child.classList.add('grow')
  })

  child.addEventListener('mouseout', function (event) {
    child.classList.remove('grow')
  })

  child.addEventListener('click', function (event) {
    child.insertAdjacentHTML('afterend', `<a href="#" class="child">${child.textContent}</a>`)
  })
}

document.addEventListener('keyup', function (event) {
  if (event.key === 'a') {
    children[0].classList.toggle('grow')
  } else if (event.key === 'b') {
    children[1].classList.toggle('grow')
  } else if (event.key === 'c') {
    children[2].classList.toggle('grow')
  } else if (event.key === 'd') {
    children[3].classList.toggle('grow')
  }
})
 
