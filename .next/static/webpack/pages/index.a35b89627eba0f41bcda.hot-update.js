webpackHotUpdate_N_E("pages/index",{

/***/ "./store/actions/postAction.js":
/*!*************************************!*\
  !*** ./store/actions/postAction.js ***!
  \*************************************/
/*! exports provided: fetchProjects, loginAttempt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProjects\", function() { return fetchProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAttempt\", function() { return loginAttempt; });\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n/* harmony import */ var _services_projectservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/projectservice */ \"./services/projectservice.js\");\n/* harmony import */ var _services_apiservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/apiservice */ \"./services/apiservice.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"../../node_modules/jwt-decode/lib/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar fetchProjects = function fetchProjects() {\n  return /*#__PURE__*/function () {\n    var _ref = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n      var res;\n      return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_services_projectservice__WEBPACK_IMPORTED_MODULE_3__[\"getProjects\"])(50);\n\n            case 2:\n              res = _context.sent;\n              console.log(res);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__[\"GET_PROJECTS\"],\n                payload: res\n              });\n\n            case 5:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar loginAttempt = function loginAttempt(email, password) {\n  return /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {\n      var res, decoded;\n      return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_4__[\"loginRequest\"])(email, password);\n\n            case 2:\n              res = _context2.sent;\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__[\"AUTH\"],\n                payload: res\n              });\n              decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(res.accessToken);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__[\"LOGIN\"],\n                payload: decoded\n              });\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uLmpzPzRiZTEiXSwibmFtZXMiOlsiZmV0Y2hQcm9qZWN0cyIsImRpc3BhdGNoIiwiZ2V0UHJvamVjdHMiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInR5cGVzIiwicGF5bG9hZCIsImxvZ2luQXR0ZW1wdCIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dpblJlcXVlc3QiLCJkZWNvZGVkIiwiand0X2RlY29kZSIsImFjY2Vzc1Rva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUE7QUFBQSx3U0FBTSxpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNiQyw0RUFBVyxDQUFDLEVBQUQsQ0FERTs7QUFBQTtBQUN6QkMsaUJBRHlCO0FBRS9CQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQUYsc0JBQVEsQ0FBQztBQUNMSyxvQkFBSSxFQUFFQyxtREFERDtBQUVMQyx1QkFBTyxFQUFFTDtBQUZKLGVBQUQsQ0FBUjs7QUFIK0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBTjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQXRCO0FBU0EsSUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFRQyxRQUFSO0FBQUE7QUFBQSx5U0FBcUIsa0JBQU1WLFFBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDM0JXLHlFQUFZLENBQUNGLEtBQUQsRUFBUUMsUUFBUixDQURlOztBQUFBO0FBQ3ZDUixpQkFEdUM7QUFFN0NGLHNCQUFRLENBQUM7QUFDTEssb0JBQUksRUFBRUMsMkNBREQ7QUFFTEMsdUJBQU8sRUFBRUw7QUFGSixlQUFELENBQVI7QUFJTVUscUJBTnVDLEdBTTdCQyxpREFBVSxDQUFDWCxHQUFHLENBQUNZLFdBQUwsQ0FObUI7QUFPN0NkLHNCQUFRLENBQUM7QUFDTEssb0JBQUksRUFBRUMsNENBREQ7QUFFTEMsdUJBQU8sRUFBRUs7QUFGSixlQUFELENBQVI7O0FBUDZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBckIiLCJmaWxlIjoiLi9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcbmltcG9ydCB7IGdldFByb2plY3RzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvcHJvamVjdHNlcnZpY2UnXG5pbXBvcnQgeyBsb2dpblJlcXVlc3QgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hcGlzZXJ2aWNlJ1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFByb2plY3RzKDUwKVxuICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IHR5cGVzLkdFVF9QUk9KRUNUUyxcbiAgICAgICAgcGF5bG9hZDogcmVzXG4gICAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luQXR0ZW1wdCA9IChlbWFpbCwgcGFzc3dvcmQpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBsb2dpblJlcXVlc3QoZW1haWwsIHBhc3N3b3JkKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogdHlwZXMuQVVUSCxcbiAgICAgICAgcGF5bG9hZDogcmVzXG4gICAgfSlcbiAgICBjb25zdCBkZWNvZGVkID0gand0X2RlY29kZShyZXMuYWNjZXNzVG9rZW4pXG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiB0eXBlcy5MT0dJTixcbiAgICAgICAgcGF5bG9hZDogZGVjb2RlZFxuICAgIH0pXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/actions/postAction.js\n");

/***/ })

})