document.getElementById('addTaskBtn').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value;

  if (taskText.trim() === '') return;

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');
  const radioButton = document.createElement('input');
  radioButton.type = 'radio';
  radioButton.className = 'task-radio';
  li.appendChild(radioButton);

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  li.appendChild(taskSpan);

  taskList.appendChild(li);

  taskInput.value = '';

  radioButton.addEventListener('click', function() {
      taskSpan.classList.toggle('completed');
  });

  taskSpan.addEventListener('click', function() {
      taskSpan.classList.toggle('completed');
  });
});
