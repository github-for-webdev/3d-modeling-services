"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_3dglo"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm() {\n  var errorMessage = \"Что-то пошло нет так...\",\n      loadMessage = \"Загрузка...\",\n      successMesage = \"Спасибо! Мы скоро с вами свяжемся!\";\n  var form = document.querySelectorAll(\"form\");\n  var loaddMessage = document.createElement(\"div\");\n  var loaddSquare = document.createElement(\"div\");\n  var stususMessage = document.createElement(\"div\");\n  loaddMessage.classList.add(\"example\");\n  loaddSquare.classList.add(\"sk-plane\");\n  stususMessage.style.cssText = \"font-size: 2rem\";\n  stususMessage.style.cssText = \"color: #fff\";\n  form.forEach(function (elem) {\n    elem.addEventListener(\"submit\", function (event) {\n      var input = elem.querySelectorAll(\"input\");\n      event.preventDefault();\n      elem.appendChild(stususMessage);\n      elem.appendChild(loaddMessage);\n      loaddMessage.appendChild(loaddSquare);\n      stususMessage.textContent = loadMessage;\n      var formData = new FormData(elem);\n      var body = {};\n      formData.forEach(function (val, key) {\n        body[key] = val;\n      });\n\n      var postData = function postData(body) {\n        return fetch(\"./server.php\", {\n          method: \"POST\",\n          headers: {\n            \"Content-type\": \"application/json\"\n          },\n          body: JSON.stringify(body)\n        });\n      };\n\n      postData(body).then(function (response) {\n        if (response.status !== 200) {\n          throw new Error(\"status netwokr not 200\");\n        }\n\n        stususMessage.textContent = successMesage;\n        setTimeout(function () {\n          return stususMessage.textContent = \"\";\n        }, 5000);\n        loaddMessage.remove();\n        input.forEach(function (input) {\n          input.value = \"\";\n        });\n      })[\"catch\"](function (error) {\n        stususMessage.textContent = errorMessage;\n        console.error(error);\n        setTimeout(function () {\n          loaddMessage.remove();\n          stususMessage.textContent = \"\";\n        }, 5000);\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://3dglo/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f50a4ee47f263101fdb6")
/******/ })();
/******/ 
/******/ }
);