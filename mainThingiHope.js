// prompt-sync is a module that allows us to take user input 
// much better and prettier than how javascript does it by itself
const readline = require("node:readline");
const prompt = require('prompt-sync')();

const name = prompt('Enter your name: ');
const age = prompt('Enter your age: ');

console.log(`Hello ${name}!`);
console.log(`You are ${age} years old!`);

var adjacencyMatrix;
// take an input for dimensions of the matrix / number of nodes etc. and then set up a 2d array as required

// menu system

const userMenuOption = prompt("Enter your choice:\n1 - apply Dijkstra\n2 - apply Prim's\n3 - apply Kruskal's\n");

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

/*
c# code to getValidInt

public int GetValidInt(int min, int max)
        {
            if (int.TryParse(Console.ReadLine(), out int validInt))
            {
                if (validInt >= min && validInt <= max)
                {
                    return validInt;
                }
                Console.WriteLine($"No bro enter a number between {min} and {max}");
                return GetValidInt(min, max);
            }
            Console.WriteLine("Please enter a valid integer");
            return GetValidInt(min, max);
        }
 */
// translating to JS:

/*
struggling to translate this to JS but here was the attempt:

function getValidInt(min, max)
{
    const attemptedInput = Number(prompt("Enter your choice:\n"));
    if (Number.isInteger(attemptedInput))
    {
        if (attemptedInput >= min && attemptedInput <= max)
        {
            return attemptedInput;
        }
        else
        {
            console.log(`No bro enter a number between ${min} and ${max}`);
            return getValidInt(min, max);
        }
        
    }
    else
    {
        console.log("no bro enter a valid integer");
        return getValidInt(min, max);
    }
}
 */
