'use strict';

const loginPrompt = document.createElement("div");

/**
 * Opens the login prompt
 * @param {Event} e 
 */
function openLoginPrompt(e) {
  displayLoginPrompt();
}
/**
 * Called whenever the sign up button is pressed.
 * @param {Event} e 
 */
function signup(e) {
  removeLoginPrompt();
  removeLoginButtons();
}
/**
 * Called whenever the login button is pressed.
 * @param {Event} e 
 */
function login(e) {
  removeLoginPrompt();
  removeLoginButtons();
}
/**
 * Called when the login prompt should be closed
 * @param {Event} e 
 */
function removeLogin(e) {
  if (e.target===loginPrompt) {
    removeLoginPrompt();
  }
}

function displayLoginPrompt() {
  loginPrompt.classList.add("active");
}
function removeLoginPrompt() {
  loginPrompt.classList.remove("active");
}

function removeLoginButtons() {
  [...document.getElementsByClassName("remove-on-login")].forEach(e=>{
    e.style.display = "none";
  });
}



function createLoginPrompt() {
  loginPrompt.id = "login-prompt";
  loginPrompt.onclick = removeLogin;
  let div = document.createElement("div");
  div.classList.add("login-prompt-div");
  loginPrompt.appendChild(div);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Login"
  div.appendChild(h2);
  let username = document.createElement("input");
  username.placeholder = "Username";
  username.classList.add("login-prompt-input");
  username.id = "login-prompt-username";
  div.appendChild(username);
  let password = document.createElement("input");
  password.placeholder = "Password";
  password.classList.add("login-prompt-input");
  password.id = "login-prompt-password";
  div.appendChild(password);
  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("login-prompt-button-div");
  div.appendChild(buttonDiv);
  let signupButton = document.createElement("button");
  signupButton.innerHTML = "Sign up";
  signupButton.classList.add("login-prompt-button");
  signupButton.classList.add("sign-up");
  signupButton.addEventListener("click", signup);
  buttonDiv.appendChild(signupButton);
  let loginButton = document.createElement("button");
  loginButton.innerHTML = "Login";
  loginButton.classList.add("login-prompt-button");
  loginButton.classList.add("log-in");
  loginButton.addEventListener("click", signup);
  buttonDiv.appendChild(loginButton);
  document.body.appendChild(loginPrompt);
}

createLoginPrompt();