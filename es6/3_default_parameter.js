//ES5
function sayHi(name){
    var name = name || 'Chai'
    console.log("Hi" +name)
}

sayHi()
sayHi('Turterz')

//ES6
function sayHello(name = 'Chai'){
    console.log("Hi" +name)
}

sayHello()
sayHello('Turterz')