// Variables declared with let must be Declared before use

// JavaScript is often described as a lightweight, ***single-threaded [program executes one command at a time, in order, and each task must finish before the next one starts], and synchronous language but have asynchronous behaviour.

// 1. Lightweight
// JavaScript is considered lightweight due to:

// Simple Syntax: JavaScript has a relatively simple and concise syntax compared to some other languages.
// Dynamic Typing: JavaScript is dynamically typed, which means that variable types are determined at runtime, reducing the need for explicit type declarations.

//*** */ Interpreted Language: JavaScript code is executed by the browser or Node.js runtime directly without needing a separate compilation step, making development faster and more flexible.
//[interpreted programs can be modified while the program is running]


// 	    Scope	     Redeclare	Reassign	Hoisted	  Binds this
//var Function scope  Yes	         Yes	    Yes	   Yes
// let	Block scope	   No	       Yes	      No	   No
// const	Block scope		No	       No	        No	   No



let x;  // Declaration 
let x = 10;  // Define or initilization

let a;
console.log(a);
a=7 // Undefined;

//*** */ Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope (global or function scope) during the compile phase, before the code is executed. This allows functions and variables to be used in code before they are actually *** declared.

function f(){
  console.log(a)
}
var a=7;
f();


// Syntaxt Error=> Without running a single line of code (redeclear)
//**/ Reference Error=> if we try to acess which is not defined;
// Typeerror=> Redeclear to const;

// Variables declared with let are hoisted, but they are in a "temporal dead zone" (TDZ) until their declaration is encountered in the code.

//** */ TDZ Scope: The Temporal Dead Zone (TDZ) in JavaScript is a term that describes the phase in which a variable is declared but cannot be accessed

// Variables in the TDZ are not accessible, even though they are hoisted.
// Attempting to access a variable in the TDZ throws a ReferenceError.
// Hoisting Still Occurs:

// Variables declared with let and const are hoisted to the top of their scope, but they remain uninitialized in the TDZ.
// Access is only allowed after the line where the variable is declared.



function f() {
  var a; // Local `a` is declared but not initialized
  //**Yes, a variable in a function can access a globally defined variable unless it is shadowed by a local variable of the same name.
  console.log(a); // Logs `undefined`
}
var a = 7; // Global `a` is defined and initialized
f();

console.log(a);

//** */ Execution- Hoisting

// Memory allocation
//* f={whole function}
// a=undefined
//* Code Execution
// a=7
// f() => when ever the function is going to invoked  brfore that a new execution context is created

// Execution context for f

// Memory allocation
// a=undefined
//* Code execution
//  console.log(a); // `undefined`
// The context for the function f is now deteted from the execution context stack.

//Control returns to the global execution context.


function example() {
  console.log("This function does not return anything explicitly.");
}
console.log(example()); // Logs: undefined

// If a function does not have a return statement, JavaScript implicitly returns undefined at the end of the function.

// or otherwise if the function hit return statement then it will return that control back to the execution context

//** Function Hoisting =>*/
// if we try to invoke function before its declaration then it will not throw any error
f();
function f() {
  var a=0; 
  console.log(a); // Logs: 0
}
//** */ But in case of arrow function then it treats like a variable not as a function

//The var keyword is called function-scoped because it creates a variable that is accessible throughout the entire function in which it is declared, regardless of whether it is inside a block

var a=10;
function x (){
  console.log(a) //10
  a=20;
  console.log(a)
}
x()
console.log(a)  // 20 //*[Global a Modified Inside Function]  
                              //**VS
var a=10;
function x (){
  console.log(a) //Undefined
   var a=20;
    console.log(a)
}
x()
console.log(a) // 10 //* [ Local a Declared Inside Function]

//**Explanation => */
//Since no var, let, or const keyword is used, JavaScript interprets this as creating a global variable named a on the global object.
function x() {
  a = 20; // Assignment without declaration
  console.log(a); // Logs 20
}
x();
console.log(a); // Also logs 20


