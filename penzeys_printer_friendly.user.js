// ==UserScript==
// @name         Clean Penzeys Recipe
// @namespace    http://rafe.us/
// @version      0.2
// @description  Prepate a Penzeys recipe for printing
// @author       Rafe Colburn
// @match        https://www.penzeys.com/shop/recipes/*
// @grant        none
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// @run-at       document-end
// ==/UserScript==
/* jshint -W097 */

(function() {
    'use strict';

   document.title = $('meta[property="og:title"]').attr("content");
})();
