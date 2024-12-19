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
        const arrowinn=()=>{
            console.log(this); //Person
            console.log(this.firstName + " " + this.lastName);
        }
        arrowinn();
    },
    arrow: () => {
        console.log(this); //{}
        
     console.log(obj.firstName + " " + this.lastName);
    }
  };
  
  person.normal(); // returns "John Doe"
  person.arrow(); // returns "Global Undefined"


app.get('/', (req, res) => {
    res.send('Hello, World!'); // The callback sends a response back to the client
});  //Get is higher order function // res is call back function




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



for( key in obj)
var user =
{
name: "Roadsde Coder" ,
age: 24,
"is Total Awesome": true
}
for (key in user){
console.log(user[key])} ;

const a={}
const b={ key: 89}
a[b]=5678; // a=[object object]=5678;

JSON.stringfy(obj) // convert obj to string
JSON.parse(obj)

//Spread
console.log(..."Javascript") // Array  J a v a s c r i p t

//Destructuring
const{"is Total Awesome" : k}=user
console.log(k)




















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
