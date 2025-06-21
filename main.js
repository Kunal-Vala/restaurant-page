/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./background image.jpg */ \"./src/background image.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --color-yellow: #FFC60B;\r\n    --color-brownish: #e3c6b8;\r\n    --button-width: 3rem;\r\n    --button-font: 2rem;\r\n    --main-text-font-size: 3rem;\r\n    --text-medium: 1.5rem;\r\n    --text-small: 1.3rem;\r\n    --text-extra-small: 0.9rem;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n}\r\n\r\n\r\n\r\nbody {\r\n    width: min(90%, 800px);\r\n    margin: 0 auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    min-height: 100vh;\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    /* background-repeat: no-repeat; */\r\n    background-position: center;\r\n    background-color: var(--color-brownish, rgba(151, 76, 76, 0.6));\r\n}\r\n\r\n\r\n\r\n#content {\r\n    margin: auto;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n\r\n}\r\n\r\n.button {\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    margin: 10px 5px;\r\n    border: 5px solid #3B3B1A;\r\n    border-radius: 10px;\r\n    background-color: #FFF2EB;\r\n    font-size: var(--button-font);\r\n    padding: 5px;\r\n}\r\n\r\n.button:hover {\r\n    background-color: #FFD586;\r\n    cursor: pointer;\r\n}\r\n\r\n.heading-container {\r\n    padding: 10px 0;\r\n    text-align: center;\r\n}\r\n\r\n.intro-container {\r\n    border: 3px solid burlywood;\r\n    border-radius: 20px;\r\n    background-color: #FFF2EB;\r\n\r\n}\r\n\r\n.title {\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    font-size: var(--main-text-font-size);\r\n\r\n}\r\n\r\n.info-para {\r\n    padding: 15px;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    font-size: var(--text-medium);\r\n    text-align: justify;\r\n    line-height: 1.6;\r\n    letter-spacing: 0.5px;\r\n    color: #4e3e29;\r\n    font-style: italic;\r\n\r\n}\r\n\r\n.intro-hour-container {\r\n    padding: 10px;\r\n    margin: 10px;\r\n    border: 3px solid burlywood;\r\n    border-radius: 20px;\r\n    background-color: #FFF2EB;\r\n\r\n}\r\n\r\n.hour-title {\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    padding: 10px;\r\n    font-size: var(--text-medium);\r\n}\r\n\r\n.hour-list {\r\n    text-align: center;\r\n    font-size: var(--text-small);\r\n}\r\n\r\n.hour-list li {\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    padding: 5px;\r\n    list-style: none;\r\n}\r\n\r\n.address-container {\r\n    border: 3px solid burlywood;\r\n    border-radius: 20px;\r\n    background-color: #FFF2EB;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.address-title {\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    padding: 10px;\r\n    font-size: var(--text-medium);\r\n}\r\n\r\n.address {\r\n    padding: 5px;\r\n    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n    text-align: center;\r\n    font-size: var(--text-medium);\r\n}\r\n\r\n\r\n\r\n/* *********************************************************************************** */\r\n\r\n.menu-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 40px;\r\n  padding: 20px;\r\n}\r\n\r\n.menu-heading {\r\n  font-size: 2rem;\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n  color: #3B3B1A;\r\n}\r\n\r\n.card-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  gap: 20px;\r\n  justify-content: center;\r\n}\r\n\r\n.menu-card {\r\n  background-color: #fff7f0;\r\n  border: 2px solid burlywood;\r\n  border-radius: 12px;\r\n  width: 200px;\r\n  padding: 10px;\r\n  box-shadow: 2px 2px 8px rgba(0,0,0,0.1);\r\n  text-align: center;\r\n}\r\n\r\n.menu-img {\r\n  width: 100%;\r\n  height: 120px;\r\n  object-fit: cover;\r\n  border-radius: 8px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.menu-price {\r\n  font-weight: bold;\r\n  color: #a52a2a;\r\n  margin-top: 5px;\r\n}\r\n\r\n\r\n/* ************************************************* */\r\n\r\n\r\n.contact-container {\r\n  background-color: #FFF2EB;\r\n  padding: 20px;\r\n  border-radius: 15px;\r\n  border: 2px solid burlywood;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.contact-container h2 {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.contact-container p {\r\n  text-align: center;\r\n  margin-bottom: 20px;\r\n  font-size: 1rem;\r\n}\r\n\r\n.team-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 15px;\r\n}\r\n\r\n.contact-card {\r\n  background-color: #fff;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n  border: 2px solid #e3c6b8;\r\n  box-shadow: 2px 2px 8px rgba(0,0,0,0.05);\r\n}\r\n\r\n.contact-card h3 {\r\n  margin-bottom: 5px;\r\n  color: #3B3B1A;\r\n}\r\n\r\n.contact-card p {\r\n  font-size: 0.95rem;\r\n  margin: 2px 0;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/background image.jpg":
/*!**********************************!*\
  !*** ./src/background image.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cec3e6c3445c830e1dd5.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/background_image.jpg?");

/***/ }),

