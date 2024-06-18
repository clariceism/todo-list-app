document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const list = document.getElementById('todo-list');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const taskText = input.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        input.value = '';
        input.focus();
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.textContent = taskText;
      li.setAttribute('role', 'listitem');
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
      list.appendChild(li);
    }
  });
  