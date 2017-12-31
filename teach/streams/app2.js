var fs = require('fs')

var input = fs.createReadStream('.\\input.txt')
var output = fs.createWriteStream('.\\outut.txt')

input.setEncoding('utf-8')

var data = ''
input.on('data', chunk=>{
    console.log(chunk)
    data += chunk
})

input.on('end',()=>{
    console.log('done')
    output.write(data)
    output.end()
})

