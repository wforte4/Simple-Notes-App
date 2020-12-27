webpackHotUpdate_N_E("pages/_app",{

/***/ "./store/reducers/postReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/postReducer.js ***!
  \***************************************/
/*! exports provided: postReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"postReducer\", function() { return postReducer; });\n/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__[\"Cookies\"]();\nvar initialState = {\n  projects: [],\n  profile: cookies.get('user'),\n  auth: cookies.get('auth'),\n  post: {},\n  loading: false,\n  error: null\n};\nvar postReducer = function postReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"GET_PROJECTS\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        projects: action.payload,\n        loading: false,\n        error: null\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"LOGIN\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        profile: action.payload,\n        loading: false,\n        error: null\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"AUTH\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        auth: action.payload,\n        loading: false,\n        eror: null\n      });\n\n    case _types__WEBPACK_IMPORTED_MODULE_1__[\"LOGOUT\"]:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        auth: action.payload,\n        loading: false,\n        eror: null\n      });\n\n    default:\n      return state;\n  }\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvcmVkdWNlcnMvcG9zdFJlZHVjZXIuanM/OWM1NiJdLCJuYW1lcyI6WyJjb29raWVzIiwiQ29va2llcyIsImluaXRpYWxTdGF0ZSIsInByb2plY3RzIiwicHJvZmlsZSIsImdldCIsImF1dGgiLCJwb3N0IiwibG9hZGluZyIsImVycm9yIiwicG9zdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJlcm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsSUFBSUMsb0RBQUosRUFBaEI7QUFFQSxJQUFNQyxZQUFZLEdBQUc7QUFDakJDLFVBQVEsRUFBRSxFQURPO0FBRWpCQyxTQUFPLEVBQUVKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZLE1BQVosQ0FGUTtBQUdqQkMsTUFBSSxFQUFFTixPQUFPLENBQUNLLEdBQVIsQ0FBWSxNQUFaLENBSFc7QUFJakJFLE1BQUksRUFBRSxFQUpXO0FBS2pCQyxTQUFPLEVBQUUsS0FMUTtBQU1qQkMsT0FBSyxFQUFFO0FBTlUsQ0FBckI7QUFTTyxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJULFlBQXlCO0FBQUEsTUFBWFUsTUFBVzs7QUFFekQsVUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0ksU0FBS0MsbURBQUw7QUFDSSw2Q0FDT0gsS0FEUDtBQUVJUixnQkFBUSxFQUFFUyxNQUFNLENBQUNHLE9BRnJCO0FBR0lQLGVBQU8sRUFBRSxLQUhiO0FBSUlDLGFBQUssRUFBRTtBQUpYOztBQU1KLFNBQUtLLDRDQUFMO0FBQ0ksNkNBQ09ILEtBRFA7QUFFSVAsZUFBTyxFQUFFUSxNQUFNLENBQUNHLE9BRnBCO0FBR0lQLGVBQU8sRUFBRSxLQUhiO0FBSUlDLGFBQUssRUFBRTtBQUpYOztBQU1KLFNBQUtLLDJDQUFMO0FBQ0ksNkNBQ09ILEtBRFA7QUFFSUwsWUFBSSxFQUFFTSxNQUFNLENBQUNHLE9BRmpCO0FBR0lQLGVBQU8sRUFBRSxLQUhiO0FBSUlRLFlBQUksRUFBRTtBQUpWOztBQU1KLFNBQUtGLDZDQUFMO0FBQ0ksNkNBQ09ILEtBRFA7QUFFSUwsWUFBSSxFQUFFTSxNQUFNLENBQUNHLE9BRmpCO0FBR0lQLGVBQU8sRUFBRSxLQUhiO0FBSUlRLFlBQUksRUFBRTtBQUpWOztBQU1KO0FBQ0ksYUFBT0wsS0FBUDtBQTlCUjtBQWdDSCxDQWxDTSIsImZpbGUiOiIuL3N0b3JlL3JlZHVjZXJzL3Bvc3RSZWR1Y2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJ1xuXG5jb25zdCBjb29raWVzID0gbmV3IENvb2tpZXMoKVxuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IFxuICAgIHByb2plY3RzOiBbXSxcbiAgICBwcm9maWxlOiBjb29raWVzLmdldCgndXNlcicpLFxuICAgIGF1dGg6IGNvb2tpZXMuZ2V0KCdhdXRoJyksXG4gICAgcG9zdDoge30sXG4gICAgbG9hZGluZzogZmFsc2UsXG4gICAgZXJyb3I6IG51bGxcbn1cblxuZXhwb3J0IGNvbnN0IHBvc3RSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcblxuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHR5cGVzLkdFVF9QUk9KRUNUUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgcHJvamVjdHM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgdHlwZXMuTE9HSU46XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHByb2ZpbGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgdHlwZXMuQVVUSDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJvcjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICBjYXNlIHR5cGVzLkxPR09VVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgYXV0aDogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgZXJvcjogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/postReducer.js\n");

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: GET_PROJECTS, LOGIN, LOGOUT, AUTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_PROJECTS\", function() { return GET_PROJECTS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGIN\", function() { return LOGIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOGOUT\", function() { return LOGOUT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AUTH\", function() { return AUTH; });\nvar GET_PROJECTS = 'GET_PROJECTS';\nvar LOGIN = 'LOGIN';\nvar LOGOUT = 'LOGOUT';\nvar AUTH = 'AUTH';\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvdHlwZXMuanM/MGM3ZiJdLCJuYW1lcyI6WyJHRVRfUFJPSkVDVFMiLCJMT0dJTiIsIkxPR09VVCIsIkFVVEgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxJQUFNQSxZQUFZLEdBQUcsY0FBckI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsT0FBZDtBQUNBLElBQU1DLE1BQU0sR0FBRyxRQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHLE1BQWIiLCJmaWxlIjoiLi9zdG9yZS90eXBlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBHRVRfUFJPSkVDVFMgPSAnR0VUX1BST0pFQ1RTJztcbmV4cG9ydCBjb25zdCBMT0dJTiA9ICdMT0dJTic7XG5leHBvcnQgY29uc3QgTE9HT1VUID0gJ0xPR09VVCc7XG5leHBvcnQgY29uc3QgQVVUSCA9ICdBVVRIJzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/types.js\n");

/***/ })

})