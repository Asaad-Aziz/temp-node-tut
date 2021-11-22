const path = require('path')
 
console.log(path.sep)
console.log(path.join)

const filepath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'content....')
console.log(absolute)