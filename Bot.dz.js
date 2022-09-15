// ==UserScript==
// @name         BingBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Tatiana Maslenkina
// @match       https://www.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==
let sb_form_go = document.getElementsById("sb_form_go")[0];

document.getElementsByName("q")[0];
document.getElementsByName("q")[0].value = "летние палетки теней";
document.getElementsById("sb_form_go").click();
