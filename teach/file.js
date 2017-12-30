var fs = require('fs')

// sync version.
console.log('[sync]readianag the file in sync')
var data = fs.readFileSync('.\\file.txt', 'utf-8')
console.log('[sync]reading the file done.')
console.log(data)

console.log("[async]reading the file in asynchronously")
// async version
fs.readFile('.\\file.txt', 'utf-8', (err, response) => {
    console.log("[async]reading the file done.")
    if (err) {
        console.log("[async]error" + err)
    } else {
        console.log("[async]:" + response)
    }
})

console.log("[async]started reading..")

// you may get doubt that program ended here and node.exe should end here. 