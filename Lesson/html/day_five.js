// Javascript is just language of the web.

// varibale:

// let, const var,

// what is variable?

// A variable is a container for storing data values.
// It allows you to store and manipulate information in your code. In JavaScript, you can declare variables using the `var`, `let`, or `const` keywords.

const user = {
  firstName: "Nnaemeka",
  lastName: "Anaele",
  Location: "OWerri",
};

// Data types:
// 1. String: A sequence of characters enclosed in single or double quotes. Example: "Hello, World!"
// 2. Number: Represents numeric values, including integers and floating-point numbers. Example: 42, 3.14
// 3. Boolean: Represents a logical value that can be either true or false. Example: true, false
// 4. Null: Represents the intentional absence of any object value. Example: null
// 5. Undefined: Represents a variable that has been declared but has not been assigned a value. Example: undefined
// 6. Object: Represents a collection of properties and values. Example: { name: "John", age: 30 }
// 7. Array: Represents an ordered list of values. Example: [1, 2, 3, 4, 5]
// 8. Symbol: Represents a unique identifier. Example: Symbol("id")

// string types:

// exampe of string types:
let name = "Nnaemeka";
let greeting = "Hello, World!";
let message = `Welcome to JavaScript!`;

// number types:
let age = 30; // integer
let pi = 3.14; // floating-point number

// boolean types:
let isStudent = true; // in Pyhton isSTudent = True
let hasGraduated = false;

// null and undefined types:
let emptyValue = null;

// undefined is when a variable is declared but not assigned a value
let uninitializedVariable;

//object types:
let person = {
  name: "John",
  age: 30,
  isStudent: true,
};

// array types:
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];

// symbol types:
let uniqueId = Symbol("id");

// methods and functions:
// function is a block of code designed to perform a particular task. It is executed when "something" invokes it (calls it).
// function declaration:
function greet(name) {
  //parameter
  let greet = `Hello, ${name}!, how are you today?`;
  return greet;
}

console.log(greet("Nnaemeka")); // Output: Hello, Nnaemeka!
console.log(greet("Uchechi")); // Output: Hello, Anaele!

// function to calculcate the area of a circle:

// function calculateArea(radius) {
//     return Math.PI * radius * radius;
// }

function calculateArea(r) {
  return 3.14 * r * r;
}

console.log(calculateArea(5)); // Output: 78.5

// write funciton to callculate the square of a number.

// strings Methods
// example of string methods:
let str = "Hello, World!";

console.log(str.length);

const upperStr = str.toUpperCase();
console.log(upperStr); // Output: "HELLO, WORLD!"

const userName = "Nnaemeka";

const firstChar = userName.charAt(0);
console.log(firstChar); // Output: "N"

// Alternatively,
const firstChar2 = userName[0];
const eChar = userName[3];

console.log(firstChar2); // Output: "N"
console.log("The e character", eChar); // Output: "e"

// last character of a string:

console.log(userName.charAt(userName.length - 1)); // Output: "a"
console.log(userName[userName.length - 1]); // Output: "a"


// Number Methods
let num = 3.14;
console.log(num.toFixed(1)); // Output: "3.1"
console.log(num.toFixed(2));

// parseInt and parseFloat
let strNum = "42";
let intNum = parseInt(strNum);
console.log(intNum); // Output: 42

let floatNum = parseFloat("3.14");
console.log(floatNum); // Output: 3.14


// Array Methods
let arr = [1, 2, 3, 4, 5];

// last item
console.log(arr[arr.length - 1]); // Output: 5

// update an item in an array
arr[0] = 10;
console.log(arr); // Output: [10, 2, 3, 4, 5]

// pushing, popping, shifting, unshifting
arr.push(6); // add to the end
console.log(arr); // Output: [10, 2, 3, 4, 5, 6]

arr.pop(); // remove from the end
console.log(arr); // Output: [10, 2, 3, 4, 5]

arr.shift(); // remove from the beginning
console.log(arr); // Output: [2, 3, 4, 5]

arr.unshift(1); // add to the beginning
console.log(arr); // Output: [1, 2, 3, 4, 5]



//object Methods
let person1 = {
  name: "John", 
    age: 30,
}

// object.keys, object.values, object.entries
console.log(Object.keys(person1)); // Output: ["name", "age"]
console.log(Object.values(person1));


// Object.keys(obj) / .values(obj) / .entries(obj): Return arrays of an object's own enumerable keys, values, or key-value pairs, respectively.
// Object.assign(target, source): Copies properties from source objects to a target.
// Object.create(proto): Creates a new object with a specified prototype.
// Object.defineProperty(obj, prop, descriptor): Allows precise definition or modification of object properties.
// Object.freeze(obj): Makes an object immutable.
// Object.hasOwn(obj, prop): Safely checks for own properties, avoiding prototype chain issues. 
