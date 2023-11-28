"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Form.tsx":
/*!*********************************!*\
  !*** ./src/components/Form.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Form = (param)=>{\n    let { handleOnSubmit } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSubmitted, setIsSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        handleOnSubmit(name, email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        p: 4,\n        boxShadow: \"md\",\n        borderWidth: \"1px\",\n        borderRadius: \"md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    spacing: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                            isRequired: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                    htmlFor: \"name\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                                    lineNumber: 27,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"name\",\n                                    value: name,\n                                    onChange: (e)=>setName(e.target.value),\n                                    placeholder: \"Enter your name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                            isRequired: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                    htmlFor: \"email\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    placeholder: \"Enter your email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            colorScheme: \"teal\",\n                            type: \"submit\",\n                            isFullWidth: true,\n                            disabled: isSubmitted,\n                            children: isSubmitted ? \"Submitted\" : \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, undefined),\n            isSubmitted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                mt: 4,\n                color: \"green.500\",\n                children: \"Form Submitted!\"\n            }, void 0, false, {\n                fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Form, \"DLxQkpGCtEhxt+EdW6AcXmuBBv8=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQVNQO0FBRW5CLE1BQU1RLE9BQU87UUFBQyxFQUFFQyxjQUFjLEVBQUU7O0lBQ3JDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNZLE9BQU9DLFNBQVMsR0FBR2IsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1nQixlQUFlLENBQUNDO1FBQ3BCQSxFQUFFQyxjQUFjO1FBQ2hCVCxlQUFlQyxNQUFNRTtJQUN2QjtJQUVBLHFCQUNFLDhEQUFDVixrREFBSUE7UUFBQ2lCLEdBQUc7UUFBR0MsV0FBVTtRQUFLQyxhQUFZO1FBQU1DLGNBQWE7OzBCQUN4RCw4REFBQ0M7Z0JBQUtDLFVBQVVSOzBCQUNkLDRFQUFDVixtREFBS0E7b0JBQUNtQixTQUFTOztzQ0FDZCw4REFBQ3RCLHlEQUFXQTs0QkFBQ3VCLFVBQVU7OzhDQUNyQiw4REFBQ3RCLHVEQUFTQTtvQ0FBQ3VCLFNBQVE7OENBQU87Ozs7Ozs4Q0FDMUIsOERBQUN0QixtREFBS0E7b0NBQ0p1QixJQUFHO29DQUNIQyxPQUFPbkI7b0NBQ1BvQixVQUFVLENBQUNiLElBQU1OLFFBQVFNLEVBQUVjLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDdkNHLGFBQVk7Ozs7Ozs7Ozs7OztzQ0FHaEIsOERBQUM3Qix5REFBV0E7NEJBQUN1QixVQUFVOzs4Q0FDckIsOERBQUN0Qix1REFBU0E7b0NBQUN1QixTQUFROzhDQUFROzs7Ozs7OENBQzNCLDhEQUFDdEIsbURBQUtBO29DQUNKdUIsSUFBRztvQ0FDSEMsT0FBT2pCO29DQUNQa0IsVUFBVSxDQUFDYixJQUFNSixTQUFTSSxFQUFFYyxNQUFNLENBQUNGLEtBQUs7b0NBQ3hDRyxhQUFZOzs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDL0Isb0RBQU1BOzRCQUNMZ0MsYUFBWTs0QkFDWkMsTUFBSzs0QkFDTEMsV0FBVzs0QkFDWEMsVUFBVXRCO3NDQUVUQSxjQUFjLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSWxDQSw2QkFDQyw4REFBQ1Asa0RBQUlBO2dCQUFDOEIsSUFBSTtnQkFBR0MsT0FBTTswQkFBWTs7Ozs7Ozs7Ozs7O0FBTXZDLEVBQUU7R0FqRFc5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeD8zYTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQnV0dG9uLFxuICBDYXJkLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybUxhYmVsLFxuICBJbnB1dCxcbiAgU3RhY2ssXG4gIFRleHQsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9ICh7IGhhbmRsZU9uU3VibWl0IH0pID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRJc1N1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlT25TdWJtaXQobmFtZSwgZW1haWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgcD17NH0gYm94U2hhZG93PVwibWRcIiBib3JkZXJXaWR0aD1cIjFweFwiIGJvcmRlclJhZGl1cz1cIm1kXCI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBpc1JlcXVpcmVkPlxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBpc1JlcXVpcmVkPlxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwidGVhbFwiXG4gICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgIGlzRnVsbFdpZHRoXG4gICAgICAgICAgICBkaXNhYmxlZD17aXNTdWJtaXR0ZWR9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzU3VibWl0dGVkID8gJ1N1Ym1pdHRlZCcgOiAnU3VibWl0J31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9TdGFjaz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIHtpc1N1Ym1pdHRlZCAmJiAoXG4gICAgICAgIDxUZXh0IG10PXs0fSBjb2xvcj1cImdyZWVuLjUwMFwiPlxuICAgICAgICAgIEZvcm0gU3VibWl0dGVkIVxuICAgICAgICA8L1RleHQ+XG4gICAgICApfVxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJDYXJkIiwiRm9ybUNvbnRyb2wiLCJGb3JtTGFiZWwiLCJJbnB1dCIsIlN0YWNrIiwiVGV4dCIsIkZvcm0iLCJoYW5kbGVPblN1Ym1pdCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsImlzU3VibWl0dGVkIiwic2V0SXNTdWJtaXR0ZWQiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwIiwiYm94U2hhZG93IiwiYm9yZGVyV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJmb3JtIiwib25TdWJtaXQiLCJzcGFjaW5nIiwiaXNSZXF1aXJlZCIsImh0bWxGb3IiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImNvbG9yU2NoZW1lIiwidHlwZSIsImlzRnVsbFdpZHRoIiwiZGlzYWJsZWQiLCJtdCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Form.tsx\n"));

/***/ })

});