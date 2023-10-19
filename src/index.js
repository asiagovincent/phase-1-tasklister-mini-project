document.addEventListener("DOMContentLoaded", () => {
  // your code here
});


const taskInput = document.getElementById('new-task-description');
const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const taskDescription = taskInput.value; 

  
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <input type="checkbox">
    <span>${taskDescription}</span>
  `;

  
  taskList.appendChild(listItem);

  taskInput.value = ''; 
});
