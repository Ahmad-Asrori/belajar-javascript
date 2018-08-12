const angka1 = [43,56,33,23,44,36,5];
const angka2 = new Array(22,45,33,76,54);
const buah = ['Apple', 'Banana', 'Orange', 'Pear'];
const campuran = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

let nilai;

// mandapatkan panjang array
nilai = angka1.length;
// memeriksa apakah suatu variabel adalah array
nilai = Array.isArray(angka1);
// mendapatkan nilai dari suatu array
nilai = angka1[3];
nilai = angka1[0];
// memasukkan nilai ke suatu array
angka1[2] = 100;
// mencari index dari nilai yang dicari
nilai = angka1.indexOf(36);

// MERUBAH SUSUSAN/MUTASI ARRAY
// tambah nilai dibelakang
angka1.push(250);
// tambah nilai didepan
angka1.unshift(120);
// hapus nilai dibelakang
angka1.pop();
// hapus nilai didepan
angka1.shift();
// mendapatkan nilai dari index n ke n
angka1.splice(1,3);
// Reverse
angka1.reverse();

// menggabungkan array
nilai = angka1.concat(angka2);

// Sorting arrays
nilai = buah.sort();
nilai = angka1.sort();

// Find
function over50(angka){
  return angka > 50;
}

nilai = angka1.find(over50);

console.log(angka1);
console.log(nilai);