//Scope => Scope means where you can access a specific variable or function in your code.

//*Lexical Scope [local memory + lexical memory of it's parent] => lexical as a term means ia in hiarchy or in a sequence

// Lexical Scoping:- The inner func have the acess of all the variable or memory decleared in outer func;

function outerFunction() {
  const outerVariable = 'I am from outerFunction';

  function innerFunction() {
      const innerVariable = 'I am from innerFunction';
      console.log(outerVariable); // Accesses `outerVariable` from the outer function's scope
      console.log(innerVariable); // Accesses `innerVariable` from its own scope
  }

  innerFunction(); // Calling innerFunction within outerFunction
}

outerFunction(); // Calling outerFunction


//Closure  => is a function bundled with its lexical environment.
//** */ that allows a function to retain access to variables from its lexical scope even after that function has finished executing.

function x(){
  var a=7
   function y(){
    console.log(a) ;
    }
    return y;
  }
  var z = x(); // In z return the [Function: y] Along with Laxical Enviroment;
  console.log(z);
  z(); // a =7
  



var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}


let a;
let b = null;

console.log(a);  // Output: undefined
console.log(b);  // Output: null

console.log(typeof a);  // Output: "undefined"
console.log(typeof b);  // Output: "object" (this is a quirk of JavaScript)


let a = "hello" * 10;
console.log(a);  // Output: NaN

console.log(typeof a);  // Output: "number"
let b=5

console.log(isNaN(a)) //true
console.log(isNaN(b)) // False

// ** Event Loop
// Call Stack: JavaScript executes code in the call stack, which follows a "last in, first out" (LIFO) principle.

// Web APIs/Task Queues: When asynchronous operations like setTimeout, Promises, or I/O requests are encountered, they are handed off to system APIs or threads.

// Task Queue (or Callback Queue): Once these asynchronous tasks are completed, their callbacks are added to the task queue.

// Event Loop: The event loop continuously checks if the call stack is empty. If it is, it takes the first callback from the task queue and pushes it to the call stack for execution.

// Microtasks vs. Macrotasks:
// Microtasks (e.g., Promise.then, MutationObserver) have higher priority and are executed before macrotasks.
// Macrotasks (e.g., setTimeout, setInterval) are processed afterward.

// Non-blocking Nature: This design ensures that JavaScript doesn't block the main thread, enabling smooth execution of user interfaces and efficient handling of concurrent operations.




//** this keyword =>  Arrow function*/

//In JavaScript, the context of a function call is determined solely by how it is invoked, not where it is defined.

function outerFunction() {
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    console.log(firstName, "", lastName);
    console.log(this); // Global
  }

  // Call the Person function
  Person("John", "Doe");
   console.log(this); //Global
}

outerFunction();
//Even if a function is defined inside another function (like Person inside outerFunction), calling it as a regular function means its this does not inherit the context of the outer function.


//**Explanation => */
// When you invoke a function without any context (like Person()), there is no object "owning" the call.

// Lexical Scope ≠ this
// While Person has access to variables in its enclosing scope (outerFunction), the this keyword is not lexically scoped.
// this is determined dynamically at call time, not at definition time.



// Arrow functions do not have their own this. 
// Instead, they inherit this from their enclosing function or scope,   

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this); // `this` is `obj` (method call)
    
    const arrowFunction = () => {
      console.log(this); // Lexically inherited `this` from `regularFunction`
    };

    arrowFunction();
  },
};

obj.regularFunction();


// For arrow functions, this is not dynamic. Instead, it is lexically inherited from the scope in which the arrow function is defined. This is why we say arrow functions have "lexical scoping" for this.

