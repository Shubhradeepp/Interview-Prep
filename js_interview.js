// Variables declared with let must be Declared before use

// 	Scope	Redeclare	Reassign	Hoisted	  Binds this
// var	No	Yes	         Yes	         Yes	   Yes
// let	Yes	No	         Yes	          No	   No
// const	Yes	No	         No	          No	   No



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

// JavaScript is often described as a lightweight, single-threaded, and synchronous language but have asynchronous behaviour.

// 1. Lightweight
// JavaScript is considered lightweight due to:

// Simple Syntax: JavaScript has a relatively simple and concise syntax compared to some other languages.
// Dynamic Typing: JavaScript is dynamically typed, which means that variable types are determined at runtime, reducing the need for explicit type declarations.
// Interpreted Language: JavaScript code is executed by the browser or Node.js runtime directly without needing a separate compilation step, making development faster and more flexible.

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

let a;
console.log(a);
a=7 // Undefined;


// Syntaxt Error=> Without running a single line of code (redeclear)
// Reference Error=> if we try to acess which is not defined;
// Typeerror=> Redeclear to const;

let x;  // Declaration 
let x = 10;  // Define or initilization


// A closure is a powerful concept in JavaScript (and many other programming languages) that allows a function to retain access to variables from its lexical scope even after that function has finished executing. In simpler terms, a closure is a function bundled with its lexical environment, enabling it to remember and access variables from its outer scope.

function x(){
var a=7
function y(){
console.log(a) ;
}
return y;
}
var z = x(); // In z return the [Function: y] Along with Laxical scope;
console.log(z);
z(); //7

function x(){
 var a=7
 function y(){
    var b=9
     console.log(a,b) ;
  }
  b=90
 return y;
}
var z = x();
console.log(z);
z();


// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope (global or function scope) during the compile phase, before the code is executed. This allows functions and variables to be used in code before they are actually declared.
function f(){
    console.log(a)
}
var a=7;
f();

for(let i=1;i<5;i++){
    setTimeout( ()=>console.log(i),
    i*5000)
}


for(var i=1;i<5;i++){
    function close(a){
        setTimeout(function(){
            console.log(a);
        }, a*1000);
    };
    close(i)
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



function f(){
    console.log(a)
}
var a=7;
f();