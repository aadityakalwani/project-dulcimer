console.log("Hello World!");

// so let's begin doing actual stuff
// to take a user input:

// prompt-sync is a module that allows you to take user input
// this is much better and prettier than how javascript does it by itself 

const prompt = require('prompt-sync')();

const name = prompt('Enter your name: ');
const age = prompt('Enter your age: ');

console.log(`Hello ${name}!`);
console.log(`You are ${age} years old!`);
