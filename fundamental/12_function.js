//การสร้างฟังก์ชันแบบไม่มีการรับ Parameter
function wakeup(){
    console.log("Hello JS");
}

//ฟังก์ชันที่มีการรับ parameter
function sayHello(name){
    console.log("Hello" + name)
}

//ฟังก์ชันที่มีการรับ parameter หลายตัว
function calArea(width,height){
    var area = width * height;
    return area;
}


//การเรียกใช้งานฟังก์ชัน
wakeup();
sayHello("Turterz");
calArea();
console.log("พื้นที่คทิ " +calArea(3,4) + " ตรม.");



//ฟังก์ชันแบบ Expressions
//เป็นการเก็บฟังก์ชันลงในตัวแปร
var action = function(a,b){ //Anonymous function
    return a*b
}
    
var result = action(4,3);

console.log(action(3,5));
console.log(result);











