// PRIMITIVE TYPES

// String
const nama = 'Sam Smith';
// Number
const umur = 45;
// Boolean
const lakiLaki = true;
// Null
const mobil = null;
// Undefined
// tidak bisa menggunakan const keyword, nanti error
let test;
// Symbol
const sym = Symbol();

// REFERENCE TYPES - Objects
// Array
const hobbies = ['bermain', 'mendengarkan musik'];
// Object literal
const alamat = {
  kota: 'surabaya',
  provinsi: 'jawa timur'
};

const hariIni = new Date();
console.log(hariIni);
//untuk mengecek tipe data kita bisa menggunakan keyword typeof
console.log(typeof hariIni);