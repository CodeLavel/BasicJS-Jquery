//ES5
var greet = function(name,msg){
    return msg + name
}
console.log(greet("Tur","Hello"));

//Arrow ES6
var arrowGreet = (name,msg) =>{
    return msg + name
}

//ลดรูปกรณีมีการ return เพียงอย่างเดียว
// var arrowGreet = (name,msg) => msg + name
// console.log(arrowGreet("Turter","Hello"));

//ลดรูปต่อไปได้อีก ถ้าฟังก์ชันมีการรับเพียง 1 parameter
var arrowGreet = msg => msg
console.log(arrowGreet("Hello"));

//ตัวอย่าง
var square =x => x*x
console.log(square(3));