// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Bot for Google
// @author       Sergey Chizhikov
// @match        https://www.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

let links = document.links;
let btnK = document.getElementsByName("btnK")[0];
let keywords = ["Взаимодействие PHP и MySQL", "10 самых популярных шрифтов от Google", "Отключение редакций и ревизий в WordPress"];
let keyword = keywords[getRandom(0, keywords.length)];

if (btnK !== undefined) {
  document.getElementsByName("q")[0].value = keyword;
  btnK.click();
} else {

  for (let i=0; i<links.length; i++) {
    if (links[i].href.indexOf("napli.ru") !== -1) {
      console.log("Нашел строку" + links[i]);
      let link = links[i];
      link.click();
      break;
    }
  }
}
function getRandom(min, max) {
  return Math.floor(Math.random()*(max - min) + min);
}
