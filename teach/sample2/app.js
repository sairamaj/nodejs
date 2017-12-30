var mint = require('./mint.js')

console.log("Calling sync version")
var accts = mint.getAccountsSync()
console.log(accts)
console.log("Done sync version")

console.log("calling getAccounts async...")
mint.getAccounts((err, accts) => {
    console.log("async values")
    console.log(accts)
});
console.log("called async version and results will come later...")
