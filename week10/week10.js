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

for (const child of children) {
  child.addEventListener('mouseover', function () {
    child.classList.add('grow')
  })

  child.addEventListener('mouseout', function () {
    child.classList.remove('grow')
  })

  child.addEventListener('click', function () {
    child.insertAdjacentHTML('afterend', `<a href="#" class="child">${child.textContent}</a>`)
  })
}
