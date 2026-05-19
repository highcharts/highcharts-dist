/* *
 *
 *
 * */
'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
import Annotation from '../Annotation.js';
import CrookedLine from './CrookedLine.js';
import D from '../../../Core/Defaults.js';
var defaultOptions = D.defaultOptions;
import { merge } from '../../../Shared/Utilities.js';
if ((_a = defaultOptions.annotations) === null || _a === void 0 ? void 0 : _a.types) {
    defaultOptions.annotations.types.elliottWave = merge(defaultOptions.annotations.types.crookedLine, 
    /**
     * Options for the elliott wave annotation type.
     *
     * @sample highcharts/annotations-advanced/elliott-wave/
     *         Elliott wave
     *
     * @extends      annotations.types.crookedLine
     * @product      highstock
     * @requires     modules/annotations-advanced
     * @optionparent annotations.types.elliottWave
     */
    {
        typeOptions: {
            /**
             * @extends   annotations.types.crookedLine.labelOptions
             * @apioption annotations.types.elliottWave.typeOptions.points.label
             */
            /**
             * @ignore-option
             */
            labels: ['(0)', '(A)', '(B)', '(C)', '(D)', '(E)'],
            line: {
                strokeWidth: 1
            }
        },
        labelOptions: {
            align: 'center',
            allowOverlap: true,
            crop: true,
            overflow: 'none',
            type: 'rect',
            backgroundColor: 'none',
            borderWidth: 0,
            y: -5,
            style: {
                color: 'var(--highcharts-neutral-color-80)'
            }
        }
    });
}
/* *
 *
 *  Class
 *
 * */
/** @internal */
var ElliottWave = /** @class */ (function (_super) {
    __extends(ElliottWave, _super);
    function ElliottWave() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* *
     *
     * Functions
     *
     * */
    ElliottWave.prototype.addLabels = function () {
        var _this = this;
        this.getPointsOptions().forEach(function (point, i) {
            var typeOptions = _this.options.typeOptions, label = _this.initLabel(merge(point.label, {
                text: typeOptions.labels[i],
                point: function (target) {
                    return target.annotation.points[i];
                }
            }), false);
            point.label = label.options;
        });
    };
    return ElliottWave;
}(CrookedLine));
Annotation.types.elliottWave = ElliottWave;
/* *
 *
 *  Default Export
 *
 * */
export default ElliottWave;
