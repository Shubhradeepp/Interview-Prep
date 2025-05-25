//Basics

// =>   Var
console.log('Hello Shubhradeep')
// var a='original' //Global Scope
// {
//   console.log(a) //original
//   var a='change'
//   console.log(a)//change
// }
// console.log(a)//change


// => Let

 let a='original'
//let can updated but not re declear
{
  //let is block scope, 
  let a='change'
  console.log(a)
}
 console.log(a) //Original

const v="s"
let s="TYY"
console.table([a,v,s])
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │  null  │
// │    1    │  's'   │
// │    2    │ 'TYY'  │
// └─────────┴────────┘



//******Loop js


/* For in loop  commonly used for iterating over the keys (property names) of an object, including arrays and objects.

It's not recommended for iterating over arrays, as it may have unexpected behavior when used with arrays due to its interaction with prototype properties.*/

/*const arr=[10,2,3,4]
for(let k of arr){
console.log(k) }  //10,2,3,4 */

const B=[ 
    {name : "a",id: 1},
    {name : "b",id: 2},
    {name : "c",id: 3},
    ];
    for(let n in B){
    console.log(B[n])
    //{ name: 'a', id: 1 }
    //{ name: 'b', id: 2 }
    //{ name: 'c', id: 3 }
 // typrof console.log(typeof(B[n]))  object
    }


    const obj = { a: 10, b: 2, c: 3 };
    for (let key in obj) {
      console.log(key, obj[key]);
    }

/*Use for...of to iterate over the values of iterable objects, such as arrays and strings. It provides a cleaner syntax and is safer for array iteration.*/

const array = [1, 2, 3];
for (let value of array) {
  console.log(value);
  
}

const A=[ //A is a array
{name : "a",id: 1},
{name : "b",id: 2},
{name : "c",id: 3},
];
for(let n of A){
console.log(n)}  // n=> type of Object
// { name: 'a', id: 1 }
// { name: 'b', id: 2 }
// { name: 'c', id: 3 }




//Function.js
var a1=()=>{
    console.log("Without arguement")}
    a1();
    
    var a2 = (a) => {
        console.log('With argument=' + a);
    }
    let a = 5;
    // Always declear parameter before function call
a2(a);

    
var a3 = (a) => {
    console.log('With argument & return=' + a);
    return a+5;
    
    }
console.log(a3(a));
    
// *** spread operator


// Original array
const originalArray = [1, 2, 3, 4];

// Creating a new array that includes all elements from the original array 
// and adding new elements
const newArray = [...originalArray, 5, 6];

console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]





//******Object Destructure
const bioData = {
    name: "vinod",
    age: 26,
    deg: 'MCS',
    fullname: {
        fname: "SHu",
        last: "Ma"
    }
}
let {name: myname, age, deg, fullname: f } = bioData;

console.log(` My name is ${myname}, My age is ${age}
             and My highest qual, is ${deg}, Fullname ${f.fname + " " + f.last} `)






// for in loop return keys(in array index), and in for of loop returns value

 //***For in loop  (for of loop doesn't iterate in object)

   const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
   }  
    for (const key in myObject) {
    console.log(`${key} -> ${myObject[key]}`)
} 
       

  