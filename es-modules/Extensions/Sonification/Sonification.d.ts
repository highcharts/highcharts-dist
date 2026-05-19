import type Chart from '../../Core/Chart/Chart';
import type Series from '../../Core/Series/Series';
import type Point from '../../Core/Series/Point';
import SonificationInstrument from './SonificationInstrument.js';
import SonificationSpeaker from './SonificationSpeaker.js';
import SynthPatch from './SynthPatch.js';
declare module '../../Core/Chart/ChartBase' {
    interface ChartBase {
        /**
         * Sonification capabilities for the chart.
         *
         * @requires modules/sonification
         */
        sonification?: Sonification;
        /**
         * Play a sonification of a chart.
         *
         * @param onEnd
         * Callback to call after play completed.
         *
         * @requires modules/sonification
         */
        sonify: (onEnd?: globalThis.Sonification.ChartCallback) => void;
        /**
         * Play/pause sonification of a chart.
         *
         * @param reset
         * Reset the playing cursor after play completed.
         * @param onEnd
         * Callback to call after play completed.
         *
         * @requires modules/sonification
         */
        toggleSonify: (reset?: boolean, onEnd?: globalThis.Sonification.ChartCallback) => void;
    }
}
declare module '../../Core/Series/SeriesBase' {
    interface SeriesBase {
        /**
         * Play a sonification of a series.
         *
         * @function Highcharts.Series#sonify
         * @param {Highcharts.SonificationChartEventCallback} [onEnd]
         * Callback to call after play completed
         *
         * @requires modules/sonification
         */
        sonify: (onEnd?: globalThis.Sonification.ChartCallback) => void;
    }
}
declare module '../../Core/Series/PointBase' {
    interface PointBase {
        /**
         * Play a sonification of a point.
         *
         * @param onEnd
         * Callback to call after play completed.
         *
         * @requires modules/sonification
         */
        sonify: (onEnd?: globalThis.Sonification.ChartCallback) => void;
    }
}
declare module '../../Core/GlobalsBase' {
    interface GlobalsBase {
        /**
         * Global Sonification classes and objects.
         *
         * @requires modules/sonification
         */
        sonification: Sonification.GlobalObject;
    }
}
/**
 * The Sonification class. This class represents a chart's sonification
 * capabilities. A chart automatically gets an instance of this class when
 * applicable.
 *
 * @sample highcharts/sonification/chart-events
 *         Basic demo accessing some of the chart.sonification methods.
 * @sample highcharts/demo/sonification-navigation
 *         More advanced demo using more functionality.
 *
 * @requires modules/sonification
 *
 * @class
 * @name Highcharts.Sonification
 *
 * @param {Highcharts.Chart} chart The chart to tie the sonification to
 */
