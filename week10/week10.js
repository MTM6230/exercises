const children = document.querySelectorAll('.child')
// hold the index of the current child
let child = 0
// setTimeout(function () {
//   child.classList.add('grow')
// }, 1000)

// setTimeout(function () {
//   child.classList.remove('grow')
// }, 2000)

// const timer1 = setInterval(function () {
//   children[child].classList.toggle('grow')
// }, 1000)


// const timer2 = setInterval(function () {
//   // as long as child is less than last index
//   if (child < children.length - 1) {
//     child++
//   } else {
//     clearInterval(timer1)
//     clearInterval(timer2)
//   }
  
// }, 2010)

const parent = document.getElementById('parent')
parent.addEventListener('mouseover', function (event) {
  if (event.target.classList.contains('child')) {
    event.target.classList.add('grow')
  }
})

parent.addEventListener('mouseout', function (event) {
  if (event.target.classList.contains('child')) {
    event.target.classList.remove('grow')
  }
})

parent.addEventListener('click', function (event) {
  if (event.target.classList.contains('child')) {
    event.target.insertAdjacentHTML('afterend', `<a href="#" class="child">${event.target.textContent}</a>`)
  }
})

for (const child of children) {
  // child.addEventListener('mouseover', function () {
  //   child.classList.add('grow')
  // })

  // child.addEventListener('mouseout', function () {
  //   child.classList.remove('grow')
  // })

  // child.addEventListener('click', function () {
  //   child.insertAdjacentHTML('afterend', `<a href="#" class="child">${child.textContent}</a>`)
  // })
}

document.addEventListener('keyup', function (event) {
    if (event.key === 'a' || event.keyCode === 65) {
      children[0].classList.toggle('grow')
    } else if (event.key === 'b' || event.keyCode === 66) {
      children[1].classList.toggle('grow')
    } else if (event.key === 'c' || event.keyCode === 67) {
      children[2].classList.toggle('grow')
    } else if (event.key === 'd' || event.keyCode === 68) {
      children[3].classList.toggle('grow')
    }
    console.log('Key', event.key)
    console.log('KeyCode', event.keyCode)
})