const obj={
    firstName: "Global",
    lastName: "Obj"   
  };
  
  
  const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    normal: function() {
        console.log(this); //person
        console.log(this.firstName + " " + this.lastName);

        function inner(){
          console.log(this); //Global
          console.log(this.firstName + " " + this.lastName);
      }
      inner(); //Global

        const arrowinn=()=>{
            console.log(this); //Person
            console.log(this.firstName + " " + this.lastName);
        }
        arrowinn(); // Inherited from function
    },
    arrow: () => {
      //In this case, arrow is defined as a property of the person object, but it does not bind to person. Instead, it inherits this from the surrounding scope, [Function: arrow => define inside Person => inherit context of person (Global)] which in this example is the global object
        console.log(this); //{}
        
     console.log(obj.firstName + " " + this.lastName);
    }
  };
  
  person.normal(); // returns "John Doe"
  person.arrow(); // returns "Global Undefined"


// **Callback Function => is   funx that is packed as an arguement to another higher oderred funx
app.get('/', (req, res) => {
    res.send('Hello, World!'); // The callback sends a response back to the client
});  //Get is higher order function // res is call back function


// **Hoisting => */

myFun();
var myFun = function(){
    console.log("Variable");
}
myFun();

function myFun(){
    console.log("Function");
}
myFun();
//** */ output
// Function [myFun={}]
// Variable [myFun=undefined reinitilized]
// Function [myFun={}]

// ** myFun(); // Function
// function myFun(){
//   console.log("Function");
// }
// myFun();// Function
// var myFun = function(){
//   console.log("Variable");
// }
// myFun();//variable


for(var i=1;i<5;i++){
  setTimeout( ()=>console.log(i),
  i*1000)
}
//**Explanation => */
//When using var in a loop, a single binding of i is shared across all iterations. By the time the setTimeout callbacks execute, the loop has already completed, and the value of i is 5. Therefore, all setTimeout callbacks log 5.

function x(){
  var i=2
  setTimeout(()=>{
      console.log(i)
  }, 3000)
  console.log("hwllo")
  i=i+6
 }
 x()// hwllo (wait for 3 sec) 8


for(let i=1;i<5;i++){
    setTimeout( ()=>console.log(i),
    i*5000)
}
//**Explanation => */
// Iteration 1 (i = 1):
// A new binding for i is created with the value 1.
// setTimeout schedules the callback to execute after 1 * 5000 ms (5 seconds).
// The callback closes over the binding where i = 1.

// Iteration 2 (i = 2):
// A new binding for i is created with the value 2.
// setTimeout schedules the callback to execute after 2 * 5000 ms (10 seconds).
// The callback closes over the binding where i = 2.

for(var i=1;i<5;i++){
    function close(a){ //In this example, you use a helper function called close to explicitly pass the loop variable i as an argument.
        setTimeout(function(){
            console.log(a);
        }, a*1000);
    };
    close(i)
}
//**Explanation => */
// First Iteration (i = 1):
// The value of i is 1.
// The function close is called with a = 1.
// Inside close, a setTimeout is scheduled with a delay of 1 * 1000 ms (1 second).
// The callback logs the value of a, which is 1.

// Second Iteration (i = 2):
// The value of i is 2.
// The function close is called with a = 2.
// Inside close, a setTimeout is scheduled with a delay of 2 * 1000 ms (2 seconds).
// The callback logs the value of a, which is 2.
const arr=[1,2,3,4,5,6]
for(var i=0;i<5;i++){
  setTimeout( ()=>console.log(arr[i]),
  1000)
} 




//**Destructuring */

const colors = ['red', 'green', 'blue', 'yellow', 'orange' , 'purple'];
// Swapping values
[colors[0], colors[3]] = [colors[3], colors[0]];

// Assign values to variables
const [first, second, third ,...remain ] = colors;
console.log(remain); //[ 'blue', 'red', 'orange' ]




const person1 = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
  }
};
const person2 = {
  name: 'Jane',
  age: 25,
  address: {
    street: '456 Elm St',
    city: 'Los Angeles',
    state: 'CA'
  }
};
const { name: person1Name, 
  age: person1Age ,
  address: { street, city, state }  
} = person1;

//const { name, age, ...rest } = person1;
//console.log(rest);   
// Output: { address: { street: '123 Main St', city: 'New York', state: 'NY' } }


