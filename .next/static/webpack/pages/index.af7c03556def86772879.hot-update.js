webpackHotUpdate_N_E("pages/index",{

/***/ "./store/actions/postAction.js":
/*!*************************************!*\
  !*** ./store/actions/postAction.js ***!
  \*************************************/
/*! exports provided: fetchProjects, signIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchProjects\", function() { return fetchProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signIn\", function() { return signIn; });\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types */ \"./store/types.js\");\n/* harmony import */ var _services_projectservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/projectservice */ \"./services/projectservice.js\");\n/* harmony import */ var _services_apiservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/apiservice */ \"./services/apiservice.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"../../node_modules/jwt-decode/lib/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-cookie */ \"./node_modules/react-cookie/es6/index.js\");\n\n\n\n\n\n\n\n\nvar cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_7__[\"Cookies\"]();\nvar fetchProjects = function fetchProjects() {\n  return /*#__PURE__*/function () {\n    var _ref = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {\n      var res;\n      return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return Object(_services_projectservice__WEBPACK_IMPORTED_MODULE_3__[\"getProjects\"])(50);\n\n            case 2:\n              res = _context.sent;\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__[\"GET_PROJECTS\"],\n                payload: res\n              });\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar signIn = function signIn(email, password) {\n  return /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {\n      var res, decoded;\n      return _Users_williamforte_Canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_4__[\"loginRequest\"])(email, password);\n\n            case 2:\n              res = _context2.sent;\n              decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(res.accessToken);\n              cookies.set('user', decoded);\n              cookies.set('auth', res);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__[\"AUTH\"],\n                payload: res\n              });\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_2__[\"LOGIN\"],\n                payload: decoded\n              });\n              _context2.next = 10;\n              return next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');\n\n            case 10:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uLmpzPzRiZTEiXSwibmFtZXMiOlsiY29va2llcyIsIkNvb2tpZXMiLCJmZXRjaFByb2plY3RzIiwiZGlzcGF0Y2giLCJnZXRQcm9qZWN0cyIsInJlcyIsInR5cGUiLCJ0eXBlcyIsInBheWxvYWQiLCJzaWduSW4iLCJlbWFpbCIsInBhc3N3b3JkIiwibG9naW5SZXF1ZXN0IiwiZGVjb2RlZCIsImp3dF9kZWNvZGUiLCJhY2Nlc3NUb2tlbiIsInNldCIsIlJvdXRlciIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxPQUFPLEdBQUcsSUFBSUMsb0RBQUosRUFBaEI7QUFFTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUE7QUFBQSx3U0FBTSxpQkFBTUMsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNiQyw0RUFBVyxDQUFDLEVBQUQsQ0FERTs7QUFBQTtBQUN6QkMsaUJBRHlCO0FBRS9CRixzQkFBUSxDQUFDO0FBQ0xHLG9CQUFJLEVBQUVDLG1EQUREO0FBRUxDLHVCQUFPLEVBQUVIO0FBRkosZUFBRCxDQUFSOztBQUYrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFOOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBdEI7QUFRQSxJQUFNSSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFELEVBQVFDLFFBQVI7QUFBQTtBQUFBLHlTQUFxQixrQkFBTVIsUUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNyQlMseUVBQVksQ0FBQ0YsS0FBRCxFQUFRQyxRQUFSLENBRFM7O0FBQUE7QUFDakNOLGlCQURpQztBQUVqQ1EscUJBRmlDLEdBRXZCQyxpREFBVSxDQUFDVCxHQUFHLENBQUNVLFdBQUwsQ0FGYTtBQUd2Q2YscUJBQU8sQ0FBQ2dCLEdBQVIsQ0FBWSxNQUFaLEVBQW9CSCxPQUFwQjtBQUNBYixxQkFBTyxDQUFDZ0IsR0FBUixDQUFZLE1BQVosRUFBb0JYLEdBQXBCO0FBQ0FGLHNCQUFRLENBQUM7QUFDTEcsb0JBQUksRUFBRUMsMkNBREQ7QUFFTEMsdUJBQU8sRUFBRUg7QUFGSixlQUFELENBQVI7QUFJQUYsc0JBQVEsQ0FBQztBQUNMRyxvQkFBSSxFQUFFQyw0Q0FERDtBQUVMQyx1QkFBTyxFQUFFSztBQUZKLGVBQUQsQ0FBUjtBQVR1QztBQUFBLHFCQWFqQ0ksa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLEdBQVosQ0FiaUM7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBckI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFmIiwiZmlsZSI6Ii4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi4vdHlwZXMnXG5pbXBvcnQgeyBnZXRQcm9qZWN0cyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Byb2plY3RzZXJ2aWNlJ1xuaW1wb3J0IHsgbG9naW5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpc2VydmljZSdcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gJ2p3dC1kZWNvZGUnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBDb29raWVzIH0gZnJvbSAncmVhY3QtY29va2llJztcblxuY29uc3QgY29va2llcyA9IG5ldyBDb29raWVzKCk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RzID0gKCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFByb2plY3RzKDUwKVxuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogdHlwZXMuR0VUX1BST0pFQ1RTLFxuICAgICAgICBwYXlsb2FkOiByZXNcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3Qgc2lnbkluID0gKGVtYWlsLCBwYXNzd29yZCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGxvZ2luUmVxdWVzdChlbWFpbCwgcGFzc3dvcmQpXG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dF9kZWNvZGUocmVzLmFjY2Vzc1Rva2VuKVxuICAgIGNvb2tpZXMuc2V0KCd1c2VyJywgZGVjb2RlZClcbiAgICBjb29raWVzLnNldCgnYXV0aCcsIHJlcylcbiAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IHR5cGVzLkFVVEgsXG4gICAgICAgIHBheWxvYWQ6IHJlc1xuICAgIH0pXG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiB0eXBlcy5MT0dJTixcbiAgICAgICAgcGF5bG9hZDogZGVjb2RlZFxuICAgIH0pXG4gICAgYXdhaXQgUm91dGVyLnB1c2goJy8nKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/actions/postAction.js\n");

/***/ })

})