const hero = {
  name: 'Spiderman',
  weapons: ['Webbing', 'Guns', 'Laser eyes']
}

function greeting (salutation = 'Hello') {
  return `${salutation}, my name is ${hero.name}. I am a hero.`
}

const chooseWeapon = function () {
  const randomNum = Math.floor(Math.random() * hero.weapons.length)
  return hero.weapons[randomNum]
}

function attack (number = 1) {
  const attacks = []
  for (let i = 0; i < number; i++) {
    attacks.push(`Attacking with a ${chooseWeapon()}.`)
  }

  return attacks.join(`\n`)
}
