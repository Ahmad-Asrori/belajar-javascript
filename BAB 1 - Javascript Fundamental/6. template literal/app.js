const nama = 'John';
const umur = 31;
const pekerjaan = 'Web Developer';
const kota = 'Miami';
let html;

// tanpa template strings (es5)
html = '<ul><li>Name: ' + nama + '</li><li>Age: ' + umur + ' </li><li>Job: '+ pekerjaan+ ' </li><li>City: '+ kota +' </li></ul>';

html = '<ul>' +
       '<li>Nama : ' + nama + '</li>' +
       '<li>Umur : ' + umur + '</li>' +
       '<li>Pekerjaan : ' + pekerjaan + '</li>' +
       '<li>Kota : ' + kota + '</li>' +
       '</ul>';

function hello(){
  return 'hello';
}

// dengan template strings (es6)
html = `
  <ul>
    <li>Nama : ${nama}</li>
    <li>Umur : ${umur}</li>
    <li>Pekerjaan : ${pekerjaan}</li>
    <li>Kota : ${kota}</li>
    <li>${2 + 2}</li>
    <li>${hello()}</li>
    <li>${umur > 30 ? 'lebih dari 30' : 'dibawah 30'}</li>
  </ul>
`;

document.body.innerHTML = html;