webpackHotUpdate_N_E("pages/dashboard",{

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/theme */ \"./styles/theme.js\");\n/* harmony import */ var _services_thoughtservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/thoughtservice */ \"./services/thoughtservice.js\");\n\n\n\nvar _jsxFileName = \"/home/wforte/canvas/SynapseFlash/pages/dashboard.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nfunction Dashboard() {\n  _s();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      profile = _useSelector.profile;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    thought: '',\n    user: profile.email\n  }),\n      inputs = _useState[0],\n      setInputs = _useState[1];\n\n  var handleType = function handleType(e) {\n    e.persist();\n    setInputs(_objectSpread(_objectSpread({}, inputs), {}, Object(_home_wforte_canvas_SynapseFlash_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, e.target.name, e.target.value)));\n  };\n\n  var uploadNewThought = function uploadNewThought(e) {\n    e.preventDefault();\n    var newThought = Object(_services_thoughtservice__WEBPACK_IMPORTED_MODULE_6__[\"uploadThought\"])(inputs.thought, inputs.user);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'dash',\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'welcome',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n        children: [\"Hello, \", profile && profile.name]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'list',\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'item',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'frame',\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n              src: \"/uploadCircle.png\",\n              className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]])\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n            children: \"Upload Thought\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'item',\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n            src: \"/mainicon.png\",\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]])\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 25\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h2\", {\n            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n            children: \"Thought History\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 25\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]) + \" \" + 'uploadthought',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n        children: \"Upload New Thought\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"form\", {\n        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"label\", {\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]]),\n          children: \"Thought\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 21\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"textarea\", {\n          name: \"thought\",\n          value: inputs.thought,\n          onChange: handleType,\n          required: true,\n          className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a.dynamic([[\"3491635051\", [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat]]])\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      id: \"3491635051\",\n      dynamic: [_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, _styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat],\n      children: \".list.__jsx-style-dynamic-selector{float:left;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.item.__jsx-style-dynamic-selector{float:left;width:200px;height:200px;position:relative;}.item.__jsx-style-dynamic-selector .frame.__jsx-style-dynamic-selector{position:absolute;width:140px;height:140px;left:50%;display:grid;place-items:center;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);}.item.__jsx-style-dynamic-selector h2.__jsx-style-dynamic-selector{position:absolute;font:14px 'Roboto';bottom:10px;text-align:center;left:50%;-webkit-transform:translate(-50%);-ms-transform:translate(-50%);transform:translate(-50%);}.uploadthought.__jsx-style-dynamic-selector{float:left;width:90%;margin:30px 5%;border-radius:4px;box-shadow:\".concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, \";}.uploadthought.__jsx-style-dynamic-selector form.__jsx-style-dynamic-selector{float:left;width:90%;padding:30px 5%;}.uploadthought.__jsx-style-dynamic-selector label.__jsx-style-dynamic-selector{float:left;margin:10px 0;border-bottom:1px solid blue;font:16px 'Roboto';}.uploadthought.__jsx-style-dynamic-selector textarea.__jsx-style-dynamic-selector{float:left;width:95%;padding:25px 2.5%;margin:10px 0;min-height:150px;resize:vertical;font:16px 'Roboto';}.uploadthought.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{float:left;font:32px 'Montserrat';padding:10px 40px;}.welcome.__jsx-style-dynamic-selector{float:left;width:90%;margin:30px 5%;border-radius:4px;box-shadow:\").concat(_styles_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"].sh.mat, \";}.welcome.__jsx-style-dynamic-selector h1.__jsx-style-dynamic-selector{float:left;font:32px 'Montserrat';padding:20px;}.dash.__jsx-style-dynamic-selector{float:left;width:100%;margin-top:100px;min-height:800px;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dmb3J0ZS9jYW52YXMvU3luYXBzZUZsYXNoL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RHdCLEFBR2dDLEFBS0EsQUFNTyxBQVNBLEFBUVAsQUFPQSxBQUtBLEFBTUEsQUFTQSxBQUtBLEFBT0EsQUFLQSxXQXZFQSxBQUtDLEFBdUJGLEFBT0EsQUFLSSxBQU1KLEFBU2EsQUFLYixBQU9hLEFBS1osT0E3REMsQUFTTyxHQVNKLEFBT0MsQUFXRSxBQWNILENBNURGLEFBd0VJLENBbkVKLEVBbUNnQixLQTdCaEIsSUE0Q0ssQUFZTCxFQTdESyxBQXVCQSxBQWdDQSxDQXpDTixBQWdCaEIsRUFXa0IsQUEwQkcsSUE3RFIsSUF3RGIsRUEvQ3NCLEdBUkwsQUEyQ2pCLENBUnFCLENBekNyQixBQXVCNEMsQUFXckIsQUFxQnFCLEVBWTVDLFNBNUR1QixFQVFWLEdBMkJPLEdBUHBCLEdBbkI4QixRQVJBLEVBbUNQLFFBbkJ2QixBQWdDQSxFQTlEQSxTQWtEQSw2REEzQkEsUUFSQSIsImZpbGUiOiIvaG9tZS93Zm9ydGUvY2FudmFzL1N5bmFwc2VGbGFzaC9wYWdlcy9kYXNoYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXG5pbXBvcnQgVGhlbWUgZnJvbSAnLi4vc3R5bGVzL3RoZW1lJ1xuaW1wb3J0IHsgdXBsb2FkVGhvdWdodCB9IGZyb20gJy4uL3NlcnZpY2VzL3Rob3VnaHRzZXJ2aWNlJ1xuXG5cbmZ1bmN0aW9uIERhc2hib2FyZCgpIHtcblxuICAgIGNvbnN0IHtwcm9maWxlfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLnBvc3QpXG4gICAgY29uc3QgW2lucHV0cywgc2V0SW5wdXRzXSA9IHVzZVN0YXRlKHtcbiAgICAgICAgdGhvdWdodDogJycsIFxuICAgICAgICB1c2VyOiBwcm9maWxlLmVtYWlsXG4gICAgfSlcblxuICAgIGNvbnN0IGhhbmRsZVR5cGUgPSAoZSkgPT4ge1xuICAgICAgICBlLnBlcnNpc3QoKVxuICAgICAgICBzZXRJbnB1dHMoe1xuICAgICAgICAgICAgLi4uaW5wdXRzLFxuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHVwbG9hZE5ld1Rob3VnaHQgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgY29uc3QgbmV3VGhvdWdodCA9IHVwbG9hZFRob3VnaHQoaW5wdXRzLnRob3VnaHQsIGlucHV0cy51c2VyKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkYXNoJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3ZWxjb21lJz5cbiAgICAgICAgICAgICAgICA8aDE+SGVsbG8sIHtwcm9maWxlICYmIHByb2ZpbGUubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2l0ZW0nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZyYW1lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3VwbG9hZENpcmNsZS5wbmcnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlVwbG9hZCBUaG91Z2h0PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvbWFpbmljb24ucG5nJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+VGhvdWdodCBIaXN0b3J5PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1cGxvYWR0aG91Z2h0Jz5cbiAgICAgICAgICAgICAgICA8aDE+VXBsb2FkIE5ldyBUaG91Z2h0PC9oMT5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlRob3VnaHQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Rob3VnaHQnXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17aW5wdXRzLnRob3VnaHR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaXRlbSAuZnJhbWUge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLml0ZW0gaDIge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE0cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXBsb2FkdGhvdWdodCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggNSU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHtUaGVtZS5zaC5tYXR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXBsb2FkdGhvdWdodCBmb3JtIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggNSU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51cGxvYWR0aG91Z2h0IGxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmx1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9udDogMTZweCAnUm9ib3RvJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnVwbG9hZHRob3VnaHQgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjVweCAyLjUlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE2cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51cGxvYWR0aG91Z2h0IGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDMycHggJ01vbnRzZXJyYXQnO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC53ZWxjb21lIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCA1JTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAke1RoZW1lLnNoLm1hdH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC53ZWxjb21lIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDMycHggJ01vbnRzZXJyYXQnO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZGFzaCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmQiXX0= */\\n/*@ sourceURL=/home/wforte/canvas/SynapseFlash/pages/dashboard.js */\")\n    }, void 0, false, void 0, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, this);\n}\n\n_s(Dashboard, \"4nsr/VLhslXbIKpqjXqZz2MtxU4=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"]];\n});\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzP2JiZDgiXSwibmFtZXMiOlsiRGFzaGJvYXJkIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJwcm9maWxlIiwidXNlU3RhdGUiLCJ0aG91Z2h0IiwidXNlciIsImVtYWlsIiwiaW5wdXRzIiwic2V0SW5wdXRzIiwiaGFuZGxlVHlwZSIsImUiLCJwZXJzaXN0IiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwidXBsb2FkTmV3VGhvdWdodCIsInByZXZlbnREZWZhdWx0IiwibmV3VGhvdWdodCIsInVwbG9hZFRob3VnaHQiLCJUaGVtZSIsInNoIiwibWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFBQSxxQkFFQ0MsK0RBQVcsQ0FBQyxVQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxJQUFWO0FBQUEsR0FBTixDQUZaO0FBQUEsTUFFVkMsT0FGVSxnQkFFVkEsT0FGVTs7QUFBQSxrQkFHV0Msc0RBQVEsQ0FBQztBQUNqQ0MsV0FBTyxFQUFFLEVBRHdCO0FBRWpDQyxRQUFJLEVBQUVILE9BQU8sQ0FBQ0k7QUFGbUIsR0FBRCxDQUhuQjtBQUFBLE1BR1ZDLE1BSFU7QUFBQSxNQUdGQyxTQUhFOztBQVFqQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFDdEJBLEtBQUMsQ0FBQ0MsT0FBRjtBQUNBSCxhQUFTLGlDQUNGRCxNQURFLGtKQUVKRyxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsSUFGTCxFQUVZSCxDQUFDLENBQUNFLE1BQUYsQ0FBU0UsS0FGckIsR0FBVDtBQUlILEdBTkQ7O0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDTCxDQUFELEVBQU87QUFDNUJBLEtBQUMsQ0FBQ00sY0FBRjtBQUNBLFFBQU1D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LHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0E1RTNCO0FBQUEsZ0NBQ0k7QUFBQSxzR0EyQ2NGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0EzQ3ZCLEVBMkVjRixxREFBSyxDQUFDQyxFQUFOLENBQVNDLEdBM0V2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQ0ksY0FBSSxFQUFDLFNBRFQ7QUFFSSxlQUFLLEVBQUVkLE1BQU0sQ0FBQ0gsT0FGbEI7QUFHSSxrQkFBUSxFQUFFSyxVQUhkO0FBSUksa0JBQVEsTUFKWjtBQUFBLHNHQTBDY1UscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQTFDdkIsRUEwRWNGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0ExRXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQko7QUFBQTtBQUFBLGdCQThEMEJGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0E5RG5DLEVBOEYwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQTlGbkM7QUFBQSxxMEJBOEQwQkYscURBQUssQ0FBQ0MsRUFBTixDQUFTQyxHQTlEbkMsZ3NCQThGMEJGLHFEQUFLLENBQUNDLEVBQU4sQ0FBU0MsR0E5Rm5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUErR0g7O0dBcElRdkIsUztVQUVhQyx1RDs7O0tBRmJELFM7QUFzSU1BLHdFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvZGFzaGJvYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IFRoZW1lIGZyb20gJy4uL3N0eWxlcy90aGVtZSdcbmltcG9ydCB7IHVwbG9hZFRob3VnaHQgfSBmcm9tICcuLi9zZXJ2aWNlcy90aG91Z2h0c2VydmljZSdcblxuXG5mdW5jdGlvbiBEYXNoYm9hcmQoKSB7XG5cbiAgICBjb25zdCB7cHJvZmlsZX0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5wb3N0KVxuICAgIGNvbnN0IFtpbnB1dHMsIHNldElucHV0c10gPSB1c2VTdGF0ZSh7XG4gICAgICAgIHRob3VnaHQ6ICcnLCBcbiAgICAgICAgdXNlcjogcHJvZmlsZS5lbWFpbFxuICAgIH0pXG5cbiAgICBjb25zdCBoYW5kbGVUeXBlID0gKGUpID0+IHtcbiAgICAgICAgZS5wZXJzaXN0KClcbiAgICAgICAgc2V0SW5wdXRzKHtcbiAgICAgICAgICAgIC4uLmlucHV0cyxcbiAgICAgICAgICAgIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWVcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCB1cGxvYWROZXdUaG91Z2h0ID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGNvbnN0IG5ld1Rob3VnaHQgPSB1cGxvYWRUaG91Z2h0KGlucHV0cy50aG91Z2h0LCBpbnB1dHMudXNlcilcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZGFzaCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd2VsY29tZSc+XG4gICAgICAgICAgICAgICAgPGgxPkhlbGxvLCB7cHJvZmlsZSAmJiBwcm9maWxlLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGlzdCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpdGVtJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmcmFtZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy91cGxvYWRDaXJjbGUucG5nJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5VcGxvYWQgVGhvdWdodDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naXRlbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL21haW5pY29uLnBuZycvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlRob3VnaHQgSGlzdG9yeTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndXBsb2FkdGhvdWdodCc+XG4gICAgICAgICAgICAgICAgPGgxPlVwbG9hZCBOZXcgVGhvdWdodDwvaDE+XG4gICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5UaG91Z2h0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd0aG91Z2h0J1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0cy50aG91Z2h0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVR5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgICAgIC5saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLml0ZW0gLmZyYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pdGVtIGgyIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxNHB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnVwbG9hZHRob3VnaHQge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDUlO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6ICR7VGhlbWUuc2gubWF0fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnVwbG9hZHRob3VnaHQgZm9ybSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXBsb2FkdGhvdWdodCBsYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsdWU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQ6IDE2cHggJ1JvYm90byc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC51cGxvYWR0aG91Z2h0IHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI1cHggMi41JTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgICAgICAgICAgICAgICBmb250OiAxNnB4ICdSb2JvdG8nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudXBsb2FkdGhvdWdodCBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250OiAzMnB4ICdNb250c2VycmF0JztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAud2VsY29tZSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggNSU7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogJHtUaGVtZS5zaC5tYXR9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAud2VsY29tZSBoMSB7XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBmb250OiAzMnB4ICdNb250c2VycmF0JztcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmRhc2gge1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ })

})