let inputData = document.querySelector(".inputField");
let addTasks = document.querySelector(".addTask");
let tasks = document.querySelector(".tasks");
let darkMode = document.querySelector(".darkModeButton");
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
  let deleteTask = document.createElement("div");
  deleteTask.className = "deleteTask";
  deleteTask.innerHTML = `<i class="fas fa-trash"></i>`;
  newTask.appendChild(checkbox);
  newTask.appendChild(textData);
  newTask.appendChild(editTask);
  newTask.appendChild(deleteTask);
  tasks.appendChild(newTask);
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
storedTasks.forEach((task) => {
  createTaskElement(task);
});
function addTask() {
  if (inputData.value.trim() === "") {
    alert("Empty Task");
    return;
  }
  let duplicateCheck = storedTasks.some(
    (task) => task.taskContent.trim() === inputData.value.trim(),
  );
  if (duplicateCheck) {
    alert("Task already exists");
    inputData.value = "";
    return;
  }
  let taskObj = {
    isDone: false,
    taskContent: capitalize(inputData.value.trim()),
  };
  storedTasks.push(taskObj);
  localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
  createTaskElement(taskObj);
  inputData.value = "";
}
addTasks.addEventListener("click", addTask);
inputData.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
tasks.addEventListener("click", (event) => {
  if (event.target.closest(".deleteTask")) {
    let removeTask = event.target.closest(".newTask");
    let taskText = removeTask.querySelector(".textData").textContent;
    removeTask.remove();
    storedTasks = storedTasks.filter((task) => task.taskContent !== taskText);
    localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
  }
  if (event.target.closest(".editTask")) {
    if (!confirm("Are you sure ?")) return;
    let clickTask = event.target.closest(".newTask");
    let textData = clickTask.querySelector(".textData");
    inputData.value = textData.textContent;
    storedTasks = storedTasks.filter(
      (task) => task.taskContent !== textData.textContent,
    );
    localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
    clickTask.remove();
  }
});
let darkModeEnabled = localStorage.getItem("darkModePrefrence") === "true";
if (darkModeEnabled) {
  document.body.classList.add("darkMode");
}
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
  localStorage.setItem(
    "darkModePrefrence",
    document.body.classList.contains("darkMode"),
  );
});
function capitalize(str) {
  if (!str) return;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
