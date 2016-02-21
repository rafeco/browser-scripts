// ==UserScript==
// @name         Clean Up Martha Stewart Recipe Title
// @namespace    http://rafe.us/
// @version      0.1
// @description  Reduce the title to just the recipe name
// @author       You
// @match        http://www.marthastewart.com/*/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function cleanTitle() {
    var elements = document.getElementsByTagName('h1');

    if (elements.length > 0) {
        if (elements[0].classList.contains("page-title")) {
            document.title = elements[0].innerText;
        }
    }
}

window.addEventListener('load', function() {
    cleanTitle();
}, false);