const parent = document.getElementById('parent')

const g = document.createElement('a')
g.classList.add('child', 'grow')
g.textContent = 'G'
g.href = '#'

parent.appendChild(g)

const f = document.createElement('a')
f.classList.add('child', 'grow')
f.textContent = 'F'
f.href = '#'

parent.insertBefore(f, g)

parent.innerHTML += `<a href="#" class="child grow">H</a>`

parent.insertAdjacentHTML('beforeEnd', `<a href="#" class="child grow">I</a>`)

const html = []
html.push(parent.innerHTML)
for (let i = 1; i <= 3000; i++) {
  html.push(`<a href="#" class="child grow">${i}</a>`)
}

parent.innerHTML = html.join(' ')
