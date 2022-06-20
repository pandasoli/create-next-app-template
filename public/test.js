const Twemojis = require('../src/components/Twemojis/emojis.json')
const fs = require('fs')

const dir = fs.readdirSync('./twemojis')
const emojisValue = Object.values(Twemojis)

console.log(
  ...dir.filter($ =>
    // $ = odsjhjkadsnks.svg
    !emojisValue.includes($.substring(0, $.length - 4))
  ).map($ =>
    $ + '\n'
  )
)

