/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --title-bg-color: #cbd5e1;\r\n    --proj-bg-color: #f1f5f9;\r\n    --white-bg-color: #f8fafc;\r\n    --black-bg-color: #1e293b;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n#content > h1 {\r\n    background-color:var(--title-bg-color);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#projects {\r\n    background-color: var(--proj-bg-color);\r\n    min-width: 100%;\r\n    height: 90vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    overflow-wrap: break-word;\r\n}\r\n.project {\r\n    height: 4rem;\r\n    font-size: 1.5rem;\r\n    margin-top: 1rem;\r\n    grid-gap: 1rem;\r\n    margin-top: 0;\r\n}\r\n.project div {\r\n    width: 9rem;\r\n}\r\n.project:hover {\r\n    background-color: #e2e8f0;\r\n}\r\n#active {\r\n    background-color: #cbd5e1;\r\n}\r\n#projects > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n}\r\n#tasks {\r\n    background-color: var(--white-bg-color);\r\n    min-width: 100%;\r\n    height: 90vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n#projBtn, #taskBtn {\r\n    height: 5vh;\r\n    width: 5vh;\r\n}\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 15rem 1fr;\r\n    grid-template-rows: 10vh 90vh;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n.form-container {\r\n    position: fixed;\r\n    height: 40rem;\r\n    width: 40rem;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    transition: 200ms ease-in-out;\r\n    z-index: 10;\r\n    background-color: var(--white-bg-color);\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-auto-rows: 1fr;\r\n}\r\n.form-container input {\r\n    height: 4rem;\r\n}\r\n.hidden {\r\n    visibility: hidden;\r\n}\r\n#overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    z-index: 9;\r\n}\r\n#tasks > div:first-child {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    border-radius: 14px;\r\n}\r\n.task:hover {\r\n    filter: brightness(.9);\r\n}\r\nh2 {\r\n    background-color: var(--black-bg-color);\r\n    color: var(--white-bg-color);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nimg {\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n  }\r\n  /* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--black-bg-color);\r\n    border-radius: 10px;\r\n  }\r\n  ::-webkit-scrollbar-track {\r\n    background: rgb(172, 172, 172);\r\n    border-radius: 10px;\r\n  }\r\n  #projForm {\r\n    display: grid !important;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 50% 50%;\r\n    margin-top: 1rem;\r\n    padding: .5rem;\r\n    justify-items: center;\r\n  }\r\n  #cancel, #submit {\r\n    height: 2rem;\r\n    width: 5rem;\r\n    border: 1px solid grey;\r\n    border-radius: 6px;\r\n  }\r\n  #cancel {\r\n    background-color: rgb(255, 142, 142);\r\n  }\r\n  #submit {\r\n    background-color: rgb(151, 255, 151);\r\n  }\r\n  #projForm input:first-child {\r\n    grid-column: 1 / 3;\r\n    height: 3rem;\r\n    width: 12rem;\r\n    margin-bottom: .5rem;\r\n    font-size: 1.4rem;\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,wBAAwB;IACxB,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,SAAS;AACb;AACA;IACI,sCAAsC;IACtC,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,sCAAsC;IACtC,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,aAAa;AACjB;AACA;IACI,WAAW;AACf;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,uCAAuC;IACvC,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,UAAU;AACd;AACA;IACI,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,6BAA6B;IAC7B,WAAW;IACX,uCAAuC;IACvC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,UAAU;AACd;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,uCAAuC;IACvC,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,UAAU;EACZ;EACA,WAAW;AACb;IACI,iCAAiC;IACjC,mBAAmB;EACrB;EACA;IACE,8BAA8B;IAC9B,mBAAmB;EACrB;EACA;IACE,wBAAwB;IACxB,2BAA2B;IAC3B,8BAA8B;IAC9B,gBAAgB;IAChB,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,kBAAkB;EACpB;EACA;IACE,oCAAoC;EACtC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;EACnB","sourcesContent":[":root {\r\n    --title-bg-color: #cbd5e1;\r\n    --proj-bg-color: #f1f5f9;\r\n    --white-bg-color: #f8fafc;\r\n    --black-bg-color: #1e293b;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n#content > h1 {\r\n    background-color:var(--title-bg-color);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#projects {\r\n    background-color: var(--proj-bg-color);\r\n    min-width: 100%;\r\n    height: 90vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    overflow-wrap: break-word;\r\n}\r\n.project {\r\n    height: 4rem;\r\n    font-size: 1.5rem;\r\n    margin-top: 1rem;\r\n    grid-gap: 1rem;\r\n    margin-top: 0;\r\n}\r\n.project div {\r\n    width: 9rem;\r\n}\r\n.project:hover {\r\n    background-color: #e2e8f0;\r\n}\r\n#active {\r\n    background-color: #cbd5e1;\r\n}\r\n#projects > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n}\r\n#tasks {\r\n    background-color: var(--white-bg-color);\r\n    min-width: 100%;\r\n    height: 90vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n#projBtn, #taskBtn {\r\n    height: 5vh;\r\n    width: 5vh;\r\n}\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 15rem 1fr;\r\n    grid-template-rows: 10vh 90vh;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n.form-container {\r\n    position: fixed;\r\n    height: 40rem;\r\n    width: 40rem;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    transition: 200ms ease-in-out;\r\n    z-index: 10;\r\n    background-color: var(--white-bg-color);\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-auto-rows: 1fr;\r\n}\r\n.form-container input {\r\n    height: 4rem;\r\n}\r\n.hidden {\r\n    visibility: hidden;\r\n}\r\n#overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    z-index: 9;\r\n}\r\n#tasks > div:first-child {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.task {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    border-radius: 14px;\r\n}\r\n.task:hover {\r\n    filter: brightness(.9);\r\n}\r\nh2 {\r\n    background-color: var(--black-bg-color);\r\n    color: var(--white-bg-color);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nimg {\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n  }\r\n  /* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--black-bg-color);\r\n    border-radius: 10px;\r\n  }\r\n  ::-webkit-scrollbar-track {\r\n    background: rgb(172, 172, 172);\r\n    border-radius: 10px;\r\n  }\r\n  #projForm {\r\n    display: grid !important;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 50% 50%;\r\n    margin-top: 1rem;\r\n    padding: .5rem;\r\n    justify-items: center;\r\n  }\r\n  #cancel, #submit {\r\n    height: 2rem;\r\n    width: 5rem;\r\n    border: 1px solid grey;\r\n    border-radius: 6px;\r\n  }\r\n  #cancel {\r\n    background-color: rgb(255, 142, 142);\r\n  }\r\n  #submit {\r\n    background-color: rgb(151, 255, 151);\r\n  }\r\n  #projForm input:first-child {\r\n    grid-column: 1 / 3;\r\n    height: 3rem;\r\n    width: 12rem;\r\n    margin-bottom: .5rem;\r\n    font-size: 1.4rem;\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/plus-circle.png":
/*!*****************************!*\
  !*** ./src/plus-circle.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b837572eba0d4e164043.png";

/***/ }),

