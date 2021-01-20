/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/background.jpg */ "./src/images/background.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_background_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\n.hidden {\n  display: none !important; }\n\n.navigation-bar {\n  background-color: #1EA896;\n  position: fixed;\n  top: 0;\n  display: flex;\n  width: 100%;\n  height: 9vh;\n  box-shadow: 0 1px 10px 1px #000500;\n  justify-content: space-between; }\n\n.nav-left {\n  width: 9vw;\n  display: flex;\n  align-items: center;\n  margin-left: 1em; }\n\n.suitcase-img {\n  height: 2.5em;\n  width: 2.5em;\n  margin-bottom: .75em;\n  margin-right: .25em; }\n\n.book-trip-button, .approve-button, .cancel-button, .submit-button, .confirm-button, .departed-button, .login-button {\n  background-color: #F5F5F5;\n  color: #000500;\n  border: 2px solid #000500;\n  font-size: 1.5em;\n  font-weight: bold;\n  width: 4em;\n  height: 1.5em;\n  border-radius: .25em; }\n  .book-trip-button:hover, .approve-button:hover, .cancel-button:hover, .submit-button:hover, .confirm-button:hover, .departed-button:hover, .login-button:hover {\n    cursor: pointer; }\n\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 25vw;\n  margin-top: .5em;\n  margin-left: 1em; }\n\n.search-button {\n  margin-right: .25em;\n  background-color: #1EA896;\n  width: 2.75em;\n  height: 2.75em;\n  border-radius: .5em; }\n  .search-button:hover {\n    cursor: pointer; }\n\n.search-input {\n  width: 15em;\n  height: 2.5em;\n  border: 0.25em solid #1EA896;\n  border-radius: .5em; }\n\n.nav-title {\n  font-size: 3.25em;\n  font-family: \"Lato\", sans-serif;\n  color: #000500; }\n\n.nav-right {\n  width: 10vw;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center; }\n\n.dropdown-menu,\n.dropdown-content:hover {\n  cursor: pointer; }\n\n.dropdown-menu {\n  margin-top: 1em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 5; }\n  .dropdown-menu:hover .dropdown-content {\n    cursor: pointer;\n    display: flex;\n    flex-direction: column; }\n\n.hamburger {\n  height: 2em;\n  width: 2em; }\n\n.dropdown-content {\n  display: none;\n  margin-top: 1em;\n  background-color: #1EA896;\n  text-align: center;\n  cursor: pointer;\n  height: auto;\n  width: auto;\n  color: #000500; }\n\n.dropdown-item {\n  font-size: 1.5em;\n  padding: .35em;\n  border: none;\n  width: auto;\n  text-align: center; }\n  .dropdown-item:hover {\n    box-shadow: inset 0px 0px 4px; }\n\n.hidden {\n  display: none !important; }\n\n.traveler-page {\n  align-self: center;\n  width: 99vw;\n  height: 79vh;\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(3, 31vw);\n  grid-template-rows: repeat(auto, 25vh);\n  justify-content: center;\n  margin-top: 9.5vh;\n  overflow: scroll;\n  padding: .5em; }\n\n.traveler-trip {\n  background-color: #F5F5F5;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0 3px 5px -1px #000500; }\n\n.image-wrapper {\n  height: 100%;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n.destination-title, .destination-status {\n  width: 100%;\n  text-align: center;\n  margin-top: .5em;\n  color: #FF715B;\n  font-size: 1.25em;\n  background: rgba(255, 255, 255, 0.7); }\n\n.destination-status {\n  margin-top: 0;\n  margin-bottom: .5em;\n  font-size: 1em; }\n\n.info-wrapper {\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  padding: 1em; }\n\n.travelers-wrapper, .agent-travelers-wrapper, .modal-travelers-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  background-color: #E0E0E0;\n  border-radius: 1em;\n  width: 5em; }\n\n.person-icon {\n  height: 3em;\n  width: 3em; }\n\n.number-of-travalers {\n  font-size: 2.5em;\n  height: auto;\n  color: #1EA896; }\n\n.blur {\n  filter: blur(4px); }\n\n.admin-page {\n  align-self: center;\n  height: 100vh;\n  width: 100vw;\n  grid-gap: 1rem;\n  justify-content: center;\n  margin-top: 10vh;\n  margin-bottom: 2vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 4vh 96vh;\n  grid-template-areas: \"titleP titleA titleD\" \"pending approved departed\"; }\n\n.pending-title, .approved-title, .departed-title {\n  grid-area: \"titleP\";\n  text-align: center;\n  font-size: 2em; }\n\n.approved-title {\n  grid-area: \"titleA\"; }\n\n.departed-title {\n  grid-area: \"titleD\"; }\n\n.approve-button, .cancel-button, .submit-button, .confirm-button, .departed-button, .login-button {\n  color: #4C5454;\n  border: solid 1px #4C5454;\n  width: 75%;\n  height: 1.5em; }\n\n.cancel-button, .submit-button, .confirm-button {\n  background-color: #FF715B; }\n\n.departed-button {\n  background: #E0E0E0; }\n\n.pending-trips, .approved-trips, .departed-trips {\n  grid-area: \"pending\";\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(1, 30vw);\n  grid-template-rows: repeat(5, 25vh);\n  justify-content: center;\n  overflow: scroll; }\n\n.approved-trips {\n  border-right: solid 0.1em #000500;\n  border-left: solid 0.1em #000500; }\n\n.admin-view {\n  display: flex;\n  flex-direction: row;\n  width: inherit;\n  background-color: #F5F5F5;\n  box-shadow: 0 3px 5px -1px #000500; }\n\n.agent-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 45%;\n  justify-content: space-between;\n  padding: .5em;\n  align-items: center;\n  border-left: solid 1px #4C5454; }\n\n.agent-info-wrapper {\n  width: 55%;\n  background-color: #1EA896;\n  padding: 1em;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around; }\n\n.agent-traveler-name {\n  font-size: 1.5em; }\n\n.agent-destination-title {\n  font-size: 1.25em; }\n\n.agent-travelers-wrapper {\n  border: solid 1px #1EA896; }\n\n.foot {\n  height: 8vh;\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  background-color: #1EA896;\n  z-index: 4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: #000500; }\n\n.user-wrapper {\n  display: flex;\n  flex-direction: row;\n  width: 50vw;\n  font-size: 2em;\n  margin-left: 2vw; }\n\n.user {\n  height: 1em;\n  width: 1em; }\n\n.traveler-expenses {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: right;\n  width: 50vw;\n  margin-right: 2vw;\n  font-size: 1.5em; }\n\n.expenses-cost {\n  margin-left: .25em;\n  font-size: 110%;\n  background-color: #FF715B;\n  color: #000500;\n  border-radius: .25em; }\n\n.traveler-book-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 30vw;\n  top: 25vh;\n  width: 40vw;\n  height: 45vh;\n  overflow: auto;\n  box-shadow: 0 3px 5px -1px #000500;\n  background-color: #F5F5F5;\n  display: flex;\n  flex-direction: column; }\n\n.modal-body, .cost-display {\n  width: 95%;\n  height: 95%;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start; }\n\n.modal-header {\n  background-color: #FF715B;\n  width: inherit;\n  height: 4em;\n  box-shadow: 0 1px 10px 1px #000500;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: #000500; }\n\n.modal-title {\n  margin-left: 1em; }\n\n.close-button {\n  margin-right: 1em;\n  width: 2em;\n  height: 2em; }\n  .close-button:hover {\n    cursor: pointer; }\n\n.calendar-wrapper {\n  display: flex;\n  flex-direction: row;\n  font-size: 2em;\n  margin-top: .5em;\n  justify-content: space-around;\n  margin-bottom: 1em; }\n\n#depart-date, #return-date {\n  border: 1px solid #FF715B;\n  width: 9em;\n  height: 2em;\n  font-size: .75em;\n  font-family: \"Roboto\", sans-serif; }\n  #depart-date:hover, #return-date:hover {\n    cursor: pointer; }\n\n.date-arrow {\n  height: 1.5em;\n  width: 1.5em;\n  margin-right: 1em;\n  margin-left: 1em; }\n\n.destination-wrapper {\n  width: inherit;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 2em; }\n\n#destinations {\n  width: 12em;\n  height: 2em;\n  font-size: 1.5em;\n  border: 1px solid #FF715B;\n  font-family: \"Roboto\", sans-serif; }\n  #destinations:hover {\n    cursor: pointer; }\n\n.num-submit-wrapper {\n  display: flex;\n  flex-direction: row;\n  width: inherit;\n  justify-content: space-around; }\n\n.submit-button, .confirm-button {\n  width: 5em;\n  height: 2em; }\n\n.input-travelers {\n  font-size: 2em;\n  width: 2em;\n  text-align: center;\n  background-color: #E0E0E0;\n  padding: .25em;\n  border-top-right-radius: .5em;\n  border-bottom-right-radius: .5em; }\n  .input-travelers:hover {\n    cursor: pointer; }\n\n.modal-travelers-wrapper {\n  width: 8em; }\n\n.cost-display {\n  font-size: 1.5em; }\n\n.receipt-title {\n  font-size: 2.5em; }\n\n.subtotal, .agency-fee {\n  font-size: 1em; }\n\n.agency-fee {\n  border-bottom: 1px solid #000500;\n  margin-bottom: .25em; }\n\n.total {\n  font-size: 1.5em;\n  font-style: \"Lato\", sans-serif; }\n\n.confirm-button {\n  margin-top: .5em; }\n\n.login-display {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around; }\n\n.login-box {\n  background: rgba(255, 255, 255, 0.7);\n  width: 25vw;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 3px 5px -1px #000500;\n  border-radius: .25em; }\n\n.login-welcome {\n  font-size: 1.75em;\n  padding: .5em;\n  text-align: center;\n  color: #1EA896;\n  width: 23vw;\n  border-top-left-radius: .125em;\n  border-top-right-radius: .125em; }\n\n.login-logo {\n  height: 10em;\n  width: 10em; }\n\n.login-wrapper {\n  width: inherit;\n  height: 10em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around; }\n\n.username-input, .password-input {\n  height: 1.25em;\n  font-size: 1.5em;\n  border: 1px solid #1EA896;\n  border-radius: .25em;\n  background: rgba(255, 255, 255, 0.2); }\n\n.login-button {\n  margin-bottom: 1em;\n  background-color: #1EA896; }\n\n@media only screen and (min-width: 601px) and (max-width: 1050px) {\n  .login-display {\n    background-size: cover;\n    background-position: 50% 50%; }\n  .login-box {\n    width: 70vw;\n    height: 70vh; }\n  .login-welcome {\n    font-size: 3em;\n    width: inherit; }\n  .login-logo {\n    height: 12em;\n    width: 12em; }\n  .login-wrapper {\n    height: 30vh; }\n  .username-input, .password-input {\n    height: 2em;\n    width: 15em; }\n  .login-button {\n    width: 15em;\n    height: 2em; }\n  .traveler-page {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(auto, 30vh);\n    height: 80vh;\n    width: auto; }\n  .dropdown-content,\n  .dropdown-menu {\n    margin-top: 2.75em; }\n  .traveler-book-modal {\n    width: 45vh;\n    height: 25vh;\n    left: 20.5vw;\n    top: 33vh; }\n  .modal-body, .cost-display,\n  .cost-display {\n    width: 96%;\n    padding: 0; }\n  .confirm-button {\n    transform: scale(0.9); } }\n\n@media only screen and (max-width: 600px) {\n  .login-display {\n    background-size: cover;\n    background-position: 50% 50%; }\n  .login-box {\n    width: 80vw; }\n  .login-welcome {\n    font-size: 1.5em;\n    width: inherit; }\n  .nav-title {\n    display: none; }\n  .user-wrapper {\n    height: auto;\n    width: auto; }\n  .welcome-user {\n    width: 7em;\n    font-size: .5em; }\n  .expenses-title {\n    width: 8em;\n    font-size: .5em; }\n  .traveler-page {\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    height: 80vh;\n    width: auto; }\n  .dropdown-menu {\n    margin-right: 3em;\n    width: auto; }\n  .traveler-book-modal {\n    width: 44vh;\n    height: 80vh;\n    left: 2vw;\n    top: 10vh; }\n  .modal-body, .cost-display {\n    width: 91%; }\n  .calendar-wrapper {\n    width: inherit;\n    flex-direction: column;\n    align-items: center; }\n  .num-submit-wrapper {\n    flex-direction: column;\n    padding-right: 5em;\n    align-items: center;\n    height: 10em; }\n  .submit-button, .confirm-button {\n    margin-left: 3em; }\n  .confirm-button {\n    margin-left: 0; } }\n\n* {\n  margin: 0em;\n  padding: 0em;\n  border: 0em; }\n\nhtml {\n  height: 100vh;\n  width: 100vw;\n  font-family: \"Roboto\", sans-serif;\n  background-color: #E0E0E0;\n  font-size: 1em; }\n\nmain {\n  align-items: center; }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_navbar.scss","webpack://./src/css/_traveler-display.scss","webpack://./src/css/_agent-display.scss","webpack://./src/css/_footer.scss","webpack://./src/css/_modal-display.scss","webpack://./src/css/_login-page.scss","webpack://./src/css/_responsiveness.scss"],"names":[],"mappings":"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","sourcesContent":["/* This is an example of using Sass, otherwise plain CSS works too*/\n@import 'variables.scss';\n@import 'navbar.scss';\n@import 'traveler-display.scss';\n@import 'agent-display.scss';\n@import 'footer.scss';\n@import 'modal-display.scss';\n@import 'login-page.scss';\n@import 'responsiveness.scss';\n\n* {\n  margin: 0em;\n  padding: 0em;\n  border: 0em;\n}\n\nhtml {\n  height: 100vh;\n  width: 100vw;\n  font-family: $regular-font;\n  background-color: $light-grey;\n  font-size: 1em;\n}\n\nmain {\n  align-items: center;\n}\n","$white: #F5F5F5;\n$light-grey: #E0E0E0;\n$rich-black: #000500;\n$grey: #4C5454;\n$coral: #FF715B;\n$green: #1EA896;\n\n\n$larger-font: 'Lato', sans-serif;\n$regular-font: 'Roboto', sans-serif;\n\n.hidden {\n  display: none!important;\n}\n",".navigation-bar {\n  background-color: $green;\n  position: fixed;\n  top: 0;\n  display: flex;\n  width: 100%;\n  height: 9vh;\n  box-shadow: 0 1px 10px 1px $rich-black;\n  justify-content: space-between;\n}\n\n.nav-left {\n  width: 9vw;\n  display: flex;\n  align-items: center;\n  margin-left: 1em;\n}\n\n.suitcase-img {\n  height: 2.5em;\n  width: 2.5em;\n  margin-bottom: .75em;\n  margin-right: .25em;\n}\n\n.book-trip-button {\n  background-color: $white;\n  color: $rich-black;\n  border: 2px solid $rich-black;\n  font-size: 1.5em;\n  font-weight: bold;\n  width: 4em;\n  height: 1.5em;\n  border-radius: .25em;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.search-bar {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  width: 25vw;\n  margin-top: .5em;\n  margin-left: 1em;\n}\n\n.search-button {\n  margin-right: .25em;\n  background-color: $green;\n  width: 2.75em;\n  height: 2.75em;\n  border-radius: .5em;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.search-input {\n  width: 15em;\n  height: 2.5em;\n  border: .25em solid $green;\n  border-radius: .5em;\n}\n\n.nav-title {\n  font-size: 3.25em;\n  font-family: $larger-font;\n  color: $rich-black;\n}\n\n.nav-right {\n  width: 10vw;\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: center;\n}\n\n.dropdown-menu,\n.dropdown-content:hover {\n  cursor: pointer;\n}\n\n.dropdown-menu {\n  margin-top: 1em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  z-index: 5;\n\n  &:hover .dropdown-content {\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n  }\n}\n\n.hamburger {\n  height: 2em;\n  width: 2em;\n}\n\n.dropdown-content {\n  display: none;\n  margin-top: 1em;\n  background-color: $green;\n  text-align: center;\n  cursor: pointer;\n  height: auto;\n  width: auto;\n  color: $rich-black;\n}\n\n.dropdown-item {\n  font-size: 1.5em;\n  padding: .35em;\n  border: none;\n  width: auto;\n  text-align: center;\n\n  &:hover {\n    box-shadow: inset 0px 0px 4px;\n  }\n}\n","@import 'variables.scss';\n\n.traveler-page {\n  align-self: center;\n  width: 99vw;\n  height: 79vh;\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(3, 31vw);\n  grid-template-rows: repeat(auto, 25vh);\n  justify-content: center;\n  margin-top: 9.5vh;\n  overflow: scroll;\n  padding: .5em;\n}\n\n.traveler-trip {\n  background-color: $white;\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0 3px 5px -1px $rich-black;\n}\n\n.image-wrapper{\n  height: 100%;\n  width: 70%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: flex-start;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.destination-title {\n  width: 100%;\n  text-align: center;\n  margin-top: .5em;\n  color: $coral;\n  font-size: 1.25em;\n  background:rgba(255,255,255, .7);\n}\n\n.destination-status {\n  @extend .destination-title;\n  margin-top: 0;\n  margin-bottom: .5em;\n  font-size: 1em;\n}\n\n.info-wrapper {\n  width: 30%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  text-align: center;\n  padding: 1em;\n}\n\n.travelers-wrapper {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  background-color: $light-grey;\n  border-radius: 1em;\n  width: 5em\n}\n\n.person-icon {\n  height: 3em;\n  width: 3em;\n}\n\n.number-of-travalers {\n  font-size: 2.5em;\n  height: auto;\n  color: $green;\n}\n\n.blur {\n  filter:blur(4px);\n}\n",".admin-page {\n  align-self: center;\n  height: 100vh;\n  width: 100vw;\n  grid-gap: 1rem;\n  justify-content: center;\n  margin-top: 10vh;\n  margin-bottom: 2vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 4vh 96vh;\n  grid-template-areas:\n    \"titleP titleA titleD\"\n    \"pending approved departed\"\n}\n\n.pending-title {\n  grid-area: \"titleP\";\n  text-align: center;\n  font-size: 2em;\n}\n\n.approved-title {\n  @extend .pending-title;\n  grid-area: \"titleA\";\n}\n\n.departed-title {\n  @extend .pending-title;\n  grid-area: \"titleD\";\n}\n\n.approve-button {\n  @extend .book-trip-button;\n  color: $grey;\n  border: solid 1px $grey;\n  width: 75%;\n  height: 1.5em;\n}\n\n.cancel-button {\n  @extend .approve-button;\n  background-color: $coral;\n}\n\n.departed-button {\n  @extend .approve-button;\n  background: $light-grey;\n}\n\n.pending-trips {\n  grid-area: \"pending\";\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(1, 30vw);\n  grid-template-rows: repeat(5, 25vh);\n  justify-content: center;\n  overflow: scroll;\n}\n\n.approved-trips {\n  @extend .pending-trips;\n  border-right: solid .1em $rich-black;\n  border-left: solid .1em $rich-black;\n}\n\n.departed-trips {\n  @extend .pending-trips;\n}\n\n.admin-view {\n  display: flex;\n  flex-direction: row;\n  width: inherit;\n  background-color: $white;\n  box-shadow: 0 3px 5px -1px $rich-black;\n}\n\n.agent-wrapper {\n  display: flex;\n  flex-direction: column;\n  width: 45%;\n  justify-content: space-between;\n  padding: .5em;\n  align-items: center;\n  border-left: solid 1px $grey;\n}\n\n.agent-info-wrapper {\n  width: 55%;\n  background-color: $green;\n  padding: 1em;\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.agent-traveler-name {\n  font-size: 1.5em;\n}\n\n.agent-destination-title {\n  font-size: 1.25em;\n}\n\n.agent-travelers-wrapper {\n  @extend .travelers-wrapper;\n  border: solid 1px $green;\n}\n",".foot {\n  height: 8vh;\n  width: 100vw;\n  position: fixed;\n  bottom: 0;\n  background-color: $green;\n  z-index: 4;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  color: $rich-black;\n}\n\n.user-wrapper {\n  display: flex;\n  flex-direction: row;\n  width: 50vw;\n  font-size: 2em;\n  margin-left: 2vw;\n}\n\n.user {\n  height: 1em;\n  width: 1em;\n}\n\n.traveler-expenses{\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  text-align: right;\n  width: 50vw;\n  margin-right: 2vw;\n  font-size: 1.5em;\n}\n\n.expenses-cost {\n  margin-left: .25em;\n  font-size: 110%;\n  background-color: $coral;\n  color: $rich-black;\n  border-radius: .25em;\n}\n",".traveler-book-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 30vw;\n  top: 25vh;\n  width: 40vw;\n  height: 45vh;\n  overflow: auto;\n  box-shadow: 0 3px 5px -1px $rich-black;\n  background-color: $white;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-body {\n  width: 95%;\n  height: 95%;\n  padding: 1em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.modal-header {\n  background-color: $coral;\n  width: inherit;\n  height: 4em;\n  box-shadow: 0 1px 10px 1px $rich-black;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  color: $rich-black;\n}\n\n.modal-title {\n  margin-left: 1em;\n}\n\n.close-button {\n  margin-right: 1em;\n  width: 2em;\n  height: 2em;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.calendar-wrapper {\n  display: flex;\n  flex-direction: row;\n  font-size: 2em;\n  margin-top: .5em;\n  justify-content: space-around;\n  margin-bottom: 1em;\n}\n\n#depart-date, #return-date {\n  border: 1px solid $coral;\n  width: 9em;\n  height: 2em;\n  font-size: .75em;\n  font-family: $regular-font;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.date-arrow {\n  height: 1.5em;\n  width: 1.5em;\n  margin-right: 1em;\n  margin-left: 1em;\n}\n\n.destination-wrapper {\n  width: inherit;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 2em;\n}\n\n#destinations {\n  width: 12em;\n  height: 2em;\n  font-size: 1.5em;\n  border: 1px solid $coral;\n  font-family: $regular-font;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.num-submit-wrapper {\n  display: flex;\n  flex-direction: row;\n  width: inherit;\n  justify-content: space-around;\n}\n\n.submit-button {\n  @extend .cancel-button;\n  width: 5em;\n  height: 2em;\n}\n\n.input-travelers {\n  font-size: 2em;\n  width: 2em;\n  text-align: center;\n  background-color: $light-grey;\n  padding:.25em;\n  border-top-right-radius: .5em;\n  border-bottom-right-radius: .5em;\n\n  &:hover {\n    cursor: pointer;\n  }\n}\n\n.modal-travelers-wrapper {\n  @extend .travelers-wrapper;\n  width: 8em;\n}\n\n.cost-display {\n  @extend .modal-body;\n  font-size: 1.5em;\n}\n\n.receipt-title {\n  font-size: 2.5em;\n}\n\n.subtotal {\n  font-size: 1em;\n}\n\n.agency-fee {\n  @extend .subtotal;\n  border-bottom: 1px solid $rich-black;\n  margin-bottom: .25em;\n}\n\n.total {\n  font-size: 1.5em;\n  font-style: $larger-font;\n}\n\n.confirm-button {\n  @extend .submit-button;\n  margin-top: .5em;\n}\n",".login-display {\n  height: 100vh;\n  width: 100vw;\n  background-image: url('../images/background.jpg');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  justify-content: space-around;\n}\n\n.login-box {\n  background:rgba(255,255,255, .7);\n  width: 25vw;\n  height: 50vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 3px 5px -1px $rich-black;\n  border-radius: .25em;\n}\n\n.login-welcome {\n  font-size: 1.75em;\n  padding: .5em;\n  text-align: center;\n  color: $green;\n  width: 23vw;\n  border-top-left-radius: .125em;\n  border-top-right-radius: .125em;\n}\n\n.login-logo {\n  height: 10em;\n  width: 10em;\n}\n\n.login-wrapper {\n  width: inherit;\n  height: 10em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.username-input {\n  height: 1.25em;\n  font-size: 1.5em;\n  border: 1px solid $green;\n  border-radius: .25em;\n  background:rgba(255,255,255, .2);\n}\n\n.password-input {\n  @extend .username-input;\n}\n\n.login-button {\n  @extend .approve-button;\n  margin-bottom: 1em;\n  background-color: $green;\n}\n","// Extra large devices (loptops/desktops, 1200px and up)\n@media only screen and (min-width: 1235px) {\n  // .traveler-page {\n  //   grid-template-columns: repeat(4, 23vw);\n  //   grid-template-rows: repeat(5, 25vh);\n  // }\n\n}\n\n// Small devices (portrait tablets and large phones, 600px and up)\n@media only screen and (min-width: 601px) and (max-width: 1050px) {\n  .login-display {\n    background-size: cover;\n    background-position: 50% 50%;\n  }\n\n  .login-box {\n    width: 70vw;\n    height: 70vh;\n  }\n\n  .login-welcome {\n    font-size: 3em;\n    width: inherit;\n  }\n\n  .login-logo {\n    height: 12em;\n    width: 12em;\n  }\n\n  .login-wrapper {\n    height: 30vh;\n  }\n\n  .username-input {\n    height: 2em;\n    width: 15em;\n  }\n\n  .login-button {\n    width: 15em;\n    height: 2em;\n  }\n\n  .traveler-page {\n    grid-template-columns: repeat(2, 1fr);\n    grid-template-rows: repeat(auto, 30vh);\n    height: 80vh;\n    width: auto;\n  }\n\n  .dropdown-content,\n  .dropdown-menu {\n    margin-top: 2.75em;\n  }\n\n  .traveler-book-modal {\n    width: 45vh;\n    height: 25vh;\n    left: 20.5vw;\n    top: 33vh;\n  }\n\n  .modal-body,\n  .cost-display {\n    width: 96%;\n    padding: 0;\n  }\n\n  .confirm-button {\n    transform: scale(.9);\n  }\n}\n\n// Extra small devices (phones, 600px and down)\n@media only screen and (max-width: 600px) {\n  .login-display {\n    background-size: cover;\n    background-position: 50% 50%;\n  }\n\n  .login-box {\n    width: 80vw;\n  }\n\n  .login-welcome {\n    font-size: 1.5em;\n    width: inherit;\n  }\n\n  .nav-title {\n    display: none;\n  }\n\n  .user-wrapper {\n    height: auto;\n    width: auto;\n  }\n\n  .welcome-user {\n    width: 7em;\n    font-size: .5em;\n  }\n\n  .expenses-title {\n    width: 8em;\n    font-size: .5em;\n  }\n\n  .traveler-page {\n    grid-template-columns: repeat(1, 1fr);\n    grid-template-rows: repeat(5, 1fr);\n    height: 80vh;\n    width: auto;\n  }\n\n  .dropdown-menu {\n    margin-right: 3em;\n    width: auto;\n  }\n\n  .traveler-book-modal {\n    width: 44vh;\n    height: 80vh;\n    left: 2vw;\n    top: 10vh;\n  }\n\n  .modal-body {\n    width: 91%;\n  }\n\n  .calendar-wrapper {\n    width: inherit;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .num-submit-wrapper {\n    flex-direction: column;\n    padding-right: 5em;\n    align-items: center;\n    height: 10em;\n  }\n\n  .submit-button {\n    margin-left: 3em;\n  }\n\n  .confirm-button {\n    margin-left: 0;\n  }\n\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/agency.js":
/*!***********************!*\
  !*** ./src/agency.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Agency {
  constructor(userData, tripData, destinationData){
    this.customers = userData;
    this.bookedTrips = tripData;
    this.possibleDestinations = destinationData;
  }

  filterTripsByCustomerID(id) {
    return this.bookedTrips.filter(trip => trip.userID === id)
  }

  compileCustomerDestinations(customerID){
    let trips = this.filterTripsByCustomerID(customerID)
    let destinations = this.possibleDestinations.filter(dest => {
      return trips.find(trip => trip.destinationID === dest.id)
    })
    return destinations;
  }

  findCustomerbyInfo(info) {
    let result;
    if (typeof info === 'string') {
      result = this.customers.find(customer => customer['name'].toUpperCase().includes(info.toUpperCase()))
    } else {
      result = this.customers.find(customer => customer['id'] === info)
    }

    if (result === undefined) {
      result = "Error: User Not Found"
    }

    return result;

  }

  displayDestinationNames(){
    return this.possibleDestinations.map(dest => dest.destination)
  }

  findDestinationByName(name){
    return this.possibleDestinations.find(dest => dest.destination === name).id
  }

  addNewDestination(destID, location, lodgingCost, flightCostPerPerson, imageURL, altText){
    let newDestination = {
      id: destID,
      destination: location,
      estimatedLodgingCostPerDay: lodgingCost,
      estimatedFlightCostPerPerson: flightCostPerPerson,
      image: imageURL,
      alt: altText,
    }
    return newDestination
  }

  calculateTripCost(tripID) {
    let bookedTrip = this.bookedTrips.find(trip => trip.id === tripID)
    let destination = this.possibleDestinations.find(dest => dest.id === bookedTrip.destinationID)
    let costForLodging = destination.estimatedLodgingCostPerDay * bookedTrip.duration
    let costForFlights = destination.estimatedFlightCostPerPerson * bookedTrip.travelers
    let subtotal = costForLodging + costForFlights;
    let agencyFee = subtotal * .1
    let costData = {
      subtotal: subtotal,
      agencyFee: agencyFee,
      total: (subtotal + agencyFee).toFixed(2),
    }
    return costData;
  }

  calculateCustomerTotalYearExpense(userID, year){
    let customerTrips = this.filterTripsByCustomerID(userID)
    let filteredTripsByYear = customerTrips.filter(trip => trip.date.slice(0,4) === year)
    return filteredTripsByYear.reduce((acc, trip) => {
      let costData = this.calculateTripCost(trip.id)
      acc += Number(costData.total)
      return acc;
    }, 0)
  }

  determineEndDateByDuration(tripID){
    let bookedTrip = this.bookedTrips.find(trip => trip.id === tripID)
    let startDate = Date.parse(bookedTrip.date)
    let milisecondsPerDay = 86400000
    let timeAway = bookedTrip.duration * milisecondsPerDay
    let endDate = new Date(startDate + timeAway)
    return this.convertDate(endDate)
  }

  convertDate(date){
    let newDate = new Date(date)
    let year = newDate.getFullYear()
    let month = newDate.getMonth() + 1
    let day = newDate.getDate()
    if (day < 10){
      day = '0' + day
    }
    if (month < 10){
      month = '0' + month
    }
    return year + '/' + month + '/' + day;
  }

  determineDurationByEndDate(startDate, endDate){
    let milisecondsPerDay = 86400000
    let returnDate = Date.parse(endDate)
    let departDate = Date.parse(startDate)
    let duration = (returnDate - departDate) / milisecondsPerDay
    return duration
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Agency);


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//NAV BAR BUTTONS
const bookButton = document.querySelector('.book-trip-button');
const bookBox = document.querySelector('.nav-left')
const searchBox = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const dropdownBook = document.querySelector('#book-trip');
const dropdownLogout = document.querySelector('#logout');
const navDisplay = document.querySelector('.navigation-bar');
const footDisplay = document.querySelector('.foot');

//DISPLAY GRIDS - TRAVELER & AGENT
const tripGrid = document.querySelector('.traveler-page');
const adminPendingGrid = document.querySelector('.pending-trips');
const adminApprovedGrid = document.querySelector('.approved-trips');
const adminDepartedGrid = document.querySelector('.departed-trips');
const footerWelcomeMessage = document.querySelector('.welcome-user');
const footerExpenseAmount = document.querySelector('.expenses-cost');

//BOOK TRIP MODAL
const bookTripModal = document.querySelector('.traveler-book-modal');
const departDateInput = document.querySelector('#depart-date');
const returnDateInput = document.querySelector('#return-date');
const destinationSelectInput = document.querySelector('#destinations');
const numberTravelersInput = document.querySelector('.input-travelers');
const submitTripInput = document.querySelector('.submit-button');
const closeModal = document.querySelector('.close-button');
const costDisplay = document.querySelector('.cost-display');
const modalBody = document.querySelector('.modal-body');
const confirmButton = document.querySelector('.confirm-button');
const receiptSub = document.querySelector('.subtotal')
const receiptFee = document.querySelector('.agency-fee')
const receiptTotal = document.querySelector('.total')

//LOGIN PAGE
const loginDisplay = document.querySelector('.login-display');
const usernameInput = document.querySelector('.username-input');
const loginButton = document.querySelector('.login-button');
const password = document.querySelector('.password-input');
const incorrectPrompt = document.querySelector('.incorrect-prompt');

let domUpdates = {
  bookButton,
  dropdownBook,
  dropdownLogout,
  departDateInput,
  submitTripInput,
  closeModal,
  confirmButton,
  usernameInput,
  loginButton,
  password,

  displayCustomerTrips(traveler, agency) {
    tripGrid.innerHTML = '';
    traveler.scheduledTrips.forEach(trip => {
      let destination = traveler.scheduleDestinations.find(dest => trip.destinationID === dest.id)
      let tripCost = agency.calculateTripCost(trip.id)
      tripGrid.innerHTML += `
      <article class="traveler-trip">
        <div class="image-wrapper" style="background-image: url(${destination.image});">
          <h1 class="destination-title">${destination.destination}</h1>
          <h2 class="destination-status">status: ${trip.status}</h2>
        </div>
        <div class="info-wrapper">
          <h3 class="travel-date">Departure: ${trip.date}</h3>
          <p class="travel-duration">Days: ${trip.duration}</p>
          <p class="travel-cost">Cost: $${tripCost.total}</p>
          <div class= "travelers-wrapper">
            <img class="person-icon" src="./images/person-grey.png" alt="suitcase">
            <p class="number-of-travalers">${trip.travelers}</p>
          </div>
        </div>
      </article>
      `
    })
  },

  displayCustomerFooter(agency, traveler) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let yearExpense = agency.calculateCustomerTotalYearExpense(traveler.id, currentYear.toString())
    footerWelcomeMessage.innerText = `Welcome, ${traveler.name}!`
    footerExpenseAmount.innerText = `$${yearExpense}`
  },

  populateDestinationOptions(destinationNames) {
    destinationNames.forEach(name => {
      let option = document.createElement("option")
      option.value = name;
      option.innerHTML = name;
      destinationSelectInput.appendChild(option)
    })
  },

  changeDepartDateDefault(elementId, date) {
    document.getElementById(elementId).value = date;
    document.getElementById(elementId).min = date;
  },

  populateReceipt(cost) {
    receiptSub.innerText = `Subtotal : $${cost.subtotal}`
    receiptFee.innerText = `Agent Fee (10%) : $${cost.agencyFee}`
    receiptTotal.innerText = `Total : $${cost.total}`
  },

  hideModalHelper() {
    modalBody.classList.add('hidden');
    costDisplay.classList.remove('hidden')
  },

  displayModalHelper() {
    bookTripModal.classList.remove('hidden');
    tripGrid.classList.add('blur');
  },

  resetModalHelper() {
    modalBody.classList.remove('hidden');
    tripGrid.classList.remove('blur');
    costDisplay.classList.add('hidden');
    bookTripModal.classList.add('hidden');
    document.getElementById("return-date").value = ''
    document.getElementById("depart-date").value = ''
    document.getElementById("input-travelers").value = '1'
    document.getElementById("destinations").value = 'placeholder'
  },

  changeAfterLogin() {
    loginDisplay.classList.add('hidden')
    tripGrid.classList.remove('hidden')
    navDisplay.classList.remove('hidden')
    footDisplay.classList.remove('hidden')
    password.value = ""
    usernameInput.value = ""
    incorrectPrompt.innerText = ""
  },

  changeAfterLogout() {
    loginDisplay.classList.remove('hidden')
    tripGrid.classList.add('hidden')
    navDisplay.classList.add('hidden')
    footDisplay.classList.add('hidden')
  },

  displayLoginError() {
    incorrectPrompt.innerText = "username or password is incorrect..."
  },

}


/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/fetchRequests.js":
/*!******************************!*\
  !*** ./src/fetchRequests.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _agency_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agency.js */ "./src/agency.js");
