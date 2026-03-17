// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0-modified (2026-03-17)
 * @module highcharts/modules/tiledwebmap
 * @requires highcharts
 *
 * (c) 2009-2026
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"]);
	else if(typeof define === 'function' && define.amd)
		define("highcharts/modules/tiledwebmap", ["highcharts/highcharts"], function (amd1) {return factory(amd1,amd1["SeriesRegistry"]);});
	else if(typeof exports === 'object')
		exports["highcharts/modules/tiledwebmap"] = factory(root["_Highcharts"], root["_Highcharts"]["SeriesRegistry"]);
	else
		root["Highcharts"] = factory(root["Highcharts"], root["Highcharts"]["SeriesRegistry"]);
})(typeof window === 'undefined' ? this : window, (__WEBPACK_EXTERNAL_MODULE__944__, __WEBPACK_EXTERNAL_MODULE__512__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 512:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__512__;

/***/ }),

/***/ 944:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__944__;

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ tiledwebmap_src)
});

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts"],"commonjs":["highcharts"],"commonjs2":["highcharts"],"root":["Highcharts"]}
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_ = __webpack_require__(944);
var highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default = /*#__PURE__*/__webpack_require__.n(highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_);
;// ./code/es-modules/Maps/TilesProviders/OpenStreetMap.js
/* *
 * OpenStreetMap provider, used for tile map services
 * */

/* *
 *
 *  Class
 *
 * */
