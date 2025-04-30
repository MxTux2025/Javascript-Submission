// Deklarasi Variabel

let nilaiAwal = 10;
let nilaiString = "5";
let isActive =  false;

// Konversi eksplisit 

const konvt1 = Number(nilaiString);
console.log(typeof konvt1);
const konvt2 = String(isActive);
console.log(typeof konvt2);

console.log(konvt1);
console.log(konvt2);

//konversi implisit
let result = nilaiAwal + nilaiString;
console.log(result);
console.log(typeof result);


let result2 = nilaiAwal + isActive;
console.log(result2);
console.log(typeof result2);

// Operasi & Output 
let jumlah = nilaiAwal + Number(nilaiString);
console.log(typeof jumlah);

let lebihBesar = nilaiAwal > Number(nilaiString);
console.log( typeof lebihBesar);

let finalresult = "Status aktif:  " + isActive;
console.log(typeof finalresult);


console.log(jumlah);

console.log(lebihBesar);

console.log(finalresult);

