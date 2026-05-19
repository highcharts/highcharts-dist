import type SankeyPointOptions from '../Sankey/SankeyPointOptions';
export interface ArcDiagramPointOptions extends SankeyPointOptions {
    /**
     * The link weight, in pixels. If not set, width is calculated per link,
     * depending on the weight value.
     *
     * @sample highcharts/series-arcdiagram/link-weight
     *         Link weight set on series
     *
     * @since 10.0.0
     * @product highcharts
     */
    linkWeight?: number;
    dataLabels?: undefined;
    outgoing?: undefined;
}
export default ArcDiagramPointOptions;
