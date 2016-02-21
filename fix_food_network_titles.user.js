// ==UserScript==
// @name         Fix Food Network Recipe Titles
// @namespace    http://rafe.us/
// @version      0.1
// @description  Get rid of the junk in Food Network recipe page titles
// @author       Rafe Colburn
// @match        http://www.foodnetwork.com/recipes/*.print.html
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function cleanTitle() {
    var elements = document.getElementsByTagName('h1');

    if (elements.length > 0) {
        document.title = elements[0].innerText;
    }
}

window.addEventListener('load', function() {
    cleanTitle();
}, false);