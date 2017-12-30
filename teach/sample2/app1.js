var mint = require('./mint.js')
var Promise = require('bluebird')
var mintPromisify = Promise.promisifyAll(mint)

mintPromisify.getAccountsAsync()
    .then(accts => {
        console.log("success")
        console.log(accts)
    })
    .catch(err => {
        console.log("error")
        console.log(err)
    })

