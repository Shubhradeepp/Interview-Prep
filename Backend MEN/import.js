// Import the built-in 'fs' (File System) module
const fs = require('fs');


//Function


// Define a function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Export the function so other files can use it
  module.exports = { add };
  
  // Import the custom module
const math = require('./math');  // './' indicates it's a local file

// Use the function from the imported module
console.log(math.add(2, 3));  // Output: 5


module.exports=db; //db is a variable which contains a function then   db().then(()=>{})


//Morethan one export
module.exports = {jwtAuthMiddleware, generateToken};
//Import
const {jwtAuthMiddleware, generateToken} = require('./../jwt');



//class

// Person.js
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
  }
  
  module.exports = Person;  // Export the class
  

  // Export with different names
module.exports = {
    greeting: sayHello,  // Export 'sayHello' as 'greeting'
    Human: Person,       // Export 'Person' as 'Human'
  };
  //Import
  const { greeting, Human } = require('./utils'); 


  

//Using ES Modules (import/export)



// Import the built-in 'fs' (File System) module
import fs from 'fs';

// Define and export a function
export function add(a, b) {
    return a + b;
  }
  
  // Import the function from the custom module
import { add } from './math.mjs';

console.log(add(2, 3));  // Output: 5


