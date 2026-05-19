/* *
 *
 *  Experimental data export module for Highcharts
 *
 *  (c) 2010-2026 Highsoft AS
 *  Author: Torstein Hønsi
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
// @todo
// - Set up systematic tests for all series types, paired with tests of the data
//   module importing the same data.
'use strict';
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import AST from '../../Core/Renderer/HTML/AST.js';
import Chart from '../../Core/Chart/Chart.js';
import D from '../../Core/Defaults.js';
var getOptions = D.getOptions, setOptions = D.setOptions;
import { downloadURL, getBlobFromContent } from '../../Shared/DownloadURL.js';
import ExportDataDefaults from './ExportDataDefaults.js';
import G from '../../Core/Globals.js';
var composed = G.composed, doc = G.doc, win = G.win;
import { addEvent, defined, extend, find, fireEvent, isNumber, pick, pushUnique } from '../../Shared/Utilities.js';
/* *
 *
 *  Composition
 *
 * */
/** @internal */
var ExportData;
(function (ExportData) {
    /* *
     *
     *  Declarations
     *
     * */
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Composition function.
     *
     * @internal
     * @function Highcharts.Exporting#compose
     *
     * @param {ChartClass} ChartClass
     * Chart class.
     * @param {ExportingClass} ExportingClass
     * Exporting class.
     * @param {SeriesClass} SeriesClass
     * Series class.
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function compose(ChartClass, ExportingClass, SeriesClass) {
        var _a, _b, _c;
        // Check the composition registry for the Exporting
        if (!pushUnique(composed, 'ExportData')) {
            return;
        }
        // Adding wrappers for the deprecated functions
        extend(Chart.prototype, {
            downloadCSV: function () {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.downloadCSV();
            },
            downloadXLS: function () {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.downloadXLS();
            },
            getCSV: function (useLocalDecimalPoint) {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.getCSV(useLocalDecimalPoint);
            },
            getDataRows: function (multiLevelHeaders) {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.getDataRows(multiLevelHeaders);
            },
            getTable: function (useLocalDecimalPoint) {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.getTable(useLocalDecimalPoint);
            },
            getTableAST: function (useLocalDecimalPoint) {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.getTableAST(useLocalDecimalPoint);
            },
            hideData: function () {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.hideData();
            },
            toggleDataTable: function (show) {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.toggleDataTable(show);
            },
            viewData: function () {
                var _a;
                return (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.viewData();
            }
        });
        var exportingProto = ExportingClass.prototype;
        if (!exportingProto.downloadCSV) {
            // Add an event listener to handle the showTable option
            addEvent(ChartClass, 'afterViewData', onChartAfterViewData);
            addEvent(ChartClass, 'render', onChartRenderer);
            addEvent(ChartClass, 'destroy', onChartDestroy);
            // Adding functions to the Exporting prototype
            exportingProto.downloadCSV = downloadCSV;
            exportingProto.downloadXLS = downloadXLS;
            exportingProto.getCSV = getCSV;
            exportingProto.getDataRows = getDataRows;
            exportingProto.getTable = getTable;
            exportingProto.getTableAST = getTableAST;
            exportingProto.hideData = hideData;
            exportingProto.toggleDataTable = toggleDataTable;
            exportingProto.wrapLoading = wrapLoading;
            exportingProto.viewData = viewData;
            // Update with defaults of the export data module
            setOptions(ExportDataDefaults);
            // Additionally, extend the menuItems with the export data variants
            var menuItems = (_c = (_b = (_a = getOptions().exporting) === null || _a === void 0 ? void 0 : _a.buttons) === null || _b === void 0 ? void 0 : _b.contextButton) === null || _c === void 0 ? void 0 : _c.menuItems;
            menuItems && menuItems.push('separator', 'downloadCSV', 'downloadXLS', 'viewData');
            var _d = SeriesClass.types, AreaRangeSeries = _d.arearange, GanttSeries = _d.gantt, MapSeries = _d.map, MapBubbleSeries = _d.mapbubble, TreemapSeries = _d.treemap, XRangeSeries = _d.xrange;
            if (AreaRangeSeries) {
                AreaRangeSeries.prototype.keyToAxis = {
                    low: 'y',
                    high: 'y'
                };
            }
            if (GanttSeries) {
                GanttSeries.prototype.exportKey = 'name';
                GanttSeries.prototype.keyToAxis = {
                    start: 'x',
                    end: 'x'
                };
            }
            if (MapSeries) {
                MapSeries.prototype.exportKey = 'name';
            }
            if (MapBubbleSeries) {
                MapBubbleSeries.prototype.exportKey = 'name';
            }
            if (TreemapSeries) {
                TreemapSeries.prototype.exportKey = 'name';
            }
            if (XRangeSeries) {
                XRangeSeries.prototype.keyToAxis = {
                    x2: 'x'
                };
            }
        }
    }
    ExportData.compose = compose;
    /**
     * Generates a data URL of CSV for local download in the browser. This is
     * the default action for a click on the 'Download CSV' button.
     *
     * See {@link Highcharts.Exporting#getCSV} to get the CSV data itself.
     *
     * @function Highcharts.Exporting#downloadCSV
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function downloadCSV() {
        var _this = this;
        this.wrapLoading(function () {
            var csv = _this.getCSV(true);
            downloadURL(getBlobFromContent(csv, 'text/csv') ||
                'data:text/csv,\uFEFF' + encodeURIComponent(csv), _this.getFilename() + '.csv');
        });
    }
    /**
     * Generates a data URL of an XLS document for local download in the
     * browser. This is the default action for a click on the 'Download XLS'
     * button.
     *
     * See {@link Highcharts.Exporting#getTable} to get the table data itself.
     *
     * @function Highcharts.Exporting#downloadXLS
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function downloadXLS() {
        var _this = this;
        this.wrapLoading(function () {
            var uri = 'data:application/vnd.ms-excel;base64,', template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" ' +
                'xmlns:x="urn:schemas-microsoft-com:office:excel" ' +
                'xmlns="http://www.w3.org/TR/REC-html40">' +
                '<head><!--[if gte mso 9]><xml><x:ExcelWorkbook>' +
                '<x:ExcelWorksheets><x:ExcelWorksheet>' +
                '<x:Name>Ark1</x:Name>' +
                '<x:WorksheetOptions><x:DisplayGridlines/>' +
                '</x:WorksheetOptions>' +
                '</x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook>' +
                '</xml><![endif]-->' +
                '<style>td{border:none;font-family: Calibri, sans-serif;} ' +
                '.number{mso-number-format:"0.00";} ' +
                '.text{ mso-number-format:"\@";}</style>' +
                '<meta name=ProgId content=Excel.Sheet>' +
                '<meta charset=UTF-8>' +
                '</head><body>' +
                _this.getTable(true) +
                '</body></html>', base64 = function (s) {
                return win.btoa(unescape(encodeURIComponent(s))); // #50
            };
            downloadURL(getBlobFromContent(template, 'application/vnd.ms-excel') ||
                uri + base64(template), _this.getFilename() + '.xls');
        });
    }
    /**
     * Returns the current chart data as a CSV string.
     *
     * @function Highcharts.Exporting#getCSV
     *
     * @param {boolean} [useLocalDecimalPoint]
     * Whether to use the local decimal point as detected from the browser. This
     * makes it easier to export data to Excel in the same locale as the user
     * is.
     *
     * @return {string}
     * CSV representation of the data.
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function getCSV(useLocalDecimalPoint) {
        var _a;
        var csv = '';
        var rows = this.getDataRows(), csvOptions = (_a = this.options) === null || _a === void 0 ? void 0 : _a.csv, decimalPoint = pick(csvOptions === null || csvOptions === void 0 ? void 0 : csvOptions.decimalPoint, (csvOptions === null || csvOptions === void 0 ? void 0 : csvOptions.itemDelimiter) !== ',' && useLocalDecimalPoint ?
            (1.1).toLocaleString()[1] :
            '.'), 
        // Use ';' for direct to Excel
        itemDelimiter = pick(csvOptions === null || csvOptions === void 0 ? void 0 : csvOptions.itemDelimiter, decimalPoint === ',' ? ';' : ','), 
        // '\n' isn't working with the js csv data extraction
        lineDelimiter = csvOptions === null || csvOptions === void 0 ? void 0 : csvOptions.lineDelimiter;
        // Transform the rows to CSV
        rows.forEach(function (row, i) {
            var val = '', j = row.length;
            while (j--) {
                val = row[j];
                if (typeof val === 'string') {
                    val = "\"".concat(val, "\"");
                }
                if (typeof val === 'number') {
                    if (decimalPoint !== '.') {
                        val = val.toString().replace('.', decimalPoint);
                    }
                }
                row[j] = val;
            }
            // The first row is the header - it defines the number of columns.
            // Empty columns between not-empty cells are covered in the
            // getDataRows method.
            // Now add empty values only to the end of the row so all rows have
            // the same number of columns, #17186
            row.length = rows.length ? rows[0].length : 0;
            // Add the values
            csv += row.join(itemDelimiter);
            // Add the line delimiter
            if (i < rows.length - 1) {
                csv += lineDelimiter;
            }
        });
        return csv;
    }
    /**
     * Returns a two-dimensional array containing the current chart data.
     *
     * @function Highcharts.Exporting#getDataRows
     *
     * @param {boolean} [multiLevelHeaders]
     * Use multilevel headers for the rows by default. Adds an extra row with
     * top level headers. If a custom columnHeaderFormatter is defined, this can
     * override the behavior.
     *
     * @return {Array<Array<(number | string)>>}
     * The current chart data
     *
     * @emits Highcharts.Chart#event:exportData
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function getDataRows(multiLevelHeaders) {
        var _a;
        var chart = this.chart, hasParallelCoords = chart.hasParallelCoordinates, time = chart.time, csvOptions = ((_a = this.options) === null || _a === void 0 ? void 0 : _a.csv) || {}, xAxes = chart.xAxis, rows = {}, rowArr = [], topLevelColumnTitles = [], columnTitles = [], langOptions = chart.options.lang, exportDataOptions = langOptions.exportData, categoryHeader = exportDataOptions === null || exportDataOptions === void 0 ? void 0 : exportDataOptions.categoryHeader, categoryDatetimeHeader = exportDataOptions === null || exportDataOptions === void 0 ? void 0 : exportDataOptions.categoryDatetimeHeader, 
        // Options
        columnHeaderFormatter = function (item, key, keyLength) {
            if (csvOptions.columnHeaderFormatter) {
                var s = csvOptions.columnHeaderFormatter(item, key, keyLength);
                if (s !== false) {
                    return s;
                }
            }
            if (!item && categoryHeader) {
                return categoryHeader;
            }
            if (!item.bindAxes &&
                categoryDatetimeHeader &&
                categoryHeader) {
                return (item.options.title &&
                    item.options.title.text) || (item.dateTime ?
                    categoryDatetimeHeader :
                    categoryHeader);
            }
            if (multiLevelHeaders) {
                return {
                    columnTitle: ((keyLength || 0) > 1 ?
                        key :
                        item.name) || '',
                    topLevelColumnTitle: item.name
                };
            }
            return item.name + ((keyLength || 0) > 1 ? ' (' + key + ')' : '');
        }, 
        // Map the categories for value axes
        getCategoryAndDateTimeMap = function (series, pointArrayMap, pIdx) {
            var categoryMap = {}, dateTimeValueAxisMap = {};
            pointArrayMap.forEach(function (prop) {
                var axisName = ((series.keyToAxis && series.keyToAxis[prop]) ||
                    prop) + 'Axis', 
                // Points in parallel coordinates refers to all yAxis
                // not only `series.yAxis`
                axis = isNumber(pIdx) ?
                    series.chart[axisName][pIdx] :
                    series[axisName];
                categoryMap[prop] = (axis && axis.categories) || [];
                dateTimeValueAxisMap[prop] = (axis && axis.dateTime);
            });
            return {
                categoryMap: categoryMap,
                dateTimeValueAxisMap: dateTimeValueAxisMap
            };
        }, 
        // Create point array depends if xAxis is category
        // or point.name is defined #13293
        getPointArray = function (series, xAxis) {
            var pointArrayMap = series.pointArrayMap || ['y'], namedPoints = series.data.some(function (d) {
                return (typeof d.y !== 'undefined') && d.name;
            });
            // If there are points with a name, we also want the x value in
            // the table
            if (namedPoints &&
                xAxis &&
                !xAxis.categories &&
                series.exportKey !== 'name') {
                return __spreadArray(['x'], pointArrayMap, true);
            }
            return pointArrayMap;
        }, xAxisIndices = [];
        var xAxis, dataRows, columnTitleObj, i = 0, // Loop the series and index values
        x, xTitle;
        chart.series.forEach(function (series) {
            var keys = series.options.keys, xAxis = series.xAxis, pointArrayMap = keys || getPointArray(series, xAxis), valueCount = pointArrayMap.length, xTaken = !series.requireSorting && {}, xAxisIndex = xAxes.indexOf(xAxis);
            var categoryAndDatetimeMap = getCategoryAndDateTimeMap(series, pointArrayMap), mockSeries, j;
            if (series.options.includeInDataExport !== false &&
                !series.options.isInternal &&
                series.visible !== false // #55
            ) {
                // Build a lookup for X axis index and the position of the first
                // series that belongs to that X axis. Includes -1 for non-axis
                // series types like pies.
                if (!find(xAxisIndices, function (index) {
                    return index[0] === xAxisIndex;
                })) {
                    xAxisIndices.push([xAxisIndex, i]);
                }
                // Compute the column headers and top level headers, usually the
                // same as series names
                j = 0;
                while (j < valueCount) {
                    columnTitleObj = columnHeaderFormatter(series, pointArrayMap[j], pointArrayMap.length);
                    columnTitles.push(columnTitleObj.columnTitle ||
                        columnTitleObj);
                    if (multiLevelHeaders) {
                        topLevelColumnTitles.push(columnTitleObj.topLevelColumnTitle ||
                            columnTitleObj);
                    }
                    j++;
                }
                mockSeries = {
                    chart: series.chart,
                    autoIncrement: series.autoIncrement,
                    options: series.options,
                    pointArrayMap: series.pointArrayMap,
                    index: series.index,
                    // Allows correct date formatting for string date, #23654.
                    xAxis: series.xAxis
                };
                // Export raw data because we need the uncropped data (#7913),
                // and we need to support Boost (#7026).
                var data = new Array(series.dataTable.rowCount)
                    .fill(void 0).map(function (_, i) {
                    return series.dataTable.getRowObject(i);
                }), xColumn_1 = series.getColumn('x');
                (data || []).forEach(function eachData(options, pIdx) {
                    var _a;
                    var mockPoint = { series: mockSeries };
                    var key, prop, val;
                    // In parallel coordinates chart, each data point is
                    // connected to a separate yAxis, conform this
                    if (hasParallelCoords) {
                        categoryAndDatetimeMap = getCategoryAndDateTimeMap(series, pointArrayMap, pIdx);
                    }
                    series.pointClass.prototype.applyOptions.call(mockPoint, options, xColumn_1[pIdx]);
                    var name = series.data[pIdx] && series.data[pIdx].name;
                    key = ((_a = mockPoint.x) !== null && _a !== void 0 ? _a : '') + ',' + name;
                    j = 0;
                    // Pies, funnels, geo maps etc. use point name in X row
                    if (!xAxis ||
                        series.exportKey === 'name' ||
                        (!hasParallelCoords && xAxis && xAxis.hasNames) && name) {
                        key = name;
                    }
                    if (xTaken) {
                        if (xTaken[key]) {
                            key += '|' + pIdx;
                        }
                        xTaken[key] = true;
                    }
                    if (!rows[key]) {
                        rows[key] = [];
                        rows[key].xValues = [];
                        // ES5 replacement for Array.from / fill.
                        var arr = [];
                        for (var i_1 = 0; i_1 < series.chart.series.length; i_1++) {
                            arr[i_1] = 0;
                        }
                        // Create pointers array, holding information how many
                        // duplicates of specific x occurs in each series.
                        // Used for creating rows with duplicates.
                        rows[key].pointers = arr;
                        rows[key].pointers[series.index] = 1;
                    }
                    else {
                        // Handle duplicates (points with the same x), by
                        // creating extra rows based on pointers for better
                        // performance.
                        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                        var modifiedKey = "".concat(key, ",").concat(rows[key].pointers[series.index]), originalKey = key;
                        if (rows[key].pointers[series.index]) {
                            if (!rows[modifiedKey]) {
                                rows[modifiedKey] = [];
                                rows[modifiedKey].xValues = [];
                                rows[modifiedKey].pointers = [];
                            }
                            key = modifiedKey;
                        }
                        rows[originalKey].pointers[series.index] += 1;
                    }
                    rows[key].x = mockPoint.x;
                    rows[key].name = name;
                    rows[key].xValues[xAxisIndex] = mockPoint.x;
                    while (j < valueCount) {
                        prop = pointArrayMap[j]; // `y`, `z` etc
                        val =
                            series.pointClass.prototype.getNestedProperty.apply(mockPoint, [prop]);
                        // Allow values from nested properties (#20470)
                        rows[key][i + j] = pick(
                        // Y axis category if present
                        categoryAndDatetimeMap.categoryMap[prop][val], 
                        // Datetime yAxis
                        categoryAndDatetimeMap.dateTimeValueAxisMap[prop] ?
                            time.dateFormat(csvOptions.dateFormat, val) :
                            null, 
                        // Linear/log yAxis
                        val);
                        j++;
                    }
                });
                i = i + j;
            }
        });
        // Make a sortable array
        for (x in rows) {
            if (Object.hasOwnProperty.call(rows, x)) {
                rowArr.push(rows[x]);
            }
        }
        var xAxisIndex, column;
        // Add computed column headers and top level headers to final row set
        dataRows = multiLevelHeaders ? [topLevelColumnTitles, columnTitles] :
            [columnTitles];
        i = xAxisIndices.length;
        while (i--) { // Start from end to splice in
            xAxisIndex = xAxisIndices[i][0];
            column = xAxisIndices[i][1];
            xAxis = xAxes[xAxisIndex];
            // Sort it by X values
            rowArr.sort(function (// eslint-disable-line no-loop-func
            a, b) {
                return a.xValues[xAxisIndex] - b.xValues[xAxisIndex];
            });
            // Add header row
            xTitle = columnHeaderFormatter(xAxis);
            dataRows[0].splice(column, 0, xTitle);
            if (multiLevelHeaders && dataRows[1]) {
                // If using multi level headers, we just added top level header.
                // Also add for sub level
                dataRows[1].splice(column, 0, xTitle);
            }
            // Add the category column
            rowArr.forEach(function (// eslint-disable-line no-loop-func
            row) {
                var category = row.name;
                if (xAxis && !defined(category)) {
                    if (xAxis.dateTime) {
                        if (row.x instanceof Date) {
                            row.x = row.x.getTime();
                        }
                        category = time.dateFormat(csvOptions.dateFormat, row.x);
                    }
                    else if (xAxis.categories) {
                        category = pick(xAxis.names[row.x], xAxis.categories[row.x], row.x);
                    }
                    else {
                        category = row.x;
                    }
                }
                // Add the X/date/category
                row.splice(column, 0, category);
            });
        }
        dataRows = dataRows.concat(rowArr);
        fireEvent(chart, 'exportData', { dataRows: dataRows });
        return dataRows;
    }
    /**
     * Build a HTML table with the chart's current data.
     *
     * @sample highcharts/export-data/viewdata/
     * View the data from the export menu
     *
     * @function Highcharts.Exporting#getTable
     *
     * @param {boolean} [useLocalDecimalPoint]
     * Whether to use the local decimal point as detected from the browser. This
     * makes it easier to export data to Excel in the same locale as the user
     * is.
     *
     * @return {string}
     * HTML representation of the data.
     *
     * @emits Highcharts.Chart#event:afterGetTable
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function getTable(useLocalDecimalPoint) {
        var serialize = function (node) {
            if (!node.tagName || node.tagName === '#text') {
                // Text node
                return node.textContent || '';
            }
            var attributes = node.attributes;
            var html = "<".concat(node.tagName);
            if (attributes) {
                Object.keys(attributes)
                    .forEach(function (key) {
                    var value = attributes[key];
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    html += " ".concat(key, "=\"").concat(value, "\"");
                });
            }
            html += '>';
            html += node.textContent || '';
            (node.children || []).forEach(function (child) {
                html += serialize(child);
            });
            html += "</".concat(node.tagName, ">");
            return html;
        };
        var tree = this.getTableAST(useLocalDecimalPoint);
        return serialize(tree);
    }
    /**
     * Get the AST of a HTML table representing the chart data.
     *
     * @internal
     * @function Highcharts.Exporting#getTableAST
     *
     * @param {boolean} [useLocalDecimalPoint]
     * Whether to use the local decimal point as detected from the browser. This
     * makes it easier to export data to Excel in the same locale as the user
     * is.
     *
     * @return {Highcharts.ASTNode}
     * The abstract syntax tree
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function getTableAST(useLocalDecimalPoint) {
        var _a;
        var rowLength = 0;
        var treeChildren = [], exporting = this, chart = exporting.chart, options = chart.options, decimalPoint = useLocalDecimalPoint ? (1.1).toLocaleString()[1] : '.', useMultiLevelHeaders = pick(exporting.options.useMultiLevelHeaders, true), rows = exporting.getDataRows(useMultiLevelHeaders), topHeaders = useMultiLevelHeaders ? rows.shift() : null, subHeaders = rows.shift(), 
        // Compare two rows for equality
        isRowEqual = function (row1, row2) {
            var i = row1.length;
            if (row2.length === i) {
                while (i--) {
                    if (row1[i] !== row2[i]) {
                        return false;
                    }
                }
            }
            else {
                return false;
            }
            return true;
        }, 
        // Get table cell HTML from value
        getCellHTMLFromValue = function (tagName, classes, attributes, value) {
            var children = [];
            var textContent = pick(value, ''), className = 'highcharts-text' + (classes ? ' ' + classes : '');
            // Convert to string if number
            if (typeof textContent === 'number') {
                textContent = chart.numberFormatter(textContent, -1, decimalPoint, tagName === 'th' ? '' : void 0);
                className = 'highcharts-number';
            }
            else if (!value) {
                className = 'highcharts-empty';
            }
            if (tagName === 'th' && attributes.scope === 'col') {
                children.push({
                    tagName: 'button',
                    textContent: textContent,
                    style: {
                        color: 'inherit',
                        borderWidth: 0,
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: 'inherit',
                        fontWeight: 'inherit'
                    }
                });
            }
            attributes = extend({ 'class': className }, attributes);
            var result = {
                tagName: tagName,
                attributes: attributes
            };
            if (children.length > 0) {
                result.children = children;
            }
            else {
                result.textContent = textContent;
            }
            return result;
        }, 
        // Get table header markup from row data
        getTableHeaderHTML = function (topheaders, subheaders, rowLength) {
            var theadChildren = [];
            var i = 0, len = rowLength || subheaders && subheaders.length, next, cur, curColspan = 0, rowspan;
            // Clean up multiple table headers. Chart.getDataRows() returns
            // two levels of headers when using multilevel, not merged. We
            // need to merge identical headers, remove redundant headers,
            // and keep it all marked up nicely.
            if (useMultiLevelHeaders &&
                topheaders &&
                subheaders &&
                !isRowEqual(topheaders, subheaders)) {
                var trChildren = [];
                for (; i < len; ++i) {
                    cur = topheaders[i];
                    next = topheaders[i + 1];
                    if (cur === next) {
                        ++curColspan;
                    }
                    else if (curColspan) {
                        // Ended colspan
                        // Add cur to HTML with colspan.
                        trChildren.push(getCellHTMLFromValue('th', 'highcharts-table-topheading', {
                            scope: 'col',
                            colspan: curColspan + 1
                        }, cur));
                        curColspan = 0;
                    }
                    else {
                        // Cur is standalone. If it is same as sublevel,
                        // remove sublevel and add just toplevel.
                        if (cur === subheaders[i]) {
                            if (exporting.options.useRowspanHeaders) {
                                rowspan = 2;
                                // eslint-disable-next-line @typescript-eslint/no-array-delete
                                delete subheaders[i];
                            }
                            else {
                                rowspan = 1;
                                subheaders[i] = '';
                            }
                        }
                        else {
                            rowspan = 1;
                        }
                        var cell = getCellHTMLFromValue('th', 'highcharts-table-topheading', { scope: 'col' }, cur);
                        if (rowspan > 1 && cell.attributes) {
                            cell.attributes.valign = 'top';
                            cell.attributes.rowspan = rowspan;
                        }
                        trChildren.push(cell);
                    }
                }
                theadChildren.push({
                    tagName: 'tr',
                    children: trChildren
                });
            }
            // Add the subheaders (the only headers if not using
            // multilevels)
            if (subheaders) {
                var trChildren = [];
                for (i = 0, len = subheaders.length; i < len; ++i) {
                    if (typeof subheaders[i] !== 'undefined') {
                        trChildren.push(getCellHTMLFromValue('th', null, {
                            scope: 'col'
                        }, subheaders[i]));
                    }
                }
                theadChildren.push({
                    tagName: 'tr',
                    children: trChildren
                });
            }
            return {
                tagName: 'thead',
                children: theadChildren
            };
        };
        // Add table caption
        var tableCaption = (exporting.options || {}).tableCaption;
        if (tableCaption !== false) {
            treeChildren.push({
                tagName: 'caption',
                attributes: {
                    'class': 'highcharts-table-caption'
                },
                textContent: typeof tableCaption === 'string' ?
                    tableCaption :
                    ((_a = options.title) === null || _a === void 0 ? void 0 : _a.text) || options.lang.chartTitle
            });
        }
        // Find longest row
        for (var i = 0, len = rows.length; i < len; ++i) {
            if (rows[i].length > rowLength) {
                rowLength = rows[i].length;
            }
        }
        // Add header
        treeChildren.push(getTableHeaderHTML(topHeaders, subHeaders || [], Math.max(rowLength, (subHeaders === null || subHeaders === void 0 ? void 0 : subHeaders.length) || 0)));
        // Transform the rows to HTML
        var trs = [];
        rows.forEach(function (row) {
            var trChildren = [];
            for (var j = 0; j < rowLength; j++) {
                // Make first column a header too. Especially important for
                // category axes, but also might make sense for datetime? Should
                // await user feedback on this.
                trChildren.push(getCellHTMLFromValue(j ? 'td' : 'th', null, j ? {} : { scope: 'row' }, row[j]));
            }
            trs.push({
                tagName: 'tr',
                children: trChildren
            });
        });
        treeChildren.push({
            tagName: 'tbody',
            children: trs
        });
        var e = {
            tree: {
                tagName: 'table',
                id: "highcharts-data-table-".concat(chart.index),
                children: treeChildren
            }
        };
        fireEvent(chart, 'afterGetTableAST', e);
        return e.tree;
    }
    /**
     * Hide the data table when visible.
     *
     * @function Highcharts.Exporting#hideData
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function hideData() {
        this.toggleDataTable(false);
    }
    /**
     * Toggle showing data table.
     *
     * @internal
     * @function Highcharts.Exporting#toggleDataTable
     *
     * @param {boolean} [show]
     * Whether to show data table or not.
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function toggleDataTable(show) {
        var _a;
        var chart = this.chart, 
        // Create the div
        createContainer = (show = pick(show, !this.isDataTableVisible)) &&
            !this.dataTableDiv;
        if (createContainer) {
            this.dataTableDiv = doc.createElement('div');
            this.dataTableDiv.className = 'highcharts-data-table';
            // Insert after the chart container
            chart.renderTo.parentNode.insertBefore(this.dataTableDiv, chart.renderTo.nextSibling);
        }
        // Toggle the visibility
        if (this.dataTableDiv) {
            var style = this.dataTableDiv.style, oldDisplay = style.display;
            style.display = show ? 'block' : 'none';
            // Generate the data table
            if (show) {
                this.dataTableDiv.innerHTML = AST.emptyHTML;
                var ast = new AST([this.getTableAST()]);
                ast.addToDOM(this.dataTableDiv);
                fireEvent(chart, 'afterViewData', {
                    element: this.dataTableDiv,
                    wasHidden: createContainer || oldDisplay !== style.display
                });
            }
            else {
                fireEvent(chart, 'afterHideData');
            }
        }
        // Set the flag
        this.isDataTableVisible = show;
        // Change the menu item text
        var exportDivElements = this.divElements, options = this.options, menuItems = (_a = options.buttons) === null || _a === void 0 ? void 0 : _a.contextButton.menuItems, lang = chart.options.lang;
        if (options &&
            options.menuItemDefinitions &&
            lang &&
            lang.viewData &&
            lang.hideData &&
            menuItems &&
            exportDivElements) {
            var exportDivElement = exportDivElements[menuItems.indexOf('viewData')];
            if (exportDivElement) {
                AST.setElementHTML(exportDivElement, this.isDataTableVisible ? lang.hideData : lang.viewData);
            }
        }
    }
    /**
     * View the data in a table below the chart.
     *
     * @function Highcharts.Exporting#viewData
     *
     * @emits Highcharts.Chart#event:afterViewData
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function viewData() {
        this.toggleDataTable(true);
    }
    /**
     * Wrapper function for the download functions, which handles showing and
     * hiding the loading message.
     *
     * @internal
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function wrapLoading(fn) {
        var _this = this;
        var chart = this.chart, showMessage = Boolean(this.options.showExportInProgress);
        // Prefer requestAnimationFrame if available
        var timeoutFn = win.requestAnimationFrame || setTimeout;
        // Outer timeout avoids menu freezing on click
        timeoutFn(function () {
            showMessage &&
                chart.showLoading(chart.options.lang.exportInProgress);
            timeoutFn(function () {
                try {
                    fn.call(_this);
                }
                finally {
                    showMessage && chart.hideLoading();
                }
            });
        });
    }
    /**
     * Function that runs on the chart's 'afterViewData' event.
     *
     * @internal
     * @function Highcharts.Chart#onChartAfterViewData
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function onChartAfterViewData() {
        var exporting = this.exporting, dataTableDiv = exporting === null || exporting === void 0 ? void 0 : exporting.dataTableDiv, langOptions = this.options.lang, decimalPoint = (langOptions === null || langOptions === void 0 ? void 0 : langOptions.decimalPoint) || '.', thousandsSep = (langOptions === null || langOptions === void 0 ? void 0 : langOptions.thousandsSep) || ',', getCellValue = function (tr, index) {
            return tr.children[index].textContent || '';
        }, parseNumber = function (value) {
            if (!value) {
                return null;
            }
            var normalized = value;
            if (thousandsSep) {
                normalized = normalized.split(thousandsSep).join('');
            }
            normalized = normalized.replace(decimalPoint, '.');
            var number = Number(normalized);
            return isNumber(number) ? number : null;
        }, comparer = function (index, ascending) {
            return function (a, b) {
                var valA = getCellValue(ascending ? a : b, index), valB = getCellValue(ascending ? b : a, index), numA = parseNumber(valA), numB = parseNumber(valB);
                return numA !== null && numB !== null ?
                    numA - numB :
                    valA.localeCompare(valB);
            };
        };
        if (dataTableDiv && exporting.options.allowTableSorting) {
            var row = dataTableDiv.querySelector('thead tr');
            if (row) {
                row.childNodes.forEach(function (th) {
                    var tableBody = dataTableDiv.querySelector('tbody');
                    th.addEventListener('click', function () {
                        var rows = __spreadArray([], dataTableDiv.querySelectorAll('tr:not(thead tr)'), true), headers = __spreadArray([], th.parentNode.children, true);
                        if (exporting) {
                            rows.sort(comparer(headers.indexOf(th), exporting.ascendingOrderInTable =
                                !exporting.ascendingOrderInTable)).forEach(function (tr) {
                                tableBody === null || tableBody === void 0 ? void 0 : tableBody.appendChild(tr);
                            });
                            headers.forEach(function (header) {
                                [
                                    'highcharts-sort-ascending',
                                    'highcharts-sort-descending'
                                ].forEach(function (className) {
                                    if (header.classList.contains(className)) {
                                        header.classList.remove(className);
                                    }
                                });
                                if (header !== th) {
                                    header.removeAttribute('aria-sort');
                                }
                            });
                            th.classList.add(exporting.ascendingOrderInTable ?
                                'highcharts-sort-ascending' :
                                'highcharts-sort-descending');
                            th.setAttribute('aria-sort', exporting.ascendingOrderInTable ?
                                'ascending' :
                                'descending');
                        }
                    });
                });
            }
        }
    }
    /**
     * Function that runs on the chart's 'render' event. Handle the showTable
     * option.
     *
     * @internal
     * @function Highcharts.Chart#onChartRenderer
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function onChartRenderer() {
        var _a, _b, _c;
        if (((_b = (_a = this.options) === null || _a === void 0 ? void 0 : _a.exporting) === null || _b === void 0 ? void 0 : _b.showTable) &&
            !this.options.chart.forExport) {
            (_c = this.exporting) === null || _c === void 0 ? void 0 : _c.viewData();
        }
    }
    /**
     * Function that runs on the chart's 'destroy' event. Handle cleaning up the
     * dataTableDiv element.
     *
     * @internal
     * @function Highcharts.Chart#onChartDestroy
     *
     * @requires modules/exporting
     * @requires modules/export-data
     */
    function onChartDestroy() {
        var _a, _b;
        (_b = (_a = this.exporting) === null || _a === void 0 ? void 0 : _a.dataTableDiv) === null || _b === void 0 ? void 0 : _b.remove();
    }
})(ExportData || (ExportData = {}));
/* *
 *
 * Default Export
 *
 * */
/** @internal */
export default ExportData;
/* *
 *
 *  API Declarations
 *
 * */
/**
 * Function callback to execute while data rows are processed for exporting.
 * This allows the modification of data rows before processed into the final
 * format.
 *
 * @callback Highcharts.ExportDataCallbackFunction
 * @extends Highcharts.EventCallbackFunction<Highcharts.Chart>
 *
 * @param {Highcharts.Chart} this
 * Chart context where the event occurred.
 *
 * @param {Highcharts.ExportDataEventObject} event
 * Event object with data rows that can be modified.
 */
/**
 * Contains information about the export data event.
 *
 * @interface Highcharts.ExportDataEventObject
 */ /**
* Contains the data rows for the current export task and can be modified.
* @name Highcharts.ExportDataEventObject#dataRows
* @type {Array<Array<string>>}
*/
(''); // Keeps doclets above in JS file
