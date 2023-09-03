const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
}).on('close', () => {
  console.log('Result: ', lines)
})
