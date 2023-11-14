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
  login(e);
  //removeLoginPrompt();
  //removeLoginButtons();
}
/**
 * Called whenever the login button is pressed.
 * @param {Event} e 
 */
function login(e) {
  let username = loginPrompt.querySelector("#login-prompt-username").value;
  let password = loginPrompt.querySelector("#login-prompt-password").value;
  if (verifyUsername(username) && verifyPassword(password)) {
    removeLoginPrompt();
    removeLoginButtons();
  }
}

/**
 * @param {string} username 
 * @returns {boolean}
 */
function verifyUsername(username) {
  if (username.length>=4) {
    loginPrompt.querySelector("#login-prompt-username-error").innerHTML = "";
    return true; 
  } else {
    loginPrompt.querySelector("#login-prompt-username-error").innerHTML = "Invalid username: Must be longer than 4 characters.";
  }
  return false;
}
/**
 * @param {string} password 
 * @returns {boolean}
 */
function verifyPassword(password) {
  if (password.length>=4) {
    loginPrompt.querySelector("#login-prompt-password-error").innerHTML = "";
    return true;
  } else {
    loginPrompt.querySelector("#login-prompt-password-error").innerHTML = "Invalid password: Must be longer than 4 characters.";
  }
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
  loginPrompt.querySelector("#login-prompt-username").value = "";
  loginPrompt.querySelector("#login-prompt-password").value = "";
  loginPrompt.querySelector("#login-prompt-username-error").innerHTML = "";
  loginPrompt.querySelector("#login-prompt-password-error").innerHTML = "";
}

function removeLoginButtons() {
  [...document.getElementsByClassName("remove-on-login")].forEach(e=>{
    e.style.display = "none";
    document.querySelector("header .access-div").style.display = "none";
  });
}



function createLoginPrompt() {
  //login event listeners. Add before we create new login button instances
  [...document.getElementsByClassName("sign-up")].forEach(e=>e.addEventListener("click", openLoginPrompt));
  [...document.getElementsByClassName("log-in")].forEach(e=>e.addEventListener("click", openLoginPrompt));
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

  let usernameError = document.createElement("p");
  usernameError.classList.add("login-prompt-error");
  usernameError.id = "login-prompt-username-error";
  div.appendChild(usernameError);

  let password = document.createElement("input");
  password.placeholder = "Password";
  password.type = "password";
  password.classList.add("login-prompt-input");
  password.id = "login-prompt-password";
  div.appendChild(password);

  let passwordError = document.createElement("p");
  passwordError.classList.add("login-prompt-error");
  passwordError.id = "login-prompt-password-error";
  div.appendChild(passwordError);

  let buttonDiv = document.createElement("div");
  buttonDiv.classList.add("login-prompt-button-div");
  
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

  div.appendChild(buttonDiv);

  let forgotPassword = document.createElement("a");
  forgotPassword.innerHTML = "Forgot password?";
  forgotPassword.href = "https://www.google.com";
  forgotPassword.target = "_blank";
  forgotPassword.classList.add("login-prompt-forgot");
  div.appendChild(forgotPassword);

  document.body.appendChild(loginPrompt);
}

createLoginPrompt();