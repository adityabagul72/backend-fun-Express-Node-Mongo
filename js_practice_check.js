var arr = [1,2,3,4]

// for each loop
// arr.forEach(function (val){
// console.log(val+ " hello world")
// })

// map function crceates and blank array and perform operation on it 

// var adi = arr.map((val)=> {
//     return val * 2;
// })
// console.log(adi);

// filter is used to fiter an array in true or false 
// arr.filter((val)=> {
//     if(val >= 2){
//         console.log(true + val);
//     }
//     else {
//         return false;
//     }
// })


// // used to find the value 
// arr.find((val)=> {
//     if(val == 2){
//         console.log("found "+ val);
//     }
// })

// js objects 
var obj = {
    name : "aditya",
    age : 12
}
Object.freeze(obj) // now we cant change the value  after freeze 
console.log(obj.name)
obj.age = 25;
console.log(obj.age)