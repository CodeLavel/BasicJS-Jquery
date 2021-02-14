//Basic Arrays

var names = ['John','Joe','Jack','Jane']; //จะเกิดปัญหาเมื่อเรียกใช้งานสมาชิกในตัวแปร Names นี้
var fruits = new Array('Apple','Banana','Orange','Mango');

//แสดงผลสมาชิกออกมา
// console.log(names);
//เช็คชนิดข้อมูลตัวแปรนี้
// console.log(typeof(names));


var firstnames = ['John','Joe','Jack','Jane']; 

console.log(firstnames[0]);
console.log(firstnames[1],firstnames[3]);

//เปลี่ยนค่าสมาชิก
firstnames[1] = "Jany";
console.log(firstnames);

//เพื่มสมาชิกใหม่
firstnames[4] = "Johny";
console.log(firstnames);
console.log(fruits);

//การวนลูปอ่านสมาชิกของ array
for(var i=0;firstnames[i];i++){
    console.log(firstnames[i]);
}

//การวนลูปด้วยฟังก์ชัน forEach
fruits.forEach(myFruit);

function myFruit(value){
    console.log(value);
}








