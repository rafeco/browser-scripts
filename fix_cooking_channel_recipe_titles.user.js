// ==UserScript==
// @name         Fix Cooking Channel Recipe Titles
// @namespace    http://rafe.us/
// @version      0.1
// @description  De-jankify Cooking Channel recipe titles
// @author       Rafe Colburn
// @match        http://www.cookingchanneltv.com/recipes/*.print.html*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function cleanTitle() {
    var elements = document.getElementsByTagName('h1');

    console.log(elements);
    
    if (elements.length > 0) {
        document.title = elements[0].innerText;
    }
}

cleanTitle();
