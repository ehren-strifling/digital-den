'use strict';

/**
 * Called whenever the sign up button is pressed.
 * @param {Event} e 
 */
async function signup(e) {
  return await login(e);
}
/**
 * Called whenever the login button is pressed.
 * @param {Event} e 
 */
async function login(e) {
  removeLoginButtons();
}

function removeLoginButtons() {
  [...document.getElementsByClassName("login")].foreach(e=>{
    e.style.display = "none";
  });
}