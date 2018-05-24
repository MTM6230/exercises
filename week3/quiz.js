const dwarfs = ['Doc', 'Dopey', 'Bashful', 'Grumpy', 'Sneezy', 'Sleepy', 'Happy']
dwarfs.sort()
dwarfs.shift() // remove first name
dwarfs.pop() // remove the last name
console.log(dwarfs.reverse())

const story = {
  adjective: 'green',
  nouns: ['dog', 'cat'],
  verb: 'ran',
  pluralNoun: 'cars'
}

console.log(`There once was an ${story.adjective} ${story.nouns[0]} who ${story.verb} in a ${story.nouns[1]}. She had so many ${story.pluralNoun} she didn’t know what to do.`)
