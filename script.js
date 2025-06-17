function showLogin() {
  document.getElementById("loginModal").style.display = "flex";
}

function hideLogin() {
  document.getElementById("loginModal").style.display = "none";
}

function showSignup() {
  document.getElementById("signupModal").style.display = "flex";
}

function hideSignup() {
  document.getElementById("signupModal").style.display = "none";
}

function switchToLogin() {
  hideSignup();
  showLogin();
}

function switchToSignup() {
  hideLogin();
  showSignup();
}

function togglePassword() {
  const pass1 = document.getElementById("signupPassword");
  const pass2 = document.getElementById("confirmPassword");
  const type = pass1.type === "password" ? "text" : "password";
  pass1.type = type;
  pass2.type = type;
}

window.onclick = function(e) {
  if (e.target === document.getElementById("loginModal")) hideLogin();
  if (e.target === document.getElementById("signupModal")) hideSignup();
};