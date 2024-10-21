//Asynchronous JS

//Synchronous -> single thread -> blocking
// console.log("proses 1");
// console.log("proses 2");
// console.log("proses yang memakan waktu lama");
// console.log("proses 4");

//Asynchronous -> multi thread -> non-blocking
//ada 2 macam Asynchronous
//1. parallel
// setTimeout(() =>{
//     console.log("proses 1");
// }, 3000);
// console.log("proses 2";
//     setTimeout(() => {
//         console.log("proses 3");
//     }, 5000);
// console.log("proses 4");
// //2. Concurent
// setTimeout(() => {
//     console.log("proses 1");
//     setTimeout(() => {
//       console.log("proses 2");
//       setTimeout(() => {
//         console.log("proses 3");
//         setTimeout(() => {
//           console.log("proses 4");
//         }, 3000);
//       }, 3000);
//     }, 3000);
//   }, 3000);


// //Promise
// const newPromise = new Promise((resolve, reject)=>{
//     if(condition){
//         resolve("Berhasil");
//     } else {
//         reject("Gagal");
//     }
// });

// //cara pakai promise
// //1. then - catch


// //2. Async - Await
// //harus dibuat dalam fungsi
// const consumePromise = async () => {
//     try {
//         let result = await newPromise;
//         console.log(result);
//     }catch (eror){
//         console.log(eror);
//     }

// };
// consumePromise();

//Pakai Promise yang sudah ada
//1. Fetch
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// (async() => {
//     let response = await fetch ("https://jsonplaceholder.typicode.com/users")
//     let json = await response.json();
//     json.foreach(({name}) => console.log(name));
// })();

// //2. Axios
// axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((result) => console.log(result.data))

(async() => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users")
    result.data.forEach
})

//Asynchronous JS

//Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses yg memakan waktu lama");
// console.log("Proses 4");

//Asynchronous -> multi thread -> non-blocking
//1. Parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 3000);
// console.log("Proses 2");
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// console.log("Proses 4");
//2. Concurent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//       }, 3000);
//     }, 3000);
//   }, 3000);
// }, 3000);

//Cara membuat Promise
// let condition = false;
// const newPromise = new Promise((resolve, reject) => {
//   if (condition) {
//     resolve("Berhasil");
//   } else {
//     reject("Gagal");
//   }
// });

//Cara pakai Promise
//1. then - catch
// newPromise
//   .then((result) => result)
//   .then((result2) => console.log(result2))
//   .catch((error) => console.log(error));

//2. Async - Await
//Harus dibuat dalam fungsi
// const consumePromise = async () => {
//   try {
//     let result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// consumePromise();

//Pakai Promise yg sudah ada
//1. Fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// (async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let json = await response.json();
//   json.forEach(({ name }) => console.log(name));
// })();

//2. Axios
// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((result) => console.log(result.data))

(async () => {
    let result = await axios.get("https://jsonplaceholder.typicode.com/users");
    result.data.forEach(({ name }) => console.log(name));
  })();