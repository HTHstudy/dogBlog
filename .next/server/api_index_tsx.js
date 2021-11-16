/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "api_index_tsx";
exports.ids = ["api_index_tsx"];
exports.modules = {

/***/ "./api/index.tsx":
/*!***********************!*\
  !*** ./api/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IP\": function() { return /* binding */ IP; },\n/* harmony export */   \"getMainPageCard\": function() { return /* binding */ getMainPageCard; },\n/* harmony export */   \"getMainSearchCard\": function() { return /* binding */ getMainSearchCard; },\n/* harmony export */   \"getCardBreeds\": function() { return /* binding */ getCardBreeds; },\n/* harmony export */   \"getVotes\": function() { return /* binding */ getVotes; },\n/* harmony export */   \"deleteVotes\": function() { return /* binding */ deleteVotes; },\n/* harmony export */   \"sendLikeVotes\": function() { return /* binding */ sendLikeVotes; },\n/* harmony export */   \"getFavourites\": function() { return /* binding */ getFavourites; },\n/* harmony export */   \"sendFavourites\": function() { return /* binding */ sendFavourites; },\n/* harmony export */   \"deleteFavourites\": function() { return /* binding */ deleteFavourites; },\n/* harmony export */   \"getLikedImg\": function() { return /* binding */ getLikedImg; },\n/* harmony export */   \"getLikedAllImg\": function() { return /* binding */ getLikedAllImg; },\n/* harmony export */   \"deleteUploadImg\": function() { return /* binding */ deleteUploadImg; },\n/* harmony export */   \"postImgUpload\": function() { return /* binding */ postImgUpload; },\n/* harmony export */   \"GSR\": function() { return /* binding */ GSR; },\n/* harmony export */   \"FCM\": function() { return /* binding */ FCM; },\n/* harmony export */   \"INTRO\": function() { return /* binding */ INTRO; },\n/* harmony export */   \"MEMBER\": function() { return /* binding */ MEMBER; },\n/* harmony export */   \"queryTypes\": function() { return /* binding */ queryTypes; }\n/* harmony export */ });\n/* harmony import */ var _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libraries/axios/index */ \"./libraries/axios/index.tsx\");\n\nconst IP = 'https://api.ipify.org?format=json'; //saga API\n\nfunction getMainPageCard(props) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.get(`/breeds?limit=${props.limit}&page=${props.pageSet}&order=${props.value}`);\n}\nfunction getMainSearchCard(query) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.get(`/images/search?${query}`);\n} //breeds API\n\nfunction getCardBreeds(query) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.get(`/breeds?limit=${query}`);\n} //votes API\n\nfunction getVotes(query) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.get(`/votes?sub_id=${query}`);\n}\nfunction deleteVotes(query) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.delete(`/votes/${query}`);\n}\nfunction sendLikeVotes(body) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.post('/votes', body);\n} //favourite API\n\nfunction getFavourites(query) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.get(`/favourites?sub_id=${query}`);\n}\nfunction sendFavourites(body) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.post('/favourites', body);\n}\nfunction deleteFavourites(query) {\n  console.log(query);\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.delete(`/favourites/${query}`);\n} //images API\n\nfunction getLikedImg(query) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.get(`/images/${query}`);\n}\nfunction getLikedAllImg(queryLimit, queryId) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.get(`/images?limit=${queryLimit}&sub_id=${queryId}`);\n}\nfunction deleteUploadImg(query) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.delete(`/images/${query}`);\n}\nfunction postImgUpload(data, headers) {\n  return _libraries_axios_index__WEBPACK_IMPORTED_MODULE_0__.default.post(`/images/upload`, data, headers);\n} //gsr\n\nconst GSR = 'https://api.thedogapi.com/v1/images/'; //node\n\nconst FCM = 'http://localhost:5000/fcm';\nconst INTRO = 'http://localhost:5000/hm/intro';\nconst MEMBER = 'http://localhost:5000/hm/members';\nconst queryTypes = {\n  mime: 'mime_types=',\n  breed: 'breed_id='\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2dCbG9nLy4vYXBpL2luZGV4LnRzeD80ZjkyIl0sIm5hbWVzIjpbIklQIiwiZ2V0TWFpblBhZ2VDYXJkIiwicHJvcHMiLCJheGlvcyIsImxpbWl0IiwicGFnZVNldCIsInZhbHVlIiwiZ2V0TWFpblNlYXJjaENhcmQiLCJxdWVyeSIsImdldENhcmRCcmVlZHMiLCJnZXRWb3RlcyIsImRlbGV0ZVZvdGVzIiwic2VuZExpa2VWb3RlcyIsImJvZHkiLCJnZXRGYXZvdXJpdGVzIiwic2VuZEZhdm91cml0ZXMiLCJkZWxldGVGYXZvdXJpdGVzIiwiY29uc29sZSIsImxvZyIsImdldExpa2VkSW1nIiwiZ2V0TGlrZWRBbGxJbWciLCJxdWVyeUxpbWl0IiwicXVlcnlJZCIsImRlbGV0ZVVwbG9hZEltZyIsInBvc3RJbWdVcGxvYWQiLCJkYXRhIiwiaGVhZGVycyIsIkdTUiIsIkZDTSIsIklOVFJPIiwiTUVNQkVSIiwicXVlcnlUeXBlcyIsIm1pbWUiLCJicmVlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLE1BQU1BLEVBQUUsR0FBRyxtQ0FBWCxDLENBRVA7O0FBQ08sU0FBU0MsZUFBVCxDQUF5QkMsS0FBekIsRUFBcUM7QUFDMUMsU0FBT0MsK0RBQUEsQ0FDSixpQkFBZ0JELEtBQUssQ0FBQ0UsS0FBTSxTQUFRRixLQUFLLENBQUNHLE9BQVEsVUFBU0gsS0FBSyxDQUFDSSxLQUFNLEVBRG5FLENBQVA7QUFHRDtBQUVNLFNBQVNDLGlCQUFULENBQTJCQyxLQUEzQixFQUEwQztBQUMvQyxTQUFPTCwrREFBQSxDQUFXLGtCQUFpQkssS0FBTSxFQUFsQyxDQUFQO0FBQ0QsQyxDQUVEOztBQUNPLFNBQVNDLGFBQVQsQ0FBdUJELEtBQXZCLEVBQXNDO0FBQzNDLFNBQU9MLCtEQUFBLENBQVcsaUJBQWdCSyxLQUFNLEVBQWpDLENBQVA7QUFDRCxDLENBRUQ7O0FBQ08sU0FBU0UsUUFBVCxDQUFrQkYsS0FBbEIsRUFBaUM7QUFDdEMsU0FBT0wsK0RBQUEsQ0FBVyxpQkFBZ0JLLEtBQU0sRUFBakMsQ0FBUDtBQUNEO0FBRU0sU0FBU0csV0FBVCxDQUFxQkgsS0FBckIsRUFBb0M7QUFDekMsU0FBT0wsa0VBQUEsQ0FBYyxVQUFTSyxLQUFNLEVBQTdCLENBQVA7QUFDRDtBQUVNLFNBQVNJLGFBQVQsQ0FBdUJDLElBQXZCLEVBQWtDO0FBQ3ZDLFNBQU9WLGdFQUFBLENBQVcsUUFBWCxFQUFxQlUsSUFBckIsQ0FBUDtBQUNELEMsQ0FFRDs7QUFDTyxTQUFTQyxhQUFULENBQXVCTixLQUF2QixFQUFzQztBQUMzQyxTQUFPTCwrREFBQSxDQUFXLHNCQUFxQkssS0FBTSxFQUF0QyxDQUFQO0FBQ0Q7QUFFTSxTQUFTTyxjQUFULENBQXdCRixJQUF4QixFQUFtQztBQUN4QyxTQUFPVixnRUFBQSxDQUFXLGFBQVgsRUFBMEJVLElBQTFCLENBQVA7QUFDRDtBQUVNLFNBQVNHLGdCQUFULENBQTBCUixLQUExQixFQUF5QztBQUM5Q1MsU0FBTyxDQUFDQyxHQUFSLENBQVlWLEtBQVo7QUFDQSxTQUFPTCxrRUFBQSxDQUFjLGVBQWNLLEtBQU0sRUFBbEMsQ0FBUDtBQUNELEMsQ0FFRDs7QUFDTyxTQUFTVyxXQUFULENBQXFCWCxLQUFyQixFQUFvQztBQUN6QyxTQUFPTCwrREFBQSxDQUFXLFdBQVVLLEtBQU0sRUFBM0IsQ0FBUDtBQUNEO0FBRU0sU0FBU1ksY0FBVCxDQUF3QkMsVUFBeEIsRUFBNENDLE9BQTVDLEVBQTZEO0FBQ2xFLFNBQU9uQiwrREFBQSxDQUFXLGlCQUFnQmtCLFVBQVcsV0FBVUMsT0FBUSxFQUF4RCxDQUFQO0FBQ0Q7QUFFTSxTQUFTQyxlQUFULENBQXlCZixLQUF6QixFQUF3QztBQUM3QyxTQUFPTCxrRUFBQSxDQUFjLFdBQVVLLEtBQU0sRUFBOUIsQ0FBUDtBQUNEO0FBRU0sU0FBU2dCLGFBQVQsQ0FBdUJDLElBQXZCLEVBQWtDQyxPQUFsQyxFQUFnRDtBQUNyRCxTQUFPdkIsZ0VBQUEsQ0FBWSxnQkFBWixFQUE2QnNCLElBQTdCLEVBQW1DQyxPQUFuQyxDQUFQO0FBQ0QsQyxDQUVEOztBQUNPLE1BQU1DLEdBQUcsR0FBRyxzQ0FBWixDLENBRVA7O0FBRU8sTUFBTUMsR0FBRyxHQUFHLDJCQUFaO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLGdDQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLGtDQUFmO0FBRUEsTUFBTUMsVUFBVSxHQUFHO0FBQ3hCQyxNQUFJLEVBQUUsYUFEa0I7QUFFeEJDLE9BQUssRUFBRTtBQUZpQixDQUFuQiIsImZpbGUiOiIuL2FwaS9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vbGlicmFyaWVzL2F4aW9zL2luZGV4JztcblxuZXhwb3J0IGNvbnN0IElQID0gJ2h0dHBzOi8vYXBpLmlwaWZ5Lm9yZz9mb3JtYXQ9anNvbic7XG5cbi8vc2FnYSBBUElcbmV4cG9ydCBmdW5jdGlvbiBnZXRNYWluUGFnZUNhcmQocHJvcHM6IGFueSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KFxuICAgIGAvYnJlZWRzP2xpbWl0PSR7cHJvcHMubGltaXR9JnBhZ2U9JHtwcm9wcy5wYWdlU2V0fSZvcmRlcj0ke3Byb3BzLnZhbHVlfWBcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1haW5TZWFyY2hDYXJkKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2ltYWdlcy9zZWFyY2g/JHtxdWVyeX1gKTtcbn1cblxuLy9icmVlZHMgQVBJXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FyZEJyZWVkcyhxdWVyeTogc3RyaW5nKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC9icmVlZHM/bGltaXQ9JHtxdWVyeX1gKTtcbn1cblxuLy92b3RlcyBBUElcbmV4cG9ydCBmdW5jdGlvbiBnZXRWb3RlcyhxdWVyeTogc3RyaW5nKSB7XG4gIHJldHVybiBheGlvcy5nZXQoYC92b3Rlcz9zdWJfaWQ9JHtxdWVyeX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVZvdGVzKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3ZvdGVzLyR7cXVlcnl9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kTGlrZVZvdGVzKGJvZHk6IGFueSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL3ZvdGVzJywgYm9keSk7XG59XG5cbi8vZmF2b3VyaXRlIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhdm91cml0ZXMocXVlcnk6IHN0cmluZykge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvZmF2b3VyaXRlcz9zdWJfaWQ9JHtxdWVyeX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRGYXZvdXJpdGVzKGJvZHk6IGFueSkge1xuICByZXR1cm4gYXhpb3MucG9zdCgnL2Zhdm91cml0ZXMnLCBib2R5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUZhdm91cml0ZXMocXVlcnk6IG51bWJlcikge1xuICBjb25zb2xlLmxvZyhxdWVyeSk7XG4gIHJldHVybiBheGlvcy5kZWxldGUoYC9mYXZvdXJpdGVzLyR7cXVlcnl9YCk7XG59XG5cbi8vaW1hZ2VzIEFQSVxuZXhwb3J0IGZ1bmN0aW9uIGdldExpa2VkSW1nKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2ltYWdlcy8ke3F1ZXJ5fWApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlrZWRBbGxJbWcocXVlcnlMaW1pdDogbnVtYmVyLCBxdWVyeUlkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGF4aW9zLmdldChgL2ltYWdlcz9saW1pdD0ke3F1ZXJ5TGltaXR9JnN1Yl9pZD0ke3F1ZXJ5SWR9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVVcGxvYWRJbWcocXVlcnk6IHN0cmluZykge1xuICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvaW1hZ2VzLyR7cXVlcnl9YCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3N0SW1nVXBsb2FkKGRhdGE6IGFueSwgaGVhZGVyczogYW55KSB7XG4gIHJldHVybiBheGlvcy5wb3N0KGAvaW1hZ2VzL3VwbG9hZGAsIGRhdGEsIGhlYWRlcnMpO1xufVxuXG4vL2dzclxuZXhwb3J0IGNvbnN0IEdTUiA9ICdodHRwczovL2FwaS50aGVkb2dhcGkuY29tL3YxL2ltYWdlcy8nO1xuXG4vL25vZGVcblxuZXhwb3J0IGNvbnN0IEZDTSA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvZmNtJztcbmV4cG9ydCBjb25zdCBJTlRSTyA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvaG0vaW50cm8nO1xuZXhwb3J0IGNvbnN0IE1FTUJFUiA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvaG0vbWVtYmVycyc7XG5cbmV4cG9ydCBjb25zdCBxdWVyeVR5cGVzID0ge1xuICBtaW1lOiAnbWltZV90eXBlcz0nLFxuICBicmVlZDogJ2JyZWVkX2lkPSdcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./api/index.tsx\n");

