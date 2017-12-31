var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/', (req, resp) => {
    resp.send('hello world')
})

app.get('/orders',(req,resp)=>{
    resp.send([
        {
            id: "1",
            item: "phone"
        },
        {
            id: "2",
            item: "tv"
        }
    ])
})
app.listen(9000)
console.log("listening 9000...")