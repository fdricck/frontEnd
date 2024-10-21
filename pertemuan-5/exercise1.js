function hitungBMI(berat, tinggi) {

    let bmi = berat / (tinggi * tinggi);
    return bmi;
  }
  
  let berat = 70; 
  let tinggi = 1.7;
  
  let bmi = hitungBMI(berat, tinggi);
  console.log("berat anda:" + berat + "kg")
  console.log("tinggi anda:" + tinggi + "cm")
  console.log("BMI anda adalah:", + bmi.toFixed(2));
  