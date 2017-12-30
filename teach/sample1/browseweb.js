var request = require('request')

request("http://www.cnn.com", {}, (err,resp,body)=>{
    if(err){
        console.log("error:" + err)
    }else{
        console.log("success")
        console.log(body.length)
    }
})

var http = require('http')

http.get('http://www.cnn.com', resp=>{
    let data = ''
    resp.on('data', (chunk)=>{
        data += chunk
    })

    resp.on('end', ()=>{
        console.log("success")
        console.log(data.length)
    })
}).on('error',err=>{
    console.log("error2:" + err)
})