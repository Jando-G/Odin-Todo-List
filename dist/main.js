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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n    --title-bg-color: #cbd5e1;\r\n    --proj-bg-color: #f1f5f9;\r\n    --white-bg-color: #f8fafc;\r\n    --black-bg-color: #1e293b;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n#content > h1 {\r\n    background-color:var(--title-bg-color);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#projects {\r\n    background-color: var(--proj-bg-color);\r\n    min-width: 100%;\r\n    height: 90vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    overflow-wrap: break-word;\r\n}\r\n.project {\r\n    height: 4rem;\r\n    font-size: 1.5rem;\r\n    margin-top: 1rem;\r\n    grid-gap: 1rem;\r\n    margin-top: 0;\r\n}\r\n.project div {\r\n    width: 9rem;\r\n}\r\n.project:hover {\r\n    background-color: #e2e8f0;\r\n}\r\n#active {\r\n    background-color: #cbd5e1;\r\n}\r\n#projects > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n}\r\n#tasks {\r\n    background-color: var(--white-bg-color);\r\n    min-width: 100%;\r\n    height: 90vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n.checked {\r\n    background-color: #cbd5e1 !important;\r\n}\r\n#projBtn, #taskBtn {\r\n    height: 5vh;\r\n    width: 5vh;\r\n}\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 15rem 1fr;\r\n    grid-template-rows: 10vh 90vh;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n.form-container {\r\n    position: fixed;\r\n    height: 40rem;\r\n    width: 40rem;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    transition: 200ms ease-in-out;\r\n    z-index: 10;\r\n    background-color: var(--white-bg-color);\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-auto-rows: 1fr;\r\n}\r\n.form-container input {\r\n    height: 4rem;\r\n}\r\n.hidden {\r\n    visibility: hidden;\r\n}\r\n#overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    z-index: 9;\r\n}\r\n#tasks > div:first-child {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.task {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    border-radius: 14px;\r\n    height: 5rem;\r\n    margin-bottom: .75rem;\r\n}\r\n.task input {\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\r\n.checked:after {\r\n    position: absolute;\r\n    left: 2.5%;\r\n    top: 50%;\r\n    height: 2px;\r\n    background: var(--black-bg-color);\r\n    content: \"\";\r\n    width: 95%;\r\n    display: block;\r\n    transform: rotate(0.2deg);\r\n    pointer-events: none;\r\n  }\r\n.task:hover {\r\n    border: 2px solid grey;\r\n}\r\nh2 {\r\n    background-color: var(--black-bg-color);\r\n    color: var(--white-bg-color);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nimg {\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n  }\r\n  /* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--black-bg-color);\r\n    border-radius: 10px;\r\n  }\r\n  ::-webkit-scrollbar-track {\r\n    background: rgb(172, 172, 172);\r\n    border-radius: 10px;\r\n  }\r\n  #projForm {\r\n    display: grid !important;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 50% 50%;\r\n    margin-top: 1rem;\r\n    padding: .5rem;\r\n    justify-items: center;\r\n  }\r\n  #cancel, #submit {\r\n    height: 2rem;\r\n    width: 5rem;\r\n    border: 1px solid grey;\r\n    border-radius: 6px;\r\n  }\r\n  #cancel {\r\n    background-color: rgb(255, 142, 142);\r\n  }\r\n  #submit {\r\n    background-color: rgb(151, 255, 151);\r\n  }\r\n  #projForm input:first-child {\r\n    grid-column: 1 / 3;\r\n    height: 3rem;\r\n    width: 12rem;\r\n    margin-bottom: .5rem;\r\n    font-size: 1.4rem;\r\n  }\r\n  ", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,wBAAwB;IACxB,yBAAyB;IACzB,yBAAyB;AAC7B;AACA;IACI,sBAAsB;AAC1B;AACA;IACI,SAAS;AACb;AACA;IACI,sCAAsC;IACtC,YAAY;IACZ,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,sCAAsC;IACtC,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;AAC7B;AACA;IACI,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;IACd,aAAa;AACjB;AACA;IACI,WAAW;AACf;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,uCAAuC;IACvC,eAAe;IACf,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,oCAAoC;AACxC;AACA;IACI,WAAW;IACX,UAAU;AACd;AACA;IACI,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,eAAe;IACf,aAAa;IACb,YAAY;IACZ,QAAQ;IACR,SAAS;IACT,yCAAyC;IACzC,6BAA6B;IAC7B,WAAW;IACX,uCAAuC;IACvC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,mCAAmC;IACnC,UAAU;AACd;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,YAAY;IACZ,qBAAqB;AACzB;AACA;IACI,WAAW;IACX,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,QAAQ;IACR,WAAW;IACX,iCAAiC;IACjC,WAAW;IACX,UAAU;IACV,cAAc;IACd,yBAAyB;IACzB,oBAAoB;EACtB;AACF;IACI,sBAAsB;AAC1B;AACA;IACI,uCAAuC;IACvC,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,UAAU;EACZ;EACA,WAAW;AACb;IACI,iCAAiC;IACjC,mBAAmB;EACrB;EACA;IACE,8BAA8B;IAC9B,mBAAmB;EACrB;EACA;IACE,wBAAwB;IACxB,2BAA2B;IAC3B,8BAA8B;IAC9B,gBAAgB;IAChB,cAAc;IACd,qBAAqB;EACvB;EACA;IACE,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,kBAAkB;EACpB;EACA;IACE,oCAAoC;EACtC;EACA;IACE,oCAAoC;EACtC;EACA;IACE,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,oBAAoB;IACpB,iBAAiB;EACnB","sourcesContent":[":root {\r\n    --title-bg-color: #cbd5e1;\r\n    --proj-bg-color: #f1f5f9;\r\n    --white-bg-color: #f8fafc;\r\n    --black-bg-color: #1e293b;\r\n}\r\n* {\r\n    box-sizing: border-box;\r\n}\r\nbody {\r\n    margin: 0;\r\n}\r\n#content > h1 {\r\n    background-color:var(--title-bg-color);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n#projects {\r\n    background-color: var(--proj-bg-color);\r\n    min-width: 100%;\r\n    height: 90vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n    overflow-wrap: break-word;\r\n}\r\n.project {\r\n    height: 4rem;\r\n    font-size: 1.5rem;\r\n    margin-top: 1rem;\r\n    grid-gap: 1rem;\r\n    margin-top: 0;\r\n}\r\n.project div {\r\n    width: 9rem;\r\n}\r\n.project:hover {\r\n    background-color: #e2e8f0;\r\n}\r\n#active {\r\n    background-color: #cbd5e1;\r\n}\r\n#projects > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n}\r\n#tasks {\r\n    background-color: var(--white-bg-color);\r\n    min-width: 100%;\r\n    height: 90vh;\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\r\n.checked {\r\n    background-color: #cbd5e1 !important;\r\n}\r\n#projBtn, #taskBtn {\r\n    height: 5vh;\r\n    width: 5vh;\r\n}\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 15rem 1fr;\r\n    grid-template-rows: 10vh 90vh;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n.form-container {\r\n    position: fixed;\r\n    height: 40rem;\r\n    width: 40rem;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(1);\r\n    transition: 200ms ease-in-out;\r\n    z-index: 10;\r\n    background-color: var(--white-bg-color);\r\n    display: grid;\r\n    justify-content: center;\r\n    grid-auto-rows: 1fr;\r\n}\r\n.form-container input {\r\n    height: 4rem;\r\n}\r\n.hidden {\r\n    visibility: hidden;\r\n}\r\n#overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, .5);\r\n    z-index: 9;\r\n}\r\n#tasks > div:first-child {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n.task {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    padding-left: 2rem;\r\n    padding-right: 2rem;\r\n    border-radius: 14px;\r\n    height: 5rem;\r\n    margin-bottom: .75rem;\r\n}\r\n.task input {\r\n    width: 2rem;\r\n    height: 2rem;\r\n}\r\n.checked:after {\r\n    position: absolute;\r\n    left: 2.5%;\r\n    top: 50%;\r\n    height: 2px;\r\n    background: var(--black-bg-color);\r\n    content: \"\";\r\n    width: 95%;\r\n    display: block;\r\n    transform: rotate(0.2deg);\r\n    pointer-events: none;\r\n  }\r\n.task:hover {\r\n    border: 2px solid grey;\r\n}\r\nh2 {\r\n    background-color: var(--black-bg-color);\r\n    color: var(--white-bg-color);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\nimg {\r\n    margin-top: 2rem;\r\n    margin-bottom: 2rem;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 5px;\r\n  }\r\n  /* Handle */\r\n::-webkit-scrollbar-thumb {\r\n    background: var(--black-bg-color);\r\n    border-radius: 10px;\r\n  }\r\n  ::-webkit-scrollbar-track {\r\n    background: rgb(172, 172, 172);\r\n    border-radius: 10px;\r\n  }\r\n  #projForm {\r\n    display: grid !important;\r\n    grid-template-rows: 1fr 1fr;\r\n    grid-template-columns: 50% 50%;\r\n    margin-top: 1rem;\r\n    padding: .5rem;\r\n    justify-items: center;\r\n  }\r\n  #cancel, #submit {\r\n    height: 2rem;\r\n    width: 5rem;\r\n    border: 1px solid grey;\r\n    border-radius: 6px;\r\n  }\r\n  #cancel {\r\n    background-color: rgb(255, 142, 142);\r\n  }\r\n  #submit {\r\n    background-color: rgb(151, 255, 151);\r\n  }\r\n  #projForm input:first-child {\r\n    grid-column: 1 / 3;\r\n    height: 3rem;\r\n    width: 12rem;\r\n    margin-bottom: .5rem;\r\n    font-size: 1.4rem;\r\n  }\r\n  "],"sourceRoot":""}]);
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
         const checkBox = document.createElement('input');
         checkBox.setAttribute('type', 'checkbox');
         checkBox.addEventListener('click', () => {
            if(checkBox.checked) {
                newDiv.classList.add('checked');
                for(let i = 0; i < projectsList[currentProject].length; i++) {
                    if(projectsList[currentProject][i] == task) {
                        projectsList[currentProject].splice(i, 1);
                        break;
                    }
                }
            }
            else {
                newDiv.classList.remove('checked');
                projectsList[currentProject].push(todo(
                    task.title,
                    task.description,
                    task.dueDate,
                    task.priority
                ));
            }
            
         });
         newDiv.appendChild(checkBox);
         newDiv.classList.add('task');
         const taskTitle = document.createElement('div');
         taskTitle.innerHTML = task.title;
         newDiv.appendChild(taskTitle);
         const taskDate = document.createElement('div');
         //date manipulation starts here
         const today = new Date().setHours(0, 0 , 0, 0);
         const result = (task.dueDate - today) / 86400000;
         if(result === 0) {
            taskDate.innerHTML = 'Due today';
         }
         else if(result === 1) {
            taskDate.innerHTML = 'Due tomorrow';
         }
         else if(result < 0) {
            taskDate.innerHTML = `Overdue! (${Math.abs(result)} days ago)`;
         }
         else {
            taskDate.innerHTML = `Due in ${result} days`;
         }
         newDiv.appendChild(taskDate);
         newDiv.addEventListener('click', (e)=> {
            if(e.target != checkBox) {
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
        textField.setAttribute('maxlength', '27');
        textField.setAttribute('required', '');
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
        submit.setAttribute('value', 'Add');
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
taskNameField.setAttribute('required', '');
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
taskUrgencyField.setAttribute('value', '0');
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
submitTask.addEventListener('click', ()=> {
    if(document.getElementById('taskForm').checkValidity()) {
       projectsList[currentProject].push(todo(
        taskNameField.value,
        taskDescField.value,
        taskDateField.valueAsDate.setHours(0, 0, 0, 0) + 86400000,
        taskUrgencyField.value
       ));
        domStuff.renderTask(projectsList[currentProject][projectsList[currentProject].length - 1]);
        taskNameField.value = '';
        taskDescField.value = '';
        taskDateField.value = '';
        taskUrgencyField.value = 0;
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBEQUEwRCxnQkFBZ0I7QUFDMUU7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gICAgLS10aXRsZS1iZy1jb2xvcjogI2NiZDVlMTtcXHJcXG4gICAgLS1wcm9qLWJnLWNvbG9yOiAjZjFmNWY5O1xcclxcbiAgICAtLXdoaXRlLWJnLWNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICAtLWJsYWNrLWJnLWNvbG9yOiAjMWUyOTNiO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuI2NvbnRlbnQgPiBoMSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdGl0bGUtYmctY29sb3IpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuI3Byb2plY3RzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvai1iZy1jb2xvcik7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcbi5wcm9qZWN0IGRpdiB7XFxyXFxuICAgIHdpZHRoOiA5cmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxufVxcclxcbiNhY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcclxcbn1cXHJcXG4jcHJvamVjdHMgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxyXFxufVxcclxcbiN0YXNrcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWJnLWNvbG9yKTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmNoZWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbiNwcm9qQnRuLCAjdGFza0J0biB7XFxyXFxuICAgIGhlaWdodDogNXZoO1xcclxcbiAgICB3aWR0aDogNXZoO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGhlaWdodDogNDByZW07XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtYmctY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXHJcXG59XFxyXFxuLmZvcm0tY29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgei1pbmRleDogOTtcXHJcXG59XFxyXFxuI3Rhc2tzID4gZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xcclxcbn1cXHJcXG4udGFzayBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcbi5jaGVja2VkOmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAyLjUlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjJkZWcpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIH1cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcbmgyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYmctY29sb3IpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICB9XFxyXFxuICAvKiBIYW5kbGUgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigxNzIsIDE3MiwgMTcyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG4gICNwcm9qRm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAjY2FuY2VsLCAjc3VibWl0IHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgfVxcclxcbiAgI2NhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0MiwgMTQyKTtcXHJcXG4gIH1cXHJcXG4gICNzdWJtaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAyNTUsIDE1MSk7XFxyXFxuICB9XFxyXFxuICAjcHJvakZvcm0gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgd2lkdGg6IDEycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuICBcIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMv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O0VBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gICAgLS10aXRsZS1iZy1jb2xvcjogI2NiZDVlMTtcXHJcXG4gICAgLS1wcm9qLWJnLWNvbG9yOiAjZjFmNWY5O1xcclxcbiAgICAtLXdoaXRlLWJnLWNvbG9yOiAjZjhmYWZjO1xcclxcbiAgICAtLWJsYWNrLWJnLWNvbG9yOiAjMWUyOTNiO1xcclxcbn1cXHJcXG4qIHtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuYm9keSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuI2NvbnRlbnQgPiBoMSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6dmFyKC0tdGl0bGUtYmctY29sb3IpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuI3Byb2plY3RzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvai1iZy1jb2xvcik7XFxyXFxuICAgIG1pbi13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XFxyXFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxyXFxufVxcclxcbi5wcm9qZWN0IHtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXHJcXG4gICAgZ3JpZC1nYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcbi5wcm9qZWN0IGRpdiB7XFxyXFxuICAgIHdpZHRoOiA5cmVtO1xcclxcbn1cXHJcXG4ucHJvamVjdDpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxufVxcclxcbiNhY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxO1xcclxcbn1cXHJcXG4jcHJvamVjdHMgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXFxyXFxufVxcclxcbiN0YXNrcyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWJnLWNvbG9yKTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXHJcXG59XFxyXFxuLmNoZWNrZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2JkNWUxICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcbiNwcm9qQnRuLCAjdGFza0J0biB7XFxyXFxuICAgIGhlaWdodDogNXZoO1xcclxcbiAgICB3aWR0aDogNXZoO1xcclxcbn1cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTVyZW0gMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwdmggOTB2aDtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZm9ybS1jb250YWluZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGhlaWdodDogNDByZW07XFxyXFxuICAgIHdpZHRoOiA0MHJlbTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XFxyXFxuICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICB6LWluZGV4OiAxMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUtYmctY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcXHJcXG59XFxyXFxuLmZvcm0tY29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiA0cmVtO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXHJcXG4gICAgei1pbmRleDogOTtcXHJcXG59XFxyXFxuI3Rhc2tzID4gZGl2OmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcbi50YXNrIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDJyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XFxyXFxuICAgIGhlaWdodDogNXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogLjc1cmVtO1xcclxcbn1cXHJcXG4udGFzayBpbnB1dCB7XFxyXFxuICAgIHdpZHRoOiAycmVtO1xcclxcbiAgICBoZWlnaHQ6IDJyZW07XFxyXFxufVxcclxcbi5jaGVja2VkOmFmdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAyLjUlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJsYWNrLWJnLWNvbG9yKTtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHdpZHRoOiA5NSU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwLjJkZWcpO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gIH1cXHJcXG4udGFzazpob3ZlciB7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxyXFxufVxcclxcbmgyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcclxcbiAgICBjb2xvcjogdmFyKC0td2hpdGUtYmctY29sb3IpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiA1cHg7XFxyXFxuICB9XFxyXFxuICAvKiBIYW5kbGUgKi9cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmxhY2stYmctY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgfVxcclxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYigxNzIsIDE3MiwgMTcyKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gIH1cXHJcXG4gICNwcm9qRm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQgIWltcG9ydGFudDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAjY2FuY2VsLCAjc3VibWl0IHtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgfVxcclxcbiAgI2NhbmNlbCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE0MiwgMTQyKTtcXHJcXG4gIH1cXHJcXG4gICNzdWJtaXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUxLCAyNTUsIDE1MSk7XFxyXFxuICB9XFxyXFxuICAjcHJvakZvcm0gaW5wdXQ6Zmlyc3QtY2hpbGQge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxyXFxuICAgIGhlaWdodDogM3JlbTtcXHJcXG4gICAgd2lkdGg6IDEycmVtO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICB9XFxyXFxuICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHBsdXMgZnJvbSAnLi9wbHVzLWNpcmNsZS5wbmcnO1xyXG5pbXBvcnQgdHJhc2hDYW4gZnJvbSAnLi90cmFzaC1jYW4tb3V0bGluZS5wbmcnO1xyXG5pbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcclxuXHJcbmNvbnN0IHRvZG8gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xyXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5fTtcclxufTtcclxuIGNvbnN0IGRvbVN0dWZmID0gKCgpID0+IHtcclxuICAgICBjb25zdCByZW5kZXJQcm9qID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKTtcclxuICAgICAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG5ld1RpdGxlLmlubmVySFRNTCA9IHByb2plY3Q7XHJcbiAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcclxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xyXG4gICAgICAgIGNvbnN0IHRyYXNoID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdHJhc2guc3JjID0gdHJhc2hDYW47XHJcbiAgICAgICAgbmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldCAhPSB0cmFzaCkge1xyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlUHJvaihwcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdHJhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcclxuICAgICAgICAgICAgZGVsZXRlIHByb2plY3RzTGlzdFtwcm9qZWN0XTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG5ld0Rpdik7XHJcbiAgICAgICAgICAgIGlmKHByb2plY3QgPT0gY3VycmVudFByb2plY3QpIHtcclxuICAgICAgICAgICAgICAgIGlmKE9iamVjdC5rZXlzKHByb2plY3RzTGlzdClbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVQcm9qKE9iamVjdC5rZXlzKHByb2plY3RzTGlzdClbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclRhc2tzKGN1cnJlbnRQcm9qZWN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKTtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZShjb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQodHJhc2gpO1xyXG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRCZWZvcmUobmV3RGl2LCBjb250YWluZXIubGFzdENoaWxkKTtcclxuICAgICAgICBzZXRBY3RpdmVQcm9qKHByb2plY3QpO1xyXG4gICAgICAgIHJlbmRlclRhc2tzKHByb2plY3QpO1xyXG4gICAgIH1cclxuICAgICBjb25zdCByZW5kZXJUYXNrID0gKHRhc2spID0+IHtcclxuICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tzJyk7XHJcbiAgICAgICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgICAgICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYoY2hlY2tCb3guY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0xpc3RbY3VycmVudFByb2plY3RdLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvamVjdHNMaXN0W2N1cnJlbnRQcm9qZWN0XVtpXSA9PSB0YXNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RzTGlzdFtjdXJyZW50UHJvamVjdF0uc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBuZXdEaXYuY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0W2N1cnJlbnRQcm9qZWN0XS5wdXNoKHRvZG8oXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzay50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgfSk7XHJcbiAgICAgICAgIG5ld0Rpdi5hcHBlbmRDaGlsZChjaGVja0JveCk7XHJcbiAgICAgICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICB0YXNrVGl0bGUuaW5uZXJIVE1MID0gdGFzay50aXRsZTtcclxuICAgICAgICAgbmV3RGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgIC8vZGF0ZSBtYW5pcHVsYXRpb24gc3RhcnRzIGhlcmVcclxuICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAgLCAwLCAwKTtcclxuICAgICAgICAgY29uc3QgcmVzdWx0ID0gKHRhc2suZHVlRGF0ZSAtIHRvZGF5KSAvIDg2NDAwMDAwO1xyXG4gICAgICAgICBpZihyZXN1bHQgPT09IDApIHtcclxuICAgICAgICAgICAgdGFza0RhdGUuaW5uZXJIVE1MID0gJ0R1ZSB0b2RheSc7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZihyZXN1bHQgPT09IDEpIHtcclxuICAgICAgICAgICAgdGFza0RhdGUuaW5uZXJIVE1MID0gJ0R1ZSB0b21vcnJvdyc7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZSBpZihyZXN1bHQgPCAwKSB7XHJcbiAgICAgICAgICAgIHRhc2tEYXRlLmlubmVySFRNTCA9IGBPdmVyZHVlISAoJHtNYXRoLmFicyhyZXN1bHQpfSBkYXlzIGFnbylgO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXNrRGF0ZS5pbm5lckhUTUwgPSBgRHVlIGluICR7cmVzdWx0fSBkYXlzYDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBuZXdEaXYuYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xyXG4gICAgICAgICBuZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XHJcbiAgICAgICAgICAgIGlmKGUudGFyZ2V0ICE9IGNoZWNrQm94KSB7XHJcbiAgICAgICAgICAgIC8vZ2VuZXJhdGUgdGhlIGRldGFpbHMgYW5kIGFwcGVuZCB0byBib2R5XHJcbiAgICAgICAgY29uc3QgZGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRldGFpbHMuY2xhc3NMaXN0LmFkZCgnZm9ybS1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCBkZXRIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgICAgICBkZXRIZWFkLmlubmVySFRNTCA9IHRhc2sudGl0bGU7XHJcbiAgICAgICAgZGV0YWlscy5hcHBlbmRDaGlsZChkZXRIZWFkKTtcclxuICAgICAgICBjb25zdCBkZXREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZGV0RGVzYy5pbm5lckhUTUwgPSB0YXNrLmRlc2NyaXB0aW9uO1xyXG4gICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGV0RGVzYyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXRhaWxzKTtcclxuICAgICAgICBjb25zdCBkZXREdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAvL2FkZCBhbW91bnQgb2YgZGF5cyBsZWZ0IGluIHBhcmFudGhlc2lzXHJcbiAgICAgICAgZGV0RHVlLmlubmVySFRNTCA9IGBEdWU6ICR7dGFzay5kdWVEYXRlfSAoSW4gYmxhbmsgZGF5cylgO1xyXG4gICAgICAgIGRldGFpbHMuYXBwZW5kQ2hpbGQoZGV0RHVlKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICAgICBuZXdEaXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYHJnYmEoMjU1LCAwLCAwLCAkey4xICogdGFzay5wcmlvcml0eX0pYDtcclxuICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XHJcbiAgICAgfVxyXG4gICAgIGNvbnN0IHJlbmRlclRhc2tzID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza3MnKTtcclxuICAgICAgICAgICAgLy9yZW1vdmUgZXhpc3RpbmcgdGFza3MsIG1ha2luZyBzdXJlIG5vdCB0byByZW1vdmUgYnV0dG9uXHJcbiAgICAgICAgICAgIHdoaWxlKGNvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdENoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2FkZCB0YXNrcyB0byBET01cclxuICAgICAgICAgICAgZm9yKGNvbnN0IHRhc2sgaW4gcHJvamVjdHNMaXN0W3Byb2plY3RdKSB7XHJcbiAgICAgICAgICAgICAgICBkb21TdHVmZi5yZW5kZXJUYXNrKHByb2plY3RzTGlzdFtwcm9qZWN0XVt0YXNrXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICB9XHJcbiAgICAgY29uc3Qgc2V0QWN0aXZlUHJvaiA9IChwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0Jyk7XHJcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY3RpdmUnKS5yZW1vdmVBdHRyaWJ1dGUoJ2lkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihwcm9qZWN0c1tpXS5maXJzdENoaWxkLmlubmVySFRNTCA9PSBwcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0c1tpXS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgICAgIG1haW5UaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0O1xyXG4gICAgIH1cclxuICAgICBjb25zdCBnZW5lcmF0ZVByb2pCdG4gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvakJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IHByb2pCdG4gPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBwcm9qQnRuLnNyYyA9IHBsdXM7XHJcbiAgICAgICAgcHJvakJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pCdG4nKTtcclxuICAgICAgICBwcm9qQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0cy5yZW1vdmVDaGlsZChwcm9qQnRuQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVQcm9qRm9ybSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHByb2pCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvakJ0bik7XHJcbiAgICAgICAgcHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvakJ0bkNvbnRhaW5lcik7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgZ2VuZXJhdGVQcm9qRm9ybSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9qRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuICAgICAgICBwcm9qRm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2pGb3JtJyk7XHJcbiAgICAgICAgY29uc3QgdGV4dEZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0ZXh0RmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgICAgICB0ZXh0RmllbGQuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjcnKTtcclxuICAgICAgICB0ZXh0RmllbGQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICcnKTtcclxuICAgICAgICBwcm9qRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0RmllbGQpO1xyXG4gICAgICAgIGNvbnN0IGNhbmNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgY2FuY2VsLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgICAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCdpZCcsICdjYW5jZWwnKTtcclxuICAgICAgICBjYW5jZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdjYW5jZWwnKTtcclxuICAgICAgICBjYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2pGb3JtQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgZ2VuZXJhdGVQcm9qQnRuKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcHJvakZvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsKTtcclxuICAgICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIHN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0Jyk7XHJcbiAgICAgICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkJyk7XHJcbiAgICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvakZvcm0nKS5jaGVja1ZhbGlkaXR5KCkpIHtcclxuICAgICAgICAgICAgICAgaWYoISh0ZXh0RmllbGQudmFsdWUgaW4gcHJvamVjdHNMaXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0W3RleHRGaWVsZC52YWx1ZV0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgIGRvbVN0dWZmLnJlbmRlclByb2oodGV4dEZpZWxkLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgIHByb2plY3RzLnJlbW92ZUNoaWxkKHByb2pGb3JtQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlUHJvakJ0bigpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgYWxlcnQoYEEgcHJvamVjdCB3aXRoIG5hbWUgdGhlIG5hbWUgXCIke3RleHRGaWVsZC52YWx1ZX1cIiBhbHJlYWR5IGV4aXN0cyFgKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBwcm9qRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJtaXQpO1xyXG4gICAgICAgIHByb2plY3RzLmFwcGVuZENoaWxkKHByb2pGb3JtQ29udGFpbmVyKTtcclxuICAgIH07XHJcbiAgICAgcmV0dXJuIHtyZW5kZXJQcm9qLCByZW5kZXJUYXNrLCByZW5kZXJUYXNrcywgZ2VuZXJhdGVQcm9qQnRufTtcclxuIH0pKCk7XHJcblxyXG5sZXQgcHJvamVjdHNMaXN0ID0ge307XHJcbmlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoKSB7XHJcbiAgICBsZXQgc3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhdGEnKTtcclxuICAgIHByb2plY3RzTGlzdCA9IEpTT04ucGFyc2Uoc3RyKTtcclxufVxyXG5lbHNlIHsgLy9ubyBkYXRhLCBwb3B1bGF0ZSBsaXN0XHJcbiAgICBwcm9qZWN0c0xpc3RbJ015IFByb2plY3QnXSA9IFt0b2RvKCdteSB0YXNrJywgJ2RvIGNvb2wgc3R1ZmYnLCAndG9tb3Jyb3cnLCAndXJnZW50JyldO1xyXG59XHJcbmxldCBjdXJyZW50UHJvamVjdCA9IE9iamVjdC5rZXlzKHByb2plY3RzTGlzdClbMF07XHJcbi8qQ29kZSBmb3IgZ2VuZXJhdGluZyBza2VsZXRvbiBvZiBwYWdlICovXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxucHJvamVjdFRpdGxlLmlubmVySFRNTCA9ICdQcm9qZWN0cyc7XHJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuY29uc3QgbWFpblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChtYWluVGl0bGUpO1xyXG5tYWluVGl0bGUuaW5uZXJIVE1MID0gJ1RvZG9MaXN0JztcclxuXHJcbmNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbnByb2plY3RzLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdHMnKTtcclxuY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XHJcbmRvbVN0dWZmLmdlbmVyYXRlUHJvakJ0bigpO1xyXG5cclxuY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxudGFza3Muc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrcycpO1xyXG5jb250ZW50LmFwcGVuZENoaWxkKHRhc2tzKTtcclxuXHJcbmNvbnN0IHRhc2tCdG5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgdGFza0J0biA9IG5ldyBJbWFnZSgpO1xyXG50YXNrQnRuLnNyYyA9IHBsdXM7XHJcbnRhc2tCdG4uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrQnRuJyk7XHJcbnRhc2tCdG5Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0J0bik7XHJcbnRhc2tzLmFwcGVuZENoaWxkKHRhc2tCdG5Db250YWluZXIpO1xyXG5cclxuLy9wb3B1bGF0ZSBwcm9qZWN0c1xyXG5mb3IgKGNvbnN0IHByb2plY3QgaW4gcHJvamVjdHNMaXN0KSB7XHJcbiAgICBkb21TdHVmZi5yZW5kZXJQcm9qKHByb2plY3QpO1xyXG59O1xyXG4vL2FkZCBwcm9qZWN0XHJcblxyXG4vL2FkZCB0YXNrIHBvcHVwXHJcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG50YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xyXG50YXNrRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2tGb3JtJyk7XHJcbnRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5jb25zdCB0YXNrRm9ybUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG50YXNrRm9ybUhlYWQuaW5uZXJIVE1MID0gJ0FkZCBhIG5ldyBUYXNrJztcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Zvcm1IZWFkKTtcclxuY29uc3QgdGFza05hbWVGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnRhc2tOYW1lRmllbGQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxudGFza05hbWVGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1Rhc2sgbmFtZScpO1xyXG50YXNrTmFtZUZpZWxkLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJyk7XHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lRmllbGQpO1xyXG5jb25zdCB0YXNrRGVza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudGFza0Rlc2tGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG50YXNrRGVza0ZpZWxkLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnVGFzayBuYW1lJyk7XHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tOYW1lRmllbGQpO1xyXG5jb25zdCB0YXNrRGVzY0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxudGFza0Rlc2NGaWVsZC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0Rlc2NyaXB0aW9uIChvcHRpb25hbCknKTtcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NGaWVsZCk7XHJcbmNvbnN0IHRhc2tEYXRlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG50YXNrRGF0ZUZpZWxkLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XHJcbnRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlRmllbGQpO1xyXG5jb25zdCB1cmdlbmN5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG51cmdlbmN5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXJnZW5jeScpO1xyXG51cmdlbmN5TGFiZWwuaW5uZXJIVE1MID0gJ3VyZ2VuY3knO1xyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh1cmdlbmN5TGFiZWwpO1xyXG5jb25zdCB0YXNrVXJnZW5jeUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxudGFza1VyZ2VuY3lGaWVsZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcclxudGFza1VyZ2VuY3lGaWVsZC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzAnKTtcclxudGFza1VyZ2VuY3lGaWVsZC5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XHJcbnRhc2tVcmdlbmN5RmllbGQuc2V0QXR0cmlidXRlKCdtYXgnLCAnNScpO1xyXG50YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrVXJnZW5jeUZpZWxkKTtcclxuY29uc3Qgc3VibWl0VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbnN1Ym1pdFRhc2suc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG5zdWJtaXRUYXNrLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQ3JlYXRlIFRhc2snKTtcclxudGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0VGFzayk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFza0Zvcm0pO1xyXG5cclxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5vdmVybGF5LnNldEF0dHJpYnV0ZSgnaWQnLCAnb3ZlcmxheScpO1xyXG5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xyXG5cclxudGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgaWYoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQgIT0gb3ZlcmxheSkge1xyXG4gICAgICAgIC8vdGhpcyByZW1vdmVzIHRhc2tzIHNpbmNlIHRoZXkgYXJlIGdlbmVyYXRlZCB3aGVuIGNsaWNrZWQgKHNvIG1hbnkgdGFza3MpXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICB9KTtcclxuc3VibWl0VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG4gICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tGb3JtJykuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICBwcm9qZWN0c0xpc3RbY3VycmVudFByb2plY3RdLnB1c2godG9kbyhcclxuICAgICAgICB0YXNrTmFtZUZpZWxkLnZhbHVlLFxyXG4gICAgICAgIHRhc2tEZXNjRmllbGQudmFsdWUsXHJcbiAgICAgICAgdGFza0RhdGVGaWVsZC52YWx1ZUFzRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKSArIDg2NDAwMDAwLFxyXG4gICAgICAgIHRhc2tVcmdlbmN5RmllbGQudmFsdWVcclxuICAgICAgICkpO1xyXG4gICAgICAgIGRvbVN0dWZmLnJlbmRlclRhc2socHJvamVjdHNMaXN0W2N1cnJlbnRQcm9qZWN0XVtwcm9qZWN0c0xpc3RbY3VycmVudFByb2plY3RdLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICB0YXNrTmFtZUZpZWxkLnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGFza0Rlc2NGaWVsZC52YWx1ZSA9ICcnO1xyXG4gICAgICAgIHRhc2tEYXRlRmllbGQudmFsdWUgPSAnJztcclxuICAgICAgICB0YXNrVXJnZW5jeUZpZWxkLnZhbHVlID0gMDtcclxuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgfSk7XHJcbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSAoKT0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICBpZihPYmplY3Qua2V5cyhwcm9qZWN0c0xpc3QpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGF0YScsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzTGlzdCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=