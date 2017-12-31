var fs = require('fs')

var input = fs.createReadStream('.\\input.txt')
var output = fs.createWriteStream('.\\outut.txt')

input.pipe(output)
