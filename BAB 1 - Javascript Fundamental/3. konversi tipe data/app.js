let nilai;

// Number to string
nilai = String(555);
nilai = String(4+4);
// Bool to string
nilai = String(true);
// Date to string
nilai = String(new Date());
// Array to string
nilai = String([1,2,3,4]);

// toString()
nilai = (5).toString();
nilai = (true).toString();

// String to number
nilai = Number('5');
nilai = Number(true);
nilai = Number(false);
nilai = Number(null);
nilai = Number('hello');
nilai = Number([1,2,3]);

nilai = parseInt('100.30');
nilai = parseFloat('100.30');

// Output
console.log(nilai);
console.log(typeof nilai);
//length untuk mengetahui panjang string, jika isivariabelnya berupa kalimat/string
//jika variabel isinya angka maka nilainya akan sama dengan angka tersebut
console.log(nilai.length);
console.log(nilai.toFixed(2)); //toFIxed(number) untuk mengatur jumlah angka dibelekang koma

const nilai1 = String(5);
const nilai2 = 6;
const hasil = Number(nilai1 + nilai2);

console.log(hasil);
console.log(typeof hasil);
