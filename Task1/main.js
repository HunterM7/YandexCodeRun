const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

// 3 13 12 4 14 6

const lines = []
// const lines = ['6', '3 13 12 4 14 6']
// const lines = ['4', '-1 12 7 3']

rl.on('line', (line) => {
  lines.push(line)
}).on('close', () => {
  const count = lines[0]
  const nails = lines[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)

  let result = 0
  let prevLink = false

  result += nails[1] - nails[0]
  prevLink = true

  if (count > 2) {
    for (let i = 1; i < count - 1; i++) {
      const leftLength = nails[i] - nails[i - 1]
      const rightLength = nails[i + 1] - nails[i]
      const choice = leftLength - rightLength > 0 ? 'right' : 'left'

      if (choice === 'left') {
        if (prevLink || i === count - 2) {
          prevLink = false
        } else {
          result += leftLength
          prevLink = false
        }

        prevLink = false
      } else {
        if (prevLink) {
          prevLink = false
        } else {
          result += rightLength

          prevLink = true
        }
      }
    }
  }

  if (!prevLink && count > 2) {
    result += nails.at(-1) - nails.at(-2)
  }

  console.log(result)
})
// .close()
