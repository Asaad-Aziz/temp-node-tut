const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt' , 'utf-8')
const sec = readFileSync('./content/sec.txt', 'utf-8')

writeFileSync(
    './content/result-sync.txt', 
    `here is the resulst ${first}, ${sec}`,
    {flag: 'a'}
)