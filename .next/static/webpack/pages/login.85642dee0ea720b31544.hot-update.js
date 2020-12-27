webpackHotUpdate_N_E("pages/login",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/postAction */ \"./store/actions/postAction.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/wforte/canvas/SynapseFlash/pages/login.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n\n  var handleType = function handleType(e) {\n    e.persist();\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, e.target.value)));\n  };\n\n  var submitForm = function submitForm(e) {\n    e.preventDefault();\n    dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_5__[\"signIn\"])(inputs.email, inputs.password));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    id: \"body\",\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"210446185\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]]),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n      id: \"bgbody\",\n      src: \"/mainbg.png\",\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"210446185\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]])\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n      onSubmit: submitForm,\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"210446185\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]]),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n        src: \"/userIcon.png\",\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"210446185\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        name: \"email\",\n        value: inputs.email,\n        onChange: handleType,\n        placeholder: \"Email Address\",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"210446185\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n        name: \"password\",\n        value: inputs.password,\n        onChange: handleType,\n        placeholder: \"Password\",\n        required: true,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"210446185\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]])\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n        type: \"submit\",\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"210446185\", [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat]]]),\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"210446185\",\n      dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat],\n      children: \"form.__jsx-style-dynamic-selector{width:350px;height:450px;position:absolute;top:50%;left:50%;padding:5%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);background:white;border-radius:3px;box-shadow:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, \";}input.__jsx-style-dynamic-selector{float:left;width:80%;padding:8px 5%;margin:10px 5%;font:15px 'Roboto';border:1px solid grey;border-radius:10px;}button.__jsx-style-dynamic-selector{float:left;width:80%;padding:5px 5%;margin:5px 5%;margin-top:40px;border:none;box-shadow:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_6__[\"default\"].sh.mat, \";cursor:pointer;font:15px 'Roboto';}form.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{float:left;width:80px;height:80px;margin:20px 0;margin-top:-10px;}#body.__jsx-style-dynamic-selector{float:left;width:100%;height:100%;position:relative;}#bgbody.__jsx-style-dynamic-selector{position:absolute;top:50%;left:50%;width:100%;height:100%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dmb3J0ZS9jYW52YXMvU3luYXBzZUZsYXNoL3BhZ2VzL2xvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdEd0IsQUFHaUMsQUFnQkQsQUFTQSxBQVdBLEFBT0EsQUFNTyxXQWhDUixBQVNBLEFBV0MsQUFPQSxDQTNDRSxNQWlETCxHQWhDTyxBQVNBLENBV0gsQUFPQSxHQTNDTSxDQWlEVCxRQVpLLEFBT0ksQ0FNUCxDQWpDSSxBQVNELE9BekJOLEdBa0RJLEVBYkssRUFYRCxDQXpCUCxBQWdCVSxDQTJCdkIsTUFPbUMsRUFqRHBCLEtBb0NmLENBWGdCLElBVFUsQ0FmVCxPQXlCMkIsY0FUckIsbUJBQ3ZCLE9BU21CLGVBQ0ksWUExQkcsT0EyQjFCLFdBcUJBLDREQS9DMkIsbUdBQ0osNkZBQ1kseUdBQ2QsaUJBQ0Msa0JBQ3NCLHdDQUM1QyIsImZpbGUiOiIvaG9tZS93Zm9ydGUvY2FudmFzL1N5bmFwc2VGbGFzaC9wYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb25cIlxuaW1wb3J0IFRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIlxuXG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICB9KVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gICAgY29uc3QgaGFuZGxlVHlwZSA9IChlKSA9PiB7XG4gICAgICAgIGUucGVyc2lzdCgpXG4gICAgICAgIHNldElucHV0cyh7XG4gICAgICAgICAgICAuLi5pbnB1dHMsXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBkaXNwYXRjaChzaWduSW4oaW5wdXRzLmVtYWlsLCBpbnB1dHMucGFzc3dvcmQpKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJib2R5XCI+XG4gICAgICAgICAgICA8aW1nIGlkPVwiYmdib2R5XCIgc3JjPVwiL21haW5iZy5wbmdcIi8+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXNlckljb24ucG5nXCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVR5cGV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCBBZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7VGhlbWUuc2gubWF0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDUlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggNSU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE1cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNSU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDUlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7VGhlbWUuc2gubWF0fTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxNXB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2JnYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXX0= */\\n/*@ sourceURL=/home/wforte/canvas/SynapseFlash/pages/login.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Login, \"wYRAMCrvae4SkFLKkLSriKVOKns=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"]];\n});\n\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbG9naW4uanM/M2I2OSJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImlucHV0cyIsInNldElucHV0cyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJoYW5kbGVUeXBlIiwiZSIsInBlcnNpc3QiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJzdWJtaXRGb3JtIiwicHJldmVudERlZmF1bHQiLCJzaWduSW4iLCJUaGVtZSIsInNoIiwibWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFFZUMsc0RBQVEsQ0FBQztBQUNqQ0MsU0FBSyxFQUFFLEVBRDBCO0FBRWpDQyxZQUFRLEVBQUU7QUFGdUIsR0FBRCxDQUZ2QjtBQUFBLE1BRU5DLE1BRk07QUFBQSxNQUVFQyxTQUZGOztBQU1iLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxLQUFDLENBQUNDLE9BQUY7QUFDQUwsYUFBUyxpQ0FDRkQsTUFERSxrSkFFSkssQ0FBQyxDQUFDRSxNQUFGLENBQVNDLElBRkwsRUFFWUgsQ0FBQyxDQUFDRSxNQUFGLENBQVNFLEtBRnJCLEdBQVQ7QUFJSCxHQU5EOztBQVFBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNMLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDTSxjQUFGO0FBQ0FULFlBQVEsQ0FBQ1Usd0VBQU0sQ0FBQ1osTUFBTSxDQUFDRixLQUFSLEVBQWVFLE1BQU0sQ0FBQ0QsUUFBdEIsQ0FBUCxDQUFSO0FBQ0gsR0FIRDs7QUFLQSxzQkFDSTtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQUEsK0ZBbUMwQmMscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQW5DbkMsRUFxRDBCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBckRuQztBQUFBLDRCQUNJO0FBQUssUUFBRSxFQUFDLFFBQVI7QUFBaUIsU0FBRyxFQUFDLGFBQXJCO0FBQUEsaUdBa0NzQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQWxDL0IsRUFvRHNCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBcEQvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQU0sY0FBUSxFQUFFTCxVQUFoQjtBQUFBLGlHQWlDc0JHLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FqQy9CLEVBbURzQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQW5EL0I7QUFBQSw4QkFDSTtBQUFLLFdBQUcsRUFBQyxlQUFUO0FBQUEsbUdBZ0NrQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQWhDM0IsRUFrRGtCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBbEQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQ0ksWUFBSSxFQUFDLE9BRFQ7QUFFSSxhQUFLLEVBQUVmLE1BQU0sQ0FBQ0YsS0FGbEI7QUFHSSxnQkFBUSxFQUFFTSxVQUhkO0FBSUksbUJBQVcsRUFBQyxlQUpoQjtBQUtJLGdCQUFRLE1BTFo7QUFBQSxtR0ErQmtCUyxxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBL0IzQixFQWlEa0JGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FqRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBU0k7QUFDSSxZQUFJLEVBQUMsVUFEVDtBQUVJLGFBQUssRUFBRWYsTUFBTSxDQUFDRCxRQUZsQjtBQUdJLGdCQUFRLEVBQUVLLFVBSGQ7QUFJSSxtQkFBVyxFQUFDLFVBSmhCO0FBS0ksZ0JBQVEsTUFMWjtBQUFBLG1HQXdCa0JTLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0F4QjNCLEVBMENrQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQTFDM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEosZUFnQkk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBLG1HQWlCa0JGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FqQjNCLEVBbUNrQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQW5DM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBLGdCQW1DMEJGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FuQ25DLEVBcUQwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQXJEbkM7QUFBQSxrbkJBbUMwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQW5DbkMsK1JBcUQwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQXJEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWtGSDs7R0F2R1FuQixLO1VBTVlPLHVEOzs7S0FOWlAsSztBQXlHTUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCB7IHNpZ25JbiB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb25cIlxuaW1wb3J0IFRoZW1lIGZyb20gXCIuLi9zdHlsZXMvdGhlbWVcIlxuXG5cbmZ1bmN0aW9uIExvZ2luKCkge1xuXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6ICcnLFxuICAgICAgICBwYXNzd29yZDogJydcbiAgICB9KVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gICAgY29uc3QgaGFuZGxlVHlwZSA9IChlKSA9PiB7XG4gICAgICAgIGUucGVyc2lzdCgpXG4gICAgICAgIHNldElucHV0cyh7XG4gICAgICAgICAgICAuLi5pbnB1dHMsXG4gICAgICAgICAgICBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc3VibWl0Rm9ybSA9IChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBkaXNwYXRjaChzaWduSW4oaW5wdXRzLmVtYWlsLCBpbnB1dHMucGFzc3dvcmQpKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJib2R5XCI+XG4gICAgICAgICAgICA8aW1nIGlkPVwiYmdib2R5XCIgc3JjPVwiL21haW5iZy5wbmdcIi8+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c3VibWl0Rm9ybX0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdXNlckljb24ucG5nXCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVR5cGV9XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbWFpbCBBZGRyZXNzJ1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NTBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1JTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7VGhlbWUuc2gubWF0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDUlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggNSU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE1cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggNSU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4IDUlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7VGhlbWUuc2gubWF0fTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxNXB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICNib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgI2JnYm9keSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ })

})