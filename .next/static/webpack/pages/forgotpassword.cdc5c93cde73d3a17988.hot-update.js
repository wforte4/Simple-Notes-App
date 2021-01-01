webpackHotUpdate_N_E("pages/forgotpassword",{

/***/ "./pages/forgotpassword.js":
/*!*********************************!*\
  !*** ./pages/forgotpassword.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _services_apiservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/apiservice */ \"./services/apiservice.js\");\n\n\n\n\n\nvar _jsxFileName = \"/home/wforte/canvas/SynapseFlash/pages/forgotpassword.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction ForgotPassword() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])({\n    email: ''\n  }),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(false),\n      emailsent = _useState3[0],\n      setSent = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])(null),\n      error = _useState4[0],\n      setError = _useState4[1];\n\n  var handleType = function handleType(e) {\n    e.persist();\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({}, e.target.name, e.target.value)));\n  };\n\n  var handleSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {\n      var response;\n      return _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              e.preventDefault();\n              setLoading(true);\n              _context.next = 4;\n              return Object(_services_apiservice__WEBPACK_IMPORTED_MODULE_7__[\"forgotPassword\"])(inputs.email);\n\n            case 4:\n              response = _context.sent;\n              console.log(response);\n              setLoading(false);\n              setSent(true);\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([[\"3114728982\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, loading == false && emailsent == false ? 'block' : 'none', loading == false ? 'none' : 'block', emailsent == true ? 'block' : 'none']]]) + \" \" + 'forgotpass',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([[\"3114728982\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, loading == false && emailsent == false ? 'block' : 'none', loading == false ? 'none' : 'block', emailsent == true ? 'block' : 'none']]]) + \" \" + 'center',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"h1\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([[\"3114728982\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, loading == false && emailsent == false ? 'block' : 'none', loading == false ? 'none' : 'block', emailsent == true ? 'block' : 'none']]]),\n        children: \"Forgot Password\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"form\", {\n        onSubmit: handleSubmit,\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([[\"3114728982\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, loading == false && emailsent == false ? 'block' : 'none', loading == false ? 'none' : 'block', emailsent == true ? 'block' : 'none']]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"input\", {\n          name: \"email\",\n          type: \"email\",\n          value: inputs.email,\n          onChange: handleType,\n          placeholder: \"Email Address\",\n          required: true,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([[\"3114728982\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, loading == false && emailsent == false ? 'block' : 'none', loading == false ? 'none' : 'block', emailsent == true ? 'block' : 'none']]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 21\n        }, this), error ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([[\"3114728982\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, loading == false && emailsent == false ? 'block' : 'none', loading == false ? 'none' : 'block', emailsent == true ? 'block' : 'none']]]) + \" \" + 'info',\n          children: error\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 30\n        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"button\", {\n          type: \"submit\",\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([[\"3114728982\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, loading == false && emailsent == false ? 'block' : 'none', loading == false ? 'none' : 'block', emailsent == true ? 'block' : 'none']]]),\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"img\", {\n        src: \"/loader.gif\",\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([[\"3114728982\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, loading == false && emailsent == false ? 'block' : 'none', loading == false ? 'none' : 'block', emailsent == true ? 'block' : 'none']]]) + \" \" + 'loader'\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a.dynamic([[\"3114728982\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, loading == false && emailsent == false ? 'block' : 'none', loading == false ? 'none' : 'block', emailsent == true ? 'block' : 'none']]]) + \" \" + 'res',\n        children: \"Check your email for confirmation\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      id: \"3114728982\",\n      dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, loading == false && emailsent == false ? 'block' : 'none', loading == false ? 'none' : 'block', emailsent == true ? 'block' : 'none'],\n      children: \".forgotpass.__jsx-style-dynamic-selector{float:left;height:100%;width:100%;display:grid;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.info.__jsx-style-dynamic-selector{float:left;font:16px 'Roboto';color:red;}.center.__jsx-style-dynamic-selector{width:350px;height:250px;padding:40px;box-shadow:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, \";border-radius:6px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;}.center.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{font:20px 'Montserrat';margin:5px;margin-bottom:10px;}input.__jsx-style-dynamic-selector{margin:10px;min-width:250px;}form.__jsx-style-dynamic-selector{display:\").concat(loading == false && emailsent == false ? 'block' : 'none', \";}.loader.__jsx-style-dynamic-selector{float:left;width:45px;height:45px;margin:10px 0;display:\").concat(loading == false ? 'none' : 'block', \";}.res.__jsx-style-dynamic-selector{float:left;font:16px 'Roboto';width:90%;display:\").concat(emailsent == true ? 'block' : 'none', \";}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dmb3J0ZS9jYW52YXMvU3luYXBzZUZsYXNoL3BhZ2VzL2ZvcmdvdHBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEd0IsQUFHZ0MsQUFRQSxBQUtDLEFBV1csQUFLWCxBQUl5QixBQUcxQixBQU9BLFdBMUNDLEFBUU8sQUE0QlIsQUFPUSxDQTlCTixBQWdCRyxVQVFKLENBcENELEFBdUJBLEVBVkUsR0FnQmpCLEVBckJjLEFBbUNBLElBMUNHLEFBdUJNLEFBYUwsR0FMbEIsQ0FsQjRDLEVBTDVDLEFBb0N5QyxPQTNDZCxDQW9DYyxLQWJ6Qyx3QkFxQkEsQ0EvQnNCLE9Bd0J0QixXQXZCaUIsa0RBYk0sd0JBY0kscUVBYjNCLDhCQWN1Qiw2RkFDRyw4RUFDMUIiLCJmaWxlIjoiL2hvbWUvd2ZvcnRlL2NhbnZhcy9TeW5hcHNlRmxhc2gvcGFnZXMvZm9yZ290cGFzc3dvcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGhlbWUgZnJvbSBcIi4uL3N0eWxlcy90aGVtZVwiXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgZm9yZ290UGFzc3dvcmQgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlzZXJ2aWNlJ1xuXG5mdW5jdGlvbiBGb3Jnb3RQYXNzd29yZCgpIHtcblxuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIGVtYWlsOiAnJ1xuICAgIH0pXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2VtYWlsc2VudCwgc2V0U2VudF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICBjb25zdCBoYW5kbGVUeXBlID0gKGUpID0+IHtcbiAgICAgICAgZS5wZXJzaXN0KClcbiAgICAgICAgc2V0SW5wdXRzKHtcbiAgICAgICAgICAgIC4uLmlucHV0cyxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZvcmdvdFBhc3N3b3JkKGlucHV0cy5lbWFpbClcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIHNldFNlbnQodHJ1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9yZ290cGFzcyc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICA8aDE+Rm9yZ290IFBhc3N3b3JkPC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSdlbWFpbCdcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVUeXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VtYWlsIEFkZHJlc3MnXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3IgPyA8ZGl2IGNsYXNzTmFtZT0naW5mbyc+e2Vycm9yfTwvZGl2PjogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbG9hZGVyJyBzcmM9Jy9sb2FkZXIuZ2lmJy8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jlcyc+Q2hlY2sgeW91ciBlbWFpbCBmb3IgY29uZmlybWF0aW9uPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZm9yZ290cGFzcyB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMTZweCAnUm9ib3RvJztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHtUaGVtZS5zaC5tYXR9O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiB3cmFwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2VudGVyIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMjBweCAnTW9udHNlcnJhdCc7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7bG9hZGluZyA9PSBmYWxzZSAmJiBlbWFpbHNlbnQgPT0gZmFsc2UgPyAnYmxvY2snOiAnbm9uZSd9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAke2xvYWRpbmcgPT0gZmFsc2UgPyAnbm9uZSc6ICdibG9jayd9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucmVzIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE2cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG5cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJHtlbWFpbHNlbnQgPT0gdHJ1ZSA/ICdibG9jayc6ICdub25lJ307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcmdvdFBhc3N3b3JkIl19 */\\n/*@ sourceURL=/home/wforte/canvas/SynapseFlash/pages/forgotpassword.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 9\n  }, this);\n}\n\n_s(ForgotPassword, \"KgvIRdO+MWfbx0jTW/KCxtO0CgI=\");\n\n_c = ForgotPassword;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForgotPassword);\n\nvar _c;\n\n$RefreshReg$(_c, \"ForgotPassword\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZm9yZ290cGFzc3dvcmQuanM/YmRiNiJdLCJuYW1lcyI6WyJGb3Jnb3RQYXNzd29yZCIsInVzZVN0YXRlIiwiZW1haWwiLCJpbnB1dHMiLCJzZXRJbnB1dHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVtYWlsc2VudCIsInNldFNlbnQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlVHlwZSIsImUiLCJwZXJzaXN0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3Jnb3RQYXNzd29yZCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIlRoZW1lIiwic2giLCJtYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULEdBQTBCO0FBQUE7O0FBQUEsa0JBRU1DLHNEQUFRLENBQUM7QUFDakNDLFNBQUssRUFBRTtBQUQwQixHQUFELENBRmQ7QUFBQSxNQUVmQyxNQUZlO0FBQUEsTUFFUEMsU0FGTzs7QUFBQSxtQkFLUUgsc0RBQVEsQ0FBQyxLQUFELENBTGhCO0FBQUEsTUFLZkksT0FMZTtBQUFBLE1BS05DLFVBTE07O0FBQUEsbUJBTU9MLHNEQUFRLENBQUMsS0FBRCxDQU5mO0FBQUEsTUFNZk0sU0FOZTtBQUFBLE1BTUpDLE9BTkk7O0FBQUEsbUJBT0lQLHNEQUFRLENBQUMsSUFBRCxDQVBaO0FBQUEsTUFPZlEsS0FQZTtBQUFBLE1BT1JDLFFBUFE7O0FBU3RCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLENBQUQsRUFBTztBQUN0QkEsS0FBQyxDQUFDQyxPQUFGO0FBQ0FULGFBQVMsaUNBQ0ZELE1BREUsa0pBRUpTLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxJQUZMLEVBRVlILENBQUMsQ0FBQ0UsTUFBRixDQUFTRSxLQUZyQixHQUFUO0FBSUgsR0FORDs7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S0FBWCxHQUFtQixNQUFuQixHQUEyQixPQTVDMUMsRUFtRGVFLFNBQVMsSUFBSSxJQUFiLEdBQW9CLE9BQXBCLEdBQTZCLE1BbkQ1QyxhQUFlLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQUFBO0FBQUEsZ0JBb0MwQmdCLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FwQ25DLEVBcUR1QnBCLE9BQU8sSUFBSSxLQUFYLElBQW9CRSxTQUFTLElBQUksS0FBakMsR0FBeUMsT0FBekMsR0FBa0QsTUFyRHpFLEVBNER1QkYsT0FBTyxJQUFJLEtBQVgsR0FBbUIsTUFBbkIsR0FBMkIsT0E1RGxELEVBbUV1QkUsU0FBUyxJQUFJLElBQWIsR0FBb0IsT0FBcEIsR0FBNkIsTUFuRXBEO0FBQUEscWRBb0MwQmdCLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0FwQ25DLDhsQkFxRHVCcEIsT0FBTyxJQUFJLEtBQVgsSUFBb0JFLFNBQVMsSUFBSSxLQUFqQyxHQUF5QyxPQUF6QyxHQUFrRCxNQXJEekUsNEdBNER1QkYsT0FBTyxJQUFJLEtBQVgsR0FBbUIsTUFBbkIsR0FBMkIsT0E1RGxELGlHQW1FdUJFLFNBQVMsSUFBSSxJQUFiLEdBQW9CLE9BQXBCLEdBQTZCLE1BbkVwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUVIOztHQW5HUVAsYzs7S0FBQUEsYztBQXFHTUEsNkVBQWYiLCJmaWxlIjoiLi9wYWdlcy9mb3Jnb3RwYXNzd29yZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaGVtZSBmcm9tIFwiLi4vc3R5bGVzL3RoZW1lXCJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3Jnb3RQYXNzd29yZCB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaXNlcnZpY2UnXG5cbmZ1bmN0aW9uIEZvcmdvdFBhc3N3b3JkKCkge1xuXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgZW1haWw6ICcnXG4gICAgfSlcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbZW1haWxzZW50LCBzZXRTZW50XSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IGhhbmRsZVR5cGUgPSAoZSkgPT4ge1xuICAgICAgICBlLnBlcnNpc3QoKVxuICAgICAgICBzZXRJbnB1dHMoe1xuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZm9yZ290UGFzc3dvcmQoaW5wdXRzLmVtYWlsKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgc2V0U2VudCh0cnVlKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3Jnb3RwYXNzJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPlxuICAgICAgICAgICAgICAgIDxoMT5Gb3Jnb3QgUGFzc3dvcmQ8L2gxPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J2VtYWlsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nZW1haWwnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nRW1haWwgQWRkcmVzcydcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtlcnJvciA/IDxkaXYgY2xhc3NOYW1lPSdpbmZvJz57ZXJyb3J9PC9kaXY+OiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdsb2FkZXInIHNyYz0nL2xvYWRlci5naWYnLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVzJz5DaGVjayB5b3VyIGVtYWlsIGZvciBjb25maXJtYXRpb248L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5mb3Jnb3RwYXNzIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxNnB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2VudGVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAke1RoZW1lLnNoLm1hdH07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIHdyYXA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5jZW50ZXIgaDEge1xuICAgICAgICAgICAgICAgICAgICBmb250OiAyMHB4ICdNb250c2VycmF0JztcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJHtsb2FkaW5nID09IGZhbHNlICYmIGVtYWlsc2VudCA9PSBmYWxzZSA/ICdibG9jayc6ICdub25lJ307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5sb2FkZXIge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6ICR7bG9hZGluZyA9PSBmYWxzZSA/ICdub25lJzogJ2Jsb2NrJ307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5yZXMge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMTZweCAnUm9ib3RvJztcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcblxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAke2VtYWlsc2VudCA9PSB0cnVlID8gJ2Jsb2NrJzogJ25vbmUnfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9yZ290UGFzc3dvcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/forgotpassword.js\n");

/***/ })

})