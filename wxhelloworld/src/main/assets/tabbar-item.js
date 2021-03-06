/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/9765220ba364971f9a40725c88dd8fbd", [], function(__weex_require__, exports, __weex_module__){

	;
	    __weex_module__.exports = {
	        data: function () {return {
	            color: '#ff0000',
	            text: '',
	        }},
	        created: function() {
	            var bundleUrl = this.$getConfig().bundleUrl;
	            console.log('bundleUrl = ' + bundleUrl);

	            if (bundleUrl.indexOf("tab1") > 0){
	                this.color = '#ff0000';
	                this.text = 'This is Tab 1 Test.';
	            }
	            else if (bundleUrl.indexOf("tab2") > 0){
	                this.color = '#00ff00';
	                this.text = 'This is Tab 2 Test.';
	            } 
	            else if (bundleUrl.indexOf("tab3") > 0){
	                this.color = '#0000ff';
	                this.text = 'This is Tab 3 Test.';
	            } 
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "wrapper"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": function () {return this.color}
	      },
	      "attr": {
	        "value": function () {return this.text}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "wrapper": {
	    "width": 750,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "right": 0,
	    "bottom": 0,
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  "text": {
	    "fontSize": 60,
	    "fontWeight": "bold",
	    "fontFamily": "\"Open Sans\", sans-serif"
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/9765220ba364971f9a40725c88dd8fbd", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);