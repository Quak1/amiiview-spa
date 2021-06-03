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

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://amiibo-spa/./src/styles/styles.scss?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.ts\");\n/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ \"./src/styles/styles.scss\");\n\n\nconsole.log(\"Hola mundo\");\nwindow.addEventListener('load', _routes_index__WEBPACK_IMPORTED_MODULE_0__.default);\nwindow.addEventListener('hashchange', _routes_index__WEBPACK_IMPORTED_MODULE_0__.default);\n\n\n//# sourceURL=webpack://amiibo-spa/./src/index.ts?");

/***/ }),

/***/ "./src/pages/Amiibo.ts":
/*!*****************************!*\
  !*** ./src/pages/Amiibo.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.ts\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar Amiibo = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var hash, data, amiibo, serie, view;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                hash = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_1__.default)();\n                return [4 /*yield*/, (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)(\"amiibo/?id=\" + hash)];\n            case 1:\n                data = _a.sent();\n                amiibo = data.amiibo;\n                return [4 /*yield*/, (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)(\"amiiboseries?name=\" + amiibo.amiiboSeries)];\n            case 2:\n                serie = _a.sent();\n                view = \"\\n\\t\\t<div class=\\\"Amiibo-inner\\\">\\n\\t\\t\\t<a href=\\\"#/\" + serie.amiibo[0].key + \"/\\\">\\n\\t\\t\\t\\t<h2>Amiibo series: \" + serie.amiibo[0].name + \"</h2>\\n\\t\\t\\t</a>\\n\\t\\t\\t<article class=\\\"Amiibo-card\\\">\\n\\t\\t\\t\\t<img src=\\\"\" + amiibo.image + \"\\\" alt=\\\"\" + amiibo.name + \" picture\\\">\\n\\t\\t\\t\\t<h2>\" + amiibo.name + \"</h2>\\n\\t\\t\\t</article>\\n\\t\\t\\t<article class=\\\"Amiibo-card\\\">\\n\\t\\t\\t\\t<h3>Character: \" + amiibo.character + \"</h3>\\n\\t\\t\\t\\t<h3>Game Series: \" + amiibo.gameSeries + \"</h3>\\n\\t\\t\\t\\t<h3>Release Dates: <br>\" + Object.entries(amiibo.release).map(function (entry) { return \"\\n\\t\\t\\t\\t\\t\" + entry[0] + \": \" + entry[1] + \"<br>\\n\\t\\t\\t\\t\"; }).join(\"\") + \"</h3>\\n\\t\\t\\t\\t<h3>Amiibo Type: \" + amiibo.type + \"</h3>\\n\\t\\t\\t</article>\\n\\t\\t</div>\\n\\t\";\n                return [2 /*return*/, view];\n        }\n    });\n}); };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Amiibo);\n\n\n//# sourceURL=webpack://amiibo-spa/./src/pages/Amiibo.ts?");

/***/ }),

/***/ "./src/pages/Error404.ts":
/*!*******************************!*\
  !*** ./src/pages/Error404.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Error404 = function () {\n    var view = \"\\n\\t\\t<div class=\\\"Error404\\\">\\n\\t\\t\\t<h2>Error 404</h2>\\n\\t\\t</div>\\n\\t\";\n    return view;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404);\n\n\n//# sourceURL=webpack://amiibo-spa/./src/pages/Error404.ts?");

/***/ }),

/***/ "./src/pages/Home.ts":
/*!***************************!*\
  !*** ./src/pages/Home.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n;\nvar makeList = function (series) { return __awaiter(void 0, void 0, void 0, function () {\n    var amiiboList, firstAmiibo, view;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0: return [4 /*yield*/, (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)(\"amiibo/?amiiboSeries=\" + series.key)];\n            case 1:\n                amiiboList = _a.sent();\n                firstAmiibo = amiiboList.amiibo[0];\n                view = \"\\n\\t\\t<article class=\\\"Series-item\\\">\\n\\t\\t\\t<a href=\\\"#/\" + series.key + \"/\\\">\\n\\t\\t\\t\\t<h2>\" + series.name + \"</h2>\\n\\t\\t\\t</a>\\n\\t\\t\\t<img src=\\\"\" + firstAmiibo.image + \"\\\" alt=\\\"\" + firstAmiibo.name + \"\\\">\\n\\t\\t</article>\";\n                return [2 /*return*/, view];\n        }\n    });\n}); };\nvar Home = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var seriesList, view, _a;\n    return __generator(this, function (_b) {\n        switch (_b.label) {\n            case 0: return [4 /*yield*/, (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)('amiiboseries')];\n            case 1:\n                seriesList = _b.sent();\n                _a = \"\\n\\t\\t<h2>Available Amiibo Series:</h2>\\n\\t\\t<div class=\\\"Series\\\">\\n\\t\\t\";\n                return [4 /*yield*/, Promise.all(seriesList.amiibo.map(function (series) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n                        return [2 /*return*/, makeList(series)];\n                    }); }); }))];\n            case 2:\n                view = _a + (_b.sent()).join(\"\") + \"\\n\\t\\t</div>\\n\\t\";\n                return [2 /*return*/, view];\n        }\n    });\n}); };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n\n//# sourceURL=webpack://amiibo-spa/./src/pages/Home.ts?");

/***/ }),

