const { readFileSync, writeFileSync } = require('fs')

const first     = readFileSync('./content/subfolder/icd-10.json', 'utf-8')
const second    = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second);

writeFileSync(
    './content/resultWriteSync.txt', 
    `This is the result page: ${first}, ${second}`,
    {flag: 'a'}
)