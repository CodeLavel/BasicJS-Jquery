//ปัญหาของการใช้ var
var name = "John"
// {
//         var name = "Jany"
//         console.warn(name);
// }

function a(){
    var name = "Jany"
    console.warn(name);
}

console.warn(name); //Jany

//ตัวอย่างปัญหาอื่นๆ ที่เกิดจาก var
var msg = ['Hello','JavaScript','es2015'];
for(var i=0;i<=msg.length;i++){
    console.warn(i);

    setTimeout(function(){
        console.warn(msg[i])
    },1000)
}

//ตัวอย่างการใช้ let
// var fullname;
// var fullname;
// console.log(fullname);

// let fullname;
// let fullname;
// console.log(fullname);



//ตัวอย่างการใช้ const
// const firstname = "Turterz"
//ลองเปลี่ยนค่า
// firstnames = "JJ" //จะ error 

// console.log(firstname);

const person = {}
person.name = "Turterz"
person.email = "Turterz@gmail.com"
console.log(person);