console.log(`City: ${city}`);        // Output: City: New York
console.log(`State: ${state}`);      // Output: State: NY

function printPersonInfo({ name, age=90 }) {
  //age = 90 sets a default value for age only if age is undefined or not provided.

  console.log(`Name: ${name}, Age: ${age}`);
}
printPersonInfo(person1); // Output: Name: John, Age:30


//**Spread / REST  => Un-packing */
let username ="Shubhradeep"
let letters=[...username].join("-")

//*Slice */
let short=username.slice(0,5) // Shubh

let PersonalNamee="Agent Vinod"
let nAme= PersonalNamee.slice(0, PersonalNamee.indexOf(" "));

const email="shubhradeep@gmail.com"

const [username, domain] = email.split("@"); //shubhradeep  gmail.com

// ** Object //

for( key in obj)

var user ={
  name: "Roadsde Coder" ,
  age: 24,
  "is Total Awesome": true
}
for (key in user){
console.log(user[key])} ;


const a={
  id : 001,
  Name : 'Rohit',
  Role : "Dev"}
  a['salary']=20000
  a['Role']='Tester'
  
  console.log(a)
  console.log(a.Name)
  console.log(a['Name'])


const a={}
const b={ key: 89}
a[b]=5678; // a=[object object]=5678;



//*JSON => javascript object notation
//Lightweight human readable format for tranfering data
// language independent, Commonly use for data exchange b/w server and webpage
//Simple str base on key value pair

JSON.stringfy(obj) // convert obj to string
JSON.parse(obj)
// JSON.stringify() is a method that converts a JavaScript object or value to a JSON string.

//***Loop js


/* For in loop  commonly used for iterating over the keys (property names) of an object, including arrays and objects.

It's not recommended for iterating over arrays, as it may have unexpected behavior when used with arrays due to its interaction with prototype properties.*/

/*const arr=[10,2,3,4]
for(let k of arr){
console.log(k)// typeof number}*/

const B=[ 
  {name : "a",id: 1},
  {name : "b",id: 2},
  {name : "c",id: 3},
  ];
  for(let n in B){
  console.log(B[n]) // { name: 'a', id: 1 }
  // typeof console.log(typeof(B[n]))  object
  }
  
  
  
const arr=[10,2,3,4]
for(let k in arr){
  console.log(k)// 0 1 2 3 // typeof String [Print Index] 
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
  console.log(n)}

    // **For each doesn't return anything
    const coding = [
      {
      languageName: "javascript",
      languageFileName: "js"
  },
  {
      languageName: "cpp",
      languageFileName: "c++"
  },
  {
      languageName: "ruby",
      languageFileName: "r"
  },]
   coding.forEach( (item, index)=> {
       console.log(typeof item) // object
        console.log(typeof index) // number
         
   console.log(item.languageName, index);
  })
  
//*** array into object
const obj={
  arr:[1,2,3]
}
console.log(obj.arr[1]) //2
console.log(Object.keys(obj)) // return a array //[ 'arr' ]
console.log(Object.values(obj)) //[ [ 1, 2, 3 ] ]

//*   immediately invoke funx (IIFE)       
(function a1(){
  console.log("Running invoke")
})();
// ; is used to end the exucution of code
((name)=>{
  console.log("Running invoke2nd "+name )
})("SHUBHRA");

((name2)=>{
  console.log(`Running invoke3nd ${name2} `)
})("RAHUL")


// ** Map **

const map = new Map ()
map.set ('IN', "India")
map.set( 'USA', "United States of America")
map.set ('Fr', "France")
map.set ('IN', "India")

console.log (map); //object
// output
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }


for (const key of map) {
    console.log(key); // give array str //[ 'IN', 'India' ]
    console.log(typeof key) // object
}

for (const [key, value] of map) {
    console.log(key, ':-', value)
    console.log(typeof key) //string
    console.log(typeof value); // string
}