/***/ }),

/***/ "./libraries/axios/index.tsx":
/*!***********************************!*\
  !*** ./libraries/axios/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: 'https://api.thedogapi.com/v1',\n  headers: {\n    'x-api-key': '9a0b0a30-b146-436c-80fc-0aed0f0ad9c3'\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2dCbG9nLy4vbGlicmFyaWVzL2F4aW9zL2luZGV4LnRzeD9kNTc5Il0sIm5hbWVzIjpbImluc3RhbmNlIiwiYXhpb3MiLCJiYXNlVVJMIiwiaGVhZGVycyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxNQUFNQSxRQUFRLEdBQUdDLG1EQUFBLENBQWE7QUFDNUJDLFNBQU8sRUFBRSw4QkFEbUI7QUFFNUJDLFNBQU8sRUFBRTtBQUFFLGlCQUFhO0FBQWY7QUFGbUIsQ0FBYixDQUFqQjtBQUtBLCtEQUFlSCxRQUFmIiwiZmlsZSI6Ii4vbGlicmFyaWVzL2F4aW9zL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHBzOi8vYXBpLnRoZWRvZ2FwaS5jb20vdjEnLFxuICBoZWFkZXJzOiB7ICd4LWFwaS1rZXknOiAnOWEwYjBhMzAtYjE0Ni00MzZjLTgwZmMtMGFlZDBmMGFkOWMzJyB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./libraries/axios/index.tsx\n");

/***/ })

};
;