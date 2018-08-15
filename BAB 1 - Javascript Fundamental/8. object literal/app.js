const Orang = {
  namaDepan: 'Ahmad',
  namaBelakang: 'Asrori',
  umur: 36,
  email: 'ahmad.asrori08@gmail.com',
  hobi: ['tidur', 'catur'],
  alamat: {
    kota: 'Miami',
    provinsi: 'FL'
  },
  getBirthYear: function(){
    return 2017 - this.umur;
  }
};

let nilai;

nilai = Orang;
// mendapatkan nilai yang spesifik
nilai = Orang.namaDepan;
nilai = Orang['namaBelakang'];
nilai = Orang.umur;
nilai = Orang.hobi[1];
nilai = Orang.alamat.provinsi;
nilai = Orang.alamat['kota'];
nilai = Orang.getBirthYear();

console.log(nilai);

const orang = [
  {nama: 'John', umur: 30},
  {nama: 'Mike', umur: 23},
  {nama: 'Nancy', umur: 40}
];

for(let i = 0; i < orang.length; i++){
  console.log(orang[i].nama);
}