// ============================================================
//         Everything you need in JS before starting React
// ============================================================


// ─────────────────────────────────────────
// 1. Variables
// ─────────────────────────────────────────
// const  → fixed value, can't be reassigned (most common in React)
// let    → value can change
// var    → old, avoid it

const name = "wael";
let age = 23;

console.log(name, age);


// ─────────────────────────────────────────
// 2. Objects
// ─────────────────────────────────────────
// Object → a group of properties (key: value) representing one thing

const person = {
    name: "wael",
    age: 23,
    isStudent: true,
};

// Destructuring → a short way to pull values out of an object (very common in React)
const { name: personName, age: personAge } = person;
console.log(personName, personAge);


// ─────────────────────────────────────────
// 3. Arrays
// ─────────────────────────────────────────
// Array → an ordered list of elements

const people = ["wael", "ahmed", "ali"];

// Array destructuring (same idea, used a lot in React hooks)
const [first, second] = people;
console.log(first, second);


// ─────────────────────────────────────────
// 4. Functions
// ─────────────────────────────────────────
// Traditional way
function greet(name) {
    return "Hello, " + name;
}

// Arrow Function → most common in React (shorter and cleaner)
const sayHi = (name) => {
    return "Hi, " + name;
};

// If it's a single return line, you can drop the curly braces and return keyword
const greetShort = (name) => "Hi, " + name;

console.log(greet("wael"));
console.log(sayHi("ahmed"));
console.log(greetShort("ali"));


// ─────────────────────────────────────────
// 5. Conditionals
// ─────────────────────────────────────────
const userAge = 20;

// Standard if/else
if (userAge >= 18) {
    console.log("Adult");
} else {
    console.log("Not adult");
}

// Ternary Operator → shorter version, used a lot inside JSX in React
const status = userAge >= 18 ? "Adult" : "Not adult";
console.log(status);


// ─────────────────────────────────────────
// 6. Array Methods (map / filter / reduce)
// ─────────────────────────────────────────
const numbers = [1, 2, 3, 4, 5];

// map() → transforms each element and returns a new array of the same length (essential in React for rendering lists)
const doubled = numbers.map((n) => n * 2);
console.log("map:", doubled);

// filter() → returns a new array with only the elements that pass the condition
const evens = numbers.filter((n) => n % 2 === 0);
console.log("filter:", evens);

// reduce() → combines all elements into a single value (e.g. a sum)
const sum = numbers.reduce((total, n) => total + n, 0);
console.log("reduce:", sum);


// ─────────────────────────────────────────
// 7. Spread Operator
// ─────────────────────────────────────────
// Spread (...) → copies or merges arrays/objects without modifying the original (very important for React state)

const original = [1, 2, 3];
const copy = [...original, 4, 5];
console.log("spread array:", copy);

const user = { name: "wael", age: 23 };
const updatedUser = { ...user, age: 24 }; // updates age without affecting the original user
console.log("spread object:", updatedUser);


// ─────────────────────────────────────────
// 8. Template Literals
// ─────────────────────────────────────────
// Instead of joining strings with +, use backticks and embed variables with ${}

const userName = "wael";
const greeting = `Hello, ${userName}! You are ${age} years old.`;
console.log(greeting);


// ─────────────────────────────────────────
// 9. Modules - Export & Import
// ─────────────────────────────────────────
// export → makes a function or variable available to other files
// import → brings it in from another file

// export const sayHello = (name) => `Hello, ${name}`;   // in another file
// import { sayHello } from "./utils.js";                 // use it here


// ─────────────────────────────────────────
// 10. Async / Await / Fetch
// ─────────────────────────────────────────
// async  → marks a function as asynchronous (runs in the background)
// await  → waits for the operation to finish before moving on (only works inside async)
// fetch  → sends an HTTP request to an API and returns the data

async function getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json();
    console.log("fetch result:", data.name, data.email);
}

getUser();
