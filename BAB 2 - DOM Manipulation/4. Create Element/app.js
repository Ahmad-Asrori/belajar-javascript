// buat elemen, simpan di konstanta variabel
const li  = document.createElement('li');

// tambahkan class
li.className = 'collection-item';

// tambahkan id
li.id = 'new-item';

// tambahkan attribute
li.setAttribute('title', 'New Item');

// tambahkan text node
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');
// tambakkan class
link.className = 'delete-item secondary-content';
// tambahakan icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// tamhakan link kedalam li element
li.appendChild(link);

// tambahkan li element sebagai ul child
document.querySelector('ul.collection').appendChild(li);

console.log(li);