module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/error.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/error.js":
/*!************************!*\
  !*** ./pages/error.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/williamforte/Canvas/SynapseFlash/pages/error.js\";\n\n\n\nfunction showErr(number) {\n  switch (number) {\n    case '401':\n      return \"401 Not Authorized\";\n\n    case '403':\n      return \"403 Forbidden\";\n\n    default:\n      return \"Something went wrong sorry :(\";\n  }\n}\n\nfunction NotAuthorized({\n  status\n}) {\n  const message = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(showErr(status));\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"jsx-3053049993\" + \" \" + 'noauth',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: \"jsx-3053049993\",\n      children: message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"3053049993\",\n      children: \".noauth.jsx-3053049993{float:left;width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}p.jsx-3053049993{float:left;margin:0;font:18px 'Roboto';color:red;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL1N5bmFwc2VGbGFzaC9wYWdlcy9lcnJvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQndCLEFBR2dDLEFBUUEsV0FQQSxBQVFGLFNBQ1UsRUFSUCxZQUNDLEtBUUgsVUFDZCwyREFSMkIsbUdBQ0osNkZBQ3ZCIiwiZmlsZSI6Ii9Vc2Vycy93aWxsaWFtZm9ydGUvQ2FudmFzL1N5bmFwc2VGbGFzaC9wYWdlcy9lcnJvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIHNob3dFcnIobnVtYmVyKSB7XG4gICAgc3dpdGNoKG51bWJlcikge1xuICAgICAgICBjYXNlICc0MDEnOlxuICAgICAgICAgICAgcmV0dXJuIFwiNDAxIE5vdCBBdXRob3JpemVkXCJcbiAgICAgICAgY2FzZSAnNDAzJzpcbiAgICAgICAgICAgIHJldHVybiBcIjQwMyBGb3JiaWRkZW5cIlxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgc29ycnkgOihcIlxuICAgIH1cbn1cblxuZnVuY3Rpb24gTm90QXV0aG9yaXplZCh7c3RhdHVzfSkge1xuXG4gICAgY29uc3QgbWVzc2FnZSA9IHVzZVN0YXRlKHNob3dFcnIoc3RhdHVzKSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdub2F1dGgnPlxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5ub2F1dGgge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxOHB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5Ob3RBdXRob3JpemVkLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKGN0eCkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCBjdHgucXVlcnkuZXJyb3JNZXNzYWdlXG4gICAgcmV0dXJuIHtzdGF0dXM6IG1lc3NhZ2V9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEF1dGhvcml6ZWQiXX0= */\\n/*@ sourceURL=/Users/williamforte/Canvas/SynapseFlash/pages/error.js */\"\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 9\n  }, this);\n}\n\nNotAuthorized.getInitialProps = async ctx => {\n  const message = await ctx.query.errorMessage;\n  return {\n    status: message\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotAuthorized);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9lcnJvci5qcz9hMzc2Il0sIm5hbWVzIjpbInNob3dFcnIiLCJudW1iZXIiLCJOb3RBdXRob3JpemVkIiwic3RhdHVzIiwibWVzc2FnZSIsInVzZVN0YXRlIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwicXVlcnkiLCJlcnJvck1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxNQUFqQixFQUF5QjtBQUNyQixVQUFPQSxNQUFQO0FBQ0ksU0FBSyxLQUFMO0FBQ0ksYUFBTyxvQkFBUDs7QUFDSixTQUFLLEtBQUw7QUFDSSxhQUFPLGVBQVA7O0FBQ0o7QUFDSSxhQUFPLCtCQUFQO0FBTlI7QUFRSDs7QUFFRCxTQUFTQyxhQUFULENBQXVCO0FBQUNDO0FBQUQsQ0FBdkIsRUFBaUM7QUFFN0IsUUFBTUMsT0FBTyxHQUFHQyxzREFBUSxDQUFDTCxPQUFPLENBQUNHLE1BQUQsQ0FBUixDQUF4QjtBQUVBLHNCQUNJO0FBQUEsd0NBQWUsUUFBZjtBQUFBLDRCQUNJO0FBQUE7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQkg7O0FBRURGLGFBQWEsQ0FBQ0ksZUFBZCxHQUFnQyxNQUFNQyxHQUFOLElBQWM7QUFDMUMsUUFBTUgsT0FBTyxHQUFHLE1BQU1HLEdBQUcsQ0FBQ0MsS0FBSixDQUFVQyxZQUFoQztBQUNBLFNBQU87QUFBQ04sVUFBTSxFQUFFQztBQUFULEdBQVA7QUFDSCxDQUhEOztBQUtlRiw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Vycm9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZnVuY3Rpb24gc2hvd0VycihudW1iZXIpIHtcbiAgICBzd2l0Y2gobnVtYmVyKSB7XG4gICAgICAgIGNhc2UgJzQwMSc6XG4gICAgICAgICAgICByZXR1cm4gXCI0MDEgTm90IEF1dGhvcml6ZWRcIlxuICAgICAgICBjYXNlICc0MDMnOlxuICAgICAgICAgICAgcmV0dXJuIFwiNDAzIEZvcmJpZGRlblwiXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gXCJTb21ldGhpbmcgd2VudCB3cm9uZyBzb3JyeSA6KFwiXG4gICAgfVxufVxuXG5mdW5jdGlvbiBOb3RBdXRob3JpemVkKHtzdGF0dXN9KSB7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gdXNlU3RhdGUoc2hvd0VycihzdGF0dXMpKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J25vYXV0aCc+XG4gICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLm5vYXV0aCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE4cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbk5vdEF1dGhvcml6ZWQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMoY3R4KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IGN0eC5xdWVyeS5lcnJvck1lc3NhZ2VcbiAgICByZXR1cm4ge3N0YXR1czogbWVzc2FnZX1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm90QXV0aG9yaXplZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/error.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });