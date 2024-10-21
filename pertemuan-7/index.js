// Array in Javascript
// Dekklarasi Array
// Cara 1. Array Literal
// let numbers = [1,2,3,4,5];
// console.log(numbers);

// // Cara 2. Kata Kunci New
// let numbers2 = new Array(6,7,8,9,10);
// console.log(numbers);


// // Tipe data yang bisa disimpan dalam Array
// let numbers = [1,2,3,4,5]; //numbers
// let students = ["john","jane","bob"];//string
// let john = ["john", 30, true, [80,90,100]];//mixed
// console.log(john);

// // Array Length
// console.log(numbers.length); //5
// console.log(students.length); //4
// console.log(john.length); //3

// // Cara mengakses element/data tertentu dalam array
// // Melalui index array. index selalu dimulai dari nol
// console.log(numbers[2]); //3
// console.log(students[1]); //jane
// console.log(johm[2]); //true
// console.log(john[3][1]); //90

// // mengakses element/data terakhir dalam array
// let numbers2 = [1,2,3,4,5,6,,7,8,9,10];
// console.log(numbers2[numbers2.length-1]);

// Array Method
let array = [1,2,3,"Hello", false, true];
console.log(array);

//1. toString() //Method untuk merubah data menjadi string
console.log(array.toString());

//2. join() //untuk menjadi pemisah
console.log(array.join(" "));
console.log(array.join("-"));
console.log(array.join("#"));

//3. pop() //menghapus data terakhir
array.pop();
console.log(array);

//4. push() //menambah data terakhir
array.push("selamat pagi");
console.log(array);

//5. shift() //menghapus elemen yang paling pertama
array.shift();
console.log(array);

//6. unshift()
array.unshift("selamat pagi");
console.log(array);

//7. splice // untuk menambah, menghapus, dan mengganti element array. parameter wajib diisi ketika memanggil array method splice
array.splice(2,1); //hapus
console.log(array);

array.splice(1, 1, 1); //ganti
console.log(array);

array.splice(2, 0, 2, 3); //tambah
console.log(array);

//8. concat() untuk menggabungkan 
let buah = ["pisang","apel","jeruk"];
let sayur = ["tomat","bayam","wortel"];
let biji = ["kedelai","kacang tanah","kacang polong"];

let makanan = buah.concat(sayur, biji);
console.log(makanan);

//9. slice() untuk memisahkah
let sayuran = makanan.slice(3,6);
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian);


