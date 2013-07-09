var fs = require('fs')
var content = fs.readFileSync('index.html', 'utf8')
console.log(content);