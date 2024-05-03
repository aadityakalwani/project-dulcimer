// prompt-sync is a module that allows us to take user input 
// much better and prettier than how javascript does it by itself
const prompt = require('prompt-sync')();

const name = prompt('Enter your name: ');
const age = prompt('Enter your age: ');

console.log(`Hello ${name}!`);
console.log(`You are ${age} years old!`);

var adjacencyMatrix;
// set this as a 2d array later

// menu system
let userMenuOption = prompt("1 - apply Dijkstra\n2 - apply Prim's\n3 - apply Kruskal's:\n");

switch (userMenuOption) 
{
    case "1":
        applyDijkstra(adjacencyMatrix)
        
        break;
    case "2":
        applyPrims(adjacencyMatrix)
        
        break;
    case "3":
        applyKruskal(adjacencyMatrix)
        
        break;
    default:
        console.log("retard, Invalid option");
        
        break;
}

function applyDijkstra(adjacencyMatrix)
{
    console.log("We are applying Dijkstra; let us cook")
}

function applyPrims(adjacencyMatrix)
{
    console.log("doing Prim's");
}

function applyKruskal(adjacencyMatrix)
{
    console.log("doing Kruskal's");
}
