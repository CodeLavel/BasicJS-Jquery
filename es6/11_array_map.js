const array = [1,2,3]
//-------แปลงให้เป็น [2,4,6]
//หรือเรียกว่าการ mutate array
// for(let i = 0 ; i < array.length; i++){
//     array[i] = array[i] * 2
// }

// console.log(array);

//วิธีแก้ไข
const result = []
// for(let i = 0 ; i < array.length; i++){
//     const a = array[i] * 2
//     result.push(a)
// }



array.forEach(e =>{ 
    const a=e*2
    result.push(a)
}) 
//ปัญหายังคงมี คือเรื่อง side effect

console.log(result);
console.log(array);


//Array map 

// const result_map = array.map(function(result){
//     return result*2
// })
const result_map = array.map(result => result*2)

console.log(result_map);


const pets = [
    {name: 'Bebo'},
    {name: 'Mano'}
]

const result_data = pets.map(e => e.name)
console.log(result_data);


//ตัวอย่างเพิ่มเติม
const fruits = ['banana','apple','mango']

const result_fruit = fruits.map((e,i,d)=>{
    return `Day ${i + 1} eat ${e} ของเดิม ${d}`
})

console.log(result_fruit);