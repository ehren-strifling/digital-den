'use strict'

/*------------- Utility Functions ----------*/

function select (selector) {
    return document.querySelector(selector)
}

function selectAll (selector) {
    return document.querySelectorAll(selector)
}

function onEvent (selector, event, callback) {
    return selector.addEventListener(event, callback)
}

/*------------------------------------------*/

const userSection = select('.user-help-section')
const userListItems = selectAll('.list-user-section ul')
const arrowIcon = selectAll('.fa-arrow-down')

arrowIcon.forEach((arrowIcons, index) => {
    onEvent(arrowIcons, 'click', () => {
        // Toggle the visibility of the associated userList
        const userList = userListItems[index];
        userList.style.display = (userList.style.display === 'block') ? 'none' : 'block';

        console.log('Hello');
    });
});

console.log(userList)

