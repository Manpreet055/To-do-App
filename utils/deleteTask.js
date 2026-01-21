let tasks = document.querySelector(".tasks");
const deleteTask = (data) => {
  const { newTask, checkbox, textData, editTask } = data;
  let deleteTask = document.createElement("div");
  deleteTask.className = "deleteTask";
  deleteTask.innerHTML = `<i class="fas fa-trash"></i>`;
  newTask.appendChild(checkbox);
  newTask.appendChild(textData);
  newTask.appendChild(editTask);
  newTask.appendChild(deleteTask);
  tasks.appendChild(newTask);
};

export default deleteTask;
