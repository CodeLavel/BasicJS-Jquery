//การสร้างข้อมูล Object

var person = {
    firstName:"Turterz",
    lastaNme:"Jantharachai",
    age:25,
    gender:"Male",
    fullName:function(){
        return this.firstName + " " +this.lastaName;
    }
}

//การเรียกใช้งานหรือการเข้าถึว Object
//Method1
// ojectName.propertyName
console.log(person.firstName);

//Method 2
//objectName["propertyName"]
console.log(person["lastaName"]);


//Method 3
//ojectName.methodName()
console.log(person.fullName());


//Object Nested ที่มีการซ้อนกันมากกว่า 1 ชั้น
var user = {
    id:"1",
    email:"turterz@gmail.com",
    personInfo:{
        name:"john",
        address:{
            line1:"255 Nontaburi",
            line2:"Bangsue Distric",
            city:"Bangkok",
            zipcode:"12120"
        }
    }
}

//การเข้าถึงสมาชิก
console.log(user.personInfo);
console.log(user.personInfo.name);
console.log(user.personInfo.name.address);
console.log(user.personInfo.name.address.city);





