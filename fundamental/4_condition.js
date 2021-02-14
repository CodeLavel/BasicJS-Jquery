//Condition Operator
var age = 15;
var votable = (age <= 18)? "Too young":"Old enough";
console.log(votable);

// Condition if else
var number = 10;
if(number <= 10){ //true
   var x = "Success"; 
}else{ //false
    var x ="Fail"; 
}

console.log(x);

//ฟังก์ชันดึงวันที่ออกมา
var day = new Date().getDay();
switch(day){
    case 0:
        console.log("Sunday");
        document.body.style.backgroundColor = "red";
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tueday");
        break;
    default:
        console.log("Sunday");
        break;
}
