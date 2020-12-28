webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var _services_thoughtservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/thoughtservice */ \"./services/thoughtservice.js\");\n\n\n\nvar _jsxFileName = \"/home/wforte/canvas/SynapseFlash/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Dashboard() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      profile = _useSelector.profile;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    thought: '',\n    user: profile.email\n  }),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  var handleType = function handleType(e) {\n    e.persist();\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, e.target.value)));\n  };\n\n  var uploadNewThought = function uploadNewThought(e) {\n    e.preventDefault();\n    var newThought = Object(_services_thoughtservice__WEBPACK_IMPORTED_MODULE_6__[\"uploadThought\"])(inputs.thought, inputs.user);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'dash',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'welcome',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n        children: [\"Hello, \", profile && profile.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"ul\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n          children: \"Upload Thought\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n          children: \"Thought History\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'uploadthought',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n        children: \"Upload New Thought\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n          children: \"Thought\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"textarea\", {\n          name: \"thought\",\n          value: inputs.thought,\n          onChange: handleType,\n          required: true,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"220298646\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"220298646\",\n      dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat],\n      children: \".uploadthought.__jsx-style-dynamic-selector{float:left;width:90%;margin:30px 5%;border-radius:4px;box-shadow:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, \";}.uploadthought.__jsx-style-dynamic-selector form.__jsx-style-dynamic-selector{float:left;width:90%;padding:10px 5%;}.uploadthought.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{float:left;width:100%;font:16px 'Roboto';}.uploadthought.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector{float:left;width:95%;padding:5px 2.5%;min-height:250px;resize:vertical;font:16px 'Roboto';}.uploadthought.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{float:left;font:32px 'Montserrat';padding:20px;}.welcome.__jsx-style-dynamic-selector{float:left;width:90%;margin:30px 5%;border-radius:4px;box-shadow:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, \";}.welcome.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{float:left;font:32px 'Montserrat';padding:20px;}.dash.__jsx-style-dynamic-selector{float:left;width:100%;margin-top:100px;min-height:800px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dmb3J0ZS9jYW52YXMvU3luYXBzZUZsYXNoL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRHdCLEFBR2dDLEFBT0EsQUFLQSxBQUtBLEFBUUEsQUFLQSxBQU9BLEFBS0EsV0F6Q0QsQUFPQSxBQUtDLEFBS0QsQUFRYSxBQUtiLEFBT2EsQUFLWixVQXpDSSxBQU9DLEFBVUMsQUFhRixDQWxCSSxBQThCRixZQWpCSixBQVlBLEVBcENLLEFBOEJBLENBdkJ0QixDQVVxQixDQXlCQSxFQTlCckIsTUFhQSxBQVlBLE9BcEM0QyxBQThCQSxDQWJ4QixDQXlCcEIsZUF4QnVCLG1CQUN2QixJQWxCQSxBQThCQSIsImZpbGUiOiIvaG9tZS93Zm9ydGUvY2FudmFzL1N5bmFwc2VGbGFzaC9wYWdlcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgdXBsb2FkVGhvdWdodCB9IGZyb20gJy4uL3NlcnZpY2VzL3Rob3VnaHRzZXJ2aWNlJ1xuXG5cbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcblxuICAgIGNvbnN0IHtwcm9maWxlfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdGhvdWdodDogJycsIFxuICAgICAgICB1c2VyOiBwcm9maWxlLmVtYWlsXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZVR5cGUgPSAoZSkgPT4ge1xuICAgICAgICBlLnBlcnNpc3QoKVxuICAgICAgICBzZXRJbnB1dHMoe1xuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHVwbG9hZE5ld1Rob3VnaHQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbmV3VGhvdWdodCA9IHVwbG9hZFRob3VnaHQoaW5wdXRzLnRob3VnaHQsIGlucHV0cy51c2VyKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXNoJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lJz5cbiAgICAgICAgICAgICAgICA8aDE+SGVsbG8sIHtwcm9maWxlICYmIHByb2ZpbGUubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBUaG91Z2h0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlRob3VnaHQgSGlzdG9yeTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VwbG9hZHRob3VnaHQnPlxuICAgICAgICAgICAgICAgIDxoMT5VcGxvYWQgTmV3IFRob3VnaHQ8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGhvdWdodDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGhvdWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMudGhvdWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAudXBsb2FkdGhvdWdodCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggNSU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHtUaGVtZS5zaC5tYXR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXBsb2FkdGhvdWdodCBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51cGxvYWR0aG91Z2h0IGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxNnB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXBsb2FkdGhvdWdodCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMi41JTtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE2cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51cGxvYWR0aG91Z2h0IGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDMycHggJ01vbnRzZXJyYXQnO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAud2VsY29tZSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggNSU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHtUaGVtZS5zaC5tYXR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAud2VsY29tZSBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250OiAzMnB4ICdNb250c2VycmF0JztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRhc2gge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkIl19 */\\n/*@ sourceURL=/home/wforte/canvas/SynapseFlash/pages/dashboard.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Dashboard, \"4nsr/VLhslXbIKpqjXqZz2MtxU4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"]];\n});\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJwcm9maWxlIiwidXNlU3RhdGUiLCJ0aG91Z2h0IiwidXNlciIsImVtYWlsIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlVHlwZSIsImUiLCJwZXJzaXN0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidXBsb2FkTmV3VGhvdWdodCIsInByZXZlbnREZWZhdWx0IiwibmV3VGhvdWdodCIsInVwbG9hZFRob3VnaHQiLCJUaGVtZSIsInNoIiwibWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxxQkFFQ0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUZaO0FBQUEsTUFFVkMsT0FGVSxnQkFFVkEsT0FGVTs7QUFBQSxrQkFHV0Msc0RBQVEsQ0FBQztBQUNqQ0MsV0FBTyxFQUFFLEVBRHdCO0FBRWpDQyxRQUFJLEVBQUVILE9BQU8sQ0FBQ0k7QUFGbUIsR0FBRCxDQUhuQjtBQUFBLE1BR1ZDLE1BSFU7QUFBQSxNQUdGQyxTQUhFOztBQVFqQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsT0FBRjtBQUNBSCxhQUFTLGlDQUNGRCxNQURFLGtKQUVKRyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFGTCxFQUVZSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FGckIsR0FBVDtBQUlILEdBTkQ7O0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDTCxDQUFELEVBQU87QUFDNUJBLEtBQUMsQ0FBQ00sY0FBRjtBQUNBLFFBQU1DLFVBQVUsR0FBR0MsOEVBQWEsQ0FBQ1gsTUFBTSxDQUFDSCxPQUFSLEVBQWlCRyxNQUFNLENBQUNGLElBQXhCLENBQWhDO0FBQ0gsR0FIRDs7QUFLQSxzQkFDSTtBQUFBLCtGQTBCMEJjLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0ExQm5DLEVBd0QwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQXhEbkMsYUFBZSxNQUFmO0FBQUEsNEJBQ0k7QUFBQSxpR0F5QnNCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBekIvQixFQXVEc0JGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0F2RC9CLGFBQWUsU0FBZjtBQUFBLDhCQUNJO0FBQUEsbUdBd0JrQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQXhCM0IsRUFzRGtCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBdEQzQjtBQUFBLDhCQUFZbkIsT0FBTyxJQUFJQSxPQUFPLENBQUNXLElBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQSxtR0F1QmtCTSxxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBdkIzQixFQXFEa0JGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FyRDNCO0FBQUEsZ0NBQ0k7QUFBQSxxR0FzQmNGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0F0QnZCLEVBb0RjRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBcER2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQUEscUdBcUJjRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBckJ2QixFQW1EY0YscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQW5EdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFRSTtBQUFBLGlHQWtCc0JGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FsQi9CLEVBZ0RzQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQWhEL0IsYUFBZSxlQUFmO0FBQUEsOEJBQ0k7QUFBQSxtR0FpQmtCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBakIzQixFQStDa0JGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0EvQzNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFBLG1HQWdCa0JGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FoQjNCLEVBOENrQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQTlDM0I7QUFBQSxnQ0FDSTtBQUFBLHFHQWVjRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBZnZCLEVBNkNjRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBN0N2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQ0ksY0FBSSxFQUFDLFNBRFQ7QUFFSSxlQUFLLEVBQUVkLE1BQU0sQ0FBQ0gsT0FGbEI7QUFHSSxrQkFBUSxFQUFFSyxVQUhkO0FBSUksa0JBQVEsTUFKWjtBQUFBLHFHQWNjVSxxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBZHZCLEVBNENjRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBNUN2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBLGdCQTBCMEJGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0ExQm5DLEVBd0QwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQXhEbkM7QUFBQSx1SUEwQjBCRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBMUJuQyw0b0JBd0QwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQXhEbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlFSDs7R0E5RlF2QixTO1VBRWFDLHVEOzs7S0FGYkQsUztBQWdHTUEsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgdXBsb2FkVGhvdWdodCB9IGZyb20gJy4uL3NlcnZpY2VzL3Rob3VnaHRzZXJ2aWNlJ1xuXG5cbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcblxuICAgIGNvbnN0IHtwcm9maWxlfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdGhvdWdodDogJycsIFxuICAgICAgICB1c2VyOiBwcm9maWxlLmVtYWlsXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZVR5cGUgPSAoZSkgPT4ge1xuICAgICAgICBlLnBlcnNpc3QoKVxuICAgICAgICBzZXRJbnB1dHMoe1xuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHVwbG9hZE5ld1Rob3VnaHQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbmV3VGhvdWdodCA9IHVwbG9hZFRob3VnaHQoaW5wdXRzLnRob3VnaHQsIGlucHV0cy51c2VyKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXNoJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lJz5cbiAgICAgICAgICAgICAgICA8aDE+SGVsbG8sIHtwcm9maWxlICYmIHByb2ZpbGUubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlVwbG9hZCBUaG91Z2h0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlRob3VnaHQgSGlzdG9yeTwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VwbG9hZHRob3VnaHQnPlxuICAgICAgICAgICAgICAgIDxoMT5VcGxvYWQgTmV3IFRob3VnaHQ8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+VGhvdWdodDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ndGhvdWdodCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dHMudGhvdWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAudXBsb2FkdGhvdWdodCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggNSU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHtUaGVtZS5zaC5tYXR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXBsb2FkdGhvdWdodCBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51cGxvYWR0aG91Z2h0IGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxNnB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXBsb2FkdGhvdWdodCB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMi41JTtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE2cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51cGxvYWR0aG91Z2h0IGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDMycHggJ01vbnRzZXJyYXQnO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAud2VsY29tZSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggNSU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHtUaGVtZS5zaC5tYXR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAud2VsY29tZSBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250OiAzMnB4ICdNb250c2VycmF0JztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRhc2gge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})