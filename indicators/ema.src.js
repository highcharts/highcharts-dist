(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("highcharts/indicators/ema", [], function (amd1) {return factory(amd1);});
	else if(typeof exports === 'object')
		exports["highcharts/indicators/ema"] = factory();
	else
		root["Highcharts"] = factory();
})(typeof window === 'undefined' ? this : window, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

/*
 * Since v9.3.0, EMA technical indicator is part of indicators.js.
 * It's no longer necessary to load this file.
 */

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});