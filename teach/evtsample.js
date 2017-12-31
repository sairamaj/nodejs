var evt = require('events')

var emitter = new evt.EventEmitter()
emitter.on('myevt', (data)=>{
    console.log('my event raised.' + data)
})

emitter.on('done',()=>{
    console.log('done')
})

emitter.emit('myevt',"first")
emitter.emit('myevt','second')
emitter.emit('done')