/* harmony import */ var _traveler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./traveler.js */ "./src/traveler.js");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");




let fetchRequests = {
  postTripUrl: "http://localhost:3001/api/v1/trips",
  postNewDestinationUrl: "http://localhost:3001/api/v1/destinations",
  changeTripStatusUrl: "http://localhost:3001/api/v1/updateTrip",

  getAllUserData() {
    return fetch("http://localhost:3001/api/v1/travelers")
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  },

  getSingleUserData(id) {
    return fetch(`http://localhost:3001/api/v1/travelers/${id}`)
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  },

  getAllDestinationData() {
    return fetch("http://localhost:3001/api/v1/destinations")
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  },

  getAllTripData() {
    return fetch("http://localhost:3001/api/v1/trips")
      .then(response => response.json())
      .then(data => data)
      .catch(error => console.log(error))
  },

  createPostOption(data) {
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    };
    return option;
  },

  updateData(url, option, agency, traveler, travelerID, tripId) {
    return fetch(url, this.createPostOption(option))
      .then(response => response.json())
      .then(message => {
        Promise.all([
          fetchRequests.getAllUserData(),
          fetchRequests.getAllDestinationData(),
          fetchRequests.getAllTripData(),
          fetchRequests.getSingleUserData(travelerID)
        ])
          .then(data => {
            agency = new _agency_js__WEBPACK_IMPORTED_MODULE_0__["default"](
              data[0].travelers,
              data[2].trips,
              data[1].destinations
            );
            traveler = new _traveler_js__WEBPACK_IMPORTED_MODULE_1__["default"](
              data[3],
              agency.filterTripsByCustomerID(travelerID),
              agency.compileCustomerDestinations(travelerID)
            );
            _domUpdates_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayCustomerTrips(traveler, agency)
            _domUpdates_js__WEBPACK_IMPORTED_MODULE_2__["default"].displayCustomerFooter(agency, traveler)
            _domUpdates_js__WEBPACK_IMPORTED_MODULE_2__["default"].populateReceipt(agency.calculateTripCost(tripId))
          })
      })
      .catch(error => console.log(error))
  },

  deleteSingleTrip(id) {
    return fetch(`http://localhost:3001/api/v1/trips/${id}`, {method: "DELETE"})
      .then(response => response.json())
      .then(message => console.log(message))
      .catch(error => console.log(error))
  },


}

