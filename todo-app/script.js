let pendingList = document.getElementById('pendingList');
let completedList = document.getElementById('completedList');

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (!taskText) return;

  const date = new Date().toLocaleString();
  const taskItem = createTaskElement(taskText, date);

  pendingList.appendChild(taskItem);
  input.value = '';
}

function createTaskElement(text, time) {
  const li = document.createElement('li');
  const content = document.createElement('div');
  content.innerHTML = `<strong>${text}</strong><br><small>Added: ${time}</small>`;
  
  const actions = document.createElement('div');
  actions.className = 'actions';

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.onclick = () => markAsComplete(li, text);

  const editBtn = document.createElement('button');
  editBtn.textContent = '✏';
  editBtn.onclick = () => editTask(li, text);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(content);
  li.appendChild(actions);

  return li;
}

function markAsComplete(taskItem, text) {
  const time = new Date().toLocaleString();
  taskItem.remove();

  const li = document.createElement('li');
  li.className = 'completed';

  const content = document.createElement('div');
  content.innerHTML = `<strong>${text}</strong><br><small>Completed: ${time}</small>`;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(deleteBtn);
  li.appendChild(content);
  li.appendChild(actions);

  completedList.appendChild(li);
}

function editTask(taskItem, oldText) {
  const newTask = prompt("Edit your task", oldText);
  if (newTask) {
    const time = new Date().toLocaleString();
    const newItem = createTaskElement(newTask, time);
    taskItem.replaceWith(newItem);
  }
}
