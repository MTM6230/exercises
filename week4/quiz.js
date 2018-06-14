const ducks = ['Five', 'Four', 'Three', 'Two', 'One', 'No']

/*
Five little ducks
Went out one day
Over the hills and far away
Mother duck said
"Quack, quack, quack, quack"
But only Four little ducks came back.

Four little ducks
Went out one day
Over the hills and far away
Mother duck said
"Quack, quack, quack, quack."
But only Three little ducks came back.

Three little ducks
Went out one day
Over the hills and far away
Mother duck said
"Quack, quack, quack, quack."
But only Two little ducks came back.

Two little ducks
Went out one day
Over the hills and far away
Mother duck said
"Quack, quack, quack, quack."
But only One little duck came back.

One little duck
Went out one day
Over the hills and far away
Mother duck said
"Quack, quack, quack, quack."
But No little ducks came back.

// Last verse is different
Sad mother duck
Went out one day
Over the hills and far away
The sad mother duck said
"Quack, quack, quack."
And all five little ducks came back.
*/

for (let i = 0; i < ducks.length; i++) {
  if (ducks[i] === 'No') {
    console.log(`Sad mother duck
    Went out one day
    Over the hills and far away
    The sad mother duck said
    "Quack, quack, quack."
    And all five little ducks came back.`)
  } else {
    console.log(`${ducks[i]} little ducks
    Went out one day
    Over the hills and far away
    Mother duck said
    "Quack, quack, quack, quack"`)
    if (ducks[i] === 'One') {
      console.log(` But ${ducks[i+1]} little ducks came back.`)
    } else {
      console.log(` But only ${ducks[i+1]} little ducks came back.`)
    }
  }
 
}