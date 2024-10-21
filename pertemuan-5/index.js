// // JavsScript Function
// // cara 1. Function Declaration
// function greetings1(){
//     console.log("Hello World");
// }

// greetings1(); // Call / Execute function

// // Cara 2. Function Expression
// let greetings2 = function(){
//     console.log("Hello world");
// }

// greetings2();

// // Parameter & Arugument (input), return (output)
// // Cara 1.
// //                  paramater
// function greetings1(fullName){
//     return "Hello" + fullName;
// }

// //                       argument
// let output = greetings1("John Doe");
// console.log(output);

// // Cara 2
// let greetings2 = function (fullName){
//     return "Hello" + fullName;
// };

// let output2 = greetings2("John Doe");

// // Global Scope & Local Scop
// let x = 10; //Global

// function foo(){
//     let y = 20; //Local Function
//     console.log(x); //10
//     console.log(y); //20
//     if (y > 10){
//         let z = 30; //Local Block
//         console.log(x); //10
//         console.log(y); //20
//         console.log(z); //30
//     }
//     // console.log(z); //ERROR
// }

// console.log(x); //10
// console.log(y); //ERROR