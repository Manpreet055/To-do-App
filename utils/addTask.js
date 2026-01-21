import capitalize from "./capitalize.js";
let inputData = document.querySelector(".inputField");

let storedTasks = JSON.parse(localStorage.getItem("storedTasks")) || [];

function addTask(cb) {
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
  if (cb) cb(taskObj);
  inputData.value = "";
}
export default addTask;
