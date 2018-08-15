// var, let, const

var nama = 'Ahmad Asrori';
console.log(nama);
nama = 'Sam Smith;
console.log(nama);

// Init var
var pesan;
console.log(pesan);
pesan = 'halo, selamat siang';
console.log(pesan);

// variabel dapat mengandung kata, angka, _, $
// variabel tidak boleh diawali dengan angka

// variabel dengan penamaan seperti kalimat
var firstName = 'John'; // Camel case
var first_name = 'Sara'; // Underscore
var FirstName = 'Tom'; // Pascal case
var firstname;

// LET
let nama;
nama = 'Ahmad Asrori';
console.log(nama);
nama = 'Sam Smith';
console.log(nama);

// CONST
const name = 'John';
console.log(name);
// const variabel tidak bisa diubah nilainya karena bersifat KONSTAN/TETAP
// nama = 'Sara';
// const harus segera diisi dengan value/nilai
// const greeting;


//pengecualian const, dalam membuat sebuah object nilai dapat diubah
const person = {
    nama: 'John',
    age: 30
};
person.name = 'Sara';
person.age = 32;

//begitu pula dengan array, kita dapat mengubah susunan array
//meskipun variabelnya diberi keyword const
const numbers = [1,2,3,4,5];
numbers.push(6);

console.log(numbers);