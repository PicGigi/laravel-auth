/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");
window.Vue = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', (__webpack_require__(/*! ./components/ExampleComponent.vue */ "./resources/js/components/ExampleComponent.vue")["default"]));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'popper.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
  window.$ = window.jQuery = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/dist/browser/axios.cjs");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.esm.js ***!
  \*********************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\bootstrap\\dist\\js\\bootstrap.esm.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\lodash\\lodash.js'");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n   ╷\n23 │ @import \"transitions\";\n   │         ^^^^^^^^^^^^^\n   ╵\n  node_modules\\bootstrap\\scss\\bootstrap.scss 23:9  @import\n  C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\resources\\sass\\app.scss 8:9                                        root stylesheet\n    at processResult (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\webpack\\lib\\NormalModule.js:758:19)\n    at C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\webpack\\lib\\NormalModule.js:860:5\n    at C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\loader-runner\\lib\\LoaderRunner.js:400:11\n    at C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\loader-runner\\lib\\LoaderRunner.js:252:18\n    at context.callback (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:101511:16)\n    at render_closure1.call$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:86499:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:30152:18)\n    at _FutureListener.handleError$1 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28681:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28988:49)\n    at Object._Future__propagateToListeners (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3911:77)\n    at _Future._completeError$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28834:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28482:12)\n    at Object._asyncRethrow (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3713:17)\n    at C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:20123:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3738:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28501:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28495:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:30152:18)\n    at _FutureListener.handleError$1 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28681:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28988:49)\n    at Object._Future__propagateToListeners (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3911:77)\n    at _Future._completeError$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28834:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28482:12)\n    at Object._asyncRethrow (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3713:17)\n    at C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:15550:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3738:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28501:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28495:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:30152:18)\n    at _FutureListener.handleError$1 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28681:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28988:49)\n    at Object._Future__propagateToListeners (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3911:77)\n    at _Future._completeError$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28834:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28482:12)\n    at Object._asyncRethrow (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3713:17)\n    at C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:15585:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3738:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28501:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28495:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:30152:18)\n    at _FutureListener.handleError$1 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28681:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28988:49)\n    at Object._Future__propagateToListeners (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3911:77)\n    at _Future._completeError$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28834:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:28482:12)\n    at Object._asyncRethrow (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3713:17)\n    at C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:74133:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\sass\\sass.dart.js:3738:15)");

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (1:0)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> <template>\n|     <div class=\"container\">\n|         <div class=\"row justify-content-center\">");

/***/ }),

/***/ "./node_modules/axios/dist/browser/axios.cjs":
/*!***************************************************!*\
  !*** ./node_modules/axios/dist/browser/axios.cjs ***!
  \***************************************************/
/***/ (() => {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\user\\Desktop\\Esercizi\\laravel-auth\\node_modules\\axios\\dist\\browser\\axios.cjs'");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./resources/js/app.js");
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/sass/app.scss");
/******/ 	
/******/ })()
;