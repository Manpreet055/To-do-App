let inputData = document.querySelector(".inputField");
let tasks = document.querySelector(".tasks");
let storedTasks = JSON.parse(localStorage.getItem("storedTasks")) || [];

tasks.addEventListener("click", (event) => {
  if (event.target.closest(".deleteTask")) {
    let removeTask = event.target.closest(".newTask");
    let taskText = removeTask.querySelector(".textData").textContent;
    removeTask.remove();
    storedTasks = storedTasks.filter((task) => task.taskContent !== taskText);
    localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
  }

  // Edit task functionality
  if (event.target.closest(".editTask")) {
    let clickTask = event.target.closest(".newTask");
    let textData = clickTask.querySelector(".textData");
    inputData.value = textData.textContent;
    localStorage.setItem("storedTasks", JSON.stringify(storedTasks));
    storedTasks = storedTasks.filter(
      (task) => task.taskContent !== textData.textContent,
    );
    clickTask.remove();
  }
});
