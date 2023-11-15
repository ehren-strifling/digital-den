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

