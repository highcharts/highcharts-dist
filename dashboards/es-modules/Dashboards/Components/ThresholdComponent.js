/* *
 *
 *  (c) 2009 - 2023 Highsoft AS
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 *  Authors:
 *  - Sebastian Bochan
 *  - Wojciech Chmiel
 *  - Gøran Slettemark
 *  - Sophie Bremer
 *
 * */
'use strict';
import Chart from '../../Core/Chart/Chart.js';
import Component from './Component.js';
import U from '../../Core/Utilities.js';
const { isArray, isNumber, isObject, merge, objectEach, pick, splat } = U;
/* *
 *
 *  Class
 *
 * */
class ThresholdComponent extends Component {
    /* *
     *
     *  Static Functions
     *
     * */
    static fromJSON(json, cell) {
        const options = json;
        return new ThresholdComponent(cell, options);
    }
    /* *
     *
     *  Constructor
     *
     * */
    constructor(cell, options) {
        options = merge(ThresholdComponent.defaultOptions, options);
        super(cell, options);
        this.options = options;
        this.type = 'Threshold';
        this.sync = new Component.Sync(this, this.syncHandlers);
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * @internal
     */
    onTableChanged() {
    }
    render() {
        super.render();
        const { options } = this;
        const { valueName } = options;
        let componentOptions = options.options || {};
        const value = pick(options.value, componentOptions[valueName || '']);
        let CurrentComponent = options.component;
        if (options.thresholds && isNumber(value)) {
            let baseComponent = true;
            let start;
            let end = 0;
            const sortedThresholds = options.thresholds.slice().sort((a, b) => pick(a.min, a.max, Number.MIN_VALUE) -
                pick(b.min, a.max, Number.MIN_VALUE));
            for (let i = sortedThresholds.length - 1; i >= 0; i--) {
                const threshold = sortedThresholds[i];
                if (value >= pick(threshold.min, Number.MIN_VALUE) &&
                    value <= pick(threshold.max, Number.MAX_VALUE)) {
                    if (threshold.component) {
                        if (baseComponent) {
                            if (threshold.component !== CurrentComponent) {
                                baseComponent = false;
                                CurrentComponent = threshold.component;
                                start = i;
                            }
                        }
                        else if (threshold.component === CurrentComponent) {
                            start = i;
                        }
                    }
                    if (!end) {
                        end = i + 1;
                    }
                }
            }
            if (end) {
                componentOptions = merge(baseComponent ? componentOptions : {}, ...sortedThresholds
                    .slice(start, end)
                    .map((t) => t.options));
            }
        }
        componentOptions = merge(valueName && isNumber(options.value) ?
            { [valueName]: options.value } :
            {}, componentOptions);
        if (this.component instanceof CurrentComponent) {
            if (this.undoOptions) {
                if (!componentOptions.chartOptions &&
                    this.undoOptions.chartOptions) {
                    this.undoOptions.chartOptions = null;
                }
                this.component.update(this.undoOptions);
            }
            this.undoOptions = ThresholdComponent.currentOptions(componentOptions, this.component.options);
            this.component.update(componentOptions);
        }
        else {
            this.undoOptions = ThresholdComponent.currentOptions(componentOptions, CurrentComponent.defaultOptions);
            this.parentElement.innerHTML = '';
            this.component = new CurrentComponent(componentOptions).render();
        }
        return this;
    }
}
/* *
 *
 *  Static Properties
 *
 * */
ThresholdComponent.defaultOptions = merge(Component.defaultOptions, {
    valueName: 'value'
});
(function (ThresholdComponent) {
    /**
     * Get the current values for a given set of options.
     *
     * @private
     */
    function currentOptions(options, curr) {
        const ret = {};
        /**
         * Recurse over a set of options and its current values,
         * and store the current values in the ret object.
         */
        function getCurrent(options, curr, ret) {
            objectEach(options, function (val, key) {
                if (Chart.prototype.collectionsWithUpdate.indexOf(key) > -1 &&
                    isArray(curr[key])) {
                    val = splat(val);
                    ret[key] = [];
                    // Iterate over collections like series, xAxis or yAxis and
                    // map the items by index.
                    for (let i = 0; i < Math.max(val.length, curr[key].length); i++) {
                        if (curr[key][i]) {
                            if (val[i] === void 0) {
                                ret[key][i] = curr[key][i];
                            }
                            else {
                                ret[key][i] = {};
                                getCurrent(val[i], curr[key][i], ret[key][i]);
                            }
                        }
                    }
                }
                else if (isObject(val)) {
                    ret[key] = isArray(val) ? [] : {};
                    getCurrent(val, curr[key] || {}, ret[key]);
                }
                else if (typeof curr[key] === 'undefined') {
                    ret[key] = null;
                }
                else {
                    ret[key] = curr[key];
                }
            });
        }
        getCurrent(options, curr, ret);
        return ret;
    }
    ThresholdComponent.currentOptions = currentOptions;
})(ThresholdComponent || (ThresholdComponent = {}));
/* *
 *
 *  Default Export
 *
 * */
export default ThresholdComponent;
