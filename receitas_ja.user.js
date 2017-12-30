// ==UserScript==
// @name         Receitas Ja
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Recipe formatting
// @author       Rafe Colburn
// @match        https://www.receitasja.com/*
// @grant        GM_addStyle
// @require http://code.jquery.com/jquery-3.2.1.min.js
// @runat document-idle
// ==/UserScript==

(function() {
    'use strict';
    $("#navbar-splitter").remove();
    $("a#primary").remove();
    $("#fb-root").remove();
    $("#nav-main").remove();
    $("#masthead").remove();
    $("#secondary").remove();
    $("#breadcrumbs").remove();
    $("#breadcrumbs-bottom").remove();
    $("#pagination-bottom").remove();
    $("div.panel-footer").remove();
    $("div.site-info").remove();
    $("#comments").remove();
    $("#spu-bottom").remove();
    $("#spu-main").remove();
    $("#spu-timer").remove();
    $("#primary").removeClass();
    $("div.skiptranslate").remove();
    GM_addStyle('@media print { a[href]:after { content: none !important; } }');
    GM_addStyle('.skiptranslate { display: none; }');
    GM_addStyle('ul { overflow: hidden; }');
    GM_addStyle('.panel { border: 0; }');
    $("div.remove-for-infinite").remove();
})();
