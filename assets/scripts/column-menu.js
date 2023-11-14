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

const listBtn = select('.display-menu')
const menu = select('.menu-icon i')
const divInput = select('.display-input')
const loupe = select('.loupe')
const userIcon = select('.user-icon-div div')
const divAccount = select('.display-account-buttons')

function hideElementOnClickOutside(element, callback) {
    onEvent(document, 'click', (event) => {
        if (!element.contains(event.target)) {
            
            callback();
        }
    });
}

function displayMenu () {
    if (listBtn.style.display === 'none') {
        listBtn.style.display = 'flex'
    } else {
        listBtn.style.display = 'none'
    }
}

function displayInput () {
    if (divInput.style.display == 'none') {
        divInput.style.display = 'flex'
    } else {
        divInput.style.display = 'none'
    }
}

function displayAccount () {
    if (divAccount.style.display == 'none') {
        divAccount.style.display = 'grid'
    } else {
        divAccount.style.display = 'none'
    }
}

onEvent(window, 'resize', () => {
    if (window.innerWidth < 880) {
        listBtn.style.display = 'none'
        divInput.style.display = 'none'
        divAccount.style.display = 'none'
    }
})

onEvent(window, 'load', () => {
    if (window.innerWidth < 880) {
        listBtn.style.display = 'none'
        divInput.style.display = 'none'
        divAccount.style.display = 'none'
    }
})

onEvent(menu, 'click', hideElementOnClickOutside(menu, () => {listBtn.style.display = 'none'}))
onEvent(menu, 'click', displayMenu)
onEvent(loupe, 'click', displayInput)
onEvent(loupe, 'click', hideElementOnClickOutside(loupe, () => {divInput.style.display = 'none'}))
onEvent(userIcon, 'click', displayAccount)
onEvent(userIcon, 'click', hideElementOnClickOutside(userIcon, () => {divAccount.style.display = 'none'}))