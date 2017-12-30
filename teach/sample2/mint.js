var request = require('request')

function getAccountsSync() {

    return [
        {
            name: "Savings(Sync) 1234",
            balance: 1000
        },

        {
            name: "Checking(Sync) 1234",
            balance: 2000
        }
    ]
}

function getAccounts(callback) {

    request("http://www.cnn.com", {}, (err, resp, body) => {
        callback( null,
            [
                {
                    name: "Savings(Async) 1234",
                    balance: 1000
                },

                {
                    name: "Checking(Async) 1234",
                    balance: 2000
                }
            ])
    })


}

module.exports.getAccountsSync = getAccountsSync
module.exports.getAccounts = getAccounts

