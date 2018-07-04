const g = document.createElement('a')
g.textContent = 'G'
g.classList.add('child', 'grow')
g.href = '#'

const parent = document.getElementById('parent')
parent.appendChild(g)

const f = document.createElement('a')
f.textContent = 'F'
f.classList.add('child', 'grow')
f.href = '#'

parent.insertBefore(f, g)

console.log(parent.innerHTML)

parent.innerHTML += `<a href="#" class="child grow">H</a>`

parent.insertAdjacentHTML('beforeend', `<a href="#" class="child grow">I</a>`)

const links = []

// Add old links to array
links.push(parent.innerHTML)

for (let i = 1; i <= 3000; i++) {
  links.push(`<a href="#" class="child grow">${i}</a>`)
}

parent.innerHTML = links.join(' ')

const fragment = document.createDocumentFragment()

for (let i = 1; i <= 3000; i++) {
  const a = document.createElement('a')
  a.href = '#'
  a.classList.add('child', 'grow')
  a.textContent = i

  fragment.appendChild(a)
}

parent.appendChild(fragment)