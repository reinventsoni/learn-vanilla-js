// It is better to wait for the DOM content to be loaded
// before accessing DOM Elements, as the browser may have
// parsed the content, but the content may not yet be loaded
// completely.

// DOM Content Loaded Event -> use this for all the initializations
// requiring DOM Manipulations, like attaching an Event Handler
window.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Created");
  let nav = document.querySelector("nav");
  console.log(nav);
});

//-------------------------------------------------------------------
// Functional Aliasing in Javascript
// To reduce verbosity, we can use the aliases to JavaScript
// functions as well. Following code snippet shows how to do that

// //For e.g. we can replace the document.querySelector() calls with $()
// const $ = function (args) {
//   return document.querySelector(args);
// };

// // Similary we can replace the document.querySelectorAll() calls with $$()
// const $$ = function (args) {
//   return document.querySelectorAll(args);
// };

// // Similarly we can adjust the HTMLElement prototype and create methods aliases
// // on HTML Element itself.
// HTMLElement.prototype.on = function (a, b, c) {
//   return this.addEventListener(a, b, c);
// };
// HTMLElement.prototype.off = function (a, b) {
//   return this.removeEventListener(a, b);
// };
// HTMLElement.prototype.$ = function (s) {
//   return this.querySelector(s);
// };
// HTMLElement.prototype.$$ = function (s) {
//   return this.querySelectorAll(s);
// };