/* harmony default export */ __webpack_exports__["default"] = (fetchRequests);


/***/ }),

/***/ "./src/images/admin.png":
/*!******************************!*\
  !*** ./src/images/admin.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/admin.png");

/***/ }),

/***/ "./src/images/airplane.png":
/*!*********************************!*\
  !*** ./src/images/airplane.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/airplane.png");

/***/ }),

/***/ "./src/images/arrow.png":
/*!******************************!*\
  !*** ./src/images/arrow.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/arrow.png");

/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/background.jpg");

/***/ }),

/***/ "./src/images/close-hover.png":
/*!************************************!*\
  !*** ./src/images/close-hover.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/close-hover.png");

/***/ }),

/***/ "./src/images/close.png":
/*!******************************!*\
  !*** ./src/images/close.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/close.png");

/***/ }),

/***/ "./src/images/menu.png":
/*!*****************************!*\
  !*** ./src/images/menu.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/menu.png");

/***/ }),

/***/ "./src/images/person-coral.png":
/*!*************************************!*\
  !*** ./src/images/person-coral.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/person-coral.png");

/***/ }),

/***/ "./src/images/person-grey.png":
/*!************************************!*\
  !*** ./src/images/person-grey.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/person-grey.png");

/***/ }),

/***/ "./src/images/suitcase.png":
/*!*********************************!*\
  !*** ./src/images/suitcase.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/suitcase.png");

/***/ }),

/***/ "./src/images/user.png":
/*!*****************************!*\
  !*** ./src/images/user.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/user.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _agency_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agency.js */ "./src/agency.js");
/* harmony import */ var _traveler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./traveler.js */ "./src/traveler.js");
/* harmony import */ var _trip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trip.js */ "./src/trip.js");
/* harmony import */ var _fetchRequests_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fetchRequests.js */ "./src/fetchRequests.js");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
/* harmony import */ var _images_suitcase_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/suitcase.png */ "./src/images/suitcase.png");
/* harmony import */ var _images_menu_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/menu.png */ "./src/images/menu.png");
/* harmony import */ var _images_user_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/user.png */ "./src/images/user.png");
/* harmony import */ var _images_person_grey_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/person-grey.png */ "./src/images/person-grey.png");
/* harmony import */ var _images_person_coral_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/person-coral.png */ "./src/images/person-coral.png");
/* harmony import */ var _images_arrow_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/arrow.png */ "./src/images/arrow.png");
/* harmony import */ var _images_admin_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/admin.png */ "./src/images/admin.png");
/* harmony import */ var _images_close_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/close.png */ "./src/images/close.png");
/* harmony import */ var _images_close_hover_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./images/close-hover.png */ "./src/images/close-hover.png");
/* harmony import */ var _images_airplane_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./images/airplane.png */ "./src/images/airplane.png");
/* harmony import */ var _images_background_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg");
// CSS (SCSS) files









// images












_domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].bookButton.addEventListener('click', displayModal);
_domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].dropdownBook.addEventListener('click', displayModal);
_domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].closeModal.addEventListener('click', resetModal);
_domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].departDateInput.addEventListener('change', setReturnDateDefault);
_domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].loginButton.addEventListener('click', verifyLoginCredentials);
_domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].submitTripInput.addEventListener('click', submitTrip);
_domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].dropdownLogout.addEventListener('click', logout)

let travelAgency, traveler, uniqueTripId;

function retrieveAllData(userId) {
  return Promise.all([
    _fetchRequests_js__WEBPACK_IMPORTED_MODULE_4__["default"].getAllUserData(),
    _fetchRequests_js__WEBPACK_IMPORTED_MODULE_4__["default"].getAllDestinationData(),
    _fetchRequests_js__WEBPACK_IMPORTED_MODULE_4__["default"].getAllTripData()
  ])
    .then(data => {
      travelAgency = new _agency_js__WEBPACK_IMPORTED_MODULE_1__["default"](
        data[0].travelers,
        data[2].trips,
        data[1].destinations
      );
      traveler = new _traveler_js__WEBPACK_IMPORTED_MODULE_2__["default"](
        travelAgency.findCustomerbyInfo(userId),
        travelAgency.filterTripsByCustomerID(userId),
        travelAgency.compileCustomerDestinations(userId)
      );
      uniqueTripId = data[2].trips.length + 1;
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayCustomerTrips(traveler, travelAgency)
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayCustomerFooter(travelAgency, traveler)
    })
    .catch(error => console.log(error))
}

function verifyLoginCredentials() {
  let travelerId = Number(_domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].usernameInput.value.split('traveler').join(''))
  if (_domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].password.value === 'traveler2020' && travelerId <= 50){
    retrieveAllData(Number(travelerId))
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].changeAfterLogin();
  } else {
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayLoginError();
  }
}

function logout() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].changeAfterLogout();
}

function displayModal() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].displayModalHelper();
  let todaysDate = travelAgency.convertDate(Date.now()).split('/').join('-');
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].changeDepartDateDefault('depart-date', todaysDate);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].populateDestinationOptions(travelAgency.displayDestinationNames())
}

function setReturnDateDefault() {
  let departDateSelected = Date.parse(document.getElementById('depart-date').value);
  let returnDateMinValue = travelAgency.convertDate(departDateSelected + (86400000 * 2)).split('/').join('-');
  document.getElementById('return-date').min = returnDateMinValue;
  document.getElementById('return-date').value = returnDateMinValue;
}

function hideModal() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].hideModalHelper()
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].confirmButton.addEventListener('click', resetModal);
}

function resetModal() {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_5__["default"].resetModalHelper();
}

function submitTrip() {
  let returnDate = document.getElementById("return-date").value.split('-').join('/')
  let departDate = document.getElementById("depart-date").value.split('-').join('/')
  let numberOfTravelers = document.getElementById("input-travelers").value
  let destination = document.getElementById("destinations").value
  let duration = travelAgency.determineDurationByEndDate(departDate, returnDate);
  let newTrip = new _trip_js__WEBPACK_IMPORTED_MODULE_3__["default"](uniqueTripId, traveler.id, travelAgency.findDestinationByName(destination), numberOfTravelers, departDate, duration)
  uniqueTripId ++
  _fetchRequests_js__WEBPACK_IMPORTED_MODULE_4__["default"].updateData(_fetchRequests_js__WEBPACK_IMPORTED_MODULE_4__["default"].postTripUrl, newTrip, travelAgency, traveler, traveler.id, newTrip.id);
  hideModal();
}


/***/ }),

/***/ "./src/traveler.js":
/*!*************************!*\
  !*** ./src/traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Traveler  {
  constructor(data, trips, destinations) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.scheduledTrips = trips;
    this.scheduleDestinations = destinations;
  }

  bookTrip(trip) {
    if (this.scheduledTrips.some(scheduled => scheduled.id === trip.id) === false) {
      this.scheduledTrips.push(trip)
    } else {
      return 'That trip is already booked!'
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);


/***/ }),

