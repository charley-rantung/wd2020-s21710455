let berat = prompt("Masukkan berat anda (kg): ");
let tinggi = prompt("Masukkan tinggi anda (meter): ");

let bmi = berat / (tinggi * tinggi);

console.log(`BMI = ${bmi}`);
alert(`BMI = ${bmi}`);