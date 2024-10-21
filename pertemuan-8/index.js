// // JavaScript Object & Conditional
// // Deklarasi Object // object adalah sesuatu yang memiliki properti atau nilai
// // Object Literal
// let john = {
//     firstName: "John",
//     age:30,
//     isMarried: true,
//     grade: [80,90,100],
//     sayGreetings: function(){
//         console.log("Hello my name is" + this.firstName);
//     },
//     address: {
//         street:"Jl. Arnold Mononutu Airmadidi",
//         city: "Minahasa Utara",
//         province:"Sulawesi Utara",
//         postacl:"95371"
//     }
// };
// console.log(john);

// // Mengakses properti dalam object
// // 1. Dot notation
// console.log(john.firstName); // John
// console.log(john.age); // 30
// john.age = 31; // ubah nilai
// john.job = "Teacher"; // tambah properti baru
// console.log(john);

// //2. Bracket notation
// console.log(john["isMarried"]); // true
// john["nationality"] = "Indonesia"; // tambah
// console.log(john);

// // Object Method
// john.sayGreetings();

// // Oject Inside Object
// console.log(john.address.city);

// // Delete Properti Dalam Object
// delete john.grade;
// console.log(jonh);


// // JavaScript Object & Conditional

// // JavaScript Conditional
// 1. if - else
// jika sushu hari ini lebeh dari atau sama dengan 37,
// tampilkan suhu hari ini panas
// jika tidak tampilkan suhu hari ini panas
let temp = 38;
if (temp >=37){
    console.log("Suhu hari ini panas");
}else{ 
    console.log("suhu hari ini dingin");
}


// 2. if - else if - else
// jika nilai 100 - 80 tampilkan Grade A
// jika nilai 70 - 79 tampilkan Grade B
// jika nilai 50 - 69 tampilkan Grade C
// jika nilai dibawah 50 tampilkan Grade D
let grade = 100
if (grade >= 80 && grade <=100){
    console.log("Grade A");
} else if (grade >= 70 && grade <80){
    console.log("Grade B");
} else if (grade >= 50 && grade <70){
    console.log("Grade C");
} else {
    console.log("Grade D");
}


// 3. Switch - case // digunakan jika nested if sudah terlalu banyak dan juga tidak bisa range seperti di code atas
// jika angaka 1 tampilkan january
// jika angka 2 tampilkan fabruary
// jika angaka 3 tampilkan maret
// ;
// jika angka 12 tampikan desember

let number = 1;
switch(number){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("January");
        break;
    case 3:
        console.log("January");
        break;
    default
      
}
