var array = []

function forLoop(array){
  for (let i = 0; i < 25; i++)
    if (i === 1)
    array.push(`I am ${i} strange loop.`)
    else
    array.push(`I am ${i} strange loops.`)
  return array
}

function whileLoop(num){
  while (num > 0) {
    num -= 1  // subtract one from number ("original argument")
    console.log(num)
  }
    return 'done'
}

function maybeTrue() {
  var randomNum = Math.random()
  console.log(randomNum)
  return randomNum >= 0.5
}

function doWhileLoop(array){
  do {
  console.log('doo-bee-doo-bee-doo')
 } while (maybeTrue());
}
