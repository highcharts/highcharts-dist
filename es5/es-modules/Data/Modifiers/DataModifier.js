/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 *  Authors:
 *  - Sophie Bremer
 *  - Gøran Slettemark
 *  - Dawid Draguła
 *
 * */
'use strict';
import { addEvent, fireEvent, merge } from '../../Shared/Utilities.js';
/* *
 *
 *  Class
 *
 * */
/**
 * Abstract class to provide an interface for modifying a table.
 */
var DataModifier = /** @class */ (function () {
    function DataModifier() {
    }
    /**
     * Adds a modifier class to the registry. The modifier class has to provide
     * the `DataModifier.options` property and the `DataModifier.modifyTable`
     * method to modify the table.
     *
     * @private
     *
     * @param {string} key
     * Registry key of the modifier class.
     *
     * @param {DataModifierType} DataModifierClass
     * Modifier class (aka class constructor) to register.
     *
     * @return {boolean}
     * Returns true, if the registration was successful. False is returned, if
     * their is already a modifier registered with this key.
     */
    DataModifier.registerType = function (key, DataModifierClass) {
        return (!!key &&
            !DataModifier.types[key] &&
            !!(DataModifier.types[key] = DataModifierClass));
    };
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Runs a timed execution of the modifier on the given datatable.
     * Can be configured to run multiple times.
     *
     * @param {DataTable} dataTable
     * The datatable to execute
     *
     * @param {BenchmarkOptions} options
     * Options. Currently supports `iterations` for number of iterations.
     *
     * @return {Array<number>}
     * An array of times in milliseconds
     *
     */
    DataModifier.prototype.benchmark = function (dataTable, options) {
        var results = [];
        var modifier = this;
        var execute = function () {
            modifier.modifyTable(dataTable);
            modifier.emit({
                type: 'afterBenchmarkIteration'
            });
        };
        var defaultOptions = {
            iterations: 1
        };
        var iterations = merge(defaultOptions, options).iterations;
        modifier.on('afterBenchmarkIteration', function () {
            if (results.length === iterations) {
                modifier.emit({
                    type: 'afterBenchmark',
                    results: results
                });
                return;
            }
            // Run again
            execute();
        });
        var times = {
            startTime: 0,
            endTime: 0
        };
        // Add timers
        modifier.on('modify', function () {
            times.startTime = window.performance.now();
        });
        modifier.on('afterModify', function () {
            times.endTime = window.performance.now();
            results.push(times.endTime - times.startTime);
        });
        // Initial run
        execute();
        return results;
    };
    /**
     * Emits an event on the modifier to all registered callbacks of this event.
     *
     * @param {DataModifierEvent} [e]
     * Event object containing additional event information.
     */
    DataModifier.prototype.emit = function (e) {
        fireEvent(this, e.type, e);
    };
    /**
     * Modifies the given table and sets its `modified` property as a reference
     * to the modified table. If `modified` property does not exist on the
     * original table, it's always created.
     *
     * @param {Highcharts.DataTable} table
     * Table to modify.
     *
     * @param {DataEventDetail} [eventDetail]
     * Custom information for pending events.
     *
     * @return {Promise<Highcharts.DataTable>}
     * Table with `modified` property as a reference.
     */
    DataModifier.prototype.modify = function (table, eventDetail) {
        var modifier = this;
        return new Promise(function (resolve, reject) {
            if (!table.modified) {
                table.modified = table.clone(false, eventDetail);
            }
            try {
                resolve(modifier.modifyTable(table, eventDetail));
            }
            catch (e) {
                modifier.emit({
                    type: 'error',
                    detail: eventDetail,
                    table: table
                });
                reject(e instanceof Error ? e : new Error('' + e));
            }
        });
    };
    /**
     * Registers a callback for a specific modifier event.
     *
     * @param {string} type
     * Event type as a string.
     *
     * @param {DataEventCallback} callback
     * Function to register for an modifier callback.
     *
     * @return {Function}
     * Function to unregister callback from the modifier event.
     */
    DataModifier.prototype.on = function (type, callback) {
        return addEvent(this, type, callback);
    };
    /* *
     *
     *  Static Properties
     *
     * */
    /**
     * Registry as a record object with modifier names and their class
     * constructor.
     */
    DataModifier.types = {};
    return DataModifier;
}());
/* *
 *
 *  Default Export
 *
 * */
export default DataModifier;