/***/ "./src/trash-can-outline.png":
/*!***********************************!*\
  !*** ./src/trash-can-outline.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "30b2683d803fbb0c2f66.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _plus_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plus-circle.png */ "./src/plus-circle.png");
/* harmony import */ var _trash_can_outline_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trash-can-outline.png */ "./src/trash-can-outline.png");





const todo = (title, description, dueDate, priority) => {
    return {title, description, dueDate, priority};
};
 const domStuff = (() => {
     const renderProj = (project) => {
        const container = document.getElementById('projects');
        const newDiv = document.createElement('div');
        const newTitle = document.createElement('div');
        newTitle.innerHTML = project;
        newDiv.classList.add('project');
        newDiv.appendChild(newTitle);
        const trash = new Image();
        trash.src = _trash_can_outline_png__WEBPACK_IMPORTED_MODULE_2__;
        newDiv.addEventListener('click', (e)=> {
            if(e.target != trash) {
                setActiveProj(project);
                renderTasks(project);
            }
        });
        trash.addEventListener('click', ()=> {
            delete projectsList[project];
            container.removeChild(newDiv);
            if(project == currentProject) {
                if(Object.keys(projectsList)[0]) {
                    setActiveProj(Object.keys(projectsList)[0]);
                    renderTasks(currentProject);
                }
                else {
                    currentProject = null;
                    const container = document.getElementById('tasks');
                    while(container.childElementCount > 1) {
                        container.removeChild(container.lastChild);
                    }
                }
            }
        });
        newDiv.appendChild(trash);
        container.insertBefore(newDiv, container.lastChild);
        setActiveProj(project);
        renderTasks(project);
     }
     const renderTask = (task) => {
         const container = document.getElementById('tasks');
         const newDiv = document.createElement('div');
         newDiv.classList.add('task');
         const taskTitle = document.createElement('div');
         taskTitle.innerHTML = task.title;
         newDiv.appendChild(taskTitle);
         const taskDate = document.createElement('div');
         taskDate.innerHTML = task.dueDate;
         newDiv.appendChild(taskDate);
         const trash = new Image();
         trash.src = _trash_can_outline_png__WEBPACK_IMPORTED_MODULE_2__;
         newDiv.appendChild(trash);
         trash.addEventListener('click', () => {
            for(let i = 0; i < projectsList[currentProject].length; i++) {
                if(projectsList[currentProject][i] == task) {
                    projectsList[currentProject].splice(i, 1);
                    break;
                }
            }
            container.removeChild(newDiv);
         });
         newDiv.addEventListener('click', (e)=> {
            if(e.target != trash) {
            //generate the details and append to body
        const details = document.createElement('div');
        details.classList.add('form-container');
        const detHead = document.createElement('h1');
        detHead.innerHTML = task.title;
        details.appendChild(detHead);
        const detDesc = document.createElement('div');
        detDesc.innerHTML = task.description;
        details.appendChild(detDesc);
        document.body.appendChild(details);
        const detDue = document.createElement('div');
        //add amount of days left in paranthesis
        detDue.innerHTML = `Due: ${task.dueDate} (In blank days)`;
        details.appendChild(detDue);
        overlay.classList.remove('hidden');
            }
         });
         console.log(`priority ${task.priority}`)
         console.log(`alpha ${10 * task.priority}`)
         newDiv.style.backgroundColor = `rgba(255, 0, 0, ${.1 * task.priority})`;
         container.appendChild(newDiv);
     }
     const renderTasks = (project) => {
        const container = document.getElementById('tasks');
            //remove existing tasks, making sure not to remove button
            while(container.childElementCount > 1) {
                container.removeChild(container.lastChild);
            }
            //add tasks to DOM
            for(const task in projectsList[project]) {
                domStuff.renderTask(projectsList[project][task]);
            }
     }
     const setActiveProj = (project) => {
        const projects = document.getElementsByClassName('project');
        if(document.getElementById('active')) {
            document.getElementById('active').removeAttribute('id');
        }
        for(let i = 0; i < projects.length; i++) {
            if(projects[i].firstChild.innerHTML == project) {
                projects[i].setAttribute('id', 'active');
                break;
            }
        }
        currentProject = project;
        mainTitle.innerHTML = project;
     }
     const generateProjBtn = () => {
        const projBtnContainer = document.createElement('div');
        const projBtn = new Image();
        projBtn.src = _plus_circle_png__WEBPACK_IMPORTED_MODULE_1__;
        projBtn.setAttribute('id', 'projBtn');
        projBtn.addEventListener('click', () => {
            projects.removeChild(projBtnContainer);
            generateProjForm();
        });
        projBtnContainer.appendChild(projBtn);
        projects.appendChild(projBtnContainer);
    };
    const generateProjForm = () => {
        const projFormContainer = document.createElement('form');
        projFormContainer.setAttribute('id', 'projForm');
        const textField = document.createElement('input');
        textField.setAttribute('type', 'text');
        projFormContainer.appendChild(textField);
        const cancel = document.createElement('input');
        cancel.setAttribute('type', 'button');
        cancel.setAttribute('id', 'cancel');
        cancel.setAttribute('value', 'cancel');
        cancel.addEventListener('click', () => {
            projects.removeChild(projFormContainer);
            generateProjBtn();
        });
        projFormContainer.appendChild(cancel);
        const submit = document.createElement('input');
        submit.setAttribute('type', 'button');
        submit.setAttribute('id', 'submit');
        submit.setAttribute('value', 'submit');
        submit.addEventListener('click', () => {
            if(document.getElementById('projForm').checkValidity()) {
               if(!(textField.value in projectsList)) {
                   projectsList[textField.value] = [];
                   domStuff.renderProj(textField.value);
                   projects.removeChild(projFormContainer);
                   generateProjBtn();
               }
               else {
                   alert(`A project with name the name "${textField.value}" already exists!`);
               }
           }
        });
        projFormContainer.appendChild(submit);
        projects.appendChild(projFormContainer);
    };
     return {renderProj, renderTask, renderTasks, generateProjBtn};
 })();