/** @internal */
class OpenStreetMap {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        this.defaultCredits = ('Map data &copy2023' +
            ' <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>');
        this.initialProjectionName = 'WebMercator';
        this.subdomains = ['a', 'b', 'c'];
        this.themes = {
            Standard: {
                url: 'https://tile.openstreetmap.org/{zoom}/{x}/{y}.png',
                minZoom: 0,
                maxZoom: 19
            },
            Hot: {
                url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
                minZoom: 0,
                maxZoom: 19
            },
            OpenTopoMap: {
                url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
                minZoom: 0,
                maxZoom: 17,
                credits: `Map data: &copy; <a href="https://www.openstreetmap.org/copyright">
                OpenStreetMap</a> contributors, <a href="https://viewfinderpanoramas.org">SRTM</a> 
                | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> 
                (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)`
            }
        };
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const TilesProviders_OpenStreetMap = (OpenStreetMap);

;// ./code/es-modules/Maps/TilesProviders/Stamen.js
/* *
 * Stamen provider, used for tile map services
 * */

/* *
 *
 *  Class
 *
 * */
/** @internal */
class Stamen {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        this.defaultCredits = ('&copy; Map tiles by <a href="https://stamen.com">Stamen Design</a>,' +
            ' under <a href="https://creativecommons.org/licenses/by/3.0">CC BY' +
            ' 3.0</a>. Data by <a href="https://openstreetmap.org">OpenStreetMap' +
            '</a>, under <a href="https://www.openstreetmap.org/copyright">ODbL</a>');
        this.initialProjectionName = 'WebMercator';
        this.subdomains = ['a', 'b', 'c', 'd'];
        this.themes = {
            Toner: {
                url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.png',
                minZoom: 0,
                maxZoom: 20
            },
            TonerBackground: {
                url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png',
                minZoom: 0,
                maxZoom: 20
            },
            TonerLite: {
                url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png',
                minZoom: 0,
                maxZoom: 20
            },
            Terrain: {
                url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png',
                minZoom: 0,
                maxZoom: 18
            },
            TerrainBackground: {
                url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}.png',
                minZoom: 0,
                maxZoom: 18
            },
            Watercolor: {
                url: 'https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
                minZoom: 1,
                maxZoom: 16,
                credits: ('&copy Map tiles by <a href="https://stamen.com">Stamen' +
                    ' Design</a>, under <a href="https://creativecommons.org/' +
                    'licenses/by/3.0">CC BY 3.0</a>. Data by <a href="https://' +
                    'openstreetmap.org">OpenStreetMap</a>, under <a href=' +
                    '"https://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>')
            }
        };
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const TilesProviders_Stamen = (Stamen);

;// ./code/es-modules/Maps/TilesProviders/LimaLabs.js
/* *
 * LimaLabs provider, used for tile map services
 * */

/* *
 *
 *  Class
 *
 * */
/** @internal */
class LimaLabs {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        this.defaultCredits = ('Map data &copy;2023' +
            ' <a href="https://maps.lima-labs.com/">LimaLabs</a>');
        this.initialProjectionName = 'WebMercator';
        this.requiresApiKey = true;
        this.themes = {
            Standard: {
                url: 'https://cdn.lima-labs.com/{zoom}/{x}/{y}.png?api={apikey}',
                minZoom: 0,
                maxZoom: 20
            }
        };
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const TilesProviders_LimaLabs = (LimaLabs);

;// ./code/es-modules/Maps/TilesProviders/Thunderforest.js
/* *
 * Thunderforest provider, used for tile map services
 * */

/* *
 *
 *  Class
 *
 * */
/** @internal */
class Thunderforest {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        this.defaultCredits = ('Maps &copy <a href="https://www.thunderforest.com">Thunderforest</a>' +
            ', Data &copy; <a href="https://www.openstreetmap.org/copyright">' +
            'OpenStreetMap contributors</a>');
        this.initialProjectionName = 'WebMercator';
        this.requiresApiKey = true;
        this.subdomains = ['a', 'b', 'c'];
        this.themes = {
            OpenCycleMap: {
                url: 'https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey={apikey}',
                minZoom: 0,
                maxZoom: 22
            },
            Transport: {
                url: 'https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey={apikey}',
                minZoom: 0,
                maxZoom: 22
            },
            TransportDark: {
                url: 'https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}',
                minZoom: 0,
                maxZoom: 22
            },
            SpinalMap: {
                url: 'https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}',
                minZoom: 0,
                maxZoom: 22
            },
            Landscape: {
                url: 'https://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey={apikey}',
                minZoom: 0,
                maxZoom: 22
            },
            Outdoors: {
                url: 'https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}',
                minZoom: 0,
                maxZoom: 22
            },
            Pioneer: {
                url: 'https://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png?apikey={apikey}',
                minZoom: 0,
                maxZoom: 22
            },
            MobileAtlas: {
                url: 'https://{s}.tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey={apikey}',
                minZoom: 0,
                maxZoom: 22
            },
            Neighbourhood: {
                url: 'https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png?apikey={apikey}',
                minZoom: 0,
                maxZoom: 22
            }
        };
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const TilesProviders_Thunderforest = (Thunderforest);

;// ./code/es-modules/Maps/TilesProviders/Esri.js
/* *
 * Esri provider, used for tile map services
 * */

/* *
 *
 *  Class
 *
 * */
/** @internal */
class Esri {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        this.defaultCredits = ('Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, ' +
            ' Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong),' +
            ' Esri (Thailand), TomTom, 2012');
        this.initialProjectionName = 'WebMercator';
        this.themes = {
            WorldStreetMap: {
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 20
            },
            DeLorme: {
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Specialty/DeLorme_World_Base_Map/MapServer/tile/{z}/{y}/{x}',
                minZoom: 1,
                maxZoom: 11,
                credits: 'Tiles &copy; Esri &mdash; Copyright: &copy;2012 DeLorme'
            },
            WorldTopoMap: {
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 20,
                credits: ('Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom,' +
                    ' Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL,' +
                    ' Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong),' +
                    ' and the GIS User Community')
            },
            WorldImagery: {
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 20,
                credits: ('Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS,' +
                    ' AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP,' +
                    ' and the GIS User Community')
            },
            WorldTerrain: {
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Terrain_Base/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 13,
                credits: ('Tiles &copy; Esri &mdash; Source: USGS, Esri, TANA, DeLorme,' +
                    ' and NPS')
            },
            WorldShadedRelief: {
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 13,
                credits: 'Tiles &copy; Esri &mdash; Source: Esri'
            },
            WorldPhysical: {
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 8,
                credits: 'Tiles &copy; Esri &mdash; Source: US National Park Service'
            },
            NatGeoWorldMap: {
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 16,
                credits: ('Tiles &copy; Esri &mdash; National Geographic, Esri,' +
                    ' DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN,' +
                    ' GEBCO, NOAA, iPC')
            },
            WorldGrayCanvas: {
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 16,
                credits: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
            }
        };
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const TilesProviders_Esri = (Esri);

;// ./code/es-modules/Maps/TilesProviders/USGS.js
/* *
 * USGS provider, used for tile map services
 * */

/* *
 *
 *  Class
 *
 * */
/** @internal */
class USGS {
    constructor() {
        /* *
         *
         *  Properties
         *
         * */
        this.defaultCredits = ('Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological' +
            'Survey</a>');
        this.initialProjectionName = 'WebMercator';
        this.themes = {
            USTopo: {
                url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 20
            },
            USImagery: {
                url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 20
            },
            USImageryTopo: {
                url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}',
                minZoom: 0,
                maxZoom: 20
            }
        };
    }
}
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const TilesProviders_USGS = (USGS);

;// ./code/es-modules/Maps/TilesProviders/TilesProviderRegistry.js
/* *
 *
 *
 * */

/* *
 *
 *  Imports
 *
 * */






/* *
 *
 *  Constants
 *
 * */
/** @internal */
const tilesProviderRegistry = {
    Esri: TilesProviders_Esri,
    LimaLabs: TilesProviders_LimaLabs,
    OpenStreetMap: TilesProviders_OpenStreetMap,
    Stamen: TilesProviders_Stamen,
    Thunderforest: TilesProviders_Thunderforest,
    USGS: TilesProviders_USGS
};
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
/* harmony default export */ const TilesProviderRegistry = (tilesProviderRegistry);

// EXTERNAL MODULE: external {"amd":["highcharts/highcharts","SeriesRegistry"],"commonjs":["highcharts","SeriesRegistry"],"commonjs2":["highcharts","SeriesRegistry"],"root":["Highcharts","SeriesRegistry"]}
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_ = __webpack_require__(512);
var highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default = /*#__PURE__*/__webpack_require__.n(highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_);
;// ./code/es-modules/Series/TiledWebMap/TiledWebMapSeriesDefaults.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Hubert Kozik, Kamil Musiałowski
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

/* *
 *
 *  API Options
 *
 * */
/**
 * A tiledwebmap series allows user to display dynamically joined individual
 * images (tiles) and join them together to create a map.
 *
 * @sample maps/series-tiledwebmap/simple-demo-norway
 *         Simple demo of data for Norway on TiledWebMap
 * @sample maps/series-tiledwebmap/only-twm
 *         OpenStreetMap demo
 *
 * @extends      plotOptions.map
 * @excluding    affectsMapView, allAreas, allowPointSelect, animation,
 * animationLimit, boostBlending, boostThreshold, borderColor, borderWidth,
 * clip, color, colorAxis, colorByPoint, colorIndex, colorKey, colors,
 * cursor, dashStyle, dataLabels, dataParser, dataURL, dragDrop,
 * enableMouseTracking, findNearestPointBy, joinBy, keys, marker,
 * negativeColor, nullColor, nullInteraction, onPoint, point,
 * pointDescriptionFormatter, selected, shadow, showCheckbox,
 * sonification, stickyTracking, tooltip, type
 * @product      highmaps
 * @optionparent plotOptions.tiledwebmap
 */
const TiledWebMapSeriesDefaults = {
    states: {
        inactive: {
            enabled: false
        }
    }
};
/* *
 *
 *  API options
 *
 * */
/**
 * A `tiledwebmap` series. The [type](#series.tiledwebmap.type) option is
 * not specified, it is inherited from [chart.type](#chart.type).
 *
 * @sample maps/series-tiledwebmap/simple-demo-norway
 *         Simple demo of data for Norway on TiledWebMap
 * @sample maps/series-tiledwebmap/only-twm
 *         OpenStreetMap demo
 *
 * @extends   series,plotOptions.tiledwebmap
 * @excluding affectsMapView, allAreas, allowPointSelect, animation,
 * animationLimit, boostBlending, boostThreshold, borderColor, borderWidth,
 * clip, color, colorAxis, colorByPoint, colorIndex, colorKey, colors, cursor,
 * dashStyle, dataLabels, dataParser, dataURL, dragDrop, enableMouseTracking,
 * findNearestPointBy, joinBy, keys, marker, negativeColor, nullColor,
 * nullInteraction, onPoint, point, pointDescriptionFormatter, selected, shadow,
 * showCheckbox, stickyTracking, tooltip, type
 * @product   highmaps
 * @apioption series.tiledwebmap
 */
/**
 * Provider options for the series.
 *
 * @sample maps/series-tiledwebmap/human-anatomy
 *         Human Anatomy Explorer - Custom TiledWebMap Provider
 *
 * @since 11.1.0
 * @product   highmaps
 * @apioption plotOptions.tiledwebmap.provider
 */
/**
 * Provider type to pull data (tiles) from.
 *
 * @sample maps/series-tiledwebmap/basic-configuration
 *         Basic configuration for TiledWebMap
 *
 * @type      {string}
 * @since 11.1.0
 * @product   highmaps
 * @apioption plotOptions.tiledwebmap.provider.type
 */
/**
 * Set a tiles theme. Check the [providers documentation](https://www.highcharts.com/docs/maps/tiledwebmap)
 * for official list of available themes.
 *
 * @sample maps/series-tiledwebmap/europe-timezones
 *         Imagery basemap for Europe
 * @sample maps/series-tiledwebmap/hiking-trail
 *         Topo basemap and MapLine
 *
 * @type      {string}
 * @since 11.1.0
 * @product   highmaps
 * @apioption plotOptions.tiledwebmap.provider.theme
 */
/**
 * Subdomain required by each provider. Check the [providers documentation](https://www.highcharts.com/docs/maps/tiledwebmap)
 * for available subdomains.
 *
 * @sample maps/series-tiledwebmap/basic-configuration
 *         Basic configuration for TiledWebMap
 *
 * @type      {string}
 * @since 11.1.0
 * @product   highmaps
 * @apioption plotOptions.tiledwebmap.provider.subdomain
 */
/**
 * API key for providers that require using one.
 *
 * @type      {string}
 * @since 11.1.0
 * @product   highmaps
 * @apioption plotOptions.tiledwebmap.provider.apiKey
 */
/**
 * Custom URL for providers not specified in [providers type](#series.
 * tiledwebmap.provider.type). Available variables to use in URL are: `{x}`,
 * `{y}`, `{z}` or `{zoom}`. Remember to always specify a projection, when
 * using a custom URL.
 *
 * @sample maps/series-tiledwebmap/custom-url
 *         Custom URL with projection in TiledWebMap configuration
 *
 * @type      {string}
 * @since 11.1.0
 * @product   highmaps
 * @apioption plotOptions.tiledwebmap.provider.url
 */
''; // Keeps doclets above detached
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const TiledWebMap_TiledWebMapSeriesDefaults = (TiledWebMapSeriesDefaults);

;// ./code/es-modules/Shared/Utilities.js
/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */

const { doc, win } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
/* eslint-disable valid-jsdoc */
/**
 * Add an event listener.
 *
 * @function Highcharts.addEvent<T>
 *
 * @param  {Highcharts.Class<T>|T} el
 *         The element or object to add a listener to. It can be a
 *         {@link HTMLDOMElement}, an {@link SVGElement} or any other object.
 *
 * @param  {string} type
 *         The event type.
 *
 * @param  {Highcharts.EventCallbackFunction<T>|Function} fn
 *         The function callback to execute when the event is fired.
 *
 * @param  {Highcharts.EventOptionsObject} [options]
 *         Options for adding the event.
 *
 * @sample highcharts/members/addevent
 *         Use a general `render` event to draw shapes on a chart
 *
 * @return {Function}
 *         A callback function to remove the added event.
 */
function addEvent(el, type, fn, options = {}) {
    /* eslint-enable valid-jsdoc */
    // Add hcEvents to either the prototype (in case we're running addEvent on a
    // class) or the instance. If hasOwnProperty('hcEvents') is false, it is
    // inherited down the prototype chain, in which case we need to set the
    // property on this instance (which may itself be a prototype).
    const owner = typeof el === 'function' && el.prototype || el;
    if (!Object.hasOwnProperty.call(owner, 'hcEvents')) {
        owner.hcEvents = {};
    }
    const events = owner.hcEvents;
    // Allow click events added to points, otherwise they will be prevented by
    // the TouchPointer.pinch function after a pinch zoom operation (#7091).
    if ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).Point && // Without H a dependency loop occurs
        el instanceof (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).Point &&
        el.series &&
        el.series.chart) {
        el.series.chart.runTrackerClick = true;
    }
    // Handle DOM events
    // If the browser supports passive events, add it to improve performance
    // on touch events (#11353).
    const addEventListener = el.addEventListener;
    if (addEventListener) {
        addEventListener.call(el, type, fn, (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()).supportsPassiveEvents ? {
            passive: options.passive === void 0 ?
                type.indexOf('touch') !== -1 : options.passive,
            capture: false
        } : false);
    }
    if (!events[type]) {
        events[type] = [];
    }
    const eventObject = {
        fn,
        order: typeof options.order === 'number' ? options.order : Infinity
    };
    events[type].push(eventObject);
    // Order the calls
    events[type].sort((a, b) => a.order - b.order);
    // Return a function that can be called to remove this event.
    return function () {
        removeEvent(el, type, fn);
    };
}
/**
 * Non-recursive method to find the lowest member of an array. `Math.min` raises
 * a maximum call stack size exceeded error in Chrome when trying to apply more
 * than 150.000 points. This method is slightly slower, but safe.
 *
 * @function Highcharts.arrayMin
 *
 * @param {Array<*>} data
 *        An array of numbers.
 *
 * @return {number}
 *         The lowest number.
 */
function arrayMin(data) {
    let i = data.length, min = data[0];
    while (i--) {
        if (data[i] < min) {
            min = data[i];
        }
    }
    return min;
}
/**
 * Non-recursive method to find the lowest member of an array. `Math.max` raises
 * a maximum call stack size exceeded error in Chrome when trying to apply more
 * than 150.000 points. This method is slightly slower, but safe.
 *
 * @function Highcharts.arrayMax
 *
 * @param {Array<*>} data
 *        An array of numbers.
 *
 * @return {number}
 *         The highest number.
 */
function arrayMax(data) {
    let i = data.length, max = data[0];
    while (i--) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}
/**
 * Set or get an attribute or an object of attributes.
 *
 * To use as a setter, pass a key and a value, or let the second argument be a
 * collection of keys and values. When using a collection, passing a value of
 * `null` or `undefined` will remove the attribute.
 *
 * To use as a getter, pass only a string as the second argument.
 *
 * @function Highcharts.attr
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} elem
 *        The DOM element to receive the attribute(s).
 *
 * @param {string|Highcharts.HTMLAttributes|Highcharts.SVGAttributes} [keyOrAttribs]
 *        The property or an object of key-value pairs.
 *
 * @param {number|string} [value]
 *        The value if a single property is set.
 *
 * @return {string|null|undefined}
 *         When used as a getter, return the value.
 */
function attr(elem, keyOrAttribs, value) {
    const isGetter = isString(keyOrAttribs) && !defined(value);
    let ret;
    const attrSingle = (value, key) => {
        // Set the value
        if (defined(value)) {
            elem.setAttribute(key, value);
            // Get the value
        }
        else if (isGetter) {
            ret = elem.getAttribute(key);
            // IE7 and below cannot get class through getAttribute (#7850)
            if (!ret && key === 'class') {
                ret = elem.getAttribute(key + 'Name');
            }
            // Remove the value
        }
        else {
            elem.removeAttribute(key);
        }
    };
    // If keyOrAttribs is a string
    if (isString(keyOrAttribs)) {
        attrSingle(value, keyOrAttribs);
        // Else if keyOrAttribs is defined, it is a hash of key/value pairs
    }
    else {
        objectEach(keyOrAttribs, attrSingle);
    }
    return ret;
}
/**
 * Constrain a value to within a lower and upper threshold.
 *
 * @internal
 * @param {number} value The initial value
 * @param {number} min The lower threshold
 * @param {number} max The upper threshold
 * @return {number} Returns a number value within min and max.
 */
function clamp(value, min, max) {
    return value > min ? value < max ? value : max : min;
}
/**
 * Fix JS round off float errors.
 *
 * @function Highcharts.correctFloat
 *
 * @param {number} num
 *        A float number to fix.
 *
 * @param {number} [prec=14]
 *        The precision.
 *
 * @return {number}
 *         The corrected float number.
 */
function correctFloat(num, prec) {
    // When the number is higher than 1e14 use the number (#16275)
    return num > 1e14 ? num : parseFloat(num.toPrecision(prec || 14));
}
/**
 * Utility function to create an HTML element with attributes and styles.
 *
 * @function Highcharts.createElement
 *
 * @param {string} tag
 *        The HTML tag.
 *
 * @param {Highcharts.HTMLAttributes} [attribs]
 *        Attributes as an object of key-value pairs.
 *
 * @param {Highcharts.CSSObject} [styles]
 *        Styles as an object of key-value pairs.
 *
 * @param {Highcharts.HTMLDOMElement} [parent]
 *        The parent HTML object.
 *
 * @param {boolean} [nopad=false]
 *        If true, remove all padding, border and margin.
 *
 * @return {Highcharts.HTMLDOMElement}
 *         The created DOM element.
 */
function createElement(tag, attribs, styles, parent, nopad) {
    const el = doc.createElement(tag);
    if (attribs) {
        extend(el, attribs);
    }
    if (nopad) {
        css(el, { padding: '0', border: 'none', margin: '0' });
    }
    if (styles) {
        css(el, styles);
    }
    if (parent) {
        parent.appendChild(el);
    }
    return el;
}
/**
 * Utility for crisping a line position to the nearest full pixel depening on
 * the line width
 *
 * @internal
 * @param {number} value       The raw pixel position
 * @param {number} lineWidth   The line width
 * @param {boolean} [inverted] Whether the containing group is inverted.
 *                             Crisping round numbers on the y-scale need to go
 *                             to the other side because the coordinate system
 *                             is flipped (scaleY is -1)
 * @return {number}            The pixel position to use for a crisp display
 */
function crisp(value, lineWidth = 0, inverted) {
    const mod = lineWidth % 2 / 2, inverter = inverted ? -1 : 1;
    return (Math.round(value * inverter - mod) + mod) * inverter;
}
/**
 * Set CSS on a given element.
 *
 * @function Highcharts.css
 *
 * @param {Highcharts.HTMLDOMElement|Highcharts.SVGDOMElement} el
 *        An HTML DOM element.
 *
 * @param {Highcharts.CSSObject} styles
 *        Style object with camel case property names.
 *
 * @return {void}
 */
function css(el, styles) {
    extend(el.style, styles);
}
/**
 * Check if an object is null or undefined.
 *
 * @function Highcharts.defined
 *
 * @param {*} obj
 *        The object to check.
 *
 * @return {boolean}
 *         False if the object is null or undefined, otherwise true.
 */
function defined(obj) {
    return typeof obj !== 'undefined' && obj !== null;
}
/**
 * Utility method that destroys any SVGElement instances that are properties on
 * the given object. It loops all properties and invokes destroy if there is a
 * destroy method. The property is then delete.
 *
 * @function Highcharts.destroyObjectProperties
 *
 * @param {*} obj
 *        The object to destroy properties on.
 *
 * @param {*} [except]
 *        Exception, do not destroy this property, only delete it.
 */
function destroyObjectProperties(obj, except, destructablesOnly) {
    objectEach(obj, function (val, n) {
        // If the object is non-null and destroy is defined
        if (val !== except && val?.destroy) {
            // Invoke the destroy
            val.destroy();
        }
        // Delete the property from the object
        if (val?.destroy || !destructablesOnly) {
            delete obj[n];
        }
    });
}
/**
 * Discard a HTML element
 *
 * @function Highcharts.discardElement
 *
 * @param {Highcharts.HTMLDOMElement} element
 *        The HTML node to discard.
 */
function discardElement(element) {
    element?.parentElement?.removeChild(element);
}
// eslint-disable-next-line valid-jsdoc
/**
 * Return the deep difference between two objects. It can either return the new
 * properties, or optionally return the old values of new properties.
 * @internal
 */
function diffObjects(newer, older, keepOlder, collectionsWithUpdate) {
    const ret = {};
    /**
     * Recurse over a set of options and its current values, and store the
     * current values in the ret object.
     */
    function diff(newer, older, ret, depth) {
        const keeper = keepOlder ? older : newer;
        objectEach(newer, function (newerVal, key) {
            if (!depth &&
                collectionsWithUpdate &&
                collectionsWithUpdate.indexOf(key) > -1 &&
                older[key]) {
                newerVal = splat(newerVal);
                ret[key] = [];
                // Iterate over collections like series, xAxis or yAxis and map
                // the items by index.
                for (let i = 0; i < Math.max(newerVal.length, older[key].length); i++) {
                    // Item exists in current data (#6347)
                    if (older[key][i]) {
                        // If the item is missing from the new data, we need to
                        // save the whole config structure. Like when
                        // responsively updating from a dual axis layout to a
                        // single axis and back (#13544).
                        if (newerVal[i] === void 0) {
                            ret[key][i] = older[key][i];
                            // Otherwise, proceed
                        }
                        else {
                            ret[key][i] = {};
                            diff(newerVal[i], older[key][i], ret[key][i], depth + 1);
                        }
                    }
                }
            }
            else if (isObject(newerVal, true) &&
                !newerVal.nodeType // #10044
            ) {
                ret[key] = isArray(newerVal) ? [] : {};
                diff(newerVal, older[key] || {}, ret[key], depth + 1);
                // Delete empty nested objects
                if (Object.keys(ret[key]).length === 0 &&
                    // Except colorAxis which is a special case where the empty
                    // object means it is enabled. Which is unfortunate and we
                    // should try to find a better way.
                    !(key === 'colorAxis' && depth === 0)) {
                    delete ret[key];
                }
            }
            else if (newer[key] !== older[key] ||
                // If the newer key is explicitly undefined, keep it (#10525)
                (key in newer && !(key in older))) {
                if (key !== '__proto__' && key !== 'constructor') {
                    ret[key] = keeper[key];
                }
            }
        });
    }
    diff(newer, older, ret, 0);
    return ret;
}
/**
 * Remove the last occurence of an item from an array.
 *
 * @function Highcharts.erase
 *
 * @param {Array<*>} arr
 *        The array.
 *
 * @param {*} item
 *        The item to remove.
 *
 * @return {void}
 */
function erase(arr, item) {
    let i = arr.length;
    while (i--) {
        if (arr[i] === item) {
            arr.splice(i, 1);
            break;
        }
    }
}
/**
 * Utility function to extend an object with the members of another.
 *
 * @function Highcharts.extend<T>
 *
 * @param {T|undefined} a
 *        The object to be extended.
 *
 * @param {Partial<T>} b
 *        The object to add to the first one.
 *
 * @return {T}
 *         Object a, the original object.
 */
function extend(a, b) {
    /* eslint-enable valid-jsdoc */
    let n;
    if (!a) {
        a = {};
    }
    for (n in b) { // eslint-disable-line guard-for-in
        a[n] = b[n];
    }
    return a;
}
// eslint-disable-next-line valid-jsdoc
/**
 * Extend a prototyped class by new members.
 *
 * @deprecated
 * @function Highcharts.extendClass<T>
 *
 * @param {Highcharts.Class<T>} parent
 *        The parent prototype to inherit.
 *
 * @param {Highcharts.Dictionary<*>} members
 *        A collection of prototype members to add or override compared to the
 *        parent prototype.
 *
 * @return {Highcharts.Class<T>}
 *         A new prototype.
 */
function extendClass(parent, members) {
    const obj = (function () { });
    obj.prototype = new parent(); // eslint-disable-line new-cap
    extend(obj.prototype, members);
    return obj;
}
/* eslint-disable valid-jsdoc */
/**
 * Fire an event that was registered with {@link Highcharts#addEvent}.
 *
 * @function Highcharts.fireEvent<T>
 *
 * @param {T} el
 *        The object to fire the event on. It can be a {@link HTMLDOMElement},
 *        an {@link SVGElement} or any other object.
 *
 * @param {string} type
 *        The type of event.
 *
 * @param {Highcharts.Dictionary<*>|Event} [eventArguments]
 *        Custom event arguments that are passed on as an argument to the event
 *        handler.
 *
 * @param {Highcharts.EventCallbackFunction<T>|Function} [defaultFunction]
 *        The default function to execute if the other listeners haven't
 *        returned false.
 *
 * @return {void}
 */
function fireEvent(el, type, eventArguments, defaultFunction) {
    /* eslint-enable valid-jsdoc */
    eventArguments = eventArguments || {};
    if (doc?.createEvent &&
        (el.dispatchEvent ||
            (el.fireEvent &&
                // Enable firing events on Highcharts instance.
                el !== H))) {
        const e = doc.createEvent('Events');
        e.initEvent(type, true, true);
        eventArguments = extend(e, eventArguments);
        if (el.dispatchEvent) {
            el.dispatchEvent(eventArguments);
        }
        else {
            el.fireEvent(type, eventArguments);
        }
    }
    else if (el.hcEvents) {
        if (!eventArguments.target) {
            // We're running a custom event
            extend(eventArguments, {
                // Attach a simple preventDefault function to skip
                // default handler if called. The built-in
                // defaultPrevented property is not overwritable (#5112)
                preventDefault: function () {
                    eventArguments.defaultPrevented = true;
                },
                // Setting target to native events fails with clicking
                // the zoom-out button in Chrome.
                target: el,
                // If the type is not set, we're running a custom event
                // (#2297). If it is set, we're running a browser event.
                type: type
            });
        }
        const events = [];
        let object = el;
        let multilevel = false;
        // Recurse up the inheritance chain and collect hcEvents set as own
        // objects on the prototypes.
        while (object.hcEvents) {
            if (Object.hasOwnProperty.call(object, 'hcEvents') &&
                object.hcEvents[type]) {
                if (events.length) {
                    multilevel = true;
                }
                events.unshift.apply(events, object.hcEvents[type]);
            }
            object = Object.getPrototypeOf(object);
        }
        // For performance reasons, only sort the event handlers in case we are
        // dealing with multiple levels in the prototype chain. Otherwise, the
        // events are already sorted in the addEvent function.
        if (multilevel) {
            // Order the calls
            events.sort((a, b) => a.order - b.order);
        }
        // Call the collected event handlers
        events.forEach((obj) => {
            // If the event handler returns false, prevent the default handler
            // from executing
            if (obj.fn.call(el, eventArguments, el) === false) {
                eventArguments.preventDefault();
            }
        });
    }
    // Run the default if not prevented
    if (defaultFunction && !eventArguments.defaultPrevented) {
        defaultFunction.call(el, eventArguments);
    }
}
/**
 * Convenience function to get the align factor, used several places for
 * computing positions
 * @internal
 */
const getAlignFactor = (align = '') => ({
    center: 0.5,
    right: 1,
    middle: 0.5,
    bottom: 1
}[align] || 0);
/**
 * Find the closest distance between two values of a two-dimensional array
 * @internal
 * @function Highcharts.getClosestDistance
 *
 * @param {Array<Array<number>>} arrays
 *          An array of arrays of numbers
 *
 * @return {number | undefined}
 *          The closest distance between values
 */
function getClosestDistance(arrays, onError) {
    const allowNegative = !onError;
    let closest, loopLength, distance, i;
    arrays.forEach((xData) => {
        if (xData.length > 1) {
            loopLength = xData.length - 1;
            for (i = loopLength; i > 0; i--) {
                distance = xData[i] - xData[i - 1];
                if (distance < 0 && !allowNegative) {
                    onError?.();
                    // Only one call
                    onError = void 0;
                }
                else if (distance && (typeof closest === 'undefined' || distance < closest)) {
                    closest = distance;
                }
            }
        }
    });
    return closest;
}
/**
 * Get the magnitude of a number.
 *
 * @function Highcharts.getMagnitude
 *
 * @param {number} num
 *        The number.
 *
 * @return {number}
 *         The magnitude, where 1-9 are magnitude 1, 10-99 magnitude 2 etc.
 */
function getMagnitude(num) {
    return Math.pow(10, Math.floor(Math.log(num) / Math.LN10));
}
/**
 * Returns the value of a property path on a given object.
 *
 * @internal
 * @function getNestedProperty
 *
 * @param {string} path
 * Path to the property, for example `custom.myValue`.
 *
 * @param {unknown} obj
 * Instance containing the property on the specific path.
 *
 * @return {unknown}
 * The unknown property value.
 */
function getNestedProperty(path, parent) {
    const pathElements = path.split('.');
    while (pathElements.length && defined(parent)) {
        const pathElement = pathElements.shift();
        // Filter on the key
        if (typeof pathElement === 'undefined' ||
            pathElement === '__proto__') {
            return; // Undefined
        }
        if (pathElement === 'this') {
            let thisProp;
            if (isObject(parent)) {
                thisProp = parent['@this'];
            }
            return thisProp ?? parent;
        }
        const child = parent[pathElement.replace(/[\\'"]/g, '')];
        // Filter on the child
        if (!defined(child) ||
            typeof child === 'function' ||
            typeof child.nodeType === 'number' ||
            child === win) {
            return; // Undefined
        }
        // Else, proceed
        parent = child;
    }
    return parent;
}
/**
 * Get the computed CSS value for given element and property, only for numerical
 * properties. For width and height, the dimension of the inner box (excluding
 * padding) is returned. Used for fitting the chart within the container.
 *
 * @function Highcharts.getStyle
 *
 * @param {Highcharts.HTMLDOMElement} el
 * An HTML element.
 *
 * @param {string} prop
 * The property name.
 *
 * @param {boolean} [toInt=true]
 * Parse to integer.
 *
 * @return {number|string|undefined}
 * The style value.
 */
function getStyle(el, prop, toInt) {
    let style;
    // For width and height, return the actual inner pixel size (#4913)
    if (prop === 'width') {
        let offsetWidth = Math.min(el.offsetWidth, el.scrollWidth);
        // In flex boxes, we need to use getBoundingClientRect and floor it,
        // because scrollWidth doesn't support subpixel precision (#6427) ...
        const boundingClientRectWidth = el.getBoundingClientRect?.().width;
        // ...unless if the containing div or its parents are transform-scaled
        // down, in which case the boundingClientRect can't be used as it is
        // also scaled down (#9871, #10498).
        if (boundingClientRectWidth < offsetWidth &&
            boundingClientRectWidth >= offsetWidth - 1) {
            offsetWidth = Math.floor(boundingClientRectWidth);
        }
        return Math.max(0, // #8377
        (offsetWidth -
            (getStyle(el, 'padding-left', true) || 0) -
            (getStyle(el, 'padding-right', true) || 0)));
    }
    if (prop === 'height') {
        return Math.max(0, // #8377
        (Math.min(el.offsetHeight, el.scrollHeight) -
            (getStyle(el, 'padding-top', true) || 0) -
            (getStyle(el, 'padding-bottom', true) || 0)));
    }
    // Otherwise, get the computed style
    const css = win.getComputedStyle(el, void 0); // eslint-disable-line no-undefined
    if (css) {
        style = css.getPropertyValue(prop);
        if (pick(toInt, prop !== 'opacity')) {
            style = pInt(style);
        }
    }
    return style;
}
/**
 * Return the value of the first element in the array that satisfies the
 * provided testing function.
 *
 * @function Highcharts.find<T>
 *
 * @param {Array<T>} arr
 *        The array to test.
 *
 * @param {Function} callback
 *        The callback function. The function receives the item as the first
 *        argument. Return `true` if this item satisfies the condition.
 *
 * @return {T|undefined}
 *         The value of the element.
 */
const find = Array.prototype.find ?
    function (arr, callback) {
        return arr.find(callback);
    } :
    // Legacy implementation. PhantomJS, IE <= 11 etc. #7223.
    function (arr, callback) {
        let i;
        const length = arr.length;
        for (i = 0; i < length; i++) {
            if (callback(arr[i], i)) { // eslint-disable-line node/callback-return
                return arr[i];
            }
        }
    };
/**
 * Internal clear timeout. The function checks that the `id` was not removed
 * (e.g. by `chart.destroy()`). For the details see
 * [issue #7901](https://github.com/highcharts/highcharts/issues/7901).
 *
 * @internal
 *
 * @function Highcharts.clearTimeout
 *
 * @param {number|undefined} id
 * Id of a timeout.
 */
function internalClearTimeout(id) {
    if (defined(id)) {
        clearTimeout(id);
    }
}
/**
 * Utility function to check if an Object is a HTML Element.
 *
 * @function Highcharts.isDOMElement
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a HTML Element.
 */
function isDOMElement(obj) {
    return isObject(obj) && typeof obj.nodeType === 'number';
}
/**
 * Utility function to check if an Object is a class.
 *
 * @function Highcharts.isClass
 *
 * @param {object|undefined} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a class.
 */
function isClass(obj) {
    const c = obj?.constructor;
    return !!(isObject(obj, true) &&
        !isDOMElement(obj) &&
        (c?.name && c.name !== 'Object'));
}
/**
 * Utility function to check if an item is a number and it is finite (not NaN,
 * Infinity or -Infinity).
 *
 * @function Highcharts.isNumber
 *
 * @param {*} n
 *        The item to check.
 *
 * @return {boolean}
 *         True if the item is a finite number
 */
function isNumber(n) {
    return typeof n === 'number' && !isNaN(n) && n < Infinity && n > -Infinity;
}
/**
 * Utility function to check for string type.
 *
 * @function Highcharts.isString
 *
 * @param {*} s
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a string.
 */
function isString(s) {
    return typeof s === 'string';
}
/**
 * Utility function to check if an item is an array.
 *
 * @function Highcharts.isArray
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is an array.
 */
function isArray(obj) {
    const str = Object.prototype.toString.call(obj);
    return str === '[object Array]' || str === '[object Array Iterator]';
}
/**
 * Utility function to check if object is a function.
 *
 * @function Highcharts.isFunction
 *
 * @param {*} obj
 *        The item to check.
 *
 * @return {boolean}
 *         True if the argument is a function.
 */
function isFunction(obj) {
    return typeof obj === 'function';
}
/**
 * Utility function to check if an item is of type object.
 *
 * @function Highcharts.isObject
 *
 * @param {*} obj
 *        The item to check.
 *
 * @param {boolean} [strict=false]
 *        Also checks that the object is not an array.
 *
 * @return {boolean}
 *         True if the argument is an object.
 */
function isObject(obj, strict) {
    return (!!obj &&
        typeof obj === 'object' &&
        (!strict || !isArray(obj))); // eslint-disable-line @typescript-eslint/no-explicit-any
}
/**
 * Utility function to deep merge two or more objects and return a third object.
 * If the first argument is true, the contents of the second object is copied
 * into the first object. The merge function can also be used with a single
 * object argument to create a deep copy of an object.
 *
 * @function Highcharts.merge<T>
 *
 * @param {true | T} extendOrSource
 *        Whether to extend the left-side object,
 *        or the first object to merge as a deep copy.
 *
 * @param {...Array<object|undefined>} [sources]
 *        Object(s) to merge into the previous one.
 *
 * @return {T}
 *         The merged object. If the first argument is true, the return is the
 *         same as the second argument.
 */
function merge(extendOrSource, ...sources) {
    let i, args = [extendOrSource, ...sources], ret = {};
    const doCopy = function (copy, original) {
        // An object is replacing a primitive
        if (typeof copy !== 'object') {
            copy = {};
        }
        objectEach(original, function (value, key) {
            // Prototype pollution (#14883)
            if (key === '__proto__' || key === 'constructor') {
                return;
            }
            // Copy the contents of objects, but not arrays or DOM nodes
            if (isObject(value, true) &&
                !isClass(value) &&
                !isDOMElement(value)) {
                copy[key] = doCopy(copy[key] || {}, value);
                // Primitives and arrays are copied over directly
            }
            else {
                copy[key] = original[key];
            }
        });
        return copy;
    };
    // If first argument is true, copy into the existing object. Used in
    // setOptions.
    if (extendOrSource === true) {
        ret = args[1];
        args = Array.prototype.slice.call(args, 2);
    }
    // For each argument, extend the return
    const len = args.length;
    for (i = 0; i < len; i++) {
        ret = doCopy(ret, args[i]);
    }
    return ret;
}
/**
 * Take an interval and normalize it to multiples of round numbers.
 *
 * @deprecated
 * @function Highcharts.normalizeTickInterval
 *
 * @param {number} interval
 *        The raw, un-rounded interval.
 *
 * @param {Array<*>} [multiples]
 *        Allowed multiples.
 *
 * @param {number} [magnitude]
 *        The magnitude of the number.
 *
 * @param {boolean} [allowDecimals]
 *        Whether to allow decimals.
 *
 * @param {boolean} [hasTickAmount]
 *        If it has tickAmount, avoid landing on tick intervals lower than
 *        original.
 *
 * @return {number}
 *         The normalized interval.
 *
 * @todo
 * Move this function to the Axis prototype. It is here only for historical
 * reasons.
 */
function normalizeTickInterval(interval, multiples, magnitude, allowDecimals, hasTickAmount) {
    let i, retInterval = interval;
    // Round to a tenfold of 1, 2, 2.5 or 5
    magnitude = pick(magnitude, getMagnitude(interval));
    const normalized = interval / magnitude;
    // Multiples for a linear scale
    if (!multiples) {
        multiples = hasTickAmount ?
            // Finer grained ticks when the tick amount is hard set, including
            // when alignTicks is true on multiple axes (#4580).
            [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10] :
            // Else, let ticks fall on rounder numbers
            [1, 2, 2.5, 5, 10];
        // The allowDecimals option
        if (allowDecimals === false) {
            if (magnitude === 1) {
                multiples = multiples.filter(function (num) {
                    return num % 1 === 0;
                });
            }
            else if (magnitude <= 0.1) {
                multiples = [1 / magnitude];
            }
        }
    }
    // Normalize the interval to the nearest multiple
    for (i = 0; i < multiples.length; i++) {
        retInterval = multiples[i];
        // Only allow tick amounts smaller than natural
        if ((hasTickAmount &&
            retInterval * magnitude >= interval) ||
            (!hasTickAmount &&
                (normalized <=
                    (multiples[i] +
                        (multiples[i + 1] || multiples[i])) / 2))) {
            break;
        }
    }
    // Multiply back to the correct magnitude. Correct floats to appropriate
    // precision (#6085).
    retInterval = correctFloat(retInterval * magnitude, -Math.round(Math.log(0.001) / Math.LN10));
    return retInterval;
}
/* eslint-disable valid-jsdoc */
/**
 * Iterate over object key pairs in an object.
 *
 * @function Highcharts.objectEach<T>
 *
 * @param {*} obj
 *        The object to iterate over.
 *
 * @param {Highcharts.ObjectEachCallbackFunction<T>} fn
 *        The iterator callback. It passes three arguments:
 *        * value - The property value.
 *        * key - The property key.
 *        * obj - The object that objectEach is being applied to.
 *
 * @param {T} [ctx]
 *        The context.
 */
function objectEach(obj, fn, ctx) {
    /* eslint-enable valid-jsdoc */
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            fn.call(ctx || obj[key], obj[key], key, obj);
        }
    }
}
/**
 * Get the element's offset position, corrected for `overflow: auto`.
 *
 * @function Highcharts.offset
 *
 * @param {global.Element} el
 *        The DOM element.
 *
 * @return {Highcharts.OffsetObject}
 *         An object containing `left` and `top` properties for the position in
 *         the page.
 */
function offset(el) {
    const docElem = doc.documentElement, box = (el.parentElement || el.parentNode) ?
        el.getBoundingClientRect() :
        { top: 0, left: 0, width: 0, height: 0 };
    return {
        top: box.top + (win.pageYOffset || docElem.scrollTop) -
            (docElem.clientTop || 0),
        left: box.left + (win.pageXOffset || docElem.scrollLeft) -
            (docElem.clientLeft || 0),
        width: box.width,
        height: box.height
    };
}
/**
 * Left-pad a string to a given length by adding a character repetitively.
 *
 * @function Highcharts.pad
 *
 * @param {number} number
 *        The input string or number.
 *
 * @param {number} [length]
 *        The desired string length.
 *
 * @param {string} [padder=0]
 *        The character to pad with.
 *
 * @return {string}
 *         The padded string.
 */
function pad(number, length, padder) {
    return new Array((length || 2) +
        1 -
        String(number)
            .replace('-', '')
            .length).join(padder || '0') + number;
}
/* eslint-disable valid-jsdoc */
/**
 * Return the first value that is not null or undefined.
 *
 * @function Highcharts.pick<T>
 *
 * @param {...Array<T|null|undefined>} items
 *        Variable number of arguments to inspect.
 *
 * @return {T}
 *         The value of the first argument that is not null or undefined.
 */
function pick() {
    const args = arguments;
    const length = args.length;
    for (let i = 0; i < length; i++) {
        const arg = args[i];
        if (typeof arg !== 'undefined' && arg !== null) {
            return arg;
        }
    }
}
/**
 * Shortcut for parseInt
 *
 * @internal
 * @function Highcharts.pInt
 *
 * @param {*} s
 *        any
 *
 * @param {number} [mag]
 *        Magnitude
 *
 * @return {number}
 *         number
 */
function pInt(s, mag) {
    return parseInt(s, mag || 10);
}
/**
 * Adds an item to an array, if it is not present in the array.
 *
 * @internal
 *
 * @function Highcharts.pushUnique
 *
 * @param {Array<unknown>} array
 * The array to add the item to.
 *
 * @param {unknown} item
 * The item to add.
 *
 * @return {boolean}
 * Returns true, if the item was not present and has been added.
 */
function pushUnique(array, item) {
    return array.indexOf(item) < 0 && !!array.push(item);
}
/**
 * Return a length based on either the integer value, or a percentage of a base.
 *
 * @function Highcharts.relativeLength
 *
 * @param {Highcharts.RelativeSize} value
 *        A percentage string or a number.
 *
 * @param {number} base
 *        The full length that represents 100%.
 *
 * @param {number} [offset=0]
 *        A pixel offset to apply for percentage values. Used internally in
 *        axis positioning.
 *
 * @return {number}
 *         The computed length.
 */
function relativeLength(value, base, offset) {
    return (/%$/).test(value) ?
        (base * parseFloat(value) / 100) + (offset || 0) :
        parseFloat(value);
}
/**
 * Replaces text in a string with a given replacement in a loop to catch nested
 * matches after previous replacements.
 *
 * @internal
 *
 * @function Highcharts.replaceNested
 *
 * @param {string} text
 * Text to search and modify.
 *
 * @param {...Array<(RegExp|string)>} replacements
 * One or multiple tuples with search pattern (`[0]: (string|RegExp)`) and
 * replacement (`[1]: string`) for matching text.
 *
 * @return {string}
 * Text with replacements.
 */
function replaceNested(text, ...replacements) {
    let previous, replacement;
    do {
        previous = text;
        for (replacement of replacements) {
            text = text.replace(replacement[0], replacement[1]);
        }
    } while (text !== previous);
    return text;
}
/* eslint-disable valid-jsdoc */
/**
 * Remove an event that was added with {@link Highcharts#addEvent}.
 *
 * @function Highcharts.removeEvent<T>
 *
 * @param {Highcharts.Class<T>|T} el
 *        The element to remove events on.
 *
 * @param {string} [type]
 *        The type of events to remove. If undefined, all events are removed
 *        from the element.
 *
 * @param {Highcharts.EventCallbackFunction<T>} [fn]
 *        The specific callback to remove. If undefined, all events that match
 *        the element and optionally the type are removed.
 *
 * @return {void}
 */
function removeEvent(el, type, fn) {
    /* eslint-enable valid-jsdoc */
    /** @internal */
    function removeOneEvent(type, fn) {
        const removeEventListener = el.removeEventListener;
        if (removeEventListener) {
            removeEventListener.call(el, type, fn, false);
        }
    }
    /** @internal */
    function removeAllEvents(eventCollection) {
        let types, len;
        if (!el.nodeName) {
            return; // Break on non-DOM events
        }
        if (type) {
            types = {};
            types[type] = true;
        }
        else {
            types = eventCollection;
        }
        objectEach(types, function (_val, n) {
            if (eventCollection[n]) {
                len = eventCollection[n].length;
                while (len--) {
                    removeOneEvent(n, eventCollection[n][len].fn);
                }
            }
        });
    }
    const owner = typeof el === 'function' && el.prototype || el;
    if (Object.hasOwnProperty.call(owner, 'hcEvents')) {
        const events = owner.hcEvents;
        if (type) {
            const typeEvents = (events[type] || []);
            if (fn) {
                events[type] = typeEvents.filter(function (obj) {
                    return fn !== obj.fn;
                });
                removeOneEvent(type, fn);
            }
            else {
                removeAllEvents(events);
                events[type] = [];
            }
        }
        else {
            removeAllEvents(events);
            delete owner.hcEvents;
        }
    }
}
/**
 * Check if an element is an array, and if not, make it into an array.
 *
 * @function Highcharts.splat
 *
 * @param {*} obj
 *        The object to splat.
 *
 * @return {Array}
 *         The produced or original array.
 */
function splat(obj) {
    return isArray(obj) ? obj : [obj];
}
/**
 * Sort an object array and keep the order of equal items. The ECMAScript
 * standard does not specify the behaviour when items are equal.
 *
 * @function Highcharts.stableSort
 *
 * @param {Array<*>} arr
 *        The array to sort.
 *
 * @param {Function} sortFunction
 *        The function to sort it with, like with regular Array.prototype.sort.
 */
function stableSort(arr, sortFunction) {
    // @todo It seems like Chrome since v70 sorts in a stable way internally,
    // plus all other browsers do it, so over time we may be able to remove this
    // function
    const length = arr.length;
    let sortValue, i;
    // Add index to each item
    for (i = 0; i < length; i++) {
        arr[i].safeI = i; // Stable sort index
    }
    arr.sort(function (a, b) {
        sortValue = sortFunction(a, b);
        return sortValue === 0 ? a.safeI - b.safeI : sortValue;
    });
    // Remove index from items
    for (i = 0; i < length; i++) {
        delete arr[i].safeI; // Stable sort index
    }
}
/**
 * Set a timeout if the delay is given, otherwise perform the function
 * synchronously.
 *
 * @function Highcharts.syncTimeout
 *
 * @param {Function} fn
 *        The function callback.
 *
 * @param {number} delay
 *        Delay in milliseconds.
 *
 * @param {*} [context]
 *        An optional context to send to the function callback.
 *
 * @return {number}
 *         An identifier for the timeout that can later be cleared with
 *         Highcharts.clearTimeout. Returns -1 if there is no timeout.
 */
function syncTimeout(fn, delay, context) {
    if (delay > 0) {
        return setTimeout(fn, delay, context);
    }
    fn.call(0, context);
    return -1;
}
/**
 * @internal
 */
function ucfirst(s) {
    return ((isString(s) ?
        s.substring(0, 1).toUpperCase() + s.substring(1) :
        String(s)));
}
/**
 * Wrap a method with extended functionality, preserving the original function.
 *
 * @function Highcharts.wrap
 *
 * @param {*} obj
 *        The context object that the method belongs to. In real cases, this is
 *        often a prototype.
 *
 * @param {string} method
 *        The name of the method to extend.
 *
 * @param {Highcharts.WrapProceedFunction} func
 *        A wrapper function callback. This function is called with the same
 *        arguments as the original function, except that the original function
 *        is unshifted and passed as the first argument.
 */
function wrap(obj, method, func) {
    const proceed = obj[method];
    obj[method] = function () {
        const outerArgs = arguments, scope = this;
        return func.apply(this, [
            function () {
                return proceed.apply(scope, arguments.length ? arguments : outerArgs);
            }
        ].concat([].slice.call(arguments)));
    };
}

;// ./code/es-modules/Series/TiledWebMap/TiledWebMapSeries.js
/* *
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Hubert Kozik, Kamil Musiałowski
 *
 *  A commercial license may be required depending on use.
 *  See www.highcharts.com/license
 *
 *
 * */


const { composed } = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());

const { map: MapSeries } = (highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default()).seriesTypes;




/* *
 *
 *  Functions
 *
 * */
/** @private */
function onRecommendMapView(e) {
    const { geoBounds, chart } = e, twm = (chart.options.series || []).filter((s) => s.type === 'tiledwebmap')[0];
    if (twm && twm.provider && twm.provider.type && !twm.provider.url) {
        const ProviderDefinition = TilesProviderRegistry[twm.provider.type];
        if (!defined(ProviderDefinition)) {
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('Highcharts warning: Tiles Provider not defined in the ' +
                'Provider Registry.', false);
        }
        else {
            const def = new ProviderDefinition(), { initialProjectionName: providerProjectionName } = def;
            if (geoBounds) {
                const { x1, y1, x2, y2 } = geoBounds;
                this.recommendedMapView = {
                    projection: {
                        name: providerProjectionName,
                        parallels: [y1, y2],
                        rotation: [-(x1 + x2) / 2]
                    }
                };
            }
            else {
                this.recommendedMapView = {
                    projection: {
                        name: providerProjectionName
                    },
                    minZoom: 0
                };
            }
            return false;
        }
    }
    return true;
}
/* *
 *
 *  Class
 *
 * */
/**
 * The series type
 *
 * @private
 * @class
 * @name Highcharts.seriesTypes.tiledwebmap
 *
 * @augments Highcharts.Series
 */
class TiledWebMapSeries extends MapSeries {
    constructor() {
        /* *
         *
         *  Static Properties
         *
         * */
        super(...arguments);
        this.redrawTiles = false;
        this.isAnimating = false;
    }
    /* *
     *
     *  Static Functions
     *
     * */
    static compose(MapViewClass) {
        if (pushUnique(composed, 'TiledWebMapSeries')) {
            addEvent(MapViewClass, 'onRecommendMapView', onRecommendMapView);
        }
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Convert map coordinates in longitude/latitude to tile
     * @private
     * @param  {Highcharts.MapLonLatObject} lonLat
     *         The map coordinates
     * @return {Highcharts.PositionObject}
     *         Array of x and y positions of the tile
     */
    lonLatToTile(lonLat, zoom) {
        const { lon, lat } = lonLat, xTile = Math.floor((lon + 180) / 360 * Math.pow(2, zoom)), yTile = Math.floor((1 - Math.log(Math.tan(lat * Math.PI / 180) +
            1 / Math.cos(lat * Math.PI / 180)) / Math.PI) /
            2 * Math.pow(2, zoom));
        return { x: xTile, y: yTile };
    }
    /**
     * Convert tile to map coordinates in longitude/latitude
     * @private
     * @param  xTile
     *         Position x of the tile
     * @param  yTile
     *         Position y of the tile
     * @param  zTile
     *         Zoom of the tile
     * @return {Highcharts.MapLonLatObject}
     *         The map coordinates
     */
    tileToLonLat(xTile, yTile, zTile) {
        const lon = xTile / Math.pow(2, zTile) * 360 - 180, n = Math.PI - 2 * Math.PI * yTile / Math.pow(2, zTile), lat = (180 /
            Math.PI * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n))));
        return { lon, lat };
    }
    drawPoints() {
        const chart = this.chart, mapView = chart.mapView;
        if (!mapView) {
            return;
        }
        const tiles = (this.tiles = this.tiles || {}), transformGroups = (this.transformGroups = this.transformGroups || []), series = this, options = this.options, provider = options.provider, { zoom } = mapView, lambda = pick((mapView.projection.options.rotation &&
            mapView.projection.options.rotation[0]), 0), worldSize = 400.979322, tileSize = 256, duration = chart.renderer.forExport ? 0 : 200, animateTiles = (duration) => {
            for (const zoomKey of Object.keys(tiles)) {
                if ((parseFloat(zoomKey) === (mapView.zoom < 0 ? 0 :
                    Math.floor(mapView.zoom))) ||
                    (series.minZoom &&
                        (mapView.zoom < 0 ? 0 :
                            Math.floor(mapView.zoom)) < series.minZoom &&
                        parseFloat(zoomKey) === series.minZoom) ||
                    (series.maxZoom &&
                        (mapView.zoom < 0 ? 0 :
                            Math.floor(mapView.zoom)) > series.maxZoom &&
                        parseFloat(zoomKey) === series.maxZoom)) {
                    Object
                        .keys(tiles[zoomKey].tiles)
                        .forEach((key, i) => {
                        tiles[zoomKey].tiles[key].animate({
                            opacity: 1
                        }, {
                            duration: duration
                        }, () => {
                            if (i === Object.keys(tiles[zoomKey].tiles)
                                .length - 1) {
                                tiles[zoomKey].isActive = true;
                            }
                        });
                    });
                }
                else {
                    Object
                        .keys(tiles[zoomKey].tiles)
                        .forEach((key, i) => {
                        tiles[zoomKey].tiles[key].animate({
                            opacity: 0
                        }, {
                            duration: duration,
                            defer: duration / 2
                        }, () => {
                            tiles[zoomKey].tiles[key].destroy();
                            delete tiles[zoomKey].tiles[key];
                            if (i === Object.keys(tiles[zoomKey].tiles)
                                .length - 1) {
                                tiles[zoomKey].isActive = false;
                                tiles[zoomKey].loaded = false;
                            }
                        });
                    });
                }
            }
        };
        let zoomFloor = zoom < 0 ? 0 : Math.floor(zoom), maxTile = Math.pow(2, zoomFloor), scale = ((tileSize / worldSize) * Math.pow(2, zoom)) /
            ((tileSize / worldSize) * Math.pow(2, zoomFloor)), scaledTileSize = scale * 256;
        if (provider && (provider.type || provider.url)) {
            if (provider.type && !provider.url) {
                const ProviderDefinition = TilesProviderRegistry[provider.type];
                if (!defined(ProviderDefinition)) {
                    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('Highcharts warning: Tiles Provider \'' +
                        provider.type + '\' not defined in the Provider' +
                        'Registry.', false);
                    return;
                }
                const def = new ProviderDefinition(), providerProjection = def.initialProjectionName;
                let theme, subdomain = '';
                if (provider.theme && defined(def.themes[provider.theme])) {
                    theme = def.themes[provider.theme];
                }
                else {
                    // If nothing set take first theme
                    const firstTheme = Object.keys(def.themes)[0];
                    theme = def.themes[firstTheme];
                    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('Highcharts warning: The Tiles Provider\'s Theme \'' +
                        provider.theme + '\' is not defined in the Provider ' +
                        'definition - falling back to \'' + firstTheme + '\'.', false);
                }
                if (provider.subdomain &&
                    def.subdomains &&
                    def.subdomains.indexOf(provider.subdomain) !== -1) {
                    subdomain = provider.subdomain;
                }
                else if (defined(def.subdomains) &&
                    // Do not show warning if no subdomain in URL
                    theme.url.indexOf('{s}') !== -1) {
                    subdomain = pick(def.subdomains && def.subdomains[0], '');
                    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('Highcharts warning: The Tiles Provider\'s Subdomain ' +
                        '\'' + provider.subdomain + '\' is not defined in ' +
                        'the Provider definition - falling back to \'' +
                        subdomain + '\'.', false);
                }
                if (def.requiresApiKey) {
                    if (provider.apiKey) {
                        theme.url =
                            theme.url.replace('{apikey}', provider.apiKey);
                    }
                    else {
                        (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('Highcharts warning: The Tiles Provider requires ' +
                            'API Key to use tiles, use provider.apiKey to ' +
                            'provide a token.', false);
                        theme.url = theme.url.replace('?apikey={apikey}', '');
                    }
                }
                provider.url = theme.url
                    .replace('{s}', subdomain);
                this.minZoom = theme.minZoom;
                this.maxZoom = theme.maxZoom;
                // Add as credits.text, to prevent changing the default mapText
                const creditsText = pick(chart.userOptions.credits && chart.userOptions.credits.text, 'Highcharts.com ' + pick(theme.credits, def.defaultCredits));
                if (chart.credits) {
                    chart.credits.update({
                        text: creditsText
                    });
                }
                else {
                    chart.addCredits({
                        text: creditsText,
                        style: pick(chart.options.credits?.style, {})
                    });
                }
                if (mapView.projection.options.name !== providerProjection) {
                    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('Highcharts warning: The set projection is different ' +
                        'than supported by Tiles Provider.', false);
                }
            }
            else {
                if (!mapView.projection.options.name) {
                    (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('Highcharts warning: The set projection is different ' +
                        'than supported by Tiles Provider.', false);
                }
            }
            // If zoom is smaller/higher than supported by provider
            if (defined(this.minZoom) && zoomFloor < this.minZoom) {
                zoomFloor = this.minZoom;
                maxTile = Math.pow(2, zoomFloor);
                scale = ((tileSize / worldSize) * Math.pow(2, zoom)) /
                    ((tileSize / worldSize) * Math.pow(2, zoomFloor));
                scaledTileSize = scale * 256;
            }
            else if (defined(this.maxZoom) && zoomFloor > this.maxZoom) {
                zoomFloor = this.maxZoom;
                maxTile = Math.pow(2, zoomFloor);
                scale = ((tileSize / worldSize) * Math.pow(2, zoom)) /
                    ((tileSize / worldSize) * Math.pow(2, zoomFloor));
                scaledTileSize = scale * 256;
            }
            if (mapView.projection && mapView.projection.def) {
                // Always true for tile maps
                mapView.projection.hasCoordinates = true;
                if (!transformGroups[zoomFloor]) {
                    transformGroups[zoomFloor] =
                        chart.renderer.g().add(this.group);
                }
                const replaceVariables = (url, x, y, zoom) => url
                    .replace('{x}', x.toString())
                    .replace('{y}', y.toString())
                    .replace('{zoom}', zoom.toString())
                    .replace('{z}', zoom.toString());
                const addTile = (x, y, givenZoom, translateX, translateY) => {
                    const modX = x % maxTile, modY = y % maxTile, tileX = modX < 0 ? modX + maxTile : modX, tileY = modY < 0 ? modY + maxTile : modY;
                    if (!tiles[`${givenZoom}`].tiles[`${x},${y}`]) {
                        if (provider.url) {
                            const url = replaceVariables(provider.url, tileX, tileY, givenZoom);
                            tiles[givenZoom].loaded = false;
                            tiles[`${givenZoom}`].tiles[`${x},${y}`] =
                                chart.renderer.image(url, (x * scaledTileSize) - translateX, (y * scaledTileSize) - translateY, scaledTileSize, scaledTileSize)
                                    .attr({
                                    zIndex: 2,
                                    opacity: 0
                                })
                                    .on('load', function () {
                                    if (provider.onload) {
                                        provider.onload.apply(this);
                                    }
                                    if ((givenZoom ===
                                        (mapView.zoom < 0 ? 0 :
                                            Math.floor(mapView.zoom))) ||
                                        givenZoom === series.minZoom) {
                                        tiles[`${givenZoom}`]
                                            .actualTilesCount++;
                                        // If last tile
                                        if (tiles[`${givenZoom}`]
                                            .howManyTiles ===
                                            tiles[`${givenZoom}`]
                                                .actualTilesCount) {
                                            tiles[givenZoom].loaded = true;
                                            // Fade-in new tiles if there is
                                            // no other animation
                                            if (!series.isAnimating) {
                                                series.redrawTiles = false;
                                                animateTiles(duration);
                                            }
                                            else {
                                                series.redrawTiles = true;
                                            }
                                            tiles[`${givenZoom}`]
                                                .actualTilesCount = 0;
                                        }
                                    }
                                })
                                    .add(transformGroups[givenZoom]);
                            tiles[`${givenZoom}`].tiles[`${x},${y}`].posX = x;
                            tiles[`${givenZoom}`].tiles[`${x},${y}`].posY = y;
                            tiles[`${givenZoom}`].tiles[`${x},${y}`]
                                .originalURL = url;
                        }
                    }
                };
                // Calculate topLeft and bottomRight corners without normalize
                const topLeftUnits = mapView.pixelsToProjectedUnits({
                    x: 0,
                    y: 0
                }), topLeftArr = mapView.projection.def.inverse([topLeftUnits.x, topLeftUnits.y]), topLeft = {
                    lon: topLeftArr[0] - lambda,
                    lat: topLeftArr[1]
                }, bottomRightUnits = mapView.pixelsToProjectedUnits({
                    x: chart.plotWidth,
                    y: chart.plotHeight
                }), bottomRightArr = mapView.projection.def.inverse([bottomRightUnits.x, bottomRightUnits.y]), bottomRight = {
                    lon: bottomRightArr[0] - lambda,
                    lat: bottomRightArr[1]
                };
                // Do not support vertical looping
                if (topLeft.lat > mapView.projection.maxLatitude ||
                    bottomRight.lat < -1 * mapView.projection.maxLatitude) {
                    topLeft.lat = mapView.projection.maxLatitude;
                    bottomRight.lat = -1 * mapView.projection.maxLatitude;
                }
                const startPos = this.lonLatToTile(topLeft, zoomFloor), endPos = this.lonLatToTile(bottomRight, zoomFloor);
                // Calculate group translations based on first loaded tile
                const firstTileLonLat = this.tileToLonLat(startPos.x, startPos.y, zoomFloor), units = mapView.projection.def.forward([
                    firstTileLonLat.lon + lambda,
                    firstTileLonLat.lat
                ]), firstTilePx = mapView.projectedUnitsToPixels({
                    x: units[0], y: units[1]
                }), translateX = (startPos.x * scaledTileSize - firstTilePx.x), translateY = (startPos.y * scaledTileSize - firstTilePx.y);
                if (!tiles[`${zoomFloor}`]) {
                    tiles[`${zoomFloor}`] = {
                        tiles: {},
                        isActive: false,
                        howManyTiles: 0,
                        actualTilesCount: 0,
                        loaded: false
                    };
                }
                tiles[`${zoomFloor}`].howManyTiles =
                    (endPos.x - startPos.x + 1) * (endPos.y - startPos.y + 1);
                tiles[`${zoomFloor}`].actualTilesCount = 0;
                for (let x = startPos.x; x <= endPos.x; x++) {
                    for (let y = startPos.y; y <= endPos.y; y++) {
                        addTile(x, y, zoomFloor, translateX, translateY);
                    }
                }
            }
            for (const zoomKey of Object.keys(tiles)) {
                for (const key of Object.keys(tiles[zoomKey].tiles)) {
                    if (mapView.projection && mapView.projection.def) {
                        // Calculate group translations based on first loaded
                        // tile
                        const scale = ((tileSize / worldSize) *
                            Math.pow(2, zoom)) / ((tileSize / worldSize) *
                            Math.pow(2, parseFloat(zoomKey))), scaledTileSize = scale * 256, firstTile = tiles[zoomKey].tiles[Object.keys(tiles[zoomKey].tiles)[0]], { posX, posY } = tiles[zoomKey].tiles[key];
                        if (defined(posX) &&
                            defined(posY) &&
                            defined(firstTile.posX) &&
                            defined(firstTile.posY)) {
                            const firstTileLonLat = this.tileToLonLat(firstTile.posX, firstTile.posY, parseFloat(zoomKey)), units = mapView.projection.def.forward([
                                firstTileLonLat.lon + lambda,
                                firstTileLonLat.lat
                            ]), firstTilePx = mapView.projectedUnitsToPixels({
                                x: units[0], y: units[1]
                            }), tilesOffsetX = (firstTile.posX * scaledTileSize) -
                                firstTilePx.x, tilesOffsetY = (firstTile.posY * scaledTileSize) -
                                firstTilePx.y;
                            if (chart.renderer.globalAnimation &&
                                chart.hasRendered) {
                                const startX = Number(tiles[zoomKey].tiles[key].attr('x')), startY = Number(tiles[zoomKey].tiles[key].attr('y')), startWidth = Number(tiles[zoomKey].tiles[key].attr('width')), startHeight = Number(tiles[zoomKey].tiles[key].attr('height'));
                                const step = (now, fx) => {
                                    tiles[zoomKey].tiles[key].attr({
                                        x: (startX + (((posX * scaledTileSize) -
                                            tilesOffsetX - startX) * fx.pos)),
                                        y: (startY + (((posY * scaledTileSize) -
                                            tilesOffsetY - startY) * fx.pos)),
                                        width: (startWidth + ((Math.ceil(scaledTileSize) + 1 -
                                            startWidth) * fx.pos)),
                                        height: (startHeight + ((Math.ceil(scaledTileSize) + 1 -
                                            startHeight) * fx.pos))
                                    });
                                };
                                series.isAnimating = true;
                                tiles[zoomKey].tiles[key]
                                    .attr({ animator: 0 })
                                    .animate({ animator: 1 }, { step }, function () {
                                    series.isAnimating = false;
                                    // If animate ended after loading
                                    // the tiles
                                    if (series.redrawTiles) {
                                        series.redrawTiles = false;
                                        animateTiles(duration);
                                    }
                                });
                                // When dragging or first rendering,
                                // animation is off
                            }
                            else {
                                // Animate tiles if something broke
                                if (series.redrawTiles ||
                                    parseFloat(zoomKey) !== zoomFloor ||
                                    ((tiles[zoomKey].isActive ||
                                        parseFloat(zoomKey) === zoomFloor) &&
                                        Object.keys(tiles[zoomKey].tiles)
                                            .map((key) => tiles[zoomKey].tiles[key])
                                            .some((tile) => tile.opacity === 0))) {
                                    series.redrawTiles = false;
                                    animateTiles(duration);
                                }
                                tiles[zoomKey].tiles[key].attr({
                                    x: (posX * scaledTileSize) - tilesOffsetX,
                                    y: (posY * scaledTileSize) - tilesOffsetY,
                                    width: Math.ceil(scaledTileSize) + 1,
                                    height: Math.ceil(scaledTileSize) + 1
                                });
                            }
                        }
                    }
                }
            }
        }
        else {
            (0,highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_.error)('Highcharts warning: Tiles Provider not defined in the ' +
                'Provider Registry.', false);
        }
    }
    update(options) {
        const { transformGroups } = this, chart = this.chart, mapView = chart.mapView, { provider } = options;
        if (transformGroups) {
            transformGroups.forEach((group) => {
                if (Object.keys(group).length !== 0) {
                    group.destroy();
                }
            });
            this.transformGroups = [];
        }
        if (mapView &&
            !defined(chart.userOptions.mapView?.projection) &&
            provider?.type) {
            const ProviderDefinition = TilesProviderRegistry[provider.type];
            if (ProviderDefinition) {
                mapView.update({
                    projection: {
                        name: (new ProviderDefinition()).initialProjectionName
                    }
                });
            }
        }
        super.update.apply(this, arguments);
    }
}
TiledWebMapSeries.defaultOptions = merge(MapSeries.defaultOptions, TiledWebMap_TiledWebMapSeriesDefaults);
highcharts_SeriesRegistry_commonjs_highcharts_SeriesRegistry_commonjs2_highcharts_SeriesRegistry_root_Highcharts_SeriesRegistry_default().registerSeriesType('tiledwebmap', TiledWebMapSeries);
/* *
 *
 *  Default Export
 *
 * */
/* harmony default export */ const TiledWebMap_TiledWebMapSeries = (TiledWebMapSeries);

;// ./code/es-modules/masters/modules/tiledwebmap.src.js





const G = (highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default());
G.TilesProviderRegistry = G.TilesProviderRegistry || TilesProviderRegistry;
TiledWebMap_TiledWebMapSeries.compose(G.MapView);
/* harmony default export */ const tiledwebmap_src = ((highcharts_commonjs_highcharts_commonjs2_highcharts_root_Highcharts_default()));

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});