//*** FIlter */
//The filter() method creates a new array containing elements that satisfy a specified condition. This method skips empty elements and does not change the original array.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => num>=5)
console.log(newNums)
  //[ 5, 6, 7, 8, 9, 10 ] //Always need a new array
  


  const comparison = [
    { Method: "map()", 
  Description: "Creates a new array with the same length as the original array, but with each element transformed by the callback function.", 
  UseCase: "Used when you want to transform each element in an array.", 
  Return: "Returns a new array with the same length as the original array." 
  },
    { Method: "filter()",
      Description: "Creates a new array with only the elements that pass the conditions implemented by the callback function.", 
      UseCase: "Used when you want to select only certain elements that meet a specific condition.", 
      Return: "Returns a new array with a length that is equal to or less than the original array." 
    }
  ];

  
//*** */ Map method
    //  The map() method is an ES5 feature that creates a new array by applying a function to each element of the original array. It skips empty elements and
    //  does not modify the original array.
const newNum = myNums.map( (num) => num>=5)
console.log(newNum)
  //  [
  //   false, false, false,
  //   false, true,  true,
  //   true,  true,  true,
  //   true
  // ]
  
       // without fliter 
  //  const newNums=[]
  // myNums.forEach( (num) => {
  // if (num > 4) {
  // newNums .push(num)}
  // })
  // console.log (newNums);
  
       //****Chaning */
  
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  
const newNums = myNumers.map( (num) => { return num + 10})
      // [11, 12, 13, 14, 15,]
      
  
    //Filter use for condition check, where map use for operation on each value and return it
  // const newNums = myNumers
  //                 .map((num) => num * 10 )
  //                 .map( (num) => num + 1)
  //                 .filter( (num) => num >= 40)
  // console.log(newNums);
  

  //* reduce() Method
  // The JavaScript Array.reduce() method iterates over an array, applying a reducer function to each element, accumulating a single output value. It takes an initial value and processes elements from left to right, reducing the array to a single result. It is useful for doing operations like max in an array, min in an array and sum of array

  const array1 = [1, 2, 3, 4];

  // 0 + 1 + 2 + 3 + 4
  const initialValue = 0;
  const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  
  console.log(sumWithInitial);
  // Expected output: 10


  const numbers = [10, 5, 8, 2, 15];

  const min = numbers.reduce((accumulator, currentValue) => {
    return Math.min(accumulator, currentValue);
  }, Infinity); // Initialize with Infinity
  
  console.log(min); // Output: 2  
  
const max = numbers.reduce((accumulator, currentValue) => {
  return Math.max(accumulator, currentValue);
}, -Infinity);

console.log(max); // Output: 20



// Try catch

//*Try
// To execute code that could produce an error without crashing the entire application.
// To isolate error-prone code and handle errors gracefully.


try {
  let resource = openResource();
  processResource(resource);
} catch (error) {
  console.error("Error processing resource:", error.message);
} finally {
  closeResource();
  console.log("Resource closed.");
}

//*catch

// To handle specific errors without stopping the program.
// To provide meaningful error messages or alternative behavior.

//*Finally

// To ensure cleanup operations always run.
// To guarantee certain actions (e.g., disconnecting from a server) occur, even if an error interrupts execution.

//* throw new Error

//In JavaScript, the throw statement is used to explicitly raise an error. When you use throw, the execution of the program immediately stops in the try block and jumps to the catch block (if one exists). If no catch block is present, the error propagates up the call stack.
try{
  const divided = Number(window.prompt("Enter a number: "))
  const divisor= Number(window.prompt("Enter a divisor: "))
  if (divisor === 0) {
    throw new Error("Divisor cannot be zero.");
  }
  if(isNaN(divided) || isNaN(divisor)){
    throw new Error("Invalid input. Please enter a number.")
  }
  const result = divided / divisor;
  console.log(`The result is ${result}`);

}
catch(error){
  console.log(error.message)
}
console.log("The program continues ...")


//*callback Hell
// Situation in JavaScript where callbacks are nested within other callbacks to the degree where the code is difficult to read.

