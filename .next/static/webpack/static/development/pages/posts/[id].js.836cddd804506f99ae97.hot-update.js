webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./Components/CommentsLists.js":
/*!*************************************!*\
  !*** ./Components/CommentsLists.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommentList; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\Pract\\create-react-app\\Components\\CommentsLists.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function CommentList(_ref) {
  var pid = _ref.pid;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      comments = _useState[0],
      setComments = _useState[1];

  var fetchComments = function fetchComments() {
    var res;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchComments$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/comments?postId=".concat(pid)));

          case 2:
            res = _context.sent;
            setComments(res.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetchComments();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, comments.map(function (comment) {
    return __jsx("li", {
      key: comment.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, comment.body);
  })));
}

/***/ })

})
//# sourceMappingURL=[id].js.836cddd804506f99ae97.hot-update.js.map