/***/ "./src/contact-us-page.js":
/*!********************************!*\
  !*** ./src/contact-us-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContact: () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction createContactSection() {\r\n  const contactContainer = document.createElement(\"div\");\r\n  contactContainer.classList.add(\"contact-container\");\r\n\r\n  const heading = document.createElement(\"h2\");\r\n  heading.textContent = \"Contact Us\";\r\n  contactContainer.appendChild(heading);\r\n\r\n  const info = document.createElement(\"p\");\r\n  info.textContent = \"Feel free to reach out to us for orders, collaborations, or any general inquiries.\";\r\n  contactContainer.appendChild(info);\r\n\r\n  const team = [\r\n    {\r\n      name: \"Mira Patel\",\r\n      role: \"Founder & Head Chef\",\r\n      phone: \"+91 98765 43210\",\r\n      email: \"mira@mindfulcafe.com\",\r\n    },\r\n    {\r\n      name: \"Ravi Mehta\",\r\n      role: \"Operations Manager\",\r\n      phone: \"+91 98452 77889\",\r\n      email: \"ravi@mindfulcafe.com\",\r\n    },\r\n    {\r\n      name: \"Ananya Sharma\",\r\n      role: \"Customer Support\",\r\n      phone: \"+91 98123 45678\",\r\n      email: \"support@mindfulcafe.com\",\r\n    }\r\n  ];\r\n\r\n  const teamList = document.createElement(\"div\");\r\n  teamList.classList.add(\"team-list\");\r\n\r\n  team.forEach(member => {\r\n    const card = document.createElement(\"div\");\r\n    card.classList.add(\"contact-card\");\r\n\r\n    const name = document.createElement(\"h3\");\r\n    name.textContent = member.name;\r\n\r\n    const role = document.createElement(\"p\");\r\n    role.textContent = `Role: ${member.role}`;\r\n\r\n    const phone = document.createElement(\"p\");\r\n    phone.textContent = `Phone: ${member.phone}`;\r\n\r\n    const email = document.createElement(\"p\");\r\n    email.textContent = `Email: ${member.email}`;\r\n\r\n    card.appendChild(name);\r\n    card.appendChild(role);\r\n    card.appendChild(phone);\r\n    card.appendChild(email);\r\n\r\n    teamList.appendChild(card);\r\n  });\r\n\r\n  contactContainer.appendChild(teamList);\r\n\r\n  return contactContainer;\r\n}\r\n\r\nfunction loadContact() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = '';\r\n  content.appendChild(createContactSection());\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact-us-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n// home-page.js\r\n\r\nfunction createHeading() {\r\n    const headingContainer = document.createElement('div');\r\n    headingContainer.classList.add(\"heading-container\");\r\n\r\n    const title = document.createElement('h1');\r\n    title.classList.add(\"title\");\r\n\r\n    title.textContent = \"Mira's Mindful Cafe\";\r\n\r\n    headingContainer.appendChild(title);\r\n\r\n    return headingContainer;\r\n}\r\n\r\nfunction createIntro() {\r\n    const introContainer = document.createElement('div');\r\n    introContainer.classList.add(\"intro-container\");\r\n\r\n    const infoPara = document.createElement('p');\r\n    infoPara.classList.add(\"info-para\");\r\n\r\n    infoPara.textContent =\r\n        `Mira's Mindful Cafe is a delightful haven where fast service meets soulful, freshly prepared Indian cuisine. With a philosophy rooted in simplicity and authenticity, the cafe prides itself on using real ingredients—never canned—and hand-ground spices that elevate every dish with rich, vibrant flavors. Enjoy a warm, welcoming space that feels both efficient and heartfelt. It’s not just about eating—it’s about enjoying food that’s thoughtfully made and served with care.`\r\n\r\n    introContainer.appendChild(infoPara);\r\n\r\n    return introContainer;\r\n}\r\n\r\nfunction createHourContainer() {\r\n\r\n    const timeLine = ['Sunday: 8am - 8pm',\r\n                'Monday: 6am - 6pm',\r\n                'Tuesday: 6am - 6pm',\r\n                'Wednesday: 6am - 6pm',\r\n                'Thursday: 6am - 10pm',\r\n                'Friday: 6am - 10pm',\r\n                'Saturday: 8am - 10pm'];\r\n\r\n    const introHourContainer = document.createElement('div');\r\n    introHourContainer.classList.add('intro-hour-container');\r\n\r\n    const hourTitle = document.createElement('h3');\r\n    hourTitle.classList.add('hour-title');\r\n    hourTitle.textContent = \"Hours\";\r\n\r\n    const hourUl = document.createElement('ul');\r\n    hourUl.classList.add('hour-list');\r\n\r\n\r\n    timeLine.forEach((day) =>{\r\n        const hourList = document.createElement('li');\r\n        hourList.classList.add('days');\r\n        hourList.textContent = `${day}`;\r\n        hourUl.appendChild(hourList);\r\n    });\r\n\r\n    introHourContainer.appendChild(hourTitle);\r\n    introHourContainer.appendChild(hourUl);\r\n\r\n    return introHourContainer;\r\n}\r\n\r\nfunction createAddress(){\r\n    const addressContainer = document.createElement('div');\r\n    addressContainer.classList.add('address-container');\r\n\r\n    const addressTitle = document.createElement('h3');\r\n    addressTitle.classList.add('address-title');\r\n    addressTitle.textContent = \"Address\";\r\n\r\n    addressContainer.appendChild(addressTitle);\r\n\r\n    const address = document.createElement('p');\r\n    address.classList.add('address');\r\n    address.textContent = \"69th Race Street Drive, Townsik, NYC\";\r\n\r\n    addressContainer.appendChild(address);\r\n\r\n\r\n    return addressContainer;\r\n}\r\n\r\nfunction loadHome(){\r\n    const content = document.querySelector('#content');\r\n\r\n    content.appendChild(createHeading());\r\n    content.appendChild(createIntro());\r\n    content.appendChild(createHourContainer());\r\n    content.appendChild(createAddress());\r\n\r\n    return content;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.js */ \"./src/home-page.js\");\n/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page.js */ \"./src/menu-page.js\");\n/* harmony import */ var _contact_us_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-us-page.js */ \"./src/contact-us-page.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _sound_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sound.mp3 */ \"./src/sound.mp3\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst buttonSound = new Audio(_sound_mp3__WEBPACK_IMPORTED_MODULE_4__);\r\n\r\n\r\nfunction pages() {\r\n    const button = document.querySelectorAll('.button');\r\n    \r\n    button.forEach(button => {\r\n        button.addEventListener('click', (e) => {\r\n            \r\n            const tab = e.target.textContent;\r\n            buttonSound.play();\r\n            const content = document.getElementById('content');\r\n            content.innerHTML = '';\r\n            \r\n            if(tab === 'Home') (0,_home_page_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\n            if (tab === 'Menu') (0,_menu_page_js__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\r\n            if (tab === 'Contact Us') (0,_contact_us_page_js__WEBPACK_IMPORTED_MODULE_2__.loadContact)();\r\n        });\r\n    });\r\n}\r\n\r\n\r\n\r\n\r\n\r\n(0,_home_page_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\r\npages();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction createMenuSection() {\r\n  const menuData = {\r\n    \"Beverages\": [\r\n      { name: \"Masala Chai\", description: \"Traditional Indian spiced tea brewed with milk.\", price: \"₹30\", image: \"https://i.imgur.com/8fKQpTg.jpg\" },\r\n      { name: \"Cold Coffee\", description: \"Chilled coffee with a scoop of vanilla ice cream.\", price: \"₹60\", image: \"https://i.imgur.com/jE9YFvW.jpg\" },\r\n      { name: \"Lemon Iced Tea\", description: \"Refreshing black tea with lemon and ice.\", price: \"₹45\", image: \"https://i.imgur.com/XmOEzgL.jpg\" }\r\n    ],\r\n    \"Soft Drinks\": [\r\n      { name: \"Pepsi\", description: \"Classic cola drink.\", price: \"₹20\", image: \"https://i.imgur.com/j3WOROE.jpg\" },\r\n      { name: \"Sprite\", description: \"Lemon-lime carbonated soft drink.\", price: \"₹20\", image: \"https://i.imgur.com/MZ7RXaa.jpg\" }\r\n    ],\r\n    \"Main Dishes\": [\r\n      { name: \"Paneer Butter Masala\", description: \"Cottage cheese in rich tomato gravy.\", price: \"₹160\", image: \"https://i.imgur.com/  Tmrv6hh.jpg\" },\r\n      { name: \"Veg Biryani\", description: \"Fragrant basmati rice with vegetables and spices.\", price: \"₹130\", image: \"https://i.imgur.com/RA9aSHh.jpg\" },\r\n      { name: \"Chole Bhature\", description: \"Spicy chickpeas with fluffy fried bread.\", price: \"₹100\", image: \"https://i.imgur.com/6OguFdj.jpg\" }\r\n    ],\r\n    \"Snacks\": [\r\n      { name: \"Samosa\", description: \"Crispy pastry filled with spiced potatoes.\", price: \"₹20\", image: \"https://i.imgur.com/zgtzkEp.jpg\" },\r\n      { name: \"Aloo Tikki\", description: \"Potato patty spiced and shallow fried.\", price: \"₹30\", image: \"https://i.imgur.com/ppvjM6y.jpg\" },\r\n      { name: \"Kachori\", description: \"Crispy fried dough ball with spicy lentil filling.\", price: \"₹25\", image: \"https://i.imgur.com/vAkgrkG.jpg\" }\r\n    ],\r\n    \"Desserts\": [\r\n      { name: \"Gulab Jamun\", description: \"Soft milk balls soaked in sugar syrup.\", price: \"₹40\", image: \"https://i.imgur.com/cZJNV8r.jpg\" },\r\n      { name: \"Rasgulla\", description: \"Sponge balls in light sugar syrup.\", price: \"₹40\", image: \"https://i.imgur.com/qUeK0bc.jpg\" }\r\n    ]\r\n  };\r\n\r\n  const menuContainer = document.createElement(\"div\");\r\n  menuContainer.classList.add(\"menu-container\");\r\n\r\n  for (let category in menuData) {\r\n    const section = document.createElement(\"section\");\r\n    section.classList.add(\"menu-section\");\r\n\r\n    const heading = document.createElement(\"h2\");\r\n    heading.classList.add(\"menu-heading\");\r\n    heading.textContent = category;\r\n    section.appendChild(heading);\r\n\r\n    const itemsWrapper = document.createElement(\"div\");\r\n    itemsWrapper.classList.add(\"card-wrapper\");\r\n\r\n    menuData[category].forEach(item => {\r\n      const card = document.createElement(\"div\");\r\n      card.classList.add(\"menu-card\");\r\n\r\n      const img = document.createElement(\"img\");\r\n      img.src = item.image;\r\n      img.alt = item.name;\r\n      img.classList.add(\"menu-img\");\r\n\r\n      const title = document.createElement(\"h3\");\r\n      title.textContent = item.name;\r\n\r\n      const desc = document.createElement(\"p\");\r\n      desc.textContent = item.description;\r\n\r\n      const price = document.createElement(\"p\");\r\n      price.textContent = item.price;\r\n      price.classList.add(\"menu-price\");\r\n\r\n      card.appendChild(img);\r\n      card.appendChild(title);\r\n      card.appendChild(desc);\r\n      card.appendChild(price);\r\n\r\n      itemsWrapper.appendChild(card);\r\n    });\r\n\r\n    section.appendChild(itemsWrapper);\r\n    menuContainer.appendChild(section);\r\n  }\r\n\r\n  return menuContainer;\r\n}\r\n\r\nfunction loadMenu() {\r\n  const content = document.getElementById(\"content\");\r\n  content.innerHTML = '';\r\n  content.appendChild(createMenuSection());\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu-page.js?");

/***/ }),

/***/ "./src/sound.mp3":
/*!***********************!*\
  !*** ./src/sound.mp3 ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1aa66a08ffd92e2bd6cd.mp3\";\n\n//# sourceURL=webpack://restaurant-page/./src/sound.mp3?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;