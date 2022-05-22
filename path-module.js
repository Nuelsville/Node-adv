const path = require('path')

console.log(path.sep)
const filePath = path.join(__dirname,'/content','subfolder','text', 'text.txt')

console.log(filePath)

const base = path.basename(filePath)

console.log(base)

const absolute = path.resolve(__dirname, '/content', 'subFolder', 'text', 'text.txt')

console.log(absolute)