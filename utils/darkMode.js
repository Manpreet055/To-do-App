let darkMode = document.querySelector(".darkModeButton");

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
