var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/sort-commands.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/sort-commands.js":
/*!******************************!*\
  !*** ./src/sort-commands.js ***!
  \******************************/
/*! exports provided: sortByNameAsc, sortByNameDesc, sortByPositionY, sortByPositionX, sortByType, reverseOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByNameAsc", function() { return sortByNameAsc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByNameDesc", function() { return sortByNameDesc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByPositionY", function() { return sortByPositionY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByPositionX", function() { return sortByPositionX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByType", function() { return sortByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reverseOrder", function() { return reverseOrder; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Get the selected layers or all layers in the current page
 */
function getLayersToSort() {
  var doc = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var selectedLayers = doc.selectedLayers;
  if (selectedLayers.isEmpty) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("No layers selected. Select layers or artboards to sort.");
    return null;
  }
  var layers = selectedLayers.layers;

  // Check if we have a valid parent to sort within
  if (layers.length === 0) {
    return null;
  }
  return layers;
}

/**
 * Sort layers by their index within the parent
 * This function reorders layers in the layer list
 * Optimized version that batches operations
 */
function sortLayers(layers, compareFn) {
  if (!layers || layers.length === 0) {
    return;
  }

  // Get the parent (assuming all layers have the same parent)
  var parent = layers[0].parent;

  // Sort the layers array - create a copy using slice
  var sortedLayers = layers.slice().sort(compareFn);

  // Find the minimum current index to know where to insert
  var minIndex = parent.layers.length;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].index < minIndex) {
      minIndex = layers[i].index;
    }
  }

  // Move all layers to the back first (in reverse to avoid conflicts)
  for (var _i = sortedLayers.length - 1; _i >= 0; _i--) {
    sortedLayers[_i].moveToBack();
  }

  // Now move them to their final positions from back to front
  for (var _i2 = 0; _i2 < sortedLayers.length; _i2++) {
    var targetIndex = minIndex + _i2;
    sortedLayers[_i2].index = targetIndex;
  }
}

/**
 * Sort by Name (A→Z)
 * Note: Reversed because Sketch layer list shows index 0 at bottom
 */
function sortByNameAsc() {
  var layers = getLayersToSort();
  if (!layers) return;
  sortLayers(layers, function (a, b) {
    return b.name.localeCompare(a.name);
  });
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Sorted ".concat(layers.length, " layers by name (A\u2192Z)"));
}

/**
 * Sort by Name (Z→A)
 * Note: Reversed because Sketch layer list shows index 0 at bottom
 */
function sortByNameDesc() {
  var layers = getLayersToSort();
  if (!layers) return;
  sortLayers(layers, function (a, b) {
    return a.name.localeCompare(b.name);
  });
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Sorted ".concat(layers.length, " layers by name (Z\u2192A)"));
}

/**
 * Sort by Y Position (Top to Bottom)
 * Note: Reversed because Sketch layer list shows index 0 at bottom
 */
function sortByPositionY() {
  var layers = getLayersToSort();
  if (!layers) return;
  sortLayers(layers, function (a, b) {
    return b.frame.y - a.frame.y;
  });
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Sorted ".concat(layers.length, " layers by Y position (top to bottom)"));
}

/**
 * Sort by X Position (Left to Right)
 * Note: Reversed because Sketch layer list shows index 0 at bottom
 */
function sortByPositionX() {
  var layers = getLayersToSort();
  if (!layers) return;
  sortLayers(layers, function (a, b) {
    return b.frame.x - a.frame.x;
  });
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Sorted ".concat(layers.length, " layers by X position (left to right)"));
}

/**
 * Sort by Layer Type
 * Note: Reversed because Sketch layer list shows index 0 at bottom
 */
function sortByType() {
  var layers = getLayersToSort();
  if (!layers) return;

  // Define type priority
  var typePriority = {
    Artboard: 1,
    SymbolMaster: 2,
    Group: 3,
    Shape: 4,
    ShapePath: 5,
    Text: 6,
    Image: 7,
    SymbolInstance: 8,
    HotSpot: 9,
    Slice: 10
  };
  sortLayers(layers, function (a, b) {
    var priorityA = typePriority[a.type] || 99;
    var priorityB = typePriority[b.type] || 99;
    if (priorityA !== priorityB) {
      return priorityB - priorityA; // Reversed
    }

    // If same type, sort by name (also reversed)
    return b.name.localeCompare(a.name);
  });
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Sorted ".concat(layers.length, " layers by type"));
}

/**
 * Reverse the order of selected layers
 */
function reverseOrder() {
  var layers = getLayersToSort();
  if (!layers) return;
  sortLayers(layers, function (a, b) {
    return a.index - b.index; // This one stays the same to actually reverse
  });
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Reversed order of ".concat(layers.length, " layers"));
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['sortByNameAsc'] = __skpm_run.bind(this, 'sortByNameAsc');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['sortByNameDesc'] = __skpm_run.bind(this, 'sortByNameDesc');
globalThis['sortByPositionY'] = __skpm_run.bind(this, 'sortByPositionY');
globalThis['sortByPositionX'] = __skpm_run.bind(this, 'sortByPositionX');
globalThis['sortByType'] = __skpm_run.bind(this, 'sortByType');
globalThis['reverseOrder'] = __skpm_run.bind(this, 'reverseOrder')

//# sourceMappingURL=__sort-commands.js.map