declare class Sonification {
    constructor(chart: Chart);
    /**
     * Set the audio destination node to something other than the default
     * output. This allows for inserting custom WebAudio chains after the
     * sonification.
     * @function Highcharts.Sonification#setAudioDestination
     * @param {AudioDestinationNode} audioDestination The destination node
     */
    setAudioDestination(audioDestination: AudioDestinationNode): void;
    /**
     * Check if sonification is playing currently
     * @function Highcharts.Sonification#isPlaying
     * @return {boolean} `true` if currently playing, `false` if not
     */
    isPlaying(): boolean;
    /**
     * Divide timeline into 100 parts of equal time, and play one of them.
     * Can be used for scrubbing navigation.
     * @function Highcharts.Sonification#playSegment
     *
     * @sample highcharts/sonification/scrubbing
     *         Scrubbing with slider
     *
     * @param {number} segment The segment to play, from 0 to 100
     * @param {Highcharts.SonificationChartEventCallback} [onEnd] Callback to call after play completed
     */
    playSegment(segment: number, onEnd?: globalThis.Sonification.ChartCallback): void;
    /**
     * Play point(s)/event(s) adjacent to current timeline cursor location.
     * @function Highcharts.Sonification#playAdjacent
     *
     * @sample highcharts/demo/sonification-navigation
     *         Sonification keyboard navigation
     *
     * @param {number} next Pass `true` to play next point, `false` for previous
     * @param {Highcharts.SonificationChartEventCallback} [onEnd]
     * Callback to call after play completed
     * @param {Highcharts.SonificationTimelineFilterCallback} [eventFilter]
     * Filter to apply to the events before finding adjacent to play
     */
    playAdjacent(next: boolean, onEnd?: globalThis.Sonification.ChartCallback, eventFilter?: globalThis.Sonification.TimelineFilterCallback): void;
    /**
     * Play next/previous series, picking the point closest to a prop value
     * from last played point. By default picks the point in the adjacent
     * series with the closest x value as the last played point.
     * @function Highcharts.Sonification#playAdjacentSeries
     *
     * @sample highcharts/demo/sonification-navigation
     *         Sonification keyboard navigation
     *
     * @param {number} next Pass `true` to play next series, `false` for previous
     * @param {string} [prop] Prop to find closest value of, defaults to `x`.
     * @param {Highcharts.SonificationChartEventCallback} [onEnd]
     * Callback to call after play completed
     *
     * @return {Highcharts.Series|null} The played series, or `null` if none found
     */
    playAdjacentSeries(next?: boolean, prop?: keyof Point, onEnd?: globalThis.Sonification.ChartCallback): Series | null;
    /**
     * Play point(s)/event(s) closest to a prop relative to a reference value.
     * @function Highcharts.Sonification#playClosestToProp
     *
     * @param {string} prop Prop to compare.
     * @param {number} targetValue Target value to find closest value of.
     * @param {Highcharts.SonificationTimelineFilterCallback} [targetFilter]
     * Filter to apply to the events before finding closest point(s)
     * @param {Highcharts.SonificationChartEventCallback} [onEnd]
     * Callback to call after play completed
     */
    playClosestToProp(prop: keyof Point, targetValue: number, targetFilter?: globalThis.Sonification.TimelineFilterCallback, onEnd?: globalThis.Sonification.ChartCallback): void;
    /**
     * Get last played point
     * @function Highcharts.Sonification#getLastPlayedPoint
     *
     * @sample highcharts/demo/sonification-navigation
     *         Sonification keyboard navigation
     *
     * @return {Highcharts.Point|null} The point, or null if none
     */
    getLastPlayedPoint(): Point | null;
    /**
     * Play a note with a specific instrument, and optionally a time offset.
     * @function Highcharts.Sonification#playNote
     *
     * @sample highcharts/sonification/chart-events
     *         Custom notifications
     *
     * @param {Highcharts.SonificationSynthPreset|Highcharts.SynthPatchOptionsObject} instrument
     * The instrument to play. Can be either a string referencing the
     * instrument presets, or an actual SynthPatch configuration.
     * @param {Highcharts.SonificationInstrumentScheduledEventOptionsObject} options
     * Configuration for the instrument event to play.
     * @param {number} [delayMs]
     * Time offset from now, in milliseconds. Defaults to 0.
     */
    playNote(instrument: string | SynthPatch.SynthPatchOptions, options: SonificationInstrument.ScheduledEventOptions, delayMs?: number): void;
    /**
     * Speak a text string, optionally with a custom speaker configuration
     * @function Highcharts.Sonification#speak
     *
     * @sample highcharts/sonification/chart-events
     *         Custom notifications
     *
     * @param {string} text Text to announce
     * @param {Highcharts.SonificationSpeakerOptionsObject} [speakerOptions]
     * Options for the announcement
     * @param {number} [delayMs]
     * Time offset from now, in milliseconds. Defaults to 0.
     */
    speak(text: string, speakerOptions?: SonificationSpeaker.SpeakerOptions, delayMs?: number): void;
    /**
     * Cancel current playing audio and reset the timeline.
     * @function Highcharts.Sonification#cancel
     */
    cancel(): void;
    /**
     * Start download of a MIDI file export of the timeline.
     * @function Highcharts.Sonification#downloadMIDI
     */
    downloadMIDI(): void;
}
declare namespace Sonification {
    /**
     * Collection of Sonification classes and objects.
     *
     * @requires modules/sonification
     */
    interface GlobalObject {
        /**
         * SynthPatch presets.
         */
        InstrumentPresets?: typeof import('./InstrumentPresets').default;
        /**
         * Musical scale presets.
         */
        Scales?: typeof import('./Scales').default;
        /**
         * SynthPatch class.
         */
        SynthPatch?: typeof SynthPatch;
        /**
         * SonificationInstrument class.
         */
        SonificationInstrument?: typeof SonificationInstrument;
        /**
         * SonificationSpeaker class.
         */
        SonificationSpeaker?: typeof SonificationSpeaker;
    }
}
export {};
