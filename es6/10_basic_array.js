//Join Array

const numbers = [10,20,30,40]
console.log(numbers.join());
console.log(numbers.join(','));
console.log(numbers.join('-'));
console.log(numbers.join('+'));
console.log(numbers.join(' '));

//หาผลรวมสมาชิก
console.log(numbers[0]+numbers[1]+numbers[2]+numbers[3])

//ใช้ loop หาผลรวม
let result = 0
for(let i = 0; i<numbers.length; i++){
    result += numbers[i]
}

console.log(result);

//Reduce Array
const result_data = numbers.reduce((sum,number) => {
    return sum + number 
},0) // 0 คือค่าเริ่มต้นของ ตัวแปร Sum

console.log(result_data); //100

//Concat ของ Array เป็นการรวม Array
const myarr1 = [5,6,7]
const myarr2 = [8,9,10]

const myresult = myarr1.concat(myarr2)
console.log(myresult);

//Push การเติมค่าเข้าไปใน Array และคืนค่าจำนวน 
const mutate = ['red','green']
const count = mutate.push('blue')
console.log(mutate);
console.log(count);

//Pop ลบสมาชิกตัวสุดท้านของ array
const pop = mutate.pop()
console.log(mutate);
console.log(pop);

//Shift จะเป็นการลบสมาชิกตัวแรกออก
const shift = mutate.shift()
console.log(mutate);
console.log(shift);

//Unshift เพิ่มสมาชิกกลับเข้าไปที่ตัวแรก
const unshift = mutate.unshift('red')
mutate.unshift('yellow')
console.log(mutate);
console.log(unshift);

//Splice ดึงข้อมูลสมาชิกแบบระบุตำแหน่งที่แน่นอน
const mutate_arr = ['red','green','0','1','blue']
//const splice = mutate_arr.splice()
//const splice = mutate_arr.splice(1) //การกำหนดตำแหน่งว่าจะเริ่ม remove
//const splice = mutate_arr.splice(1,1) //ลบจากลำดับที่ 1 และลบออก 1 ตัว
const splice = mutate_arr.splice(2,2,'white','pink') //ลบของเก่าออกและเพิ่มตัวใหม่เข้าไป

console.log(mutate_arr);

//Slice
const mutate_arr1 = ['red','green','0','1','blue']
//const slice = mutate_arr1.slice(1)
//const slice = mutate_arr1.slice(1,3) //ดึงตังแต่ตำแหน่งที่ 1 ถึง 3 แต่ไม่รวม 3
const slice = mutate_arr1.slice() //ถ้าส่งค่า slice เข้าไปเฉยๆไม่ระบุตำแหน่ง จะเป็นการ copy array

console.log(slice);


//Avoid array Mutation
const fruits = ['banana','apple','mango']
//หากอยากเพิ่ม strawberry เข้าไปหน้า apple โดยไม่เปลี่ยนแปลงค่าใน fruits เดิม จะทำอย่างไร?

// const newFruit = [
//     ...fruits.slice(0,1),
//     'strawberry',
//     ...fruits.slice(1)
// ]

// console.log(newFruit);
// console.log(fruits);

//อยากลบ apple จาก array ตัวใหม่
const newFruit = [
    ...fruits.slice(0,1),
    ...fruits.slice(2)
]

console.log(newFruit);

//การวน loop array
//For Each
const num_arr = ['one','two','three']
num_arr.forEach(result => {
    console.log(result);
})


//For of
for(const v of num_arr){
    if(v == 'two'){
        break
    }
    console.log(v);
}


//การค้นหาตำแหน่งสมาชิกของ array
const num_arrays = [1,4,8,10,8,11,12]
// const index = num_arrays.indexOf(10)
const index = num_arrays.indexOf(8)
console.log(index);

//FindIndex
const found = num_arrays.findIndex(e => e % 4 == 0)
console.log(found);