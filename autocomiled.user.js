// ==UserScript==
// @name           own_smileys
// @namespace      wop
// @description    creates a smileybox below the standard-smiles
// @include        /^https{0,1}:\/\/(test){0,1}forum\.worldofplayers\.[a-z]{2,4}\/forum\//
// @author         Satans Krümelmonster
// @version        2.5
// ==/UserScript==
Array.prototype.contains=function(needle){for(var i=0;i<this.length;i++){if(this[i]==needle){return true;}}return false;}document.getElementsByClassName = function(classname){var nodes = document.getElementsByTagName("*");var ret = new Array();var retcount = 0;for(var i=0;i<nodes.length;i++){if(nodes[i].classList.contains(classname)){ret[retcount++]=nodes[i];}}return ret;}function add_ownsmileylist(j){