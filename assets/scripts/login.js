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
  document.body.appendChild(loginPrompt);
  let h2 = document.createElement("h2");
  h2.innerHTML = "Login"
  div.appendChild(h2);
}

createLoginPrompt();