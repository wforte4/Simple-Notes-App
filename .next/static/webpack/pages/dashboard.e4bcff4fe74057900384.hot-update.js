webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n\n\nvar _jsxFileName = \"/home/wforte/canvas/SynapseFlash/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Dashboard() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      profile = _useSelector.profile;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n    thought: '',\n    user: profile.email\n  }),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1203103073\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sh.mat]]]) + \" \" + 'dash',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1203103073\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sh.mat]]]) + \" \" + 'welcome',\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1203103073\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sh.mat]]]),\n        children: [\"Hello, \", profile && profile.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1203103073\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sh.mat]]]) + \" \" + 'uploadthought',\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1203103073\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sh.mat]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1203103073\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sh.mat]]]),\n          children: \"Thought\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([[\"1203103073\", [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sh.mat]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      id: \"1203103073\",\n      dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sh.mat],\n      children: \".welcome.__jsx-style-dynamic-selector{float:left;width:90%;margin:30px 5%;border-radius:4px;box-shadow:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"].sh.mat, \";}.dash.__jsx-style-dynamic-selector{float:left;width:100%;margin-top:100px;min-height:800px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dmb3J0ZS9jYW52YXMvU3luYXBzZUZsYXNoL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQndCLEFBR2dDLEFBT0EsV0FORCxBQU9DLFVBTkksQ0FPRSxjQU5DLEdBT0QsZUFOdUIsRUFPNUMsc0NBTkEiLCJmaWxlIjoiL2hvbWUvd2ZvcnRlL2NhbnZhcy9TeW5hcHNlRmxhc2gvcGFnZXMvZGFzaGJvYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcblxuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cbiAgICBjb25zdCB7cHJvZmlsZX0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KVxuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHRob3VnaHQ6ICcnLCBcbiAgICAgICAgdXNlcjogcHJvZmlsZS5lbWFpbFxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGFzaCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZSc+XG4gICAgICAgICAgICAgICAgPGgxPkhlbGxvLCB7cHJvZmlsZSAmJiBwcm9maWxlLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VwbG9hZHRob3VnaHQnPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGhvdWdodDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLndlbGNvbWUge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDUlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7VGhlbWUuc2gubWF0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRhc2gge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkIl19 */\\n/*@ sourceURL=/home/wforte/canvas/SynapseFlash/pages/dashboard.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Dashboard, \"4nsr/VLhslXbIKpqjXqZz2MtxU4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"]];\n});\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJwcm9maWxlIiwidXNlU3RhdGUiLCJ0aG91Z2h0IiwidXNlciIsImVtYWlsIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiVGhlbWUiLCJzaCIsIm1hdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEscUJBRUNDLCtEQUFXLENBQUMsVUFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBVjtBQUFBLEdBQU4sQ0FGWjtBQUFBLE1BRVZDLE9BRlUsZ0JBRVZBLE9BRlU7O0FBQUEsa0JBR1dDLHNEQUFRLENBQUM7QUFDakNDLFdBQU8sRUFBRSxFQUR3QjtBQUVqQ0MsUUFBSSxFQUFFSCxPQUFPLENBQUNJO0FBRm1CLEdBQUQsQ0FIbkI7QUFBQSxNQUdWQyxNQUhVO0FBQUEsTUFHRkMsU0FIRTs7QUFRakIsc0JBQ0k7QUFBQSxnR0FtQjBCQyxxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBbkJuQyxhQUFlLE1BQWY7QUFBQSw0QkFDSTtBQUFBLGtHQWtCc0JGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FsQi9CLGFBQWUsU0FBZjtBQUFBLDZCQUNJO0FBQUEsb0dBaUJrQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQWpCM0I7QUFBQSw4QkFBWVQsT0FBTyxJQUFJQSxPQUFPLENBQUNVLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQUEsa0dBY3NCSCxxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBZC9CLGFBQWUsZUFBZjtBQUFBLDZCQUNJO0FBQUEsb0dBYWtCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBYjNCO0FBQUEsZ0NBQ0k7QUFBQSxzR0FZY0YscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQVp2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEsc0dBV2NGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FYdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSjtBQUFBO0FBQUEsZ0JBbUIwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQW5CbkM7QUFBQSxpSUFtQjBCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBbkJuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBK0JIOztHQXZDUWIsUztVQUVhQyx1RDs7O0tBRmJELFM7QUF5Q01BLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcblxuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cbiAgICBjb25zdCB7cHJvZmlsZX0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KVxuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHRob3VnaHQ6ICcnLCBcbiAgICAgICAgdXNlcjogcHJvZmlsZS5lbWFpbFxuICAgIH0pXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGFzaCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZSc+XG4gICAgICAgICAgICAgICAgPGgxPkhlbGxvLCB7cHJvZmlsZSAmJiBwcm9maWxlLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VwbG9hZHRob3VnaHQnPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGhvdWdodDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLndlbGNvbWUge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDUlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7VGhlbWUuc2gubWF0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRhc2gge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})