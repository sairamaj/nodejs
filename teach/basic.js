var x=10   
var y=20  
console.log(x)
console.log(x+y)

function sayHello(){
    console.log("hello world")
}

sayHello()

// create a object
var p = {
    name: "sai",
    lastname:"jamal",
    age:51
}

console.log(p)
console.log(JSON.stringify(p))

var data = JSON.stringify(p)

var p2 = JSON.parse(data)
console.log(p2)

// array
var persons = []
persons.push({ name:"sai"})
persons.push({ name:"sridevi"})
console.log(persons)

// sending functions as arguments
 math = function(x,y,operation){
    return operation(x,y)
}

add = function(x,y){
    return x+y;
}

sub = function(x,y){
    return x-y;
}

console.log(math(10,20,add))
console.log(math(10,20,sub))

// passing inline function.
console.log(math(10,20,function(a,b){
    return a*b;
}))

// passing inline function in short form.
console.log(math(10,20, (a,b)=> a*b))