//Inversion of Control (IoC)=> We are blindly trusting the callback function to do the job.Giving control to the callback function.

//**Promise VS Callback hell

// walkdog => clean house => take out the trash
function walkdog(callback){
  setTimeout(() => {
  console.log("walk the dog.. 🐕");
  callback();
  }, 2000);
}

function cleane(callback){
  setTimeout(() => {
  console.log("clean the house.. 🧹");
  callback();
  },1500);
  }

  function trash(callback){
    setTimeout(() => {
    console.log("take out the trash.. 🗑️");
    callback();
    },600)
    }

//callback
walkdog(()=>{
  cleane(()=>{
    trash(()=>{
      console.log("all done")
    })
  })
});


//* Promise => An Object that manages asynchronous operations. Wrap a Promise Object around {asynchronous code}
// "I promise to return a value"
// PENDING RESOLVED or REJECTED
// new Promise((resolve, reject) {asynchronous code))


// Promises provide: =>
// A cleaner, flat structure instead of nested callbacks.
// Automatic error propagation.
// Better debugging support.

function walkdog(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("walk the dog.. 🐕");
    }, 2000);
  });
}

function cleane(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("clean the house.. 🧹");
    },1500);
});
}

function trash(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("take out the trash.. 🗑️");
      resolve();
    },600);
});
}

walkdog().then((value)=>{
                                console.log(value); 
                                return cleane();})
         .then((value)=>{
                              console.log(value); 
                              return trash();})
         .then((value)=>{console.log(value); 
                              console.log("all done")})

//Reject

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
      let error = false;
      if (!error) {
          resolve({ username: "Shubhradeep", password: "xyz" });
      } else {
          reject("ERROR: Something went wrong");
      }
  }, 1000);
});
promiseFour
  .then((user) => {
      console.log(user);
      return user.username;
  })
  .then((username) => {
      console.log(username);
  })
  .catch((error) => {
      console.log(error);
  })

  //**Async/Await Async makes a function return a promise
//Await • makes an async function wait for a promise

async function work(){
  try{
  const result = await cleane();
  console.log(result);
  const result1 = await cleane();
  console.log(result1);
  const result2 = await trash();
  console.log(result2);
  console.log("all done")
  }
  catch(error){
    .console.error(error);
    
  }
}


//*Module Import-Export

//Function 
export function add(a, b) {
  return a + b;
}

import { add } from 'relative-path';

export {
  add,
  multiply as multiplyFunction,
}
import * as all-import from "relative-path"

//variable
export const PI = 3.14;

//default
export default function add(a, b) {
  return a + b;
}
import add from 'relative-path';

//object

// file: module.js
export const namedObject = { key: "value" };

const defaultObject = { defaultKey: "defaultValue" };
export default defaultObject;

// Importing in another file
// file: main.js
import defaultObj, { namedObject } from "./module.js";

console.log(defaultObj.defaultKey); // Output: defaultValue
console.log(namedObject.key); // Output: value

//Function and obj

// file: module.js
const namedObject = { key: "value" };
const defaultObject = { defaultKey: "defaultValue" };
function myFunction() {
  console.log("This is my function.");
}

// Export all as named exports
export { namedObject, defaultObject, myFunction };

// file: main.js
import { namedObject, defaultObject, myFunction } from "./module.js";

console.log(namedObject.key); // Output: value
console.log(defaultObject.defaultKey); // Output: defaultValue
myFunction(); // Output: This is my function.




// Node js

// js vs node js
// callback
// event loop
// modules

// math.js (module file)
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  multiply,
};

// main.js (main application file)
const math = require('./math');

console.log(math.add(2, 3)); // Output: 5
console.log(math.multiply(4, 5)); // Output: 20


// npm is the default package manager for Node.js and allows you to install, manage, and share reusable code packages.
// You can use npm to install third-party modules and create your own custom modules.


app.get('/', (req, res) => {
  console.log(req.ip); // Output: The IP address of the user
  res.send('Hello World!');
});


// Node.js's Asynchronous and Non-Blocking Nature