let projectsList = {};
if(window.localStorage.length) {
    let str = localStorage.getItem('data');
    projectsList = JSON.parse(str);
}
else { //no data, populate list
    projectsList['My Project'] = [todo('my task', 'do cool stuff', 'tomorrow', 'urgent')];
}
let currentProject = Object.keys(projectsList)[0];
/*Code for generating skeleton of page */
const content = document.getElementById('content');

const projectTitle = document.createElement('h2');
projectTitle.innerHTML = 'Projects';
content.appendChild(projectTitle);
const mainTitle = document.createElement('h1');
content.appendChild(mainTitle);
mainTitle.innerHTML = 'TodoList';

const projects = document.createElement('div');
projects.setAttribute('id', 'projects');
content.appendChild(projects);
domStuff.generateProjBtn();

const tasks = document.createElement('div');
tasks.setAttribute('id', 'tasks');
content.appendChild(tasks);

const taskBtnContainer = document.createElement('div');
const taskBtn = new Image();
taskBtn.src = _plus_circle_png__WEBPACK_IMPORTED_MODULE_1__;
taskBtn.setAttribute('id', 'taskBtn');
taskBtnContainer.appendChild(taskBtn);
tasks.appendChild(taskBtnContainer);

//populate projects
for (const project in projectsList) {
    domStuff.renderProj(project);
};
//add project

