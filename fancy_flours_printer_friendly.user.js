// ==UserScript==
// @name         Clean Fancy Flours Recipe
// @namespace    http://rafe.us/
// @version      0.1
// @description  Prepare a Fancy Flours Recipe for printing
// @author       Rafe Colburn
// @match        http://www.fancyflours.com/product/*
// @grant        none
// @require      https://code.jquery.com/jquery-2.2.4.min.js
// ==/UserScript==

(function() {
    'use strict';

    $("header").remove();
    $("nav#horizontal").remove();
    $("aside#left_column").remove();
    $("#breadcrumb").remove();
    $("#recently_viewed").remove();
    $("div.alsobought").remove();
    $("footer").remove();
    $("div.small").remove();
    
    $("#main").css("width", "100%");    
    $("#content").css("width", "100%");
    $("#content").css("float", "none");
    $("#content-only").css("width", "100%");
    $(".mainproduct").css("width", "100%");
    $(".mainproduct").css("float", "none");

    $(".product").css("font-size", "14px");
    $(".content-image img").css("width", "300px");
    $(".content-image img").css("height", "200px");
    
    document.title = $("h1:first").text();
    
    
})();
