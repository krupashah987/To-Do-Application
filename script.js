// STATIC TASK ARRAY (IMPORTANT)
let tasks = [];
let filter = "all";

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value === "") return;

  tasks.push({
    text: input.value,
    completed: false
  });

  input.value = "";
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index) {
  const newTask = prompt("Edit task:", tasks[index].text);
  if (newTask !== null && newTask !== "") {
    tasks[index].text = newTask;
    renderTasks();
  }
}

function filterTasks(type) {
  filter = type;
  renderTasks();
}

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    if (
      filter === "completed" && !task.completed ||
      filter === "pending" && task.completed
    ) return;

    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <span onclick="toggleTask(${index})">${task.text}</span>
      <div class="actions">
        <button onclick="editTask(${index})">✏️</button>
        <button onclick="deleteTask(${index})">🗑️</button>
      </div>
    `;

    list.appendChild(li);
  });
}