//add task popup
const taskForm = document.createElement('form');
taskForm.classList.add('form-container');
taskForm.setAttribute('id', 'taskForm');
taskForm.classList.add('hidden');
const taskFormHead = document.createElement('h1');
taskFormHead.innerHTML = 'Add a new Task';
taskForm.appendChild(taskFormHead);
const taskNameField = document.createElement('input');
taskNameField.setAttribute('type', 'text');
taskNameField.setAttribute('placeholder', 'Task name');
taskForm.appendChild(taskNameField);
const taskDeskField = document.createElement('input');
taskDeskField.setAttribute('type', 'text');
taskDeskField.setAttribute('placeholder', 'Task name');
taskForm.appendChild(taskNameField);
const taskDescField = document.createElement('textarea');
taskDescField.setAttribute('placeholder', 'Description (optional)');
taskForm.appendChild(taskDescField);
const taskDateField = document.createElement('input');
taskDateField.setAttribute('type', 'date');
taskForm.appendChild(taskDateField);
const urgencyLabel = document.createElement('label');
urgencyLabel.setAttribute('for', 'urgency');
urgencyLabel.innerHTML = 'urgency';
taskForm.appendChild(urgencyLabel);
const taskUrgencyField = document.createElement('input');
taskUrgencyField.setAttribute('type', 'range');
taskUrgencyField.setAttribute('value', 'urgency');
taskUrgencyField.setAttribute('min', '0');
taskUrgencyField.setAttribute('max', '5');
taskForm.appendChild(taskUrgencyField);
const submitTask = document.createElement('input');
submitTask.setAttribute('type', 'button');
submitTask.setAttribute('value', 'Create Task');
taskForm.appendChild(submitTask);
document.body.appendChild(taskForm);

const overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
overlay.classList.add('hidden');
document.body.appendChild(overlay);

taskBtn.addEventListener('click', ()=> {
        taskForm.classList.remove('hidden');
        overlay.classList.remove('hidden');
});

overlay.addEventListener('click', ()=> {
    overlay.classList.add('hidden');
    taskForm.classList.add('hidden');
    if(document.body.lastChild != overlay) {
        //this removes tasks since they are generated when clicked (so many tasks)
        document.body.removeChild(document.body.lastChild);
    }
    });
