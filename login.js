function togglePassword() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  }
  
  document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Login submitted!");
  });
