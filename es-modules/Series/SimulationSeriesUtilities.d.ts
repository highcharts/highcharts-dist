import type NetworkgraphSeries from './Networkgraph/NetworkgraphSeries';
import type PackedBubbleSeries from './PackedBubble/PackedBubbleSeries';
import type SVGElement from '../Core/Renderer/SVG/SVGElement';
type SimulationSeries = (NetworkgraphSeries | PackedBubbleSeries);
/**
 * Create a setTimeout for the first drawDataLabels()
 * based on the dataLabels.animation.defer value
 * for series which have enabled simulation.
 * @private
 */
declare function initDataLabelsDefer(this: SimulationSeries): void;
/**
 * Initialize the SVG group for the DataLabels with correct opacities
 * and correct styles so that the animation for the series that have
 * simulation enabled works fine.
 * @private
 */
declare function initDataLabels(this: SimulationSeries): SVGElement;
declare const DataLabelsDeferUtils: {
    initDataLabels: typeof initDataLabels;
    initDataLabelsDefer: typeof initDataLabelsDefer;
};
export default DataLabelsDeferUtils;
