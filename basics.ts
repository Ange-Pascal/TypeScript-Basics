// Primitive values 

let age: number; 

age = 45; 

let userName: string; 

userName = "Angelo"; 


let isInstructor: boolean;  

isInstructor = true; 

// More complexe types 

let hobbies: string[]; 

hobbies = ["Sports", "Cooking"]; 

let person: Person;
// let person:{
//     name: string; 
//     age: number; 
// }

person ={
    name: "Ange",
    age: 12
} 

// let people: Person[];
let people: {
    name: string; 
    age: number;
}[]; 

// type inference and union type

let course: string | number = "react complete guide"; 

course = 2343; 


// Type Alias 

type Person = {
    name: string; 
    age: number
}

// function 

function add(a: number, b: number){
    return a + b
}

function print(value:any){
    console.log(value)
}