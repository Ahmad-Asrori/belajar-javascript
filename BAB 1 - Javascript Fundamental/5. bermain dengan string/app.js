const namaDepan = 'ahmad';
const namaBelakang = 'asrori';
const umur = 36;
const kalimat = 'Hello there my nama is Brad';
const tags = 'web design,web development,programming';

let nilai;

nilai = namaDepan + namaBelakang;

// Concatenation (gabung)
nilai = namaDepan + ' ' + namaBelakang;

// Append (tambah)
nilai = 'Sam';
nilai += 'Smith';

nilai = 'Hello, my nama is ' + namaDepan + ' and I am ' + umur;

// Escaping (agar karakter tertentu bisa ditampilkan)
nilai =  'That\'s awesome, I can\'t wait';

// Length
nilai = namaDepan.length;

// concat()
nilai = namaDepan.concat(' ', namaBelakang);

// Change case (mengubah ukuran huruf)
nilai = namaDepan.toUpperCase();
nilai = namaDepan.toLowerCase();

nilai = namaDepan[2];

// indexOf() (mengetahui index dari sebuah karakter)
nilai = namaDepan.indexOf('l');
nilai = namaDepan.lastIndexOf('l');

// charAt()
nilai = namaDepan.charAt('2');
// Get last char
nilai = namaDepan.charAt(namaDepan.length - 1);

// substring()
nilai = namaDepan.substring(0, 4);

// slice()
nilai = namaDepan.slice(0,4);
nilai = namaDepan.slice(-3);

// split()
nilai = kalimat.split(' ');
nilai = tags.split(',');

// replace()
nilai = kalimat.replace('Brad', 'Jack');

// includes()
nilai = kalimat.includes('foo');

console.log(nilai);