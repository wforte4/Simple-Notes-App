webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/wforte/canvas/SynapseFlash/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction Dashboard() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      profile = _useSelector.profile;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    thought: '',\n    user: profile.email\n  }),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  var handleType = function handleType(e) {\n    e.persist();\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, e.target.value)));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3222772814\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'dash',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3222772814\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'welcome',\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3222772814\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n        children: [\"Hello, \", profile && profile.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3222772814\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'uploadthought',\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3222772814\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3222772814\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n          children: \"Thought\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"textarea\", {\n          name: \"thought\",\n          value: inputs.thought,\n          onChange: handleType,\n          required: true,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3222772814\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"3222772814\",\n      dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat],\n      children: \".welcome.__jsx-style-dynamic-selector{float:left;width:90%;margin:30px 5%;border-radius:4px;box-shadow:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, \";}.welcome.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{float:left;font:18px 'Montserrat';}.dash.__jsx-style-dynamic-selector{float:left;width:100%;margin-top:100px;min-height:800px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dmb3J0ZS9jYW52YXMvU3luYXBzZUZsYXNoL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ3dCLEFBR2dDLEFBT0EsQUFJQSxXQVZELEFBT2EsQUFJWixVQVZJLENBV0UsWUFKckIsRUFOc0IsR0FXRCxlQVZ1QixFQVc1QyxzQ0FWQSIsImZpbGUiOiIvaG9tZS93Zm9ydGUvY2FudmFzL1N5bmFwc2VGbGFzaC9wYWdlcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuXG5cbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcblxuICAgIGNvbnN0IHtwcm9maWxlfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdGhvdWdodDogJycsIFxuICAgICAgICB1c2VyOiBwcm9maWxlLmVtYWlsXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZVR5cGUgPSAoZSkgPT4ge1xuICAgICAgICBlLnBlcnNpc3QoKVxuICAgICAgICBzZXRJbnB1dHMoe1xuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXNoJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lJz5cbiAgICAgICAgICAgICAgICA8aDE+SGVsbG8sIHtwcm9maWxlICYmIHByb2ZpbGUubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndXBsb2FkdGhvdWdodCc+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaG91Z2h0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0aG91Z2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy50aG91Z2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC53ZWxjb21lIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCA1JTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAke1RoZW1lLnNoLm1hdH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC53ZWxjb21lIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE4cHggJ01vbnRzZXJyYXQnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGFzaCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQiXX0= */\\n/*@ sourceURL=/home/wforte/canvas/SynapseFlash/pages/dashboard.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Dashboard, \"4nsr/VLhslXbIKpqjXqZz2MtxU4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"]];\n});\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJwcm9maWxlIiwidXNlU3RhdGUiLCJ0aG91Z2h0IiwidXNlciIsImVtYWlsIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlVHlwZSIsImUiLCJwZXJzaXN0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiVGhlbWUiLCJzaCIsIm1hdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEscUJBRUNDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FGWjtBQUFBLE1BRVZDLE9BRlUsZ0JBRVZBLE9BRlU7O0FBQUEsa0JBR1dDLHNEQUFRLENBQUM7QUFDakNDLFdBQU8sRUFBRSxFQUR3QjtBQUVqQ0MsUUFBSSxFQUFFSCxPQUFPLENBQUNJO0FBRm1CLEdBQUQsQ0FIbkI7QUFBQSxNQUdWQyxNQUhVO0FBQUEsTUFHRkMsU0FIRTs7QUFRakIsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUNDLE9BQUY7QUFDQUgsYUFBUyxpQ0FDRkQsTUFERSxrSkFFSkcsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBRkwsRUFFWUgsQ0FBQyxDQUFDRSxNQUFGLENBQVNFLEtBRnJCLEdBQVQ7QUFJSCxHQU5EOztBQVFBLHNCQUNJO0FBQUEsZ0dBc0IwQkMscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQXRCbkMsYUFBZSxNQUFmO0FBQUEsNEJBQ0k7QUFBQSxrR0FxQnNCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBckIvQixhQUFlLFNBQWY7QUFBQSw2QkFDSTtBQUFBLG9HQW9Ca0JGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FwQjNCO0FBQUEsOEJBQVlmLE9BQU8sSUFBSUEsT0FBTyxDQUFDVyxJQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFBLGtHQWlCc0JFLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FqQi9CLGFBQWUsZUFBZjtBQUFBLDZCQUNJO0FBQUEsb0dBZ0JrQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQWhCM0I7QUFBQSxnQ0FDSTtBQUFBLHNHQWVjRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBZnZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFDSSxjQUFJLEVBQUMsU0FEVDtBQUVJLGVBQUssRUFBRVYsTUFBTSxDQUFDSCxPQUZsQjtBQUdJLGtCQUFRLEVBQUVLLFVBSGQ7QUFJSSxrQkFBUSxNQUpaO0FBQUEsc0dBY2NNLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FkdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUEsZ0JBc0IwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQXRCbkM7QUFBQSxpSUFzQjBCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBdEJuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBc0NIOztHQXREUW5CLFM7VUFFYUMsdUQ7OztLQUZiRCxTO0FBd0RNQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2Rhc2hib2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBUaGVtZSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5cblxuZnVuY3Rpb24gRGFzaGJvYXJkKCkge1xuXG4gICAgY29uc3Qge3Byb2ZpbGV9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucG9zdClcbiAgICBjb25zdCBbaW5wdXRzLCBzZXRJbnB1dHNdID0gdXNlU3RhdGUoe1xuICAgICAgICB0aG91Z2h0OiAnJywgXG4gICAgICAgIHVzZXI6IHByb2ZpbGUuZW1haWxcbiAgICB9KVxuXG4gICAgY29uc3QgaGFuZGxlVHlwZSA9IChlKSA9PiB7XG4gICAgICAgIGUucGVyc2lzdCgpXG4gICAgICAgIHNldElucHV0cyh7XG4gICAgICAgICAgICAuLi5pbnB1dHMsXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Rhc2gnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dlbGNvbWUnPlxuICAgICAgICAgICAgICAgIDxoMT5IZWxsbywge3Byb2ZpbGUgJiYgcHJvZmlsZS5uYW1lfTwvaDE+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1cGxvYWR0aG91Z2h0Jz5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlRob3VnaHQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Rob3VnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnRob3VnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLndlbGNvbWUge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDUlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7VGhlbWUuc2gubWF0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLndlbGNvbWUgaDEge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMThweCAnTW9udHNlcnJhdCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5kYXNoIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogODAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})