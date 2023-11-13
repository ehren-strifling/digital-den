'use strict';

const loginPrompt = document.createElement("div");

/**
 * Called whenever the sign up button is pressed.
 * @param {Event} e 
 */
function signup(e) {
  return login(e);
}
/**
 * Called whenever the login button is pressed.
 * @param {Event} e 
 */
function login(e) {
  displayLoginPrompt();
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
  [...document.getElementsByClassName("login")].forEach(e=>{
    e.style.display = "none";
  });
}



function createLoginPrompt() {
  loginPrompt.id = "login-prompt";
  loginPrompt.onclick = removeLogin;
  let rect = document.createElement("div");
  rect.classList.add("login-prompt-div");
  loginPrompt.appendChild(rect);
  document.body.appendChild(loginPrompt);
}

createLoginPrompt();