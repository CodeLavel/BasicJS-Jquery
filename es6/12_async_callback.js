//Synchronous & Asynchronous Programming in JS
// function doA(){
//     setTimeout(function(){
//         console.log("This is 1st say message");
//     },2000)
    
// }


// function doB(){ 
//     console.log("This is 2nd say message");
// }

 //ทดสอบเรียกใช้ฟังก์ชันด้านบน

// doA()
// doB()


//การแก้ปัญหาด้านบนเราจะใช้แบบ Asynchronous
function doA(callback){
    setTimeout(function(){
        console.log("This is 1st say message");
        callback()
    },2000)
    
}

function doB(){ 
    console.log("This is 2nd say message");
}


//เรียกทำงาน
doA(function(){
    doB()
})


//ตัวอย่างการจำลองโหลดข้อมูลจาก Ajex
function loadNews(cb){
    setTimeout(function(){
        cb(
            [
                {id: 1,title:'a'},
                {id: 2,title:'b'},
                {id: 3,title:'c'},
                {id: 4,title:'d'},
                {id: 5,title:'e'},
                {id: 6,title:'f'},
                {id: 7,title:'g'},
                {id: 8,title:'h'},
            ]
        )
    },2000)
}

//เรียกใช้งาน
loadNews(function(result){
    console.log(result);
})