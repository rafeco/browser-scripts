// ==UserScript==
// @name         Clean Penzeys Recipe
// @namespace    http://rafe.us/
// @version      0.1
// @description  Prepate a Penzeys recipe for printing
// @author       Rafe Colburn
// @match        https://www.penzeys.com/shop/recipes/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function removeElement(element, index, array) {
    var e = document.getElementById(element);
    if (e) {
        e.parentNode.removeChild(e);
    } else {
        var elements = document.getElementsByClassName(element);
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    }
}

function simplifyTitle() {
    var elements = document.getElementsByTagName('h4');

    if (elements.length > 0) {
        document.title = elements[0].textContent;
    }
}

function removeHeaderAndFooter() {
    var elements = document.getElementsByTagName('header');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }

    elements = document.getElementsByTagName('footer');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}

window.addEventListener('load', function() {
    removeHeaderAndFooter();

    var toRemove = ['fb-like', 'theme-sectionnavigation', 'recipe-details-cookcontainer', 'carosel-container-recipe', 'col-lg-4', 'relatedproducts', 'social-share'];
    toRemove.forEach(removeElement);
    simplifyTitle();
}, false);
