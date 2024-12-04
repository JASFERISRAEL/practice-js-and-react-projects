let isDarkMode = false;

document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");

  isDarkMode = !isDarkMode;
  document.getElementById("toggleTheme").textContent = isDarkMode
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// Set initial mode
document.body.classList.add("light-mode");
