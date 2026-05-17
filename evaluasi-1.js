//Soal 1 Comment

// variabel nama digunakan untuk menyimpan nama pengguna

/*
 Ini adalah program yang akan menampilkan sapaan, misalnya 
 ""Hai nama saya tuxedo30"
 "Apakabar kamu hari ini"
*/

//Soal 2 - Variabel & Tipe Data
let negara = "Uni Soviet";
let penduduk = 10;
let isAsia = false;
let dataLain = null;

console.log(typeof(negara));
console.log(typeof(penduduk));
console.log(typeof(isAsia));
console.log(typeof(dataLain));

//Soal 3 - Konversi Tipe Data
let angkaString = "123";  // ubah jadi number 
console.log((Number(angkaString)));

let booleanValue = true;  // ubah jadi string
console.log((booleanValue.toString()));

let angkaDesimal = "45.67"; // ubaj jadi integer
console.log(parseInt((angkaDesimal)));

let inputUser = "100px"; // ubah jadi number
console.log(Number(inputUser));

//Soal 4  - Operator Aritmatika + Perbandingan
let a = 20;
let b = 7;
let c = "20";

a + b // 27 
a - b // 13 
a * b // 140
a / b // 2.85714285714
a % b // 6
a == c // true
a === c // false
a > b && b > 0  // true
a > b || b > 10 // true

//Soal 5 - Campuran (Konversi + Operator)
let harga = "25000";
let jumlah = "3";

let total = Number(harga) * Number(jumlah); 
console.log(total);
console.log((total > 50000) ? 'Ya, Total lebih besar' : 'Total tidak lebih besar');

//Soal 6 (Bonus) Logic Sederhana
let nilaiUjian = 85;
let absensi = "75";

let periksa = (nilaiUjian + Number(absensi));
let lulus = periksa > 150 && nilaiUjian > 80;
console.log({nilaiUjian, absensi, periksa, lulus});