// ==UserScript==
// @name         Clean Sur La Table Recipe
// @namespace    http://rafe.us/
// @version      0.1
// @description  Make a Sur La Table recipe printer friendly
// @author       You
// @match        http://www.surlatable.com/*
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
    var elements = document.getElementsByTagName('h1');

    if (elements.length > 0) {
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].classList.contains("name")) {
                document.title = elements[i].innerText;
            }
        }
    }
}


window.addEventListener('load', function() {
    var toRemove = ['topHeader', 'navbar', 'prodAccessories', 'productaccessories', 'footer', 'xyz', 'BVDiv', 'outlook'];

    toRemove.forEach(removeElement);
    simplifyTitle();
}, false);

