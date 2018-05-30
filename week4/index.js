const hero = {
  name: 'Spiderman',
  weapons: ['Webbing', 'Guns', 'Laser eyes']
}

function greeting () {
  return `Hello, my name is ${hero.name}. I am a hero.`
}

const chooseWeapon = function () {
  const randomNum = Math.floor(Math.random() * hero.weapons.length)
  return hero.weapons[randomNum]
}

function attack () {
  return `Attacking with a ${chooseWeapon()}.`
}