// submitProj.addEventListener('click', ()=> {
//     if(document.getElementById('projForm').checkValidity()) {
//         if(!(projNameField.value in projectsList)) {
//             projectsList[projNameField.value] = [];
//             domStuff.renderProj(projNameField.value);
//             projNameField.value = '';
//             projForm.classList.add('hidden');
//             overlay.classList.add('hidden');
//         }
//         else {
//             alert(`Project with name "${projNameField.value}" already exists!`);
//         }
//     }
//     });
submitTask.addEventListener('click', ()=> {
    if(document.getElementById('taskForm').checkValidity()) {
       projectsList[currentProject].push(todo(
        taskNameField.value,
        taskDescField.value,
        taskDateField.value,
        taskUrgencyField.value
       ));
        domStuff.renderTask(projectsList[currentProject][projectsList[currentProject].length - 1]);
        taskNameField.value = '';
        taskDescField.value = '';
        taskDateField.value = '';
        taskUrgencyField.value = '';
        taskForm.classList.add('hidden');
        overlay.classList.add('hidden');
    }
    });
    window.onbeforeunload = ()=> {
        localStorage.clear();
        if(Object.keys(projectsList).length) {
            localStorage.setItem('data', JSON.stringify(projectsList));
        }
    }
    projectsList['test'] = [];
    for(let i = 0; i < 20; i++) {
        projectsList['test'][i] = todo(`test ${i}`, 'a test task', 'dueDate', Math.floor(Math.random() * 6));
        }
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsb0JBQW9CO0FBQy9EO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQiwrQ0FBK0MsRUFBRTtBQUNqRCxTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS10aXRsZS1iZy1jb2xvcjogI2NiZDVlMTtcXHJcXG4gICAgLS1wcm9qLWJnLWNvbG9yOiAjZjFmNWY5O1xcclxcbiAgICAtLXdoaXRlLWJnLWNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICAtLWJsYWNrLWJnLWNvbG9yOiAjMWUyOTNiO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuI2NvbnRlbnQgPiBoMSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdGl0bGUtYmctY29sb3IpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuI3Byb2plY3RzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvai1iZy1jb2xvcik7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcbi5wcm9qZWN0IGRpdiB7XFxyXFxuICAgIHdpZHRoOiA5cmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxufVxcclxcbiNhY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcclxcbn1cXHJcXG4jcHJvamVjdHMgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxyXFxufVxcclxcbiN0YXNrcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWJnLWNvbG9yKTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuI3Byb2pCdG4sICN0YXNrQnRuIHtcXHJcXG4gICAgaGVpZ2h0OiA1dmg7XFxyXFxuICAgIHdpZHRoOiA1dmg7XFxyXFxufVxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxNXJlbSAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTB2aCA5MHZoO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5mb3JtLWNvbnRhaW5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgaGVpZ2h0OiA0MHJlbTtcXHJcXG4gICAgd2lkdGg6IDQwcmVtO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHotaW5kZXg6IDEwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1iZy1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBncmlkLWF1dG8tcm93czogMWZyO1xcclxcbn1cXHJcXG4uZm9ybS1jb250YWluZXIgaW5wdXQge1xcclxcbiAgICBoZWlnaHQ6IDRyZW07XFxyXFxufVxcclxcbi5oaWRkZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcbiNvdmVybGF5IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xcclxcbiAgICB6LWluZGV4OiA5O1xcclxcbn1cXHJcXG4jdGFza3MgPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnRhc2sge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxyXFxufVxcclxcbi50YXNrOmhvdmVyIHtcXHJcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKC45KTtcXHJcXG59XFxyXFxuaDIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS13aGl0ZS1iZy1jb2xvcik7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5pbWcge1xcclxcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgd2lkdGg6IDVweDtcXHJcXG4gIH1cXHJcXG4gIC8qIEhhbmRsZSAqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ibGFjay1iZy1jb2xvcik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICB9XFxyXFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiKDE3MiwgMTcyLCAxNzIpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgI3Byb2pGb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZCAhaW1wb3J0YW50O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gICNjYW5jZWwsICNzdWJtaXQge1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiA1cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICB9XFxyXFxuICAjY2FuY2VsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTQyLCAxNDIpO1xcclxcbiAgfVxcclxcbiAgI3N1Ym1pdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTEsIDI1NSwgMTUxKTtcXHJcXG4gIH1cXHJcXG4gICNwcm9qRm9ybSBpbnB1dDpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcbiAgICB3aWR0aDogMTJyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHVDQUF1QztJQUN2QyxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsWUFBWTtJQUNaLFFBQVE7SUFDUixTQUFTO0lBQ1QseUNBQXlDO0lBQ3pDLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksdUNBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0VBQ1o7RUFDQSxXQUFXO0FBQ2I7SUFDSSxpQ0FBaUM7SUFDakMsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSw4QkFBOEI7SUFDOUIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLDhCQUE4QjtJQUM5QixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxvQ0FBb0M7RUFDdEM7RUFDQTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAgIC0tdGl0bGUtYmctY29sb3I6ICNjYmQ1ZTE7XFxyXFxuICAgIC0tcHJvai1iZy1jb2xvcjogI2YxZjVmOTtcXHJcXG4gICAgLS13aGl0ZS1iZy1jb2xvcjogI2Y4ZmFmYztcXHJcXG4gICAgLS1ibGFjay1iZy1jb2xvcjogIzFlMjkzYjtcXHJcXG59XFxyXFxuKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbmJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbiNjb250ZW50ID4gaDEge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRpdGxlLWJnLWNvbG9yKTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbiNwcm9qZWN0cyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2otYmctY29sb3IpO1xcclxcbiAgICBtaW4td2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogOTB2aDtcXHJcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcclxcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4ucHJvamVjdCB7XFxyXFxuICAgIGhlaWdodDogNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIGdyaWQtZ2FwOiAxcmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbn1cXHJcXG4ucHJvamVjdCBkaXYge1xcclxcbiAgICB3aWR0aDogOXJlbTtcXHJcXG59XFxyXFxuLnByb2plY3Q6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbn1cXHJcXG4jYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiZDVlMTtcXHJcXG59XFxyXFxuI3Byb2plY3RzID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcclxcbn1cXHJcXG4jdGFza3Mge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1iZy1jb2xvcik7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxufVxcclxcbiNwcm9qQnRuLCAjdGFza0J0biB7XFxyXFxuICAgIGhlaWdodDogNXZoO1xcclxcbiAgICB3aWR0aDogNXZoO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGhlaWdodDogNDByZW07XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtYmctY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXHJcXG59XFxyXFxuLmZvcm0tY29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgei1pbmRleDogOTtcXHJcXG59XFxyXFxuI3Rhc2tzID4gZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xcclxcbn1cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyguOSk7XFxyXFxufVxcclxcbmgyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYmctY29sb3IpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICB9XFxyXFxuICAvKiBIYW5kbGUgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigxNzIsIDE3MiwgMTcyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG4gICNwcm9qRm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAjY2FuY2VsLCAjc3VibWl0IHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgfVxcclxcbiAgI2NhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0MiwgMTQyKTtcXHJcXG4gIH1cXHJcXG4gICNzdWJtaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAyNTUsIDE1MSk7XFxyXFxuICB9XFxyXFxuICAjcHJvakZvcm0gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgd2lkdGg6IDEycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBwbHVzIGZyb20gJy4vcGx1cy1jaXJjbGUucG5nJztcclxuaW1wb3J0IHRyYXNoQ2FuIGZyb20gJy4vdHJhc2gtY2FuLW91dGxpbmUucG5nJztcclxuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnXHJcblxyXG5jb25zdCB0b2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcclxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX07XHJcbn07XHJcbiBjb25zdCBkb21TdHVmZiA9ICgoKSA9PiB7XHJcbiAgICAgY29uc3QgcmVuZGVyUHJvaiA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RzJyk7XHJcbiAgICAgICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBuZXdUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0O1xyXG4gICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XHJcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcclxuICAgICAgICBjb25zdCB0cmFzaCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRyYXNoLnNyYyA9IHRyYXNoQ2FuO1xyXG4gICAgICAgIG5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQgIT0gdHJhc2gpIHtcclxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVByb2oocHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRyYXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9qZWN0c0xpc3RbcHJvamVjdF07XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChuZXdEaXYpO1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0ID09IGN1cnJlbnRQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZihPYmplY3Qua2V5cyhwcm9qZWN0c0xpc3QpWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUHJvaihPYmplY3Qua2V5cyhwcm9qZWN0c0xpc3QpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJUYXNrcyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUoY29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKHRyYXNoKTtcclxuICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKG5ld0RpdiwgY29udGFpbmVyLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgc2V0QWN0aXZlUHJvaihwcm9qZWN0KTtcclxuICAgICAgICByZW5kZXJUYXNrcyhwcm9qZWN0KTtcclxuICAgICB9XHJcbiAgICAgY29uc3QgcmVuZGVyVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpO1xyXG4gICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSB0YXNrLnRpdGxlO1xyXG4gICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgdGFza0RhdGUuaW5uZXJIVE1MID0gdGFzay5kdWVEYXRlO1xyXG4gICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG4gICAgICAgICBjb25zdCB0cmFzaCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICB0cmFzaC5zcmMgPSB0cmFzaENhbjtcclxuICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKHRyYXNoKTtcclxuICAgICAgICAgdHJhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0xpc3RbY3VycmVudFByb2plY3RdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZihwcm9qZWN0c0xpc3RbY3VycmVudFByb2plY3RdW2ldID09IHRhc2spIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0xpc3RbY3VycmVudFByb2plY3RdLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQobmV3RGl2KTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIG5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcclxuICAgICAgICAgICAgaWYoZS50YXJnZXQgIT0gdHJhc2gpIHtcclxuICAgICAgICAgICAgLy9nZW5lcmF0ZSB0aGUgZGV0YWlscyBhbmQgYXBwZW5kIHRvIGJvZHlcclxuICAgICAgICBjb25zdCBkZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGV0YWlscy5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IGRldEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgICAgIGRldEhlYWQuaW5uZXJIVE1MID0gdGFzay50aXRsZTtcclxuICAgICAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRldEhlYWQpO1xyXG4gICAgICAgIGNvbnN0IGRldERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkZXREZXNjLmlubmVySFRNTCA9IHRhc2suZGVzY3JpcHRpb247XHJcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXREZXNjKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRldGFpbHMpO1xyXG4gICAgICAgIGNvbnN0IGRldER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIC8vYWRkIGFtb3VudCBvZiBkYXlzIGxlZnQgaW4gcGFyYW50aGVzaXNcclxuICAgICAgICBkZXREdWUuaW5uZXJIVE1MID0gYER1ZTogJHt0YXNrLmR1ZURhdGV9IChJbiBibGFuayBkYXlzKWA7XHJcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXREdWUpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKGBwcmlvcml0eSAke3Rhc2sucHJpb3JpdHl9YClcclxuICAgICAgICAgY29uc29sZS5sb2coYGFscGhhICR7MTAgKiB0YXNrLnByaW9yaXR5fWApXHJcbiAgICAgICAgIG5ld0Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBgcmdiYSgyNTUsIDAsIDAsICR7LjEgKiB0YXNrLnByaW9yaXR5fSlgO1xyXG4gICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcclxuICAgICB9XHJcbiAgICAgY29uc3QgcmVuZGVyVGFza3MgPSAocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrcycpO1xyXG4gICAgICAgICAgICAvL3JlbW92ZSBleGlzdGluZyB0YXNrcywgbWFraW5nIHN1cmUgbm90IHRvIHJlbW92ZSBidXR0b25cclxuICAgICAgICAgICAgd2hpbGUoY29udGFpbmVyLmNoaWxkRWxlbWVudENvdW50ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vYWRkIHRhc2tzIHRvIERPTVxyXG4gICAgICAgICAgICBmb3IoY29uc3QgdGFzayBpbiBwcm9qZWN0c0xpc3RbcHJvamVjdF0pIHtcclxuICAgICAgICAgICAgICAgIGRvbVN0dWZmLnJlbmRlclRhc2socHJvamVjdHNMaXN0W3Byb2plY3RdW3Rhc2tdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgIH1cclxuICAgICBjb25zdCBzZXRBY3RpdmVQcm9qID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QnKTtcclxuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZScpLnJlbW92ZUF0dHJpYnV0ZSgnaWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3RzW2ldLmZpcnN0Q2hpbGQuaW5uZXJIVE1MID09IHByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzW2ldLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XHJcbiAgICAgICAgbWFpblRpdGxlLmlubmVySFRNTCA9IHByb2plY3Q7XHJcbiAgICAgfVxyXG4gICAgIGNvbnN0IGdlbmVyYXRlUHJvakJ0biA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qQnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgcHJvakJ0biA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHByb2pCdG4uc3JjID0gcGx1cztcclxuICAgICAgICBwcm9qQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvakJ0bicpO1xyXG4gICAgICAgIHByb2pCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2pCdG5Db250YWluZXIpO1xyXG4gICAgICAgICAgICBnZW5lcmF0ZVByb2pGb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvakJ0bkNvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qQnRuKTtcclxuICAgICAgICBwcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qQnRuQ29udGFpbmVyKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBnZW5lcmF0ZVByb2pGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2pGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG4gICAgICAgIHByb2pGb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvakZvcm0nKTtcclxuICAgICAgICBjb25zdCB0ZXh0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHRleHRGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgICAgIHByb2pGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRGaWVsZCk7XHJcbiAgICAgICAgY29uc3QgY2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NhbmNlbCcpO1xyXG4gICAgICAgIGNhbmNlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ2NhbmNlbCcpO1xyXG4gICAgICAgIGNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdHMucmVtb3ZlQ2hpbGQocHJvakZvcm1Db250YWluZXIpO1xyXG4gICAgICAgICAgICBnZW5lcmF0ZVByb2pCdG4oKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9qRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWwpO1xyXG4gICAgICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQnKTtcclxuICAgICAgICBzdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdzdWJtaXQnKTtcclxuICAgICAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qRm9ybScpLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgICAgICAgICBpZighKHRleHRGaWVsZC52YWx1ZSBpbiBwcm9qZWN0c0xpc3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICBwcm9qZWN0c0xpc3RbdGV4dEZpZWxkLnZhbHVlXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgZG9tU3R1ZmYucmVuZGVyUHJvaih0ZXh0RmllbGQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgcHJvamVjdHMucmVtb3ZlQ2hpbGQocHJvakZvcm1Db250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVQcm9qQnRuKCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICBhbGVydChgQSBwcm9qZWN0IHdpdGggbmFtZSB0aGUgbmFtZSBcIiR7dGV4dEZpZWxkLnZhbHVlfVwiIGFscmVhZHkgZXhpc3RzIWApO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHByb2pGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Ym1pdCk7XHJcbiAgICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvakZvcm1Db250YWluZXIpO1xyXG4gICAgfTtcclxuICAgICByZXR1cm4ge3JlbmRlclByb2osIHJlbmRlclRhc2ssIHJlbmRlclRhc2tzLCBnZW5lcmF0ZVByb2pCdG59O1xyXG4gfSkoKTtcclxuXHJcbmxldCBwcm9qZWN0c0xpc3QgPSB7fTtcclxuaWYod2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGgpIHtcclxuICAgIGxldCBzdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGF0YScpO1xyXG4gICAgcHJvamVjdHNMaXN0ID0gSlNPTi5wYXJzZShzdHIpO1xyXG59XHJcbmVsc2UgeyAvL25vIGRhdGEsIHBvcHVsYXRlIGxpc3RcclxuICAgIHByb2plY3RzTGlzdFsnTXkgUHJvamVjdCddID0gW3RvZG8oJ215IHRhc2snLCAnZG8gY29vbCBzdHVmZicsICd0b21vcnJvdycsICd1cmdlbnQnKV07XHJcbn1cclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gT2JqZWN0LmtleXMocHJvamVjdHNMaXN0KVswXTtcclxuLypDb2RlIGZvciBnZW5lcmF0aW5nIHNrZWxldG9uIG9mIHBhZ2UgKi9cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG5jb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG5wcm9qZWN0VGl0bGUuaW5uZXJIVE1MID0gJ1Byb2plY3RzJztcclxuY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5jb25zdCBtYWluVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKG1haW5UaXRsZSk7XHJcbm1haW5UaXRsZS5pbm5lckhUTUwgPSAnVG9kb0xpc3QnO1xyXG5cclxuY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxucHJvamVjdHMuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cycpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzKTtcclxuZG9tU3R1ZmYuZ2VuZXJhdGVQcm9qQnRuKCk7XHJcblxyXG5jb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG50YXNrcy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tzJyk7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3MpO1xyXG5cclxuY29uc3QgdGFza0J0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb25zdCB0YXNrQnRuID0gbmV3IEltYWdlKCk7XHJcbnRhc2tCdG4uc3JjID0gcGx1cztcclxudGFza0J0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tCdG4nKTtcclxudGFza0J0bkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQnRuKTtcclxudGFza3MuYXBwZW5kQ2hpbGQodGFza0J0bkNvbnRhaW5lcik7XHJcblxyXG4vL3BvcHVsYXRlIHByb2plY3RzXHJcbmZvciAoY29uc3QgcHJvamVjdCBpbiBwcm9qZWN0c0xpc3QpIHtcclxuICAgIGRvbVN0dWZmLnJlbmRlclByb2oocHJvamVjdCk7XHJcbn07XHJcbi8vYWRkIHByb2plY3RcclxuXHJcbi8vYWRkIHRhc2sgcG9wdXBcclxuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcbnRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XHJcbnRhc2tGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFza0Zvcm0nKTtcclxudGFza0Zvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbmNvbnN0IHRhc2tGb3JtSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbnRhc2tGb3JtSGVhZC5pbm5lckhUTUwgPSAnQWRkIGEgbmV3IFRhc2snO1xyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRm9ybUhlYWQpO1xyXG5jb25zdCB0YXNrTmFtZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudGFza05hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG50YXNrTmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBuYW1lJyk7XHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lRmllbGQpO1xyXG5jb25zdCB0YXNrRGVza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudGFza0Rlc2tGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG50YXNrRGVza0ZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBuYW1lJyk7XHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lRmllbGQpO1xyXG5jb25zdCB0YXNrRGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxudGFza0Rlc2NGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uIChvcHRpb25hbCknKTtcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NGaWVsZCk7XHJcbmNvbnN0IHRhc2tEYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG50YXNrRGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlRmllbGQpO1xyXG5jb25zdCB1cmdlbmN5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG51cmdlbmN5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXJnZW5jeScpO1xyXG51cmdlbmN5TGFiZWwuaW5uZXJIVE1MID0gJ3VyZ2VuY3knO1xyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh1cmdlbmN5TGFiZWwpO1xyXG5jb25zdCB0YXNrVXJnZW5jeUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudGFza1VyZ2VuY3lGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcclxudGFza1VyZ2VuY3lGaWVsZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ3VyZ2VuY3knKTtcclxudGFza1VyZ2VuY3lGaWVsZC5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XHJcbnRhc2tVcmdlbmN5RmllbGQuc2V0QXR0cmlidXRlKCdtYXgnLCAnNScpO1xyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrVXJnZW5jeUZpZWxkKTtcclxuY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnN1Ym1pdFRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG5zdWJtaXRUYXNrLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQ3JlYXRlIFRhc2snKTtcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VGFzayk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xyXG5cclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5vdmVybGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3ZlcmxheScpO1xyXG5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG5cclxudGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgaWYoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQgIT0gb3ZlcmxheSkge1xyXG4gICAgICAgIC8vdGhpcyByZW1vdmVzIHRhc2tzIHNpbmNlIHRoZXkgYXJlIGdlbmVyYXRlZCB3aGVuIGNsaWNrZWQgKHNvIG1hbnkgdGFza3MpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICB9KTtcclxuLy8gc3VibWl0UHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4vLyAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2pGb3JtJykuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbi8vICAgICAgICAgaWYoIShwcm9qTmFtZUZpZWxkLnZhbHVlIGluIHByb2plY3RzTGlzdCkpIHtcclxuLy8gICAgICAgICAgICAgcHJvamVjdHNMaXN0W3Byb2pOYW1lRmllbGQudmFsdWVdID0gW107XHJcbi8vICAgICAgICAgICAgIGRvbVN0dWZmLnJlbmRlclByb2oocHJvak5hbWVGaWVsZC52YWx1ZSk7XHJcbi8vICAgICAgICAgICAgIHByb2pOYW1lRmllbGQudmFsdWUgPSAnJztcclxuLy8gICAgICAgICAgICAgcHJvakZvcm0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbi8vICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGVsc2Uge1xyXG4vLyAgICAgICAgICAgICBhbGVydChgUHJvamVjdCB3aXRoIG5hbWUgXCIke3Byb2pOYW1lRmllbGQudmFsdWV9XCIgYWxyZWFkeSBleGlzdHMhYCk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgfSk7XHJcbnN1Ym1pdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRm9ybScpLmNoZWNrVmFsaWRpdHkoKSkge1xyXG4gICAgICAgcHJvamVjdHNMaXN0W2N1cnJlbnRQcm9qZWN0XS5wdXNoKHRvZG8oXHJcbiAgICAgICAgdGFza05hbWVGaWVsZC52YWx1ZSxcclxuICAgICAgICB0YXNrRGVzY0ZpZWxkLnZhbHVlLFxyXG4gICAgICAgIHRhc2tEYXRlRmllbGQudmFsdWUsXHJcbiAgICAgICAgdGFza1VyZ2VuY3lGaWVsZC52YWx1ZVxyXG4gICAgICAgKSk7XHJcbiAgICAgICAgZG9tU3R1ZmYucmVuZGVyVGFzayhwcm9qZWN0c0xpc3RbY3VycmVudFByb2plY3RdW3Byb2plY3RzTGlzdFtjdXJyZW50UHJvamVjdF0ubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgIHRhc2tOYW1lRmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICB0YXNrRGVzY0ZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGFza0RhdGVGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRhc2tVcmdlbmN5RmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKT0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICBpZihPYmplY3Qua2V5cyhwcm9qZWN0c0xpc3QpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByb2plY3RzTGlzdFsndGVzdCddID0gW107XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xyXG4gICAgICAgIHByb2plY3RzTGlzdFsndGVzdCddW2ldID0gdG9kbyhgdGVzdCAke2l9YCwgJ2EgdGVzdCB0YXNrJywgJ2R1ZURhdGUnLCBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2KSk7XHJcbiAgICAgICAgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==