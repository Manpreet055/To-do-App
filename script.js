import addTask from "./utils/addTask.js";
import deleteTask from "./utils/deleteTask.js";
let inputData = document.querySelector(".inputField");
let addTasks = document.querySelector(".addTask");
let storedTasks = JSON.parse(localStorage.getItem("storedTasks")) || [];

function createTaskElement(taskObj) {
  let newTask = document.createElement("div");
  newTask.className = "newTask";
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "checkBox";
  checkbox.checked = taskObj.isDone;
  let textData = document.createElement("span");
  textData.className = "textData";
  textData.textContent = taskObj.taskContent;
  let editTask = document.createElement("div");
  editTask.className = "editTask";
  editTask.innerHTML = `<i class="fas fa-pen"></i>`;

  // Append delete task button and other elements
  deleteTask({ newTask, checkbox, textData, editTask });

  // check if task is done
  checkbox.addEventListener("change", () => {
    let targetTask = storedTasks.find(
      (task) => task.taskContent === textData.textContent,
    );
    if (targetTask) {
      targetTask.isDone = checkbox.checked;
      localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
    }
  });
}

// Load stored tasks on page load
storedTasks.forEach((task) => {
  createTaskElement(task);
});

// Add task on button click
addTasks.addEventListener("click", () => {
  addTask((taskObj) => {
    createTaskElement(taskObj);
  });
});
// Add task on Enter key press
inputData.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask((taskObj) => {
      createTaskElement(taskObj);
    });
  }
});
