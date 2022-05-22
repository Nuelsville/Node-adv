const {readFile, writeFile} = require('fs')

console.log('start');

readFile('./content/subfolder/icd-10.json', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return
    } 
    console.log('done loading')
})

console.log('i continued');