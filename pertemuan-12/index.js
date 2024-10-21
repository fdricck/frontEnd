// String Literals, Arrow Function & Default Parameter

// String Literals
// let fullName = "John Doe";
// let age = 33;
// let address = "Manado";

// let kalimat =
//   "Hallo nama saya" +
//   fullName +
//   "umur saya" +
//   age +
//   "tahun dan saya tinggal di" +
//   address +
//   ".";

// console.log(kalimat);

// let kalimat2 = Halo nama saya ${fullName}, umur saya${age}, dan saya tinggal di${address};
// console.log(kalimat2)


//2. Arrow Function

// function sayGreetings1(fullName){
//     returnn   `Halo nama saya ${fullName}`;
// }
// console.log(sayGreetings1("John Doe"));

// const sayGreetings2 = (fullName) =>    `Halo nama saya${fullName}`;

// console.log(sayGreetings2("John Doe"))

// // Arrow Function pada IIFE
// let output1 = (() => `Hello`)();
// console.log(output1);

// // Arrow Function pada Callback
// let numbers = [1,2,3,4,5];
// let output2 = numbers.map((item) => item);
// console.log(output2);

//3. Default parameter
const sayGreetings3 = (fullName) => {
    if(fullName === undefined){
        fullName = "John Doe"
    }
    console.log( `Hallo nama saya ${fullName}`);
};

