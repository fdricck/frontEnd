//IIFE & Callback Function
// 1. IIFE (immediately invoked function expression)
// a. No params, args & return value
// (function(){
//     console.log("Hello World")
// })();

// b. With params, args & return value
// let output = (function(fullName) {
//     return "Hello" + fullName;
// });("John Doe");
// console.log(output);

// 2. Callback fucntion
// a. No params, args & return value
function sayHello(callback){
    callback(); //nama nya bisa apa aja jadi dia sebagai paramater karena nama fungsi nya anonymous
}

sayHello(function(){
    console.log("Hello World"); //Callback function
});

function sayHello(callback){
    let result = callback("John Doe"); 
    return result;
}

let output = sayHello(function(fullName){
    return "Hello" + fullName;
    console.log(output); //Callback function
});
