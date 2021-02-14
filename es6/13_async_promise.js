//Promise = การให้ค่า value , future

const a = 'Yes'

const ap = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //resolve('OK')
        reject('Cancel')
    },2000)
})
console.log(a); //Yes
console.log(ap); //promise

//หากเราต้องการเปิดกล่อง promise
ap.then(e=>{
    console.log(e);
}).catch(e=>{
    console.log(e);
})