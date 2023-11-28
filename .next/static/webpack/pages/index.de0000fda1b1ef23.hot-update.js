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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Form: function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\nconst Form = (param)=>{\n    let { handleOnSubmit } = param;\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isSubmitted, setIsSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        handleOnSubmit(name, email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        p: 4,\n        boxShadow: \"md\",\n        borderWidth: \"1px\",\n        borderRadius: \"md\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                    spacing: 4,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                            isRequired: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                    htmlFor: \"name\",\n                                    children: \"Name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"name\",\n                                    value: name,\n                                    onChange: (e)=>setName(e.target.value),\n                                    placeholder: \"Enter your name\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {\n                            isRequired: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {\n                                    htmlFor: \"email\",\n                                    children: \"Email\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {\n                                    id: \"email\",\n                                    value: email,\n                                    onChange: (e)=>setEmail(e.target.value),\n                                    placeholder: \"Enter your email\",\n                                    pattern: \".*\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.InputRightElement, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Icon, {\n                                        as: StarIcon,\n                                        color: \"yellow.500\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 48\n                                    }, void 0)\n                                }, void 0, false, {\n                                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            colorScheme: \"teal\",\n                            type: \"submit\",\n                            isFullWidth: true,\n                            disabled: isSubmitted,\n                            children: isSubmitted ? \"Submitted\" : \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            isSubmitted && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                mt: 4,\n                color: \"green.500\",\n                children: \"Form Submitted!\"\n            }, void 0, false, {\n                fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fabiomorais/Documents/github/QA-Test/src/components/Form.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Form, \"DLxQkpGCtEhxt+EdW6AcXmuBBv8=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQVdQO0FBRW5CLE1BQU1VLE9BQU87UUFBQyxFQUFFQyxjQUFjLEVBQUU7O0lBQ3JDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDZ0IsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFFL0MsTUFBTWtCLGVBQWUsQ0FBQ0M7UUFDcEJBLEVBQUVDLGNBQWM7UUFDaEJULGVBQWVDLE1BQU1FO0lBQ3ZCO0lBRUEscUJBQ0UsOERBQUNaLGtEQUFJQTtRQUFDbUIsR0FBRztRQUFHQyxXQUFVO1FBQUtDLGFBQVk7UUFBTUMsY0FBYTs7MEJBQ3hELDhEQUFDQztnQkFBS0MsVUFBVVI7MEJBQ2QsNEVBQUNWLG1EQUFLQTtvQkFBQ21CLFNBQVM7O3NDQUNkLDhEQUFDeEIseURBQVdBOzRCQUFDeUIsVUFBVTs7OENBQ3JCLDhEQUFDeEIsdURBQVNBO29DQUFDeUIsU0FBUTs4Q0FBTzs7Ozs7OzhDQUMxQiw4REFBQ3ZCLG1EQUFLQTtvQ0FDSndCLElBQUc7b0NBQ0hDLE9BQU9uQjtvQ0FDUG9CLFVBQVUsQ0FBQ2IsSUFBTU4sUUFBUU0sRUFBRWMsTUFBTSxDQUFDRixLQUFLO29DQUN2Q0csYUFBWTs7Ozs7Ozs7Ozs7O3NDQUdoQiw4REFBQy9CLHlEQUFXQTs0QkFBQ3lCLFVBQVU7OzhDQUNyQiw4REFBQ3hCLHVEQUFTQTtvQ0FBQ3lCLFNBQVE7OENBQVE7Ozs7Ozs4Q0FDM0IsOERBQUN2QixtREFBS0E7b0NBQ0p3QixJQUFHO29DQUNIQyxPQUFPakI7b0NBQ1BrQixVQUFVLENBQUNiLElBQU1KLFNBQVNJLEVBQUVjLE1BQU0sQ0FBQ0YsS0FBSztvQ0FDeENHLGFBQVk7b0NBQ1pDLFNBQVE7Ozs7Ozs4Q0FFSiw4REFBQzVCLCtEQUFpQkE7b0NBQUM2Qix3QkFBVSw4REFBQy9CLGtEQUFJQTt3Q0FBQ2dDLElBQUlDO3dDQUFVQyxPQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FHL0QsOERBQUN0QyxvREFBTUE7NEJBQ0x1QyxhQUFZOzRCQUNaQyxNQUFLOzRCQUNMQyxXQUFXOzRCQUNYQyxVQUFVM0I7c0NBRVRBLGNBQWMsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJbENBLDZCQUNDLDhEQUFDUCxrREFBSUE7Z0JBQUNtQyxJQUFJO2dCQUFHTCxPQUFNOzBCQUFZOzs7Ozs7Ozs7Ozs7QUFNdkMsRUFBRTtHQXBEVzdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm0udHN4PzNhNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCdXR0b24sXG4gIENhcmQsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTGFiZWwsXG4gIEljb24sXG4gIElucHV0LFxuICBJbnB1dFJpZ2h0RWxlbWVudCxcbiAgU3RhY2ssXG4gIFRleHQsXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRm9ybSA9ICh7IGhhbmRsZU9uU3VibWl0IH0pID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzU3VibWl0dGVkLCBzZXRJc1N1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGFuZGxlT25TdWJtaXQobmFtZSwgZW1haWwpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQgcD17NH0gYm94U2hhZG93PVwibWRcIiBib3JkZXJXaWR0aD1cIjFweFwiIGJvcmRlclJhZGl1cz1cIm1kXCI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezR9PlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBpc1JlcXVpcmVkPlxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgIDxGb3JtQ29udHJvbCBpc1JlcXVpcmVkPlxuICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIlxuICAgICAgICAgICAgICBwYXR0ZXJuPVwiLipcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dFJpZ2h0RWxlbWVudCBjaGlsZHJlbj17PEljb24gYXM9e1N0YXJJY29ufSBjb2xvcj1cInllbGxvdy41MDBcIiAvPn0gLz5cblxuICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgY29sb3JTY2hlbWU9XCJ0ZWFsXCJcbiAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgaXNGdWxsV2lkdGhcbiAgICAgICAgICAgIGRpc2FibGVkPXtpc1N1Ym1pdHRlZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNTdWJtaXR0ZWQgPyAnU3VibWl0dGVkJyA6ICdTdWJtaXQnfVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1N0YWNrPlxuICAgICAgPC9mb3JtPlxuICAgICAge2lzU3VibWl0dGVkICYmIChcbiAgICAgICAgPFRleHQgbXQ9ezR9IGNvbG9yPVwiZ3JlZW4uNTAwXCI+XG4gICAgICAgICAgRm9ybSBTdWJtaXR0ZWQhXG4gICAgICAgIDwvVGV4dD5cbiAgICAgICl9XG4gICAgPC9DYXJkPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkJ1dHRvbiIsIkNhcmQiLCJGb3JtQ29udHJvbCIsIkZvcm1MYWJlbCIsIkljb24iLCJJbnB1dCIsIklucHV0UmlnaHRFbGVtZW50IiwiU3RhY2siLCJUZXh0IiwiRm9ybSIsImhhbmRsZU9uU3VibWl0IiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwiaXNTdWJtaXR0ZWQiLCJzZXRJc1N1Ym1pdHRlZCIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInAiLCJib3hTaGFkb3ciLCJib3JkZXJXaWR0aCIsImJvcmRlclJhZGl1cyIsImZvcm0iLCJvblN1Ym1pdCIsInNwYWNpbmciLCJpc1JlcXVpcmVkIiwiaHRtbEZvciIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwicGF0dGVybiIsImNoaWxkcmVuIiwiYXMiLCJTdGFySWNvbiIsImNvbG9yIiwiY29sb3JTY2hlbWUiLCJ0eXBlIiwiaXNGdWxsV2lkdGgiLCJkaXNhYmxlZCIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Form.tsx\n"));

/***/ })

});