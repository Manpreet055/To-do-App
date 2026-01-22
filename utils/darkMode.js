let darkMode = document.querySelector(".darkModeButton");
let darkModeEnabled = localStorage.getItem("darkModePrefrence") === "true";

function toggleDarkMode() {
  if (!darkModeEnabled) {
    darkMode.innerHTML = "<i class='fas fa-sun'></i>";
  } else {
    darkMode.innerHTML = "<i class='fas fa-moon'></i>";
  }
}
toggleDarkMode();
if (darkModeEnabled) {
  document.body.classList.add("darkMode");
}
darkMode.addEventListener("click", () => {
  document.body.classList.toggle("darkMode");
  darkModeEnabled = document.body.classList.contains("darkMode");
  toggleDarkMode();
  localStorage.setItem(
    "darkModePrefrence",
    document.body.classList.contains("darkMode"),
  );
});
