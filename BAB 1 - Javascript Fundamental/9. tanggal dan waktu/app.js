let nilai;

const hariIni = new Date();
let hariLahir = new Date('9-10-1981 11:25:00');
hariLahir = new Date('September 10 1981');
hariLahir = new Date('9/10/1981');

nilai = hariIni.getMonth();
nilai = hariIni.getDate();
nilai = hariIni.getDay();
nilai = hariIni.getFullYear();
nilai = hariIni.getHours();
nilai = hariIni.getMinutes();
nilai = hariIni.getSeconds();
nilai = hariIni.getMilliseconds();
nilai = hariIni.getTime();

hariLahir.setMonth(2);
hariLahir.setDate(12);
hariLahir.setFullYear(1985);
hariLahir.setHours(3);
hariLahir.setMinutes(30);
hariLahir.setSeconds(25);

console.log(hariLahir);