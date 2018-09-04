// buat variabel UI
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// fungsi untuk menjalankan berbagai event
loadEventListeners();

// jalankan semua event
function loadEventListeners() {
  // DOM event
  document.addEventListener('DOMContentLoaded', getTasks);
  // Add task event
  form.addEventListener('submit', addTask);
  // Remove task event
  taskList.addEventListener('click', removeTask);
  // Clear task event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// tampilkan task dari local storage
function getTasks() {
  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  //tampilkan masing masing nilai
  tasks.forEach(function(task){
    // buat li elemen
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));
      //buat a elemen
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
      //tambahkan icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
      //tempatkan masing masing elemen
    li.appendChild(link);
    taskList.appendChild(li);  });
}

// Add Task
function addTask(e) {
    //apabila form new task dibiarkan kosong/tidak diisi tetepi
    //pengguna menekan langsung di submit
  if(taskInput.value === '') {
    alert('Add a task');
  }

    // buat li elemen
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));
    //buat a elemen
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
    //tambahkan icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
    //tempatkan masing masing elemen
  li.appendChild(link);
  taskList.appendChild(li);

  // Store in LS
  storeTaskInLocalStorage(taskInput.value);

  // hapus isi input
  taskInput.value = '';

  e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task) {
  let tasks;
    //cek apakah di dalam local storage dengan key 'tasks' terdapat value
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

      // remove item dari local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// fungsi Remove item dari item
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Clear Tasks
function clearTasks() {
    //cara cepat menghilangkan semua list
  // taskList.innerHTML = '';

    // cek apakah masih ada first child
  while(taskList.firstChild) {
      //kalau ada, maka hapus
    taskList.removeChild(taskList.firstChild);
  }

    // fungsi Clear semua data dari localstorage
  clearTasksFromLocalStorage();
}


function clearTasksFromLocalStorage() {
    //clear semua data dari local storage
  localStorage.clear();
}

// Filter Tasks
function filterTasks(e) {
    //mendapatkan nilai dari form filter
  const text = e.target.value.toLowerCase();
    //mendapatkan semua li elemen
  const task = document.querySelectorAll('.collection-item');

    //iterasi setiap elemen
  task.forEach(function(task){
      //mendapatkan text dari setiap elemen
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
}
