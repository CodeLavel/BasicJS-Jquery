//ตัวอย่างการสร้าง Class ใน JavaScript
class Person {


    //สร้าง Constructor
    constructor(name){
        this.name = name
    }


    sayHi(){
        console.log('Hi, My name is'+ this.name );
    }

    get gender(){
        return this._gender
    }

    set gender(g){
        this._gender = g
    }


}

//การสร้าง Object หรือ instance
const p = new Person('Turterz')
console.log(p.name);
p.sayHi()


p.gender = "Male"
console.log(p.gender);