/***/ "./src/pages/Series.ts":
/*!*****************************!*\
  !*** ./src/pages/Series.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.ts\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\nvar Series = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var hash, amiibos, serie, view;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                hash = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_1__.default)();\n                return [4 /*yield*/, (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)(\"amiibo/?amiiboSeries=\" + hash)];\n            case 1:\n                amiibos = _a.sent();\n                return [4 /*yield*/, (0,_utils_getData__WEBPACK_IMPORTED_MODULE_0__.default)(\"amiiboseries?key=\" + hash)];\n            case 2:\n                serie = _a.sent();\n                view = \"\\n\\t\\t<div class=\\\"Amiibos\\\">\\n\\t\\t<h2>Amiibo Series: \" + serie.amiibo.name + \"</h2>\\n\\t\\t\" + amiibos.amiibo.map(function (amiibo) { return \"\\n\\t\\t\\t<article class=\\\"Amiibo-item\\\">\\n\\t\\t\\t\\t<img src=\\\"\" + amiibo.image + \"\\\" alt=\\\"\" + amiibo.character + \" picture\\\">\\n\\t\\t\\t\\t\\t<a href=\\\"#/\" + amiibo.head + amiibo.tail + \"/\\\">\\n\\t\\t\\t\\t\\t\\t<h2>\" + amiibo.character + \" from \" + amiibo.gameSeries + \"</h2>\\n\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t</article>\\n\\t\\t\"; }).join(\"\") + \"\\n\\t\\t</div>\\n\\t\";\n                return [2 /*return*/, view];\n        }\n    });\n}); };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Series);\n\n\n//# sourceURL=webpack://amiibo-spa/./src/pages/Series.ts?");

/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.ts\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.ts\");\n/* harmony import */ var _pages_Amiibo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/Amiibo */ \"./src/pages/Amiibo.ts\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.ts\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.ts\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.ts\");\n/* harmony import */ var _pages_Series__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Series */ \"./src/pages/Series.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\n\nvar routes = {\n    '/': _pages_Home__WEBPACK_IMPORTED_MODULE_1__.default,\n    '/:id': _pages_Amiibo__WEBPACK_IMPORTED_MODULE_2__.default,\n    '/series': _pages_Series__WEBPACK_IMPORTED_MODULE_6__.default,\n    // '/contact': 'Contact',\n};\n// https://dev.to/mapleleaf/indexing-objects-in-typescript-1cgi\n// https://basarat.gitbook.io/typescript/type-system\nfunction hasKey(obj, key) {\n    return key in obj;\n}\nvar router = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var header, content, _a, hash, route, render, _b;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                header = document.getElementById('header');\n                content = document.getElementById('content');\n                _a = header;\n                return [4 /*yield*/, (0,_templates_Header__WEBPACK_IMPORTED_MODULE_0__.default)()];\n            case 1:\n                _a.innerHTML = _c.sent();\n                hash = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_4__.default)();\n                return [4 /*yield*/, (0,_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_5__.default)(hash)];\n            case 2:\n                route = _c.sent();\n                render = hasKey(routes, route) ? routes[route] : _pages_Error404__WEBPACK_IMPORTED_MODULE_3__.default;\n                _b = content;\n                return [4 /*yield*/, render()];\n            case 3:\n                _b.innerHTML = (_c.sent());\n                return [2 /*return*/];\n        }\n    });\n}); };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n\n//# sourceURL=webpack://amiibo-spa/./src/routes/index.ts?");

/***/ }),

/***/ "./src/templates/Header.ts":
/*!*********************************!*\
  !*** ./src/templates/Header.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Header = function () {\n    var view = \"\\n\\t\\t<div class=\\\"header__logo\\\">\\n\\t\\t\\t<h1>\\n\\t\\t\\t\\t<a href=\\\"/amiiview-spa/#\\\">\\n\\t\\t\\t\\t\\tAmiiview\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t<a href=\\\"/\\\">\\n\\t\\t\\t\\t\\tAmiiview-home\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</h1>\\n\\t\\t</div>\\n\\t\\t<div class=\\\"header__nav\\\">\\n\\t\\t\\t<a href=\\\"#/about/\\\">\\n\\t\\t\\t\\tAbout\\n\\t\\t\\t</a>\\n\\t\\t</div>\\n\\t\";\n    return view;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n\n//# sourceURL=webpack://amiibo-spa/./src/templates/Header.ts?");

/***/ }),

/***/ "./src/utils/getData.ts":
/*!******************************!*\
  !*** ./src/utils/getData.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar API = 'https://www.amiiboapi.com/api/';\nvar getData = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    var apiURL, response, data, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                apiURL = id ? \"\" + API + id : API;\n                _a.label = 1;\n            case 1:\n                _a.trys.push([1, 4, , 5]);\n                return [4 /*yield*/, fetch(apiURL)];\n            case 2:\n                response = _a.sent();\n                return [4 /*yield*/, response.json()];\n            case 3:\n                data = _a.sent();\n                return [2 /*return*/, data];\n            case 4:\n                error_1 = _a.sent();\n                console.log('Fetch error', error_1);\n                return [3 /*break*/, 5];\n            case 5:\n                ;\n                return [2 /*return*/];\n        }\n    });\n}); };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://amiibo-spa/./src/utils/getData.ts?");

/***/ }),

/***/ "./src/utils/getHash.ts":
/*!******************************!*\
  !*** ./src/utils/getHash.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar getHash = function () {\n    return location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHash);\n\n\n//# sourceURL=webpack://amiibo-spa/./src/utils/getHash.ts?");

/***/ }),

/***/ "./src/utils/resolveRoutes.ts":
/*!************************************!*\
  !*** ./src/utils/resolveRoutes.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar resolveRoutes = function (route) {\n    if (/[a-z]+$/.test(route)) {\n        return \"/\" + route;\n    }\n    else if (route.startsWith('0x')) {\n        return \"/series\";\n    }\n    return route === '/' ? route : '/:id';\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveRoutes);\n\n\n//# sourceURL=webpack://amiibo-spa/./src/utils/resolveRoutes.ts?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;