/***/ "./src/trip.js":
/*!*********************!*\
  !*** ./src/trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(id, userID, destinationID, travelers, date, duration) {
    this.id = id + 1;
    this.userID = userID;
    this.destinationID = destinationID;
    this.travelers = travelers;
    this.date = date;
    this.duration = duration;
    this.status = 'pending';
    this.suggestedActivities = [];
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYWdlbmN5LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZldGNoUmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hZG1pbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9haXJwbGFuZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcnJvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nsb3NlLWhvdmVyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2Nsb3NlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL21lbnUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcGVyc29uLWNvcmFsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3BlcnNvbi1ncmV5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3N1aXRjYXNlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3VzZXIucG5nIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyaXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDeUg7QUFDN0I7QUFDTztBQUM5QjtBQUNyRSw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyw4REFBNkI7QUFDdEc7QUFDQSw4QkFBOEIsUUFBUyxrRkFBa0YsNkJBQTZCLEVBQUUscUJBQXFCLDhCQUE4QixvQkFBb0IsV0FBVyxrQkFBa0IsZ0JBQWdCLGdCQUFnQix1Q0FBdUMsbUNBQW1DLEVBQUUsZUFBZSxlQUFlLGtCQUFrQix3QkFBd0IscUJBQXFC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VUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLG1CQUFtQixNQUFNLFlBQVksV0FBVyxVQUFVLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxtQkFBbUIsT0FBTyxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsZUFBZSxLQUFLLGdCQUFnQixNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLG1CQUFtQixPQUFPLGdCQUFnQixNQUFNLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxtQkFBbUIsT0FBTyxnQkFBZ0IsTUFBTSxVQUFVLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxVQUFVLGdCQUFnQixLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsWUFBWSxZQUFZLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGdCQUFnQixNQUFNLGFBQWEsb0JBQW9CLE1BQU0sWUFBWSxvQkFBb0IsT0FBTyxrQkFBa0IsT0FBTyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLG9CQUFvQixNQUFNLFlBQVksV0FBVyxZQUFZLFlBQVksV0FBVyxZQUFZLG1CQUFtQixNQUFNLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLG1CQUFtQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxtQkFBbUIsS0FBSyxLQUFLLFlBQVksa0JBQWtCLE1BQU0sVUFBVSxlQUFlLE1BQU0sVUFBVSxlQUFlLE1BQU0sVUFBVSxlQUFlLEtBQUssZUFBZSxPQUFPLFVBQVUsZUFB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LEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxxRUFBTSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaEh0QjtBQUFBO0FBQUE7QUFBQTtBQUE0RjtBQUM1RixZQUFxSTs7QUFFckk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJVCwwTEFBTyxhQUFhLEU7Ozs7Ozs7Ozs7OztBQ1puQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0Usa0JBQWtCLEVBQUU7QUFDdEYsMENBQTBDLHdCQUF3QjtBQUNsRSxtREFBbUQsWUFBWTtBQUMvRDtBQUNBO0FBQ0EsK0NBQStDLFVBQVU7QUFDekQsNkNBQTZDLGNBQWM7QUFDM0QsMENBQTBDLGVBQWU7QUFDekQ7QUFDQTtBQUNBLDZDQUE2QyxlQUFlO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsY0FBYztBQUMvRCx3Q0FBd0MsWUFBWTtBQUNwRCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSwwQ0FBMEMsY0FBYztBQUN4RCxpREFBaUQsZUFBZTtBQUNoRSx5Q0FBeUMsV0FBVztBQUNwRCxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIOzs7QUFHZSx5RUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDdkoxQjtBQUFBO0FBQUE7QUFBQTtBQUFpQztBQUNJO0FBQ0k7O0FBRXpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsMkRBQTJELEdBQUc7QUFDOUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixrREFBTTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixvREFBUTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0RBQVU7QUFDdEIsWUFBWSxzREFBVTtBQUN0QixZQUFZLHNEQUFVO0FBQ3RCLFdBQVc7QUFDWCxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0EsdURBQXVELEdBQUcsSUFBSSxpQkFBaUI7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7O0FBRWUsNEVBQWEsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3ZGN0I7QUFBZSxpRkFBa0IsRTs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFlLGlGQUFrQixFOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBZSxzRkFBdUIsRTs7Ozs7Ozs7Ozs7O0FDQXRDO0FBQWUsdUZBQXdCLEU7Ozs7Ozs7Ozs7OztBQ0F2QztBQUFlLGlGQUFrQixFOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBZSxnRkFBaUIsRTs7Ozs7Ozs7Ozs7O0FDQWhDO0FBQWUsd0ZBQXlCLEU7Ozs7Ozs7Ozs7OztBQ0F4QztBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSxvRkFBcUIsRTs7Ozs7Ozs7Ozs7O0FDQXBDO0FBQWUsZ0ZBQWlCLEU7Ozs7Ozs7Ozs7OztBQ0FoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN5QjtBQUNRO0FBQ0k7QUFDVDs7O0FBR21CO0FBQ047O0FBRXpDO0FBQzhCO0FBQ0o7QUFDQTtBQUNPO0FBQ0M7QUFDUDtBQUNBO0FBQ0E7QUFDTTtBQUNIO0FBQ0U7O0FBRWhDLHNEQUFVO0FBQ1Ysc0RBQVU7QUFDVixzREFBVTtBQUNWLHNEQUFVO0FBQ1Ysc0RBQVU7QUFDVixzREFBVTtBQUNWLHNEQUFVOztBQUVWOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCLElBQUkseURBQWE7QUFDakIsSUFBSSx5REFBYTtBQUNqQjtBQUNBO0FBQ0EseUJBQXlCLGtEQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFRO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFVO0FBQ2hCLE1BQU0sc0RBQVU7QUFDaEIsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsc0RBQVU7QUFDcEMsTUFBTSxzREFBVTtBQUNoQjtBQUNBLElBQUksc0RBQVU7QUFDZCxHQUFHO0FBQ0gsSUFBSSxzREFBVTtBQUNkO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHNEQUFVO0FBQ1o7O0FBRUE7QUFDQSxFQUFFLHNEQUFVO0FBQ1o7QUFDQSxFQUFFLHNEQUFVO0FBQ1osRUFBRSxzREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsc0RBQVU7QUFDWixFQUFFLHNEQUFVO0FBQ1o7O0FBRUE7QUFDQSxFQUFFLHNEQUFVO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGdEQUFJO0FBQ3hCO0FBQ0EsRUFBRSx5REFBYSxZQUFZLHlEQUFhO0FBQ3hDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4R0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx1RUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7O0FDbEJ4QjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxtRUFBSSxFQUFDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB1c2luZyBTYXNzLCBvdGhlcndpc2UgcGxhaW4gQ1NTIHdvcmtzIHRvbyovXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4ubmF2aWdhdGlvbi1iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFFQTg5NjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogOXZoO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMTBweCAxcHggIzAwMDUwMDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcblxcbi5uYXYtbGVmdCB7XFxuICB3aWR0aDogOXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLnN1aXRjYXNlLWltZyB7XFxuICBoZWlnaHQ6IDIuNWVtO1xcbiAgd2lkdGg6IDIuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLjc1ZW07XFxuICBtYXJnaW4tcmlnaHQ6IC4yNWVtOyB9XFxuXFxuLmJvb2stdHJpcC1idXR0b24sIC5hcHByb3ZlLWJ1dHRvbiwgLmNhbmNlbC1idXR0b24sIC5zdWJtaXQtYnV0dG9uLCAuY29uZmlybS1idXR0b24sIC5kZXBhcnRlZC1idXR0b24sIC5sb2dpbi1idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG4gIGNvbG9yOiAjMDAwNTAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDUwMDtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1ZW07IH1cXG4gIC5ib29rLXRyaXAtYnV0dG9uOmhvdmVyLCAuYXBwcm92ZS1idXR0b246aG92ZXIsIC5jYW5jZWwtYnV0dG9uOmhvdmVyLCAuc3VibWl0LWJ1dHRvbjpob3ZlciwgLmNvbmZpcm0tYnV0dG9uOmhvdmVyLCAuZGVwYXJ0ZWQtYnV0dG9uOmhvdmVyLCAubG9naW4tYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDI1dnc7XFxuICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTsgfVxcblxcbi5zZWFyY2gtYnV0dG9uIHtcXG4gIG1hcmdpbi1yaWdodDogLjI1ZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVBODk2O1xcbiAgd2lkdGg6IDIuNzVlbTtcXG4gIGhlaWdodDogMi43NWVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjVlbTsgfVxcbiAgLnNlYXJjaC1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIHdpZHRoOiAxNWVtO1xcbiAgaGVpZ2h0OiAyLjVlbTtcXG4gIGJvcmRlcjogMC4yNWVtIHNvbGlkICMxRUE4OTY7XFxuICBib3JkZXItcmFkaXVzOiAuNWVtOyB9XFxuXFxuLm5hdi10aXRsZSB7XFxuICBmb250LXNpemU6IDMuMjVlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogIzAwMDUwMDsgfVxcblxcbi5uYXYtcmlnaHQge1xcbiAgd2lkdGg6IDEwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4uZHJvcGRvd24tbWVudSxcXG4uZHJvcGRvd24tY29udGVudDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiA1OyB9XFxuICAuZHJvcGRvd24tbWVudTpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5oYW1idXJnZXIge1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMmVtOyB9XFxuXFxuLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDFlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRUE4OTY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogYXV0bztcXG4gIGNvbG9yOiAjMDAwNTAwOyB9XFxuXFxuLmRyb3Bkb3duLWl0ZW0ge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHBhZGRpbmc6IC4zNWVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gIC5kcm9wZG93bi1pdGVtOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0cHg7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi50cmF2ZWxlci1wYWdlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA5OXZ3O1xcbiAgaGVpZ2h0OiA3OXZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzF2dyk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLCAyNXZoKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogOS41dmg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogLjVlbTsgfVxcblxcbi50cmF2ZWxlci10cmlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4ICMwMDA1MDA7IH1cXG5cXG4uaW1hZ2Utd3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XFxuXFxuLmRlc3RpbmF0aW9uLXRpdGxlLCAuZGVzdGluYXRpb24tc3RhdHVzIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogLjVlbTtcXG4gIGNvbG9yOiAjRkY3MTVCO1xcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7IH1cXG5cXG4uZGVzdGluYXRpb24tc3RhdHVzIHtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xcbiAgZm9udC1zaXplOiAxZW07IH1cXG5cXG4uaW5mby13cmFwcGVyIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07IH1cXG5cXG4udHJhdmVsZXJzLXdyYXBwZXIsIC5hZ2VudC10cmF2ZWxlcnMtd3JhcHBlciwgLm1vZGFsLXRyYXZlbGVycy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFlbTtcXG4gIHdpZHRoOiA1ZW07IH1cXG5cXG4ucGVyc29uLWljb24ge1xcbiAgaGVpZ2h0OiAzZW07XFxuICB3aWR0aDogM2VtOyB9XFxuXFxuLm51bWJlci1vZi10cmF2YWxlcnMge1xcbiAgZm9udC1zaXplOiAyLjVlbTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGNvbG9yOiAjMUVBODk2OyB9XFxuXFxuLmJsdXIge1xcbiAgZmlsdGVyOiBibHVyKDRweCk7IH1cXG5cXG4uYWRtaW4tcGFnZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNHZoIDk2dmg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidGl0bGVQIHRpdGxlQSB0aXRsZURcXFwiIFxcXCJwZW5kaW5nIGFwcHJvdmVkIGRlcGFydGVkXFxcIjsgfVxcblxcbi5wZW5kaW5nLXRpdGxlLCAuYXBwcm92ZWQtdGl0bGUsIC5kZXBhcnRlZC10aXRsZSB7XFxuICBncmlkLWFyZWE6IFxcXCJ0aXRsZVBcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyZW07IH1cXG5cXG4uYXBwcm92ZWQtdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiBcXFwidGl0bGVBXFxcIjsgfVxcblxcbi5kZXBhcnRlZC10aXRsZSB7XFxuICBncmlkLWFyZWE6IFxcXCJ0aXRsZURcXFwiOyB9XFxuXFxuLmFwcHJvdmUtYnV0dG9uLCAuY2FuY2VsLWJ1dHRvbiwgLnN1Ym1pdC1idXR0b24sIC5jb25maXJtLWJ1dHRvbiwgLmRlcGFydGVkLWJ1dHRvbiwgLmxvZ2luLWJ1dHRvbiB7XFxuICBjb2xvcjogIzRDNTQ1NDtcXG4gIGJvcmRlcjogc29saWQgMXB4ICM0QzU0NTQ7XFxuICB3aWR0aDogNzUlO1xcbiAgaGVpZ2h0OiAxLjVlbTsgfVxcblxcbi5jYW5jZWwtYnV0dG9uLCAuc3VibWl0LWJ1dHRvbiwgLmNvbmZpcm0tYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjcxNUI7IH1cXG5cXG4uZGVwYXJ0ZWQtYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICNFMEUwRTA7IH1cXG5cXG4ucGVuZGluZy10cmlwcywgLmFwcHJvdmVkLXRyaXBzLCAuZGVwYXJ0ZWQtdHJpcHMge1xcbiAgZ3JpZC1hcmVhOiBcXFwicGVuZGluZ1xcXCI7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAzMHZ3KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDI1dmgpO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuLmFwcHJvdmVkLXRyaXBzIHtcXG4gIGJvcmRlci1yaWdodDogc29saWQgMC4xZW0gIzAwMDUwMDtcXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAwLjFlbSAjMDAwNTAwOyB9XFxuXFxuLmFkbWluLXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCAjMDAwNTAwOyB9XFxuXFxuLmFnZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogLjVlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItbGVmdDogc29saWQgMXB4ICM0QzU0NTQ7IH1cXG5cXG4uYWdlbnQtaW5mby13cmFwcGVyIHtcXG4gIHdpZHRoOiA1NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVBODk2O1xcbiAgcGFkZGluZzogMWVtO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IH1cXG5cXG4uYWdlbnQtdHJhdmVsZXItbmFtZSB7XFxuICBmb250LXNpemU6IDEuNWVtOyB9XFxuXFxuLmFnZW50LWRlc3RpbmF0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtOyB9XFxuXFxuLmFnZW50LXRyYXZlbGVycy13cmFwcGVyIHtcXG4gIGJvcmRlcjogc29saWQgMXB4ICMxRUE4OTY7IH1cXG5cXG4uZm9vdCB7XFxuICBoZWlnaHQ6IDh2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRUE4OTY7XFxuICB6LWluZGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMwMDA1MDA7IH1cXG5cXG4udXNlci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDUwdnc7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAydnc7IH1cXG5cXG4udXNlciB7XFxuICBoZWlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAxZW07IH1cXG5cXG4udHJhdmVsZXItZXhwZW5zZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgd2lkdGg6IDUwdnc7XFxuICBtYXJnaW4tcmlnaHQ6IDJ2dztcXG4gIGZvbnQtc2l6ZTogMS41ZW07IH1cXG5cXG4uZXhwZW5zZXMtY29zdCB7XFxuICBtYXJnaW4tbGVmdDogLjI1ZW07XFxuICBmb250LXNpemU6IDExMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3MTVCO1xcbiAgY29sb3I6ICMwMDA1MDA7XFxuICBib3JkZXItcmFkaXVzOiAuMjVlbTsgfVxcblxcbi50cmF2ZWxlci1ib29rLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMzB2dztcXG4gIHRvcDogMjV2aDtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCAjMDAwNTAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuLm1vZGFsLWJvZHksIC5jb3N0LWRpc3BsYXkge1xcbiAgd2lkdGg6IDk1JTtcXG4gIGhlaWdodDogOTUlO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XFxuXFxuLm1vZGFsLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY3MTVCO1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMXB4ICMwMDA1MDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBjb2xvcjogIzAwMDUwMDsgfVxcblxcbi5tb2RhbC10aXRsZSB7XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTsgfVxcbiAgLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5jYWxlbmRhci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07IH1cXG5cXG4jZGVwYXJ0LWRhdGUsICNyZXR1cm4tZGF0ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjRkY3MTVCO1xcbiAgd2lkdGg6IDllbTtcXG4gIGhlaWdodDogMmVtO1xcbiAgZm9udC1zaXplOiAuNzVlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgI2RlcGFydC1kYXRlOmhvdmVyLCAjcmV0dXJuLWRhdGU6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uZGF0ZS1hcnJvdyB7XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgd2lkdGg6IDEuNWVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XFxuICBtYXJnaW4tbGVmdDogMWVtOyB9XFxuXFxuLmRlc3RpbmF0aW9uLXdyYXBwZXIge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07IH1cXG5cXG4jZGVzdGluYXRpb25zIHtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGNzE1QjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjsgfVxcbiAgI2Rlc3RpbmF0aW9uczpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5udW0tc3VibWl0LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuLnN1Ym1pdC1idXR0b24sIC5jb25maXJtLWJ1dHRvbiB7XFxuICB3aWR0aDogNWVtO1xcbiAgaGVpZ2h0OiAyZW07IH1cXG5cXG4uaW5wdXQtdHJhdmVsZXJzIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgd2lkdGg6IDJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFMEUwRTA7XFxuICBwYWRkaW5nOiAuMjVlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuNWVtO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC41ZW07IH1cXG4gIC5pbnB1dC10cmF2ZWxlcnM6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubW9kYWwtdHJhdmVsZXJzLXdyYXBwZXIge1xcbiAgd2lkdGg6IDhlbTsgfVxcblxcbi5jb3N0LWRpc3BsYXkge1xcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxcblxcbi5yZWNlaXB0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMi41ZW07IH1cXG5cXG4uc3VidG90YWwsIC5hZ2VuY3ktZmVlIHtcXG4gIGZvbnQtc2l6ZTogMWVtOyB9XFxuXFxuLmFnZW5jeS1mZWUge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA1MDA7XFxuICBtYXJnaW4tYm90dG9tOiAuMjVlbTsgfVxcblxcbi50b3RhbCB7XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgZm9udC1zdHlsZTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmOyB9XFxuXFxuLmNvbmZpcm0tYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IC41ZW07IH1cXG5cXG4ubG9naW4tZGlzcGxheSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuLmxvZ2luLWJveCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4ICMwMDA1MDA7XFxuICBib3JkZXItcmFkaXVzOiAuMjVlbTsgfVxcblxcbi5sb2dpbi13ZWxjb21lIHtcXG4gIGZvbnQtc2l6ZTogMS43NWVtO1xcbiAgcGFkZGluZzogLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMUVBODk2O1xcbiAgd2lkdGg6IDIzdnc7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAuMTI1ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjEyNWVtOyB9XFxuXFxuLmxvZ2luLWxvZ28ge1xcbiAgaGVpZ2h0OiAxMGVtO1xcbiAgd2lkdGg6IDEwZW07IH1cXG5cXG4ubG9naW4td3JhcHBlciB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogMTBlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyB9XFxuXFxuLnVzZXJuYW1lLWlucHV0LCAucGFzc3dvcmQtaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjI1ZW07XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzFFQTg5NjtcXG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpOyB9XFxuXFxuLmxvZ2luLWJ1dHRvbiB7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUVBODk2OyB9XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwNTBweCkge1xcbiAgLmxvZ2luLWRpc3BsYXkge1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlOyB9XFxuICAubG9naW4tYm94IHtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogNzB2aDsgfVxcbiAgLmxvZ2luLXdlbGNvbWUge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgd2lkdGg6IGluaGVyaXQ7IH1cXG4gIC5sb2dpbi1sb2dvIHtcXG4gICAgaGVpZ2h0OiAxMmVtO1xcbiAgICB3aWR0aDogMTJlbTsgfVxcbiAgLmxvZ2luLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDMwdmg7IH1cXG4gIC51c2VybmFtZS1pbnB1dCwgLnBhc3N3b3JkLWlucHV0IHtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIHdpZHRoOiAxNWVtOyB9XFxuICAubG9naW4tYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGhlaWdodDogMmVtOyB9XFxuICAudHJhdmVsZXItcGFnZSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8sIDMwdmgpO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAuZHJvcGRvd24tY29udGVudCxcXG4gIC5kcm9wZG93bi1tZW51IHtcXG4gICAgbWFyZ2luLXRvcDogMi43NWVtOyB9XFxuICAudHJhdmVsZXItYm9vay1tb2RhbCB7XFxuICAgIHdpZHRoOiA0NXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIGxlZnQ6IDIwLjV2dztcXG4gICAgdG9wOiAzM3ZoOyB9XFxuICAubW9kYWwtYm9keSwgLmNvc3QtZGlzcGxheSxcXG4gIC5jb3N0LWRpc3BsYXkge1xcbiAgICB3aWR0aDogOTYlO1xcbiAgICBwYWRkaW5nOiAwOyB9XFxuICAuY29uZmlybS1idXR0b24ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5sb2dpbi1kaXNwbGF5IHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTsgfVxcbiAgLmxvZ2luLWJveCB7XFxuICAgIHdpZHRoOiA4MHZ3OyB9XFxuICAubG9naW4td2VsY29tZSB7XFxuICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgIHdpZHRoOiBpbmhlcml0OyB9XFxuICAubmF2LXRpdGxlIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLnVzZXItd3JhcHBlciB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IGF1dG87IH1cXG4gIC53ZWxjb21lLXVzZXIge1xcbiAgICB3aWR0aDogN2VtO1xcbiAgICBmb250LXNpemU6IC41ZW07IH1cXG4gIC5leHBlbnNlcy10aXRsZSB7XFxuICAgIHdpZHRoOiA4ZW07XFxuICAgIGZvbnQtc2l6ZTogLjVlbTsgfVxcbiAgLnRyYXZlbGVyLXBhZ2Uge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xcbiAgICBoZWlnaHQ6IDgwdmg7XFxuICAgIHdpZHRoOiBhdXRvOyB9XFxuICAuZHJvcGRvd24tbWVudSB7XFxuICAgIG1hcmdpbi1yaWdodDogM2VtO1xcbiAgICB3aWR0aDogYXV0bzsgfVxcbiAgLnRyYXZlbGVyLWJvb2stbW9kYWwge1xcbiAgICB3aWR0aDogNDR2aDtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBsZWZ0OiAydnc7XFxuICAgIHRvcDogMTB2aDsgfVxcbiAgLm1vZGFsLWJvZHksIC5jb3N0LWRpc3BsYXkge1xcbiAgICB3aWR0aDogOTElOyB9XFxuICAuY2FsZW5kYXItd3JhcHBlciB7XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAubnVtLXN1Ym1pdC13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy1yaWdodDogNWVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwZW07IH1cXG4gIC5zdWJtaXQtYnV0dG9uLCAuY29uZmlybS1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogM2VtOyB9XFxuICAuY29uZmlybS1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMDsgfSB9XFxuXFxuKiB7XFxuICBtYXJnaW46IDBlbTtcXG4gIHBhZGRpbmc6IDBlbTtcXG4gIGJvcmRlcjogMGVtOyB9XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0UwRTBFMDtcXG4gIGZvbnQtc2l6ZTogMWVtOyB9XFxuXFxubWFpbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19uYXZiYXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdHJhdmVsZXItZGlzcGxheS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19hZ2VudC1kaXNwbGF5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19tb2RhbC1kaXNwbGF5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2xvZ2luLXBhZ2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fcmVzcG9uc2l2ZW5lc3Muc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxtRUFBQTtBQ1dBO0VBQ0Usd0JBQXVCLEVBQUE7O0FDWnpCO0VBQ0UseUJESWE7RUNIYixlQUFlO0VBQ2YsTUFBTTtFQUNOLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLGtDRExrQjtFQ01sQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx5QkQxQmE7RUMyQmIsY0R6QmtCO0VDMEJsQix5QkQxQmtCO0VDMkJsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0JBQW9CLEVBQUE7RUFSdEI7SUFXSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxtQkFBbUI7RUFDbkIseUJEOUNhO0VDK0NiLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CLEVBQUE7RUFMckI7SUFRSSxlQUFlLEVBQUE7O0FBSW5CO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYiw0QkQzRGE7RUM0RGIs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VyxFQUFBO0VBR2I7O0lBRUUsa0JBQWtCLEVBQUE7RUZ0RHRCO0lFMERJLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLFNBQVMsRUFBQTtFRjlDYjs7SUVtREksVUFBVTtJQUNWLFVBQVUsRUFBQTtFRndGZDtJRXBGSSxxQkFBb0IsRUFBQSxFQUNyQjs7QUFJSDtFRDVFQTtJQzhFSSxzQkFBc0I7SUFDdEIsNEJBQTRCLEVBQUE7RURuRWhDO0lDdUVJLFdBQVcsRUFBQTtFRDNEZjtJQytESSxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBO0VOcEJsQjtJTXdCSSxhQUFhLEVBQUE7RUg5RWpCO0lHa0ZJLFlBQVk7SUFDWixXQUFXLEVBQUE7RUFHYjtJQUNFLFVBQVU7SUFDVixlQUFlLEVBQUE7RUFHakI7SUFDRSxVQUFVO0lBQ1YsZUFBZSxFQUFBO0VMekduQjtJSzZHSSxxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixXQUFXLEVBQUE7RU41QmY7SU1nQ0ksaUJBQWlCO0lBQ2pCLFdBQVcsRUFBQTtFRnZIZjtJRTJISSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxTQUFTLEVBQUE7RUYvR2I7SUVtSEksVUFBVSxFQUFBO0VGL0VkO0lFbUZJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUJBQW1CLEVBQUE7RUZyQ3ZCO0lFeUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVksRUFBQTtFRnJDaEI7SUV5Q0ksZ0JBQWdCLEVBQUE7RUZRcEI7SUVKSSxjQUFjLEVBQUEsRUFDZjs7QVI5SUg7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUNDVmlDO0VEV2pDLHlCQ25Ca0I7RURvQmxCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxtQkFBbUIsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdXNpbmcgU2Fzcywgb3RoZXJ3aXNlIHBsYWluIENTUyB3b3JrcyB0b28qL1xcbkBpbXBvcnQgJ3ZhcmlhYmxlcy5zY3NzJztcXG5AaW1wb3J0ICduYXZiYXIuc2Nzcyc7XFxuQGltcG9ydCAndHJhdmVsZXItZGlzcGxheS5zY3NzJztcXG5AaW1wb3J0ICdhZ2VudC1kaXNwbGF5LnNjc3MnO1xcbkBpbXBvcnQgJ2Zvb3Rlci5zY3NzJztcXG5AaW1wb3J0ICdtb2RhbC1kaXNwbGF5LnNjc3MnO1xcbkBpbXBvcnQgJ2xvZ2luLXBhZ2Uuc2Nzcyc7XFxuQGltcG9ydCAncmVzcG9uc2l2ZW5lc3Muc2Nzcyc7XFxuXFxuKiB7XFxuICBtYXJnaW46IDBlbTtcXG4gIHBhZGRpbmc6IDBlbTtcXG4gIGJvcmRlcjogMGVtO1xcbn1cXG5cXG5odG1sIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBmb250LWZhbWlseTogJHJlZ3VsYXItZm9udDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbm1haW4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXCIsXCIkd2hpdGU6ICNGNUY1RjU7XFxuJGxpZ2h0LWdyZXk6ICNFMEUwRTA7XFxuJHJpY2gtYmxhY2s6ICMwMDA1MDA7XFxuJGdyZXk6ICM0QzU0NTQ7XFxuJGNvcmFsOiAjRkY3MTVCO1xcbiRncmVlbjogIzFFQTg5NjtcXG5cXG5cXG4kbGFyZ2VyLWZvbnQ6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4kcmVndWxhci1mb250OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xcbn1cXG5cIixcIi5uYXZpZ2F0aW9uLWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDl2aDtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMXB4ICRyaWNoLWJsYWNrO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ubmF2LWxlZnQge1xcbiAgd2lkdGg6IDl2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxuLnN1aXRjYXNlLWltZyB7XFxuICBoZWlnaHQ6IDIuNWVtO1xcbiAgd2lkdGg6IDIuNWVtO1xcbiAgbWFyZ2luLWJvdHRvbTogLjc1ZW07XFxuICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xcbn1cXG5cXG4uYm9vay10cmlwLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICBjb2xvcjogJHJpY2gtYmxhY2s7XFxuICBib3JkZXI6IDJweCBzb2xpZCAkcmljaC1ibGFjaztcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiA0ZW07XFxuICBoZWlnaHQ6IDEuNWVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjV2dztcXG4gIG1hcmdpbi10b3A6IC41ZW07XFxuICBtYXJnaW4tbGVmdDogMWVtO1xcbn1cXG5cXG4uc2VhcmNoLWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xcbiAgd2lkdGg6IDIuNzVlbTtcXG4gIGhlaWdodDogMi43NWVtO1xcbiAgYm9yZGVyLXJhZGl1czogLjVlbTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi5zZWFyY2gtaW5wdXQge1xcbiAgd2lkdGg6IDE1ZW07XFxuICBoZWlnaHQ6IDIuNWVtO1xcbiAgYm9yZGVyOiAuMjVlbSBzb2xpZCAkZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAuNWVtO1xcbn1cXG5cXG4ubmF2LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMy4yNWVtO1xcbiAgZm9udC1mYW1pbHk6ICRsYXJnZXItZm9udDtcXG4gIGNvbG9yOiAkcmljaC1ibGFjaztcXG59XFxuXFxuLm5hdi1yaWdodCB7XFxuICB3aWR0aDogMTB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRyb3Bkb3duLW1lbnUsXFxuLmRyb3Bkb3duLWNvbnRlbnQ6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZHJvcGRvd24tbWVudSB7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB6LWluZGV4OiA1O1xcblxcbiAgJjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG59XFxuXFxuLmhhbWJ1cmdlciB7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogYXV0bztcXG4gIGNvbG9yOiAkcmljaC1ibGFjaztcXG59XFxuXFxuLmRyb3Bkb3duLWl0ZW0ge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHBhZGRpbmc6IC4zNWVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0cHg7XFxuICB9XFxufVxcblwiLFwiQGltcG9ydCAndmFyaWFibGVzLnNjc3MnO1xcblxcbi50cmF2ZWxlci1wYWdlIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA5OXZ3O1xcbiAgaGVpZ2h0OiA3OXZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMzF2dyk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLCAyNXZoKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogOS41dmg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogLjVlbTtcXG59XFxuXFxuLnRyYXZlbGVyLXRyaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCAkcmljaC1ibGFjaztcXG59XFxuXFxuLmltYWdlLXdyYXBwZXJ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNzAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4uZGVzdGluYXRpb24tdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgY29sb3I6ICRjb3JhbDtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbiAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LCAuNyk7XFxufVxcblxcbi5kZXN0aW5hdGlvbi1zdGF0dXMge1xcbiAgQGV4dGVuZCAuZGVzdGluYXRpb24tdGl0bGU7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uaW5mby13cmFwcGVyIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi50cmF2ZWxlcnMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRsaWdodC1ncmV5O1xcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xcbiAgd2lkdGg6IDVlbVxcbn1cXG5cXG4ucGVyc29uLWljb24ge1xcbiAgaGVpZ2h0OiAzZW07XFxuICB3aWR0aDogM2VtO1xcbn1cXG5cXG4ubnVtYmVyLW9mLXRyYXZhbGVycyB7XFxuICBmb250LXNpemU6IDIuNWVtO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgY29sb3I6ICRncmVlbjtcXG59XFxuXFxuLmJsdXIge1xcbiAgZmlsdGVyOmJsdXIoNHB4KTtcXG59XFxuXCIsXCIuYWRtaW4tcGFnZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwdmg7XFxuICBtYXJnaW4tYm90dG9tOiAydmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNHZoIDk2dmg7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwidGl0bGVQIHRpdGxlQSB0aXRsZURcXFwiXFxuICAgIFxcXCJwZW5kaW5nIGFwcHJvdmVkIGRlcGFydGVkXFxcIlxcbn1cXG5cXG4ucGVuZGluZy10aXRsZSB7XFxuICBncmlkLWFyZWE6IFxcXCJ0aXRsZVBcXFwiO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5hcHByb3ZlZC10aXRsZSB7XFxuICBAZXh0ZW5kIC5wZW5kaW5nLXRpdGxlO1xcbiAgZ3JpZC1hcmVhOiBcXFwidGl0bGVBXFxcIjtcXG59XFxuXFxuLmRlcGFydGVkLXRpdGxlIHtcXG4gIEBleHRlbmQgLnBlbmRpbmctdGl0bGU7XFxuICBncmlkLWFyZWE6IFxcXCJ0aXRsZURcXFwiO1xcbn1cXG5cXG4uYXBwcm92ZS1idXR0b24ge1xcbiAgQGV4dGVuZCAuYm9vay10cmlwLWJ1dHRvbjtcXG4gIGNvbG9yOiAkZ3JleTtcXG4gIGJvcmRlcjogc29saWQgMXB4ICRncmV5O1xcbiAgd2lkdGg6IDc1JTtcXG4gIGhlaWdodDogMS41ZW07XFxufVxcblxcbi5jYW5jZWwtYnV0dG9uIHtcXG4gIEBleHRlbmQgLmFwcHJvdmUtYnV0dG9uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvcmFsO1xcbn1cXG5cXG4uZGVwYXJ0ZWQtYnV0dG9uIHtcXG4gIEBleHRlbmQgLmFwcHJvdmUtYnV0dG9uO1xcbiAgYmFja2dyb3VuZDogJGxpZ2h0LWdyZXk7XFxufVxcblxcbi5wZW5kaW5nLXRyaXBzIHtcXG4gIGdyaWQtYXJlYTogXFxcInBlbmRpbmdcXFwiO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMzB2dyk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAyNXZoKTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmFwcHJvdmVkLXRyaXBzIHtcXG4gIEBleHRlbmQgLnBlbmRpbmctdHJpcHM7XFxuICBib3JkZXItcmlnaHQ6IHNvbGlkIC4xZW0gJHJpY2gtYmxhY2s7XFxuICBib3JkZXItbGVmdDogc29saWQgLjFlbSAkcmljaC1ibGFjaztcXG59XFxuXFxuLmRlcGFydGVkLXRyaXBzIHtcXG4gIEBleHRlbmQgLnBlbmRpbmctdHJpcHM7XFxufVxcblxcbi5hZG1pbi12aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCAkcmljaC1ibGFjaztcXG59XFxuXFxuLmFnZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogLjVlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItbGVmdDogc29saWQgMXB4ICRncmV5O1xcbn1cXG5cXG4uYWdlbnQtaW5mby13cmFwcGVyIHtcXG4gIHdpZHRoOiA1NSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XFxuICBwYWRkaW5nOiAxZW07XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmFnZW50LXRyYXZlbGVyLW5hbWUge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLmFnZW50LWRlc3RpbmF0aW9uLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xcbn1cXG5cXG4uYWdlbnQtdHJhdmVsZXJzLXdyYXBwZXIge1xcbiAgQGV4dGVuZCAudHJhdmVsZXJzLXdyYXBwZXI7XFxuICBib3JkZXI6IHNvbGlkIDFweCAkZ3JlZW47XFxufVxcblwiLFwiLmZvb3Qge1xcbiAgaGVpZ2h0OiA4dmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XFxuICB6LWluZGV4OiA0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICRyaWNoLWJsYWNrO1xcbn1cXG5cXG4udXNlci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IDUwdnc7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAydnc7XFxufVxcblxcbi51c2VyIHtcXG4gIGhlaWdodDogMWVtO1xcbiAgd2lkdGg6IDFlbTtcXG59XFxuXFxuLnRyYXZlbGVyLWV4cGVuc2Vze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgd2lkdGg6IDUwdnc7XFxuICBtYXJnaW4tcmlnaHQ6IDJ2dztcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxufVxcblxcbi5leHBlbnNlcy1jb3N0IHtcXG4gIG1hcmdpbi1sZWZ0OiAuMjVlbTtcXG4gIGZvbnQtc2l6ZTogMTEwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb3JhbDtcXG4gIGNvbG9yOiAkcmljaC1ibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IC4yNWVtO1xcbn1cXG5cIixcIi50cmF2ZWxlci1ib29rLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgbGVmdDogMzB2dztcXG4gIHRvcDogMjV2aDtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgaGVpZ2h0OiA0NXZoO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCAkcmljaC1ibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubW9kYWwtYm9keSB7XFxuICB3aWR0aDogOTUlO1xcbiAgaGVpZ2h0OiA5NSU7XFxuICBwYWRkaW5nOiAxZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvcmFsO1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IDRlbTtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDEwcHggMXB4ICRyaWNoLWJsYWNrO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgY29sb3I6ICRyaWNoLWJsYWNrO1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG59XFxuXFxuLmNsb3NlLWJ1dHRvbiB7XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIHdpZHRoOiAyZW07XFxuICBoZWlnaHQ6IDJlbTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi5jYWxlbmRhci13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBtYXJnaW4tYm90dG9tOiAxZW07XFxufVxcblxcbiNkZXBhcnQtZGF0ZSwgI3JldHVybi1kYXRlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb3JhbDtcXG4gIHdpZHRoOiA5ZW07XFxuICBoZWlnaHQ6IDJlbTtcXG4gIGZvbnQtc2l6ZTogLjc1ZW07XFxuICBmb250LWZhbWlseTogJHJlZ3VsYXItZm9udDtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxufVxcblxcbi5kYXRlLWFycm93IHtcXG4gIGhlaWdodDogMS41ZW07XFxuICB3aWR0aDogMS41ZW07XFxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxZW07XFxufVxcblxcbi5kZXN0aW5hdGlvbi13cmFwcGVyIHtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG5cXG4jZGVzdGluYXRpb25zIHtcXG4gIHdpZHRoOiAxMmVtO1xcbiAgaGVpZ2h0OiAyZW07XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgJGNvcmFsO1xcbiAgZm9udC1mYW1pbHk6ICRyZWd1bGFyLWZvbnQ7XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cXG4ubnVtLXN1Ym1pdC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLnN1Ym1pdC1idXR0b24ge1xcbiAgQGV4dGVuZCAuY2FuY2VsLWJ1dHRvbjtcXG4gIHdpZHRoOiA1ZW07XFxuICBoZWlnaHQ6IDJlbTtcXG59XFxuXFxuLmlucHV0LXRyYXZlbGVycyB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIHdpZHRoOiAyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcXG4gIHBhZGRpbmc6LjI1ZW07XFxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogLjVlbTtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuNWVtO1xcblxcbiAgJjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuLm1vZGFsLXRyYXZlbGVycy13cmFwcGVyIHtcXG4gIEBleHRlbmQgLnRyYXZlbGVycy13cmFwcGVyO1xcbiAgd2lkdGg6IDhlbTtcXG59XFxuXFxuLmNvc3QtZGlzcGxheSB7XFxuICBAZXh0ZW5kIC5tb2RhbC1ib2R5O1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG59XFxuXFxuLnJlY2VpcHQtdGl0bGUge1xcbiAgZm9udC1zaXplOiAyLjVlbTtcXG59XFxuXFxuLnN1YnRvdGFsIHtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uYWdlbmN5LWZlZSB7XFxuICBAZXh0ZW5kIC5zdWJ0b3RhbDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkcmljaC1ibGFjaztcXG4gIG1hcmdpbi1ib3R0b206IC4yNWVtO1xcbn1cXG5cXG4udG90YWwge1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIGZvbnQtc3R5bGU6ICRsYXJnZXItZm9udDtcXG59XFxuXFxuLmNvbmZpcm0tYnV0dG9uIHtcXG4gIEBleHRlbmQgLnN1Ym1pdC1idXR0b247XFxuICBtYXJnaW4tdG9wOiAuNWVtO1xcbn1cXG5cIixcIi5sb2dpbi1kaXNwbGF5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5sb2dpbi1ib3gge1xcbiAgYmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LCAuNyk7XFxuICB3aWR0aDogMjV2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4ICRyaWNoLWJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxufVxcblxcbi5sb2dpbi13ZWxjb21lIHtcXG4gIGZvbnQtc2l6ZTogMS43NWVtO1xcbiAgcGFkZGluZzogLjVlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAkZ3JlZW47XFxuICB3aWR0aDogMjN2dztcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IC4xMjVlbTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAuMTI1ZW07XFxufVxcblxcbi5sb2dpbi1sb2dvIHtcXG4gIGhlaWdodDogMTBlbTtcXG4gIHdpZHRoOiAxMGVtO1xcbn1cXG5cXG4ubG9naW4td3JhcHBlciB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogMTBlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udXNlcm5hbWUtaW5wdXQge1xcbiAgaGVpZ2h0OiAxLjI1ZW07XFxuICBmb250LXNpemU6IDEuNWVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgJGdyZWVuO1xcbiAgYm9yZGVyLXJhZGl1czogLjI1ZW07XFxuICBiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsIC4yKTtcXG59XFxuXFxuLnBhc3N3b3JkLWlucHV0IHtcXG4gIEBleHRlbmQgLnVzZXJuYW1lLWlucHV0O1xcbn1cXG5cXG4ubG9naW4tYnV0dG9uIHtcXG4gIEBleHRlbmQgLmFwcHJvdmUtYnV0dG9uO1xcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xcbn1cXG5cIixcIi8vIEV4dHJhIGxhcmdlIGRldmljZXMgKGxvcHRvcHMvZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjM1cHgpIHtcXG4gIC8vIC50cmF2ZWxlci1wYWdlIHtcXG4gIC8vICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMjN2dyk7XFxuICAvLyAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDUsIDI1dmgpO1xcbiAgLy8gfVxcblxcbn1cXG5cXG4vLyBTbWFsbCBkZXZpY2VzIChwb3J0cmFpdCB0YWJsZXRzIGFuZCBsYXJnZSBwaG9uZXMsIDYwMHB4IGFuZCB1cClcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSBhbmQgKG1heC13aWR0aDogMTA1MHB4KSB7XFxuICAubG9naW4tZGlzcGxheSB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICB9XFxuXFxuICAubG9naW4tYm94IHtcXG4gICAgd2lkdGg6IDcwdnc7XFxuICAgIGhlaWdodDogNzB2aDtcXG4gIH1cXG5cXG4gIC5sb2dpbi13ZWxjb21lIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIHdpZHRoOiBpbmhlcml0O1xcbiAgfVxcblxcbiAgLmxvZ2luLWxvZ28ge1xcbiAgICBoZWlnaHQ6IDEyZW07XFxuICAgIHdpZHRoOiAxMmVtO1xcbiAgfVxcblxcbiAgLmxvZ2luLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IDMwdmg7XFxuICB9XFxuXFxuICAudXNlcm5hbWUtaW5wdXQge1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICB9XFxuXFxuICAubG9naW4tYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIGhlaWdodDogMmVtO1xcbiAgfVxcblxcbiAgLnRyYXZlbGVyLXBhZ2Uge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLCAzMHZoKTtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1jb250ZW50LFxcbiAgLmRyb3Bkb3duLW1lbnUge1xcbiAgICBtYXJnaW4tdG9wOiAyLjc1ZW07XFxuICB9XFxuXFxuICAudHJhdmVsZXItYm9vay1tb2RhbCB7XFxuICAgIHdpZHRoOiA0NXZoO1xcbiAgICBoZWlnaHQ6IDI1dmg7XFxuICAgIGxlZnQ6IDIwLjV2dztcXG4gICAgdG9wOiAzM3ZoO1xcbiAgfVxcblxcbiAgLm1vZGFsLWJvZHksXFxuICAuY29zdC1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDk2JTtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5jb25maXJtLWJ1dHRvbiB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoLjkpO1xcbiAgfVxcbn1cXG5cXG4vLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwaG9uZXMsIDYwMHB4IGFuZCBkb3duKVxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5sb2dpbi1kaXNwbGF5IHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIH1cXG5cXG4gIC5sb2dpbi1ib3gge1xcbiAgICB3aWR0aDogODB2dztcXG4gIH1cXG5cXG4gIC5sb2dpbi13ZWxjb21lIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICB9XFxuXFxuICAubmF2LXRpdGxlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC51c2VyLXdyYXBwZXIge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLndlbGNvbWUtdXNlciB7XFxuICAgIHdpZHRoOiA3ZW07XFxuICAgIGZvbnQtc2l6ZTogLjVlbTtcXG4gIH1cXG5cXG4gIC5leHBlbnNlcy10aXRsZSB7XFxuICAgIHdpZHRoOiA4ZW07XFxuICAgIGZvbnQtc2l6ZTogLjVlbTtcXG4gIH1cXG5cXG4gIC50cmF2ZWxlci1wYWdlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG5cXG4gIC5kcm9wZG93bi1tZW51IHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgfVxcblxcbiAgLnRyYXZlbGVyLWJvb2stbW9kYWwge1xcbiAgICB3aWR0aDogNDR2aDtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICBsZWZ0OiAydnc7XFxuICAgIHRvcDogMTB2aDtcXG4gIH1cXG5cXG4gIC5tb2RhbC1ib2R5IHtcXG4gICAgd2lkdGg6IDkxJTtcXG4gIH1cXG5cXG4gIC5jYWxlbmRhci13cmFwcGVyIHtcXG4gICAgd2lkdGg6IGluaGVyaXQ7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubnVtLXN1Ym1pdC13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy1yaWdodDogNWVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwZW07XFxuICB9XFxuXFxuICAuc3VibWl0LWJ1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzZW07XFxuICB9XFxuXFxuICAuY29uZmlybS1idXR0b24ge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG5cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIEFnZW5jeSB7XG4gIGNvbnN0cnVjdG9yKHVzZXJEYXRhLCB0cmlwRGF0YSwgZGVzdGluYXRpb25EYXRhKXtcbiAgICB0aGlzLmN1c3RvbWVycyA9IHVzZXJEYXRhO1xuICAgIHRoaXMuYm9va2VkVHJpcHMgPSB0cmlwRGF0YTtcbiAgICB0aGlzLnBvc3NpYmxlRGVzdGluYXRpb25zID0gZGVzdGluYXRpb25EYXRhO1xuICB9XG5cbiAgZmlsdGVyVHJpcHNCeUN1c3RvbWVySUQoaWQpIHtcbiAgICByZXR1cm4gdGhpcy5ib29rZWRUcmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gaWQpXG4gIH1cblxuICBjb21waWxlQ3VzdG9tZXJEZXN0aW5hdGlvbnMoY3VzdG9tZXJJRCl7XG4gICAgbGV0IHRyaXBzID0gdGhpcy5maWx0ZXJUcmlwc0J5Q3VzdG9tZXJJRChjdXN0b21lcklEKVxuICAgIGxldCBkZXN0aW5hdGlvbnMgPSB0aGlzLnBvc3NpYmxlRGVzdGluYXRpb25zLmZpbHRlcihkZXN0ID0+IHtcbiAgICAgIHJldHVybiB0cmlwcy5maW5kKHRyaXAgPT4gdHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0LmlkKVxuICAgIH0pXG4gICAgcmV0dXJuIGRlc3RpbmF0aW9ucztcbiAgfVxuXG4gIGZpbmRDdXN0b21lcmJ5SW5mbyhpbmZvKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodHlwZW9mIGluZm8gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmN1c3RvbWVycy5maW5kKGN1c3RvbWVyID0+IGN1c3RvbWVyWyduYW1lJ10udG9VcHBlckNhc2UoKS5pbmNsdWRlcyhpbmZvLnRvVXBwZXJDYXNlKCkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSB0aGlzLmN1c3RvbWVycy5maW5kKGN1c3RvbWVyID0+IGN1c3RvbWVyWydpZCddID09PSBpbmZvKVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gXCJFcnJvcjogVXNlciBOb3QgRm91bmRcIlxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG5cbiAgfVxuXG4gIGRpc3BsYXlEZXN0aW5hdGlvbk5hbWVzKCl7XG4gICAgcmV0dXJuIHRoaXMucG9zc2libGVEZXN0aW5hdGlvbnMubWFwKGRlc3QgPT4gZGVzdC5kZXN0aW5hdGlvbilcbiAgfVxuXG4gIGZpbmREZXN0aW5hdGlvbkJ5TmFtZShuYW1lKXtcbiAgICByZXR1cm4gdGhpcy5wb3NzaWJsZURlc3RpbmF0aW9ucy5maW5kKGRlc3QgPT4gZGVzdC5kZXN0aW5hdGlvbiA9PT0gbmFtZSkuaWRcbiAgfVxuXG4gIGFkZE5ld0Rlc3RpbmF0aW9uKGRlc3RJRCwgbG9jYXRpb24sIGxvZGdpbmdDb3N0LCBmbGlnaHRDb3N0UGVyUGVyc29uLCBpbWFnZVVSTCwgYWx0VGV4dCl7XG4gICAgbGV0IG5ld0Rlc3RpbmF0aW9uID0ge1xuICAgICAgaWQ6IGRlc3RJRCxcbiAgICAgIGRlc3RpbmF0aW9uOiBsb2NhdGlvbixcbiAgICAgIGVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5OiBsb2RnaW5nQ29zdCxcbiAgICAgIGVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb246IGZsaWdodENvc3RQZXJQZXJzb24sXG4gICAgICBpbWFnZTogaW1hZ2VVUkwsXG4gICAgICBhbHQ6IGFsdFRleHQsXG4gICAgfVxuICAgIHJldHVybiBuZXdEZXN0aW5hdGlvblxuICB9XG5cbiAgY2FsY3VsYXRlVHJpcENvc3QodHJpcElEKSB7XG4gICAgbGV0IGJvb2tlZFRyaXAgPSB0aGlzLmJvb2tlZFRyaXBzLmZpbmQodHJpcCA9PiB0cmlwLmlkID09PSB0cmlwSUQpXG4gICAgbGV0IGRlc3RpbmF0aW9uID0gdGhpcy5wb3NzaWJsZURlc3RpbmF0aW9ucy5maW5kKGRlc3QgPT4gZGVzdC5pZCA9PT0gYm9va2VkVHJpcC5kZXN0aW5hdGlvbklEKVxuICAgIGxldCBjb3N0Rm9yTG9kZ2luZyA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogYm9va2VkVHJpcC5kdXJhdGlvblxuICAgIGxldCBjb3N0Rm9yRmxpZ2h0cyA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiBib29rZWRUcmlwLnRyYXZlbGVyc1xuICAgIGxldCBzdWJ0b3RhbCA9IGNvc3RGb3JMb2RnaW5nICsgY29zdEZvckZsaWdodHM7XG4gICAgbGV0IGFnZW5jeUZlZSA9IHN1YnRvdGFsICogLjFcbiAgICBsZXQgY29zdERhdGEgPSB7XG4gICAgICBzdWJ0b3RhbDogc3VidG90YWwsXG4gICAgICBhZ2VuY3lGZWU6IGFnZW5jeUZlZSxcbiAgICAgIHRvdGFsOiAoc3VidG90YWwgKyBhZ2VuY3lGZWUpLnRvRml4ZWQoMiksXG4gICAgfVxuICAgIHJldHVybiBjb3N0RGF0YTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUN1c3RvbWVyVG90YWxZZWFyRXhwZW5zZSh1c2VySUQsIHllYXIpe1xuICAgIGxldCBjdXN0b21lclRyaXBzID0gdGhpcy5maWx0ZXJUcmlwc0J5Q3VzdG9tZXJJRCh1c2VySUQpXG4gICAgbGV0IGZpbHRlcmVkVHJpcHNCeVllYXIgPSBjdXN0b21lclRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuZGF0ZS5zbGljZSgwLDQpID09PSB5ZWFyKVxuICAgIHJldHVybiBmaWx0ZXJlZFRyaXBzQnlZZWFyLnJlZHVjZSgoYWNjLCB0cmlwKSA9PiB7XG4gICAgICBsZXQgY29zdERhdGEgPSB0aGlzLmNhbGN1bGF0ZVRyaXBDb3N0KHRyaXAuaWQpXG4gICAgICBhY2MgKz0gTnVtYmVyKGNvc3REYXRhLnRvdGFsKVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKVxuICB9XG5cbiAgZGV0ZXJtaW5lRW5kRGF0ZUJ5RHVyYXRpb24odHJpcElEKXtcbiAgICBsZXQgYm9va2VkVHJpcCA9IHRoaXMuYm9va2VkVHJpcHMuZmluZCh0cmlwID0+IHRyaXAuaWQgPT09IHRyaXBJRClcbiAgICBsZXQgc3RhcnREYXRlID0gRGF0ZS5wYXJzZShib29rZWRUcmlwLmRhdGUpXG4gICAgbGV0IG1pbGlzZWNvbmRzUGVyRGF5ID0gODY0MDAwMDBcbiAgICBsZXQgdGltZUF3YXkgPSBib29rZWRUcmlwLmR1cmF0aW9uICogbWlsaXNlY29uZHNQZXJEYXlcbiAgICBsZXQgZW5kRGF0ZSA9IG5ldyBEYXRlKHN0YXJ0RGF0ZSArIHRpbWVBd2F5KVxuICAgIHJldHVybiB0aGlzLmNvbnZlcnREYXRlKGVuZERhdGUpXG4gIH1cblxuICBjb252ZXJ0RGF0ZShkYXRlKXtcbiAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpXG4gICAgbGV0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKClcbiAgICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxXG4gICAgbGV0IGRheSA9IG5ld0RhdGUuZ2V0RGF0ZSgpXG4gICAgaWYgKGRheSA8IDEwKXtcbiAgICAgIGRheSA9ICcwJyArIGRheVxuICAgIH1cbiAgICBpZiAobW9udGggPCAxMCl7XG4gICAgICBtb250aCA9ICcwJyArIG1vbnRoXG4gICAgfVxuICAgIHJldHVybiB5ZWFyICsgJy8nICsgbW9udGggKyAnLycgKyBkYXk7XG4gIH1cblxuICBkZXRlcm1pbmVEdXJhdGlvbkJ5RW5kRGF0ZShzdGFydERhdGUsIGVuZERhdGUpe1xuICAgIGxldCBtaWxpc2Vjb25kc1BlckRheSA9IDg2NDAwMDAwXG4gICAgbGV0IHJldHVybkRhdGUgPSBEYXRlLnBhcnNlKGVuZERhdGUpXG4gICAgbGV0IGRlcGFydERhdGUgPSBEYXRlLnBhcnNlKHN0YXJ0RGF0ZSlcbiAgICBsZXQgZHVyYXRpb24gPSAocmV0dXJuRGF0ZSAtIGRlcGFydERhdGUpIC8gbWlsaXNlY29uZHNQZXJEYXlcbiAgICByZXR1cm4gZHVyYXRpb25cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBZ2VuY3k7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvL05BViBCQVIgQlVUVE9OU1xuY29uc3QgYm9va0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib29rLXRyaXAtYnV0dG9uJyk7XG5jb25zdCBib29rQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdi1sZWZ0JylcbmNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYm94Jyk7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWJ1dHRvbicpO1xuY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG5jb25zdCBkcm9wZG93bkJvb2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9vay10cmlwJyk7XG5jb25zdCBkcm9wZG93bkxvZ291dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvdXQnKTtcbmNvbnN0IG5hdkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbi1iYXInKTtcbmNvbnN0IGZvb3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3QnKTtcblxuLy9ESVNQTEFZIEdSSURTIC0gVFJBVkVMRVIgJiBBR0VOVFxuY29uc3QgdHJpcEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudHJhdmVsZXItcGFnZScpO1xuY29uc3QgYWRtaW5QZW5kaW5nR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZW5kaW5nLXRyaXBzJyk7XG5jb25zdCBhZG1pbkFwcHJvdmVkR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHByb3ZlZC10cmlwcycpO1xuY29uc3QgYWRtaW5EZXBhcnRlZEdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVwYXJ0ZWQtdHJpcHMnKTtcbmNvbnN0IGZvb3RlcldlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWUtdXNlcicpO1xuY29uc3QgZm9vdGVyRXhwZW5zZUFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5leHBlbnNlcy1jb3N0Jyk7XG5cbi8vQk9PSyBUUklQIE1PREFMXG5jb25zdCBib29rVHJpcE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYXZlbGVyLWJvb2stbW9kYWwnKTtcbmNvbnN0IGRlcGFydERhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXBhcnQtZGF0ZScpO1xuY29uc3QgcmV0dXJuRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JldHVybi1kYXRlJyk7XG5jb25zdCBkZXN0aW5hdGlvblNlbGVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc3RpbmF0aW9ucycpO1xuY29uc3QgbnVtYmVyVHJhdmVsZXJzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXQtdHJhdmVsZXJzJyk7XG5jb25zdCBzdWJtaXRUcmlwSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0LWJ1dHRvbicpO1xuY29uc3QgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXR0b24nKTtcbmNvbnN0IGNvc3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvc3QtZGlzcGxheScpO1xuY29uc3QgbW9kYWxCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKTtcbmNvbnN0IGNvbmZpcm1CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZmlybS1idXR0b24nKTtcbmNvbnN0IHJlY2VpcHRTdWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VidG90YWwnKVxuY29uc3QgcmVjZWlwdEZlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZ2VuY3ktZmVlJylcbmNvbnN0IHJlY2VpcHRUb3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbCcpXG5cbi8vTE9HSU4gUEFHRVxuY29uc3QgbG9naW5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWRpc3BsYXknKTtcbmNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlcm5hbWUtaW5wdXQnKTtcbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luLWJ1dHRvbicpO1xuY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFzc3dvcmQtaW5wdXQnKTtcbmNvbnN0IGluY29ycmVjdFByb21wdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmNvcnJlY3QtcHJvbXB0Jyk7XG5cbmxldCBkb21VcGRhdGVzID0ge1xuICBib29rQnV0dG9uLFxuICBkcm9wZG93bkJvb2ssXG4gIGRyb3Bkb3duTG9nb3V0LFxuICBkZXBhcnREYXRlSW5wdXQsXG4gIHN1Ym1pdFRyaXBJbnB1dCxcbiAgY2xvc2VNb2RhbCxcbiAgY29uZmlybUJ1dHRvbixcbiAgdXNlcm5hbWVJbnB1dCxcbiAgbG9naW5CdXR0b24sXG4gIHBhc3N3b3JkLFxuXG4gIGRpc3BsYXlDdXN0b21lclRyaXBzKHRyYXZlbGVyLCBhZ2VuY3kpIHtcbiAgICB0cmlwR3JpZC5pbm5lckhUTUwgPSAnJztcbiAgICB0cmF2ZWxlci5zY2hlZHVsZWRUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgbGV0IGRlc3RpbmF0aW9uID0gdHJhdmVsZXIuc2NoZWR1bGVEZXN0aW5hdGlvbnMuZmluZChkZXN0ID0+IHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdC5pZClcbiAgICAgIGxldCB0cmlwQ29zdCA9IGFnZW5jeS5jYWxjdWxhdGVUcmlwQ29zdCh0cmlwLmlkKVxuICAgICAgdHJpcEdyaWQuaW5uZXJIVE1MICs9IGBcbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwidHJhdmVsZXItdHJpcFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2Utd3JhcHBlclwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7ZGVzdGluYXRpb24uaW1hZ2V9KTtcIj5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJkZXN0aW5hdGlvbi10aXRsZVwiPiR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9oMT5cbiAgICAgICAgICA8aDIgY2xhc3M9XCJkZXN0aW5hdGlvbi1zdGF0dXNcIj5zdGF0dXM6ICR7dHJpcC5zdGF0dXN9PC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLXdyYXBwZXJcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJ0cmF2ZWwtZGF0ZVwiPkRlcGFydHVyZTogJHt0cmlwLmRhdGV9PC9oMz5cbiAgICAgICAgICA8cCBjbGFzcz1cInRyYXZlbC1kdXJhdGlvblwiPkRheXM6ICR7dHJpcC5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJ0cmF2ZWwtY29zdFwiPkNvc3Q6ICQke3RyaXBDb3N0LnRvdGFsfTwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzPSBcInRyYXZlbGVycy13cmFwcGVyXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzPVwicGVyc29uLWljb25cIiBzcmM9XCIuL2ltYWdlcy9wZXJzb24tZ3JleS5wbmdcIiBhbHQ9XCJzdWl0Y2FzZVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJudW1iZXItb2YtdHJhdmFsZXJzXCI+JHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgYFxuICAgIH0pXG4gIH0sXG5cbiAgZGlzcGxheUN1c3RvbWVyRm9vdGVyKGFnZW5jeSwgdHJhdmVsZXIpIHtcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBjdXJyZW50WWVhciA9IGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IHllYXJFeHBlbnNlID0gYWdlbmN5LmNhbGN1bGF0ZUN1c3RvbWVyVG90YWxZZWFyRXhwZW5zZSh0cmF2ZWxlci5pZCwgY3VycmVudFllYXIudG9TdHJpbmcoKSlcbiAgICBmb290ZXJXZWxjb21lTWVzc2FnZS5pbm5lclRleHQgPSBgV2VsY29tZSwgJHt0cmF2ZWxlci5uYW1lfSFgXG4gICAgZm9vdGVyRXhwZW5zZUFtb3VudC5pbm5lclRleHQgPSBgJCR7eWVhckV4cGVuc2V9YFxuICB9LFxuXG4gIHBvcHVsYXRlRGVzdGluYXRpb25PcHRpb25zKGRlc3RpbmF0aW9uTmFtZXMpIHtcbiAgICBkZXN0aW5hdGlvbk5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKVxuICAgICAgb3B0aW9uLnZhbHVlID0gbmFtZTtcbiAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBuYW1lO1xuICAgICAgZGVzdGluYXRpb25TZWxlY3RJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pXG4gICAgfSlcbiAgfSxcblxuICBjaGFuZ2VEZXBhcnREYXRlRGVmYXVsdChlbGVtZW50SWQsIGRhdGUpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpLnZhbHVlID0gZGF0ZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpLm1pbiA9IGRhdGU7XG4gIH0sXG5cbiAgcG9wdWxhdGVSZWNlaXB0KGNvc3QpIHtcbiAgICByZWNlaXB0U3ViLmlubmVyVGV4dCA9IGBTdWJ0b3RhbCA6ICQke2Nvc3Quc3VidG90YWx9YFxuICAgIHJlY2VpcHRGZWUuaW5uZXJUZXh0ID0gYEFnZW50IEZlZSAoMTAlKSA6ICQke2Nvc3QuYWdlbmN5RmVlfWBcbiAgICByZWNlaXB0VG90YWwuaW5uZXJUZXh0ID0gYFRvdGFsIDogJCR7Y29zdC50b3RhbH1gXG4gIH0sXG5cbiAgaGlkZU1vZGFsSGVscGVyKCkge1xuICAgIG1vZGFsQm9keS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBjb3N0RGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9LFxuXG4gIGRpc3BsYXlNb2RhbEhlbHBlcigpIHtcbiAgICBib29rVHJpcE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHRyaXBHcmlkLmNsYXNzTGlzdC5hZGQoJ2JsdXInKTtcbiAgfSxcblxuICByZXNldE1vZGFsSGVscGVyKCkge1xuICAgIG1vZGFsQm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB0cmlwR3JpZC5jbGFzc0xpc3QucmVtb3ZlKCdibHVyJyk7XG4gICAgY29zdERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgYm9va1RyaXBNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJldHVybi1kYXRlXCIpLnZhbHVlID0gJydcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlcGFydC1kYXRlXCIpLnZhbHVlID0gJydcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LXRyYXZlbGVyc1wiKS52YWx1ZSA9ICcxJ1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzdGluYXRpb25zXCIpLnZhbHVlID0gJ3BsYWNlaG9sZGVyJ1xuICB9LFxuXG4gIGNoYW5nZUFmdGVyTG9naW4oKSB7XG4gICAgbG9naW5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgdHJpcEdyaWQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBuYXZEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgZm9vdERpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgICBwYXNzd29yZC52YWx1ZSA9IFwiXCJcbiAgICB1c2VybmFtZUlucHV0LnZhbHVlID0gXCJcIlxuICAgIGluY29ycmVjdFByb21wdC5pbm5lclRleHQgPSBcIlwiXG4gIH0sXG5cbiAgY2hhbmdlQWZ0ZXJMb2dvdXQoKSB7XG4gICAgbG9naW5EaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpXG4gICAgdHJpcEdyaWQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgICBuYXZEaXNwbGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgZm9vdERpc3BsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcbiAgfSxcblxuICBkaXNwbGF5TG9naW5FcnJvcigpIHtcbiAgICBpbmNvcnJlY3RQcm9tcHQuaW5uZXJUZXh0ID0gXCJ1c2VybmFtZSBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3QuLi5cIlxuICB9LFxuXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImltcG9ydCBBZ2VuY3kgZnJvbSAnLi9hZ2VuY3kuanMnO1xuaW1wb3J0IFRyYXZlbGVyIGZyb20gJy4vdHJhdmVsZXIuanMnO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzLmpzJztcblxubGV0IGZldGNoUmVxdWVzdHMgPSB7XG4gIHBvc3RUcmlwVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHNcIixcbiAgcG9zdE5ld0Rlc3RpbmF0aW9uVXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zXCIsXG4gIGNoYW5nZVRyaXBTdGF0dXNVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91cGRhdGVUcmlwXCIsXG5cbiAgZ2V0QWxsVXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnNcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG5cbiAgZ2V0U2luZ2xlVXNlckRhdGEoaWQpIHtcbiAgICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJhdmVsZXJzLyR7aWR9YClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG5cbiAgZ2V0QWxsRGVzdGluYXRpb25EYXRhKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zXCIpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IGRhdGEpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9LFxuXG4gIGdldEFsbFRyaXBEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHNcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4gZGF0YSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG5cbiAgY3JlYXRlUG9zdE9wdGlvbihkYXRhKSB7XG4gICAgbGV0IG9wdGlvbiA9IHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgfTtcbiAgICByZXR1cm4gb3B0aW9uO1xuICB9LFxuXG4gIHVwZGF0ZURhdGEodXJsLCBvcHRpb24sIGFnZW5jeSwgdHJhdmVsZXIsIHRyYXZlbGVySUQsIHRyaXBJZCkge1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHRoaXMuY3JlYXRlUG9zdE9wdGlvbihvcHRpb24pKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4obWVzc2FnZSA9PiB7XG4gICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICBmZXRjaFJlcXVlc3RzLmdldEFsbFVzZXJEYXRhKCksXG4gICAgICAgICAgZmV0Y2hSZXF1ZXN0cy5nZXRBbGxEZXN0aW5hdGlvbkRhdGEoKSxcbiAgICAgICAgICBmZXRjaFJlcXVlc3RzLmdldEFsbFRyaXBEYXRhKCksXG4gICAgICAgICAgZmV0Y2hSZXF1ZXN0cy5nZXRTaW5nbGVVc2VyRGF0YSh0cmF2ZWxlcklEKVxuICAgICAgICBdKVxuICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgYWdlbmN5ID0gbmV3IEFnZW5jeShcbiAgICAgICAgICAgICAgZGF0YVswXS50cmF2ZWxlcnMsXG4gICAgICAgICAgICAgIGRhdGFbMl0udHJpcHMsXG4gICAgICAgICAgICAgIGRhdGFbMV0uZGVzdGluYXRpb25zXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdHJhdmVsZXIgPSBuZXcgVHJhdmVsZXIoXG4gICAgICAgICAgICAgIGRhdGFbM10sXG4gICAgICAgICAgICAgIGFnZW5jeS5maWx0ZXJUcmlwc0J5Q3VzdG9tZXJJRCh0cmF2ZWxlcklEKSxcbiAgICAgICAgICAgICAgYWdlbmN5LmNvbXBpbGVDdXN0b21lckRlc3RpbmF0aW9ucyh0cmF2ZWxlcklEKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUN1c3RvbWVyVHJpcHModHJhdmVsZXIsIGFnZW5jeSlcbiAgICAgICAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUN1c3RvbWVyRm9vdGVyKGFnZW5jeSwgdHJhdmVsZXIpXG4gICAgICAgICAgICBkb21VcGRhdGVzLnBvcHVsYXRlUmVjZWlwdChhZ2VuY3kuY2FsY3VsYXRlVHJpcENvc3QodHJpcElkKSlcbiAgICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG5cbiAgZGVsZXRlU2luZ2xlVHJpcChpZCkge1xuICAgIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcy8ke2lkfWAsIHttZXRob2Q6IFwiREVMRVRFXCJ9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4obWVzc2FnZSA9PiBjb25zb2xlLmxvZyhtZXNzYWdlKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gIH0sXG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBmZXRjaFJlcXVlc3RzO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYWRtaW4ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYWlycGxhbmUucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYXJyb3cucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvYmFja2dyb3VuZC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9jbG9zZS1ob3Zlci5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9jbG9zZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9tZW51LnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3BlcnNvbi1jb3JhbC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9wZXJzb24tZ3JleS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zdWl0Y2FzZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy91c2VyLnBuZ1wiOyIsIi8vIENTUyAoU0NTUykgZmlsZXNcbmltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcbmltcG9ydCBBZ2VuY3kgZnJvbSAnLi9hZ2VuY3kuanMnO1xuaW1wb3J0IFRyYXZlbGVyIGZyb20gJy4vdHJhdmVsZXIuanMnO1xuaW1wb3J0IFRyaXAgZnJvbSAnLi90cmlwLmpzJ1xuXG5cbmltcG9ydCBmZXRjaFJlcXVlc3RzIGZyb20gJy4vZmV0Y2hSZXF1ZXN0cy5qcyc7XG5pbXBvcnQgZG9tVXBkYXRlcyBmcm9tICcuL2RvbVVwZGF0ZXMuanMnO1xuXG4vLyBpbWFnZXNcbmltcG9ydCAnLi9pbWFnZXMvc3VpdGNhc2UucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9tZW51LnBuZydcbmltcG9ydCAnLi9pbWFnZXMvdXNlci5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL3BlcnNvbi1ncmV5LnBuZydcbmltcG9ydCAnLi9pbWFnZXMvcGVyc29uLWNvcmFsLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvYXJyb3cucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9hZG1pbi5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2Nsb3NlLnBuZydcbmltcG9ydCAnLi9pbWFnZXMvY2xvc2UtaG92ZXIucG5nJ1xuaW1wb3J0ICcuL2ltYWdlcy9haXJwbGFuZS5wbmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2JhY2tncm91bmQuanBnJ1xuXG5kb21VcGRhdGVzLmJvb2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TW9kYWwpO1xuZG9tVXBkYXRlcy5kcm9wZG93bkJvb2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TW9kYWwpO1xuZG9tVXBkYXRlcy5jbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRNb2RhbCk7XG5kb21VcGRhdGVzLmRlcGFydERhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBzZXRSZXR1cm5EYXRlRGVmYXVsdCk7XG5kb21VcGRhdGVzLmxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdmVyaWZ5TG9naW5DcmVkZW50aWFscyk7XG5kb21VcGRhdGVzLnN1Ym1pdFRyaXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRyaXApO1xuZG9tVXBkYXRlcy5kcm9wZG93bkxvZ291dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ291dClcblxubGV0IHRyYXZlbEFnZW5jeSwgdHJhdmVsZXIsIHVuaXF1ZVRyaXBJZDtcblxuZnVuY3Rpb24gcmV0cmlldmVBbGxEYXRhKHVzZXJJZCkge1xuICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgIGZldGNoUmVxdWVzdHMuZ2V0QWxsVXNlckRhdGEoKSxcbiAgICBmZXRjaFJlcXVlc3RzLmdldEFsbERlc3RpbmF0aW9uRGF0YSgpLFxuICAgIGZldGNoUmVxdWVzdHMuZ2V0QWxsVHJpcERhdGEoKVxuICBdKVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgdHJhdmVsQWdlbmN5ID0gbmV3IEFnZW5jeShcbiAgICAgICAgZGF0YVswXS50cmF2ZWxlcnMsXG4gICAgICAgIGRhdGFbMl0udHJpcHMsXG4gICAgICAgIGRhdGFbMV0uZGVzdGluYXRpb25zXG4gICAgICApO1xuICAgICAgdHJhdmVsZXIgPSBuZXcgVHJhdmVsZXIoXG4gICAgICAgIHRyYXZlbEFnZW5jeS5maW5kQ3VzdG9tZXJieUluZm8odXNlcklkKSxcbiAgICAgICAgdHJhdmVsQWdlbmN5LmZpbHRlclRyaXBzQnlDdXN0b21lcklEKHVzZXJJZCksXG4gICAgICAgIHRyYXZlbEFnZW5jeS5jb21waWxlQ3VzdG9tZXJEZXN0aW5hdGlvbnModXNlcklkKVxuICAgICAgKTtcbiAgICAgIHVuaXF1ZVRyaXBJZCA9IGRhdGFbMl0udHJpcHMubGVuZ3RoICsgMTtcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUN1c3RvbWVyVHJpcHModHJhdmVsZXIsIHRyYXZlbEFnZW5jeSlcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUN1c3RvbWVyRm9vdGVyKHRyYXZlbEFnZW5jeSwgdHJhdmVsZXIpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxufVxuXG5mdW5jdGlvbiB2ZXJpZnlMb2dpbkNyZWRlbnRpYWxzKCkge1xuICBsZXQgdHJhdmVsZXJJZCA9IE51bWJlcihkb21VcGRhdGVzLnVzZXJuYW1lSW5wdXQudmFsdWUuc3BsaXQoJ3RyYXZlbGVyJykuam9pbignJykpXG4gIGlmIChkb21VcGRhdGVzLnBhc3N3b3JkLnZhbHVlID09PSAndHJhdmVsZXIyMDIwJyAmJiB0cmF2ZWxlcklkIDw9IDUwKXtcbiAgICByZXRyaWV2ZUFsbERhdGEoTnVtYmVyKHRyYXZlbGVySWQpKVxuICAgIGRvbVVwZGF0ZXMuY2hhbmdlQWZ0ZXJMb2dpbigpO1xuICB9IGVsc2Uge1xuICAgIGRvbVVwZGF0ZXMuZGlzcGxheUxvZ2luRXJyb3IoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2dvdXQoKSB7XG4gIGRvbVVwZGF0ZXMuY2hhbmdlQWZ0ZXJMb2dvdXQoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU1vZGFsKCkge1xuICBkb21VcGRhdGVzLmRpc3BsYXlNb2RhbEhlbHBlcigpO1xuICBsZXQgdG9kYXlzRGF0ZSA9IHRyYXZlbEFnZW5jeS5jb252ZXJ0RGF0ZShEYXRlLm5vdygpKS5zcGxpdCgnLycpLmpvaW4oJy0nKTtcbiAgZG9tVXBkYXRlcy5jaGFuZ2VEZXBhcnREYXRlRGVmYXVsdCgnZGVwYXJ0LWRhdGUnLCB0b2RheXNEYXRlKTtcbiAgZG9tVXBkYXRlcy5wb3B1bGF0ZURlc3RpbmF0aW9uT3B0aW9ucyh0cmF2ZWxBZ2VuY3kuZGlzcGxheURlc3RpbmF0aW9uTmFtZXMoKSlcbn1cblxuZnVuY3Rpb24gc2V0UmV0dXJuRGF0ZURlZmF1bHQoKSB7XG4gIGxldCBkZXBhcnREYXRlU2VsZWN0ZWQgPSBEYXRlLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXBhcnQtZGF0ZScpLnZhbHVlKTtcbiAgbGV0IHJldHVybkRhdGVNaW5WYWx1ZSA9IHRyYXZlbEFnZW5jeS5jb252ZXJ0RGF0ZShkZXBhcnREYXRlU2VsZWN0ZWQgKyAoODY0MDAwMDAgKiAyKSkuc3BsaXQoJy8nKS5qb2luKCctJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXR1cm4tZGF0ZScpLm1pbiA9IHJldHVybkRhdGVNaW5WYWx1ZTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JldHVybi1kYXRlJykudmFsdWUgPSByZXR1cm5EYXRlTWluVmFsdWU7XG59XG5cbmZ1bmN0aW9uIGhpZGVNb2RhbCgpIHtcbiAgZG9tVXBkYXRlcy5oaWRlTW9kYWxIZWxwZXIoKVxuICBkb21VcGRhdGVzLmNvbmZpcm1CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXNldE1vZGFsKTtcbn1cblxuZnVuY3Rpb24gcmVzZXRNb2RhbCgpIHtcbiAgZG9tVXBkYXRlcy5yZXNldE1vZGFsSGVscGVyKCk7XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdFRyaXAoKSB7XG4gIGxldCByZXR1cm5EYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXR1cm4tZGF0ZVwiKS52YWx1ZS5zcGxpdCgnLScpLmpvaW4oJy8nKVxuICBsZXQgZGVwYXJ0RGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVwYXJ0LWRhdGVcIikudmFsdWUuc3BsaXQoJy0nKS5qb2luKCcvJylcbiAgbGV0IG51bWJlck9mVHJhdmVsZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dC10cmF2ZWxlcnNcIikudmFsdWVcbiAgbGV0IGRlc3RpbmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXN0aW5hdGlvbnNcIikudmFsdWVcbiAgbGV0IGR1cmF0aW9uID0gdHJhdmVsQWdlbmN5LmRldGVybWluZUR1cmF0aW9uQnlFbmREYXRlKGRlcGFydERhdGUsIHJldHVybkRhdGUpO1xuICBsZXQgbmV3VHJpcCA9IG5ldyBUcmlwKHVuaXF1ZVRyaXBJZCwgdHJhdmVsZXIuaWQsIHRyYXZlbEFnZW5jeS5maW5kRGVzdGluYXRpb25CeU5hbWUoZGVzdGluYXRpb24pLCBudW1iZXJPZlRyYXZlbGVycywgZGVwYXJ0RGF0ZSwgZHVyYXRpb24pXG4gIHVuaXF1ZVRyaXBJZCArK1xuICBmZXRjaFJlcXVlc3RzLnVwZGF0ZURhdGEoZmV0Y2hSZXF1ZXN0cy5wb3N0VHJpcFVybCwgbmV3VHJpcCwgdHJhdmVsQWdlbmN5LCB0cmF2ZWxlciwgdHJhdmVsZXIuaWQsIG5ld1RyaXAuaWQpO1xuICBoaWRlTW9kYWwoKTtcbn1cbiIsImNsYXNzIFRyYXZlbGVyICB7XG4gIGNvbnN0cnVjdG9yKGRhdGEsIHRyaXBzLCBkZXN0aW5hdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gZGF0YS5pZDtcbiAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgdGhpcy50cmF2ZWxlclR5cGUgPSBkYXRhLnRyYXZlbGVyVHlwZTtcbiAgICB0aGlzLnNjaGVkdWxlZFRyaXBzID0gdHJpcHM7XG4gICAgdGhpcy5zY2hlZHVsZURlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9ucztcbiAgfVxuXG4gIGJvb2tUcmlwKHRyaXApIHtcbiAgICBpZiAodGhpcy5zY2hlZHVsZWRUcmlwcy5zb21lKHNjaGVkdWxlZCA9PiBzY2hlZHVsZWQuaWQgPT09IHRyaXAuaWQpID09PSBmYWxzZSkge1xuICAgICAgdGhpcy5zY2hlZHVsZWRUcmlwcy5wdXNoKHRyaXApXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnVGhhdCB0cmlwIGlzIGFscmVhZHkgYm9va2VkISdcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXI7XG4iLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IoaWQsIHVzZXJJRCwgZGVzdGluYXRpb25JRCwgdHJhdmVsZXJzLCBkYXRlLCBkdXJhdGlvbikge1xuICAgIHRoaXMuaWQgPSBpZCArIDE7XG4gICAgdGhpcy51c2VySUQgPSB1c2VySUQ7XG4gICAgdGhpcy5kZXN0aW5hdGlvbklEID0gZGVzdGluYXRpb25JRDtcbiAgICB0aGlzLnRyYXZlbGVycyA9IHRyYXZlbGVycztcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICAgIHRoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICB0aGlzLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSBbXTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==