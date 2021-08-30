"use strict";

var style = document.createElement("Style");
var toggler = document.getElementsByClassName("nav-toggle")[0];
toggler.addEventListener("click", function () {
  style.innerHTML = "\n\n\n    \n.header-section .navbar {\n    height: auto; /* 4em */\n    flex-direction: column;\n  }\n  .header-section .navbar .nav-brand {\n    display: none; /* Block */\n  }\n  .header-section .navbar .nav-list {\n    display: block; /* none */\n    width: 45%;\n    margin: 1em 0;\n  }\n  .header-section .navbar .nav-list .nav-item {\n    padding-bottom: 10px;\n  }\n  .header-section .navbar .nav-btn {\n    align-items: center;\n    width: 12rem;\n    text-align: center;\n    padding: 0.5em 0;\n    align-self: center;\n  }\n  .header-section .navbar .nav-toggle {\n    margin-right: 0;\n    position: absolute;\n    top: 1em;\n    right: 1em;\n    transform: rotate(90deg);\n    transition: all 0.3s;\n  }\n  /* .header-section .navbar .nav-toggle .nav-toggle__item {\n    width: 1.3em;\n    height: 0.2em;\n    margin: 0.3em;\n    background-color: black;\n  } */\n\n\n";
});
toggler.addEventListener ? console.log("A") : console.log("B");
document.head.appendChild(style);