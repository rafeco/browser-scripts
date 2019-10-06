// ==UserScript==
// @name         Martha Stewart Recipes
// @namespace    http://rafe.us/
// @version      0.1
// @description  Clean up for printing
// @author       Rafe Colburn
// @match        https://www.marthastewart.com/*/*?printview
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */


function cleanTitle() {
    var elements = document.getElementsByTagName('h1');

    if (elements.length > 0) {
        if (elements[0].classList.contains("page-title")) {
            document.title = elements[0].innerText;
        }
    }
}

(function() {
    'use strict';

    cleanTitle();
    $("div.print-buttons-all").remove();
    $("section.shop-footer").remove();
    $("section.copyright-section").remove();
    $("header").remove();
})();

