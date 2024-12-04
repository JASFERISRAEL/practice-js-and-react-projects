const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

// Predefined credentials (for demonstration purposes)
const validUsername = "admin";
const validPassword = "12345";

// Handle form submission
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from refreshing the page

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Validate credentials    
  if (username === validUsername && password === validPassword) {
    message.textContent = "Login successful!";
    message.style.color = "green";
  } else {
    message.textContent = "Invalid username or password.";
    message.style.color = "red";
  }
});
