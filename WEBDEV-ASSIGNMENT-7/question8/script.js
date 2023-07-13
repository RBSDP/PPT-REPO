const taskList = document.getElementById("taskList");
const newTaskInput = document.getElementById("newTaskInput");
const tasks = [];

function addTask() {
  const taskDescription = newTaskInput.value;
  if (taskDescription.trim() === "") {
    alert("Please enter a task description.");
    return;
  }

  const task = {
    description: taskDescription,
    completed: false
  };

  tasks.push(task);
  renderTasks();
  newTaskInput.value = "";
}

function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  
  renderTasks();
  
}

function editTask(index) {
  const newDescription = prompt("Enter new task description:", tasks[index].description);
  if (newDescription !== null && newDescription.trim() !== "") {
    tasks[index].description = newDescription;
    renderTasks();
  }
}

function removeTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("div");
    taskItem.className = "task-item" + (task.completed ? " completed" : "");

    const taskDescription = document.createElement("span");
    taskDescription.className = "task-description";
    taskDescription.textContent = task.description;

    const status = document.createElement("span");
    status.className = "status";
    status.textContent = task.completed ? "Completed" : "Pending";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => removeTask(index));
    removeButton.style.display = "block"
        removeButton.style.display = "block"
        removeButton.style.width = "150px"
        removeButton.style.marginTop = "10px"
        removeButton.style.backgroundColor="#fff"
        removeButton.style.color="black"
        removeButton.style.height = "30px"
        removeButton.style.borderRadius = "10px"
        removeButton.style.border = "none"

    const completeButton = document.createElement("button");
    completeButton.textContent = task.completed ? "Mark Pending" : "Mark Completed";
    
    completeButton.addEventListener("click", () => toggleComplete(index));
    completeButton.style.display = "block"
        completeButton.style.width = "150px"
        completeButton.style.marginTop = "10px"
        completeButton.style.color="black"
        
        completeButton.style.height = "30px"
        completeButton.style.borderRadius = "10px"
        completeButton.style.border = "none"
        
       

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editTask(index));
    editButton.style.display = "block"
    editButton.style.width = "150px"
    editButton.style.marginTop = "10px"
    editButton.style.backgroundColor="#fff"
    editButton.style.color="black"
    editButton.style.height = "30px"
    editButton.style.borderRadius = "10px"
    editButton.style.border = "none"

    taskItem.appendChild(taskDescription);
    taskItem.appendChild(status);
    taskItem.appendChild(removeButton);
    taskItem.appendChild(completeButton);
    taskItem.appendChild(editButton);

    taskList.appendChild(taskItem);
  });
}