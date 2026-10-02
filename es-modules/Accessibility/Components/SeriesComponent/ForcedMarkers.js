/* *
 *
 *  (c) 2009-2026 Highsoft AS
 *  Author: Øystein Moseng
 *
 *  Handle forcing series markers.
 *
 *  Integration of this software requires a license.
 *  - For commercial use, see www.highcharts.com/license
 *  - For non-commercial, see www.highcharts.com/license-eula
 *
 *
 * */
'use strict';
import H from '../../../Core/Globals.js';
const { composed } = H;
import { addEvent, merge, pushUnique } from '../../../Shared/Utilities.js';
/* *
 *
 *  Composition
 *
 * */
/** @internal */
var ForcedMarkersComposition;
(function (ForcedMarkersComposition) {
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
    /** @internal */
    function compose(SeriesClass) {
        if (pushUnique(composed, 'A11y.FM')) {
            addEvent(SeriesClass, 'afterSetOptions', seriesOnAfterSetOptions);
            addEvent(SeriesClass, 'render', seriesOnRender);
            addEvent(SeriesClass, 'afterRender', seriesOnAfterRender);
            addEvent(SeriesClass, 'renderCanvas', seriesOnRenderCanvas);
        }
    }
    ForcedMarkersComposition.compose = compose;
    /** @internal */
    function forceZeroOpacityMarkerOptions(options) {
        merge(true, options, {
            marker: {
                enabled: true,
                states: {
                    normal: {
                        opacity: 0
                    }
                }
            }
        });
    }
    /**
     * The normal state opacity of lowMarker on Arearange-like series is
     * handled if zero opacity was forced on the main marker(#25279).
     * @internal
     */
    function restoreLowMarkerOpacity(series) {
        const lowMarker = series.options.lowMarker;
        if (lowMarker && lowMarker?.enabled === true &&
            typeof lowMarker.states?.normal?.opacity !== 'number') {
            merge(true, lowMarker, {
                states: {
                    normal: {
                        opacity: series.resetA11yMarkerOptions?.states
                            ?.normal?.opacity
                    }
                }
            });
        }
    }
    /** @internal */
    function getPointMarkerOpacity(pointOptions) {
        return pointOptions.marker.states &&
            pointOptions.marker.states.normal &&
            pointOptions.marker.states.normal.opacity;
    }
    /** @internal */
    function handleForcePointMarkers(series) {
        let i = series.points.length;
        while (i--) {
            const point = series.points[i];
            const pointOptions = point.options;
            const hadForcedMarker = point.hasForcedA11yMarker;
            delete point.hasForcedA11yMarker;
            if (pointOptions.marker) {
                const isStillForcedMarker = hadForcedMarker &&
                    getPointMarkerOpacity(pointOptions) === 0;
                if (pointOptions.marker.enabled && !isStillForcedMarker) {
                    unforcePointMarkerOptions(pointOptions);
                    point.hasForcedA11yMarker = false;
                }
                else if (pointOptions.marker.enabled === false) {
                    forceZeroOpacityMarkerOptions(pointOptions);
                    point.hasForcedA11yMarker = true;
                }
            }
        }
    }
    /** @internal */
    function hasIndividualPointMarkerOptions(series) {
        return !!(series._hasPointMarkers &&
            series.points &&
            series.points.length);
    }
    /** @internal */
    function isWithinDescriptionThreshold(series) {
        const a11yOptions = series.chart.options.accessibility;
        return series.points.length <
            a11yOptions.series.pointDescriptionEnabledThreshold ||
            a11yOptions.series
                .pointDescriptionEnabledThreshold === false;
    }
    /**
     * Process marker graphics after render
     *
     * @internal
     */
    function seriesOnAfterRender() {
        const series = this;
        // For styled mode the rendered graphic does not reflect the style
        // options, and we need to add/remove classes to achieve the same.
        if (series.chart.styledMode) {
            if (series.markerGroup) {
                series.markerGroup[series.a11yMarkersForced ? 'addClass' : 'removeClass']('highcharts-a11y-markers-hidden');
            }
            // Unforce lowMarker zero opacity if enabled
            // in styled mode (#25279).
            const lowMarker = series.options.lowMarker;
            if (lowMarker) {
                const lowMarkerVisible = !!series.a11yMarkersForced &&
                    lowMarker.enabled === true;
                series.points.forEach((point) => {
                    const lowGraphic = point.graphics?.[0];
                    if (lowGraphic) {
                        lowGraphic[lowMarkerVisible ? 'addClass' : 'removeClass']('highcharts-a11y-marker-visible');
                    }
                });
            }
            // Do we need to handle individual points?
            if (hasIndividualPointMarkerOptions(series)) {
                series.points.forEach((point) => {
                    if (point.graphic) {
                        point.graphic[point.hasForcedA11yMarker ?
                            'addClass' : 'removeClass']('highcharts-a11y-marker-hidden');
                        point.graphic[point.hasForcedA11yMarker === false ?
                            'addClass' :
                            'removeClass']('highcharts-a11y-marker-visible');
                    }
                });
            }
        }
    }
    /**
     * Keep track of options to reset markers to if no longer forced.
     *
     * @internal
     */
    function seriesOnAfterSetOptions(e) {
        this.resetA11yMarkerOptions = merge(e.options.marker || {}, this.userOptions.marker || {});
    }
    /**
     * Keep track of forcing markers.
     *
     * @internal
     */
    function seriesOnRender() {
        const series = this, options = series.options;
        if (shouldForceMarkers(series)) {
            if (options.marker?.enabled === false) {
                series.a11yMarkersForced = true;
                forceZeroOpacityMarkerOptions(series.options);
                restoreLowMarkerOpacity(series);
            }
            if (hasIndividualPointMarkerOptions(series)) {
                handleForcePointMarkers(series);
            }
        }
        else if (series.a11yMarkersForced) {
            delete series.a11yMarkersForced;
            // Mark series dirty to ensure marker graphics are cleaned up
            series.isDirty = true;
            unforceSeriesMarkerOptions(series);
            if (options.marker?.enabled === false) { // #23329
                delete series.resetA11yMarkerOptions; // #16624
            }
        }
        else if (series.chart.styledMode &&
            options.marker?.enabled === false &&
            !hasIndividualPointMarkerOptions(series)) {
            // `a11yMarkersForced` can be reset during `Series.update`.
            // Clean up stale marker graphics that may still exist (#24164).
            destroyPointMarkerGraphics(series);
        }
    }
    /** @internal */
    function shouldForceMarkers(series) {
        const chart = series.chart, chartA11yEnabled = chart.options.accessibility.enabled, seriesA11yEnabled = (series.options.accessibility &&
            series.options.accessibility.enabled) !== false;
        return (chartA11yEnabled &&
            seriesA11yEnabled &&
            isWithinDescriptionThreshold(series));
    }
    /** @internal */
    function unforcePointMarkerOptions(pointOptions) {
        merge(true, pointOptions.marker, {
            states: {
                normal: {
                    opacity: getPointMarkerOpacity(pointOptions) || 1
                }
            }
        });
    }
    /** @internal */
    function destroyPointMarkerGraphics(series) {
        series.points?.forEach((point) => {
            if (point.graphic) {
                point.graphic = point.graphic.destroy();
            }
        });
    }
    /**
     * Reset markers to normal
     *
     * @internal
     */
    function unforceSeriesMarkerOptions(series) {
        const resetMarkerOptions = series.resetA11yMarkerOptions;
        if (resetMarkerOptions) {
            const originalOpacity = resetMarkerOptions.states &&
                resetMarkerOptions.states.normal &&
                resetMarkerOptions.states.normal.opacity;
            // Prevent ghost markers when zooming out (#23878).
            if (series.chart.styledMode &&
                resetMarkerOptions.enabled === false) {
                destroyPointMarkerGraphics(series);
            }
            // Temporarily set the old marker options to enabled in order to
            // trigger destruction of the markers in Series.update.
            if (series.userOptions && series.userOptions.marker) {
                series.userOptions.marker.enabled = true;
            }
            series.update({
                marker: {
                    enabled: resetMarkerOptions.enabled,
                    states: {
                        normal: { opacity: originalOpacity }
                    }
                }
            });
        }
    }
    /**
     * Reset markers if series is boosted and had forced markers (#17320).
     *
     * @internal
     */
    function seriesOnRenderCanvas() {
        if (this.boosted && this.a11yMarkersForced) {
            merge(true, this.options, {
                marker: {
                    enabled: false
                }
            });
            delete this.a11yMarkersForced;
        }
    }
})(ForcedMarkersComposition || (ForcedMarkersComposition = {}));
/* *
 *
 *  Default Export
 *
 * */
/** @internal */
export default ForcedMarkersComposition;
