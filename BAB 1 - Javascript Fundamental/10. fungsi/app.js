// FUNCTION DECLARATIONS

function pesan(namaDepan = 'Ahmad', namaBelakang = 'Asrori'){
  if(typeof namaDepan === 'undefined'){namaDepan = 'John'}
  if(typeof namaBelakang === 'undefined'){namaBelakang = 'Doe'}
  console.log('Hello');
  return 'Hello ' + namaDepan + ' ' + namaBelakang;
}

console.log(greet());

// FUNCTION EXPRESIONS

const square = function(x = 3){
  return x*x;
};

console.log(square());

//IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

(function(){
  console.log('IIFE Ran..');
})();

(function(name){
  console.log('Hello '+ name);
})('Brad');

// PROPERTY METHODS

const todo = {
  tambah: function(){
    console.log('tambah todo..');
  },
  edit: function(id){
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function(){
  console.log('Delete todo...');
};

todo.tambah();
todo.edit(22);
todo.delete();
