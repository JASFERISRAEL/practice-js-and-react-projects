let taskInput = document.getElementById("taskInput");
let addTask = document.getElementById("addTask");
let taskList = document.getElementById("taskList");

// Add a new task
addTask.addEventListener("click", () => {
  if (taskInput.value.trim() !== "") {
    let newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    // Remove task on click
    newTask.addEventListener("click", () => {
      taskList.removeChild(newTask);
    });

    taskList.appendChild(newTask); // Add task to the list
    taskInput.value = ""; // Clear input field
  } else {
    alert("Please enter a task!");
  }
});
