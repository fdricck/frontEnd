//1. IIFE
  (function hitungBMI(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    console.log("berat anda:" + berat + "kg");
    console.log("tinggi anda:" + tinggi + "m");
    console.log("BMI anda adalah:", bmi.toFixed(2));
})(70, 1.7);


//2. Callback Function
function hitungBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}

function tampilkanHasil(bmi) {
    console.log("berat anda:" + berat + "kg");
    console.log("tinggi anda:" + tinggi + "m");
    console.log("BMI Anda adalah:", bmi.toFixed(2));
}

let berat = 70;
let tinggi = 1.7;

hitungBMI(berat, tinggi, tampilkanHasil);