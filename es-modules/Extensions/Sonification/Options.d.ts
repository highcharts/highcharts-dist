import type Chart from '../../Core/Chart/Chart';
import type { DeepPartial } from '../../Shared/Types';
import type OptionsType from '../../Core/Options';
import type Point from '../../Core/Series/Point';
import type Series from '../../Core/Series/Series';
import type SonificationTimeline from './SonificationTimeline';
import type SynthPatch from './SynthPatch';
declare global {
    namespace Sonification {
        interface TimelineEventContext {
            time: number;
            point?: Point;
            value?: number;
        }
        /**
         * Event context object sent to sonification chart events.
         *
         * @requires modules/sonification
         */
        interface ChartEventContext {
            /**
             * The relevant chart.
             */
            chart?: Chart;
            /**
             * The playing timeline object with advanced and internal content.
             */
            timeline?: SonificationTimeline;
            /**
             * The points that were played, if any.
             */
            pointsPlayed?: Point[];
        }
        /**
         * Event context object sent to sonification series events.
         *
         * @requires modules/sonification
         */
        interface SeriesEventContext {
            /**
             * The relevant series.
             */
            series?: Series;
            /**
             * The playing timeline object with advanced and internal content.
             */
            timeline?: SonificationTimeline;
        }
        interface BoundaryHitContext {
            chart?: Chart;
            timeline: SonificationTimeline;
            attemptedNext?: boolean;
        }
        /**
         * Callback function for sonification events on series.
         *
         * @requires modules/sonification
         */
        type SeriesCallback = (s: SeriesEventContext) => void;
        /**
         * Callback function for sonification events on chart.
         *
         * @requires modules/sonification
         */
        type ChartCallback = (c: ChartEventContext) => void;
        type BoundaryHitCallback = (e: BoundaryHitContext) => void;
        type TrackValueCallback = (context: TimelineEventContext) => number;
        type TrackStringCallback = (context: TimelineEventContext) => string;
        type TrackPredicateCallback = (context: TimelineEventContext) => boolean;
        type TrackOptions = Array<InstrumentTrackOptions | SpeechTrackOptions>;
        type InstrumentContextTrackOptions = InstrumentTrackOptions & ContextOptions;
        type SpeechContextTrackOptions = SpeechTrackOptions & ContextOptions;
        type ContextTrackOptions = Array<InstrumentContextTrackOptions | SpeechContextTrackOptions>;
        type MapFunctionTypes = 'linear' | 'logarithmic';
        type PointGroupingAlgorithmTypes = 'minmax' | 'first' | 'last' | 'middle' | 'firstlast';
        type MappingParameter = string | number | TrackValueCallback | MappingParameterOptions;
        interface MappingParameterOptions {
            /**
             * The minimum value for the audio parameter. This is the lowest
             * value the audio parameter will be mapped to.
             */
            min?: number;
            /**
             * The maximum value for the audio parameter. This is the highest
             * value the audio parameter will be mapped to.
             */
            max?: number;
            /**
             * A point property to map the mapping parameter to.
             *
             * @sample highcharts/sonification/polarity-invert
             *         Inverted mapping to property
             */
            mapTo: string;
            /**
             * How to perform the mapping.
             *
             * @sample highcharts/sonification/log-mapping
             *         Logarithmic mapping to property
             */
            mapFunction?: MapFunctionTypes;
            /**
             * What data values to map the parameter within.
             *
             * @sample highcharts/sonification/mapping-within
             *         Mapping within demonstrated
             */
            within?: 'chart' | 'series' | 'xAxis' | 'yAxis';
            /**
             * A fixed value to use for the prop when mapping.
             *
             * @sample highcharts/demo/plotline-context
             *         Map to fixed y value
             */
            value?: number;
        }
        interface PitchMappingParameterOptions extends Omit<MappingParameterOptions, 'min' | 'max'> {
            /**
             * The minimum pitch value.
             */
            min?: number | string;
            /**
             * The maximum pitch value.
             */
            max?: number | string;
            /**
             * Map pitches to a musical scale. The scale is defined as an array
             * of semitone offsets from the root note.
             *
             * @sample highcharts/sonification/all-scales
             *         Predefined scale presets
             */
            scale?: number[];
        }
        interface FilterMappingOptions {
            /**
             * Map to filter frequency in Hertz from 1 to 20,000Hz.
             */
            frequency?: MappingParameter;
            /**
             * Map to filter resonance in dB. Can be negative to cause a dip,
             * or positive to cause a bump.
             */
            resonance?: MappingParameter;
        }
        interface TremoloMappingOptions {
            /**
             * Map to tremolo depth, from 0 to 1. This determines the
             * intensity of the tremolo effect, how much the volume changes.
             */
            depth?: MappingParameter;
            /**
             * Map to tremolo speed, from 0 to 1. This determines the speed
             * of the tremolo effect, how fast the volume changes.
             */
            speed?: MappingParameter;
        }
        interface PointGroupingOptions {
            /**
             * Whether or not to group points.
             *
             * @default true
             */
            enabled?: boolean;
            /**
             * The size of each group in milliseconds. Audio events closer
             * than this are grouped together.
             *
             * @default 15
             */
            groupTimespan?: number;
            /**
             * The grouping algorithm, deciding which points to keep when
             * grouping a set of points together.
             *
             * @default "minmax"
             */
            algorithm?: PointGroupingAlgorithmTypes;
            /**
             * The data property for each point to compare when deciding
             * which points to keep in the group.
             *
             * @default "y"
             */
            prop?: string;
        }
        interface BaseTrackOptions {
            /**
             * Options for point grouping, specifically for this track.
             */
            pointGrouping?: PointGroupingOptions;
            /**
             * Define a condition for when a track should be active and not.
             *
             * @sample highcharts/sonification/mapping-zones
             *         Mapping zones
             */
            activeWhen?: TrackPredicateCallback | ValueConstraints;
            /**
             * Show play marker (tooltip and/or crosshair) for a track.
             *
             * @default true
             */
            showPlayMarker?: boolean;
            /**
             * Name to use for a track when exporting to MIDI. By default it
             * uses the series name if the track is related to a series.
             */
            midiName?: string;
        }
        interface InstrumentTrackMappingOptions {
            /**
             * Time mapping determines what time each point plays. It is
             * defined as an offset in milliseconds, where 0 means it plays
             * immediately when the chart is sonified.
             *
             * @sample highcharts/sonification/point-play-time
             *         Play points in order of Y value
             *
             * @default "x"
             */
            time?: MappingParameter;
            /**
             * Pan refers to the stereo panning position of the sound. It is
             * defined from -1 (left) to 1 (right).
             *
             * @default "x"
             */
            pan?: MappingParameter;
            /**
             * The volume of notes, from 0 to 1.
             */
            volume?: MappingParameter;
            /**
             * Musical pitch refers to how high or low notes are played.
             *
             * @sample highcharts/sonification/pitch-mapping
             *         Various types of mapping used
             * @sample highcharts/sonification/polarity-invert
             *         Inverted mapping to property
             * @sample highcharts/sonification/log-mapping
             *         Logarithmic mapping to property
             */
            pitch?: (string[] | number[] | string | number | PitchMappingParameterOptions);
            /**
             * Frequency in Hertz of notes. Overrides pitch mapping if set.
             */
            frequency?: MappingParameter;
            /**
             * Gap in milliseconds between notes if pitch is mapped to an
             * array of notes.
             *
             * @sample maps/demo/audio-map
             *         Mapping to gap between notes
             *
             * @default 100
             */
            gapBetweenNotes?: MappingParameter;
            /**
             * Milliseconds to wait before playing, comes in addition to the
             * time determined by the `time` mapping.
             */
            playDelay?: MappingParameter;
            /**
             * Note duration determines for how long a note plays, in
             * milliseconds.
             *
             * @default 200
             */
            noteDuration?: MappingParameter;
            /**
             * Mapping options for tremolo effects. Tremolo is repeated
             * changes of volume over time.
             */
            tremolo?: TremoloMappingOptions;
            /**
             * Mapping options for the lowpass filter. A lowpass filter lets
             * low frequencies through, but stops high frequencies, making the
             * sound more dull.
             */
            lowpass?: FilterMappingOptions;
            /**
             * Mapping options for the highpass filter. A highpass filter lets
             * high frequencies through, but stops low frequencies, making the
             * sound thinner.
             */
            highpass?: FilterMappingOptions;
        }
        interface InstrumentTrackOptions extends BaseTrackOptions {
            /**
             * Type of track. Always `"instrument"` for instrument tracks, and
             * `"speech"` for speech tracks.
             */
            type?: 'instrument';
            /**
             * Instrument to use for playing. Can either be a string
             * referencing a synth preset, or it can be a synth configuration
             * object.
             *
             * @sample highcharts/demo/all-instruments
             *         Overview of available presets
             * @sample highcharts/sonification/custom-instrument
             *         Custom instrument
             *
             * @default "piano"
             */
            instrument: string | SynthPatch.SynthPatchOptions;
            /**
             * Mapping options for the audio parameters.
             *
             * @sample highcharts/sonification/mapping-overview
             *         Overview of common mapping parameters
             * @sample highcharts/sonification/pitch-mapping
             *         Various types of mapping used
             * @sample highcharts/sonification/polarity-invert
             *         Inverted mapping to property
             * @sample highcharts/sonification/log-mapping
             *         Logarithmic mapping to property
             */
            mapping?: InstrumentTrackMappingOptions;
            /**
             * Round pitch mapping to musical notes. If `false`, will play the
             * exact mapped note, even if it is out of tune compared to the
             * musical notes as defined by 440Hz standard tuning.
             *
             * @default true
             */
            roundToMusicalNotes?: boolean;
        }
        interface ValueConstraints {
            /**
             * Track is only active when `prop` is above or at this value.
             */
            min?: number;
            /**
             * Track is only active when `prop` is below or at this value.
             */
            max?: number;
            /**
             * Track is only active when `prop` was below, and is now at or
             * above this value.
             */
            crossingUp?: number;
            /**
             * Track is only active when `prop` was above, and is now at or
             * below this value.
             */
            crossingDown?: number;
            /**
             * The point property to compare, for example `y` or `x`.
             */
            prop?: string;
        }
        interface ContextOptions {
            /**
             * Set a context track to play periodically every `timeInterval`
             * milliseconds while the sonification is playing.
             *
             * @sample highcharts/demo/plotline-context
             *         Using contexts
             */
            timeInterval?: number;
            /**
             * Set a context track to play periodically every `valueInterval`
             * units of a data property `valueProp` while the sonification is
             * playing.
             *
             * @sample highcharts/demo/plotline-context
             *         Using contexts
             */
            valueInterval?: number;
            /**
             * The point property to play context for when using
             * `valueInterval`.
             *
             * @default "x"
             */
            valueProp?: string;
            /**
             * How to map context events to time when using the
             * `valueInterval` option.
             *
             * @default "linear"
             */
            valueMapFunction?: MapFunctionTypes;
            /**
             * Define a condition for when a track should be active and not.
             */
            activeWhen?: TrackPredicateCallback | ValueConstraints;
        }
        interface SpeechTrackMappingOptions {
            /**
             * Time mapping determines what time each point plays.
             *
             * @default "x"
             */
            time?: MappingParameter;
            /**
             * The text to announce for speech tracks. Can either be a format
             * string or a function.
             *
             * @sample highcharts/sonification/speak-values
             *         Speak values
             */
            text: string | TrackStringCallback;
            /**
             * Milliseconds to wait before playing, comes in addition to the
             * time determined by the `time` mapping.
             */
            playDelay?: MappingParameter;
            /**
             * Speech rate (speed) multiplier.
             *
             * @default 1.3
             */
            rate?: MappingParameter;
            /**
             * Speech pitch (how high/low the voice is) multiplier.
             *
             * @sample highcharts/sonification/speak-values
             *         Speak values
             *
             * @default 1
             */
            pitch?: MappingParameter;
            /**
             * Volume of the speech announcement.
             *
             * @default 0.4
             */
            volume?: MappingParameter;
        }
        interface SpeechTrackOptions extends BaseTrackOptions {
            /**
             * Type of track. Always `"speech"` for speech tracks.
             */
            type: 'speech';
            /**
             * Mapping configuration for the speech/audio parameters.
             */
            mapping?: SpeechTrackMappingOptions;
            /**
             * Name of the voice synthesis to prefer for speech tracks.
             */
            preferredVoice?: string;
            /**
             * The language to speak in for speech tracks, as an IETF BCP 47
             * language tag.
             *
             * @sample maps/demo/audio-map
             *         French language speech
             *
             * @default "en-US"
             */
            language: string;
        }
        interface ChartSonificationEventsOptions {
            /**
             * Called on play.
             */
            onPlay?: ChartCallback;
            /**
             * Called on pause, cancel, or if play is completed.
             */
            onStop?: ChartCallback;
            /**
             * Called when play is completed.
             */
            onEnd?: ChartCallback;
            /**
             * Called on the beginning of playing a series.
             */
            onSeriesStart?: SeriesCallback;
            /**
             * Called when finished playing a series.
             */
            onSeriesEnd?: SeriesCallback;
            /**
             * Called when attempting to play an adjacent point or series, and
             * there is none.
             */
            onBoundaryHit?: BoundaryHitCallback;
            /**
             * Called immediately when a play is requested.
             */
            beforePlay?: ChartCallback;
            /**
             * Called before updating the sonification.
             */
            beforeUpdate?: ChartCallback;
            /**
             * Called after updating the sonification.
             */
            afterUpdate?: ChartCallback;
        }
        interface ChartSonificationOptions {
            /**
             * Enable sonification functionality for the chart.
             *
             * @default true
             */
            enabled: boolean;
            /**
             * The total duration of the sonification, in milliseconds.
             *
             * @default 6000
             */
            duration: number;
            /**
             * The time to wait in milliseconds after each data series when
             * playing the series one after the other.
             *
             * @sample highcharts/sonification/chart-earcon
             *         Notification after series
             *
             * @see [order](#sonification.order)
             *
             * @default 700
             */
            afterSeriesWait: number;
            /**
             * Overall/master volume for the sonification, from 0 to 1.
             *
             * @default 0.7
             */
            masterVolume: number;
            /**
             * What order to play the data series in, either `sequential`
             * where the series play individually one after the other, or
             * `simultaneous` where the series play all at once.
             *
             * @sample highcharts/sonification/chart-simultaneous
             *         Simultaneous sonification
             *
             * @default "sequential"
             */
            order: 'sequential' | 'simultaneous';
            /**
             * Set up event handlers for the sonification.
             */
            events?: ChartSonificationEventsOptions;
            /**
             * Show tooltip as the chart plays.
             *
             * @see [showCrosshair](#sonification.showCrosshair)
             *
             * @default true
             */
            showTooltip: boolean;
            /**
             * Show X and Y axis crosshairs as the chart plays.
             *
             * @see [showTooltip](#sonification.showTooltip)
             * @see [crosshair](#xAxis.crosshair)
             *
             * @default true
             */
            showCrosshair: boolean;
            /**
             * Options for grouping data points together when sonifying.
             */
            pointGrouping: PointGroupingOptions;
            /**
             * Global tracks to add to every series.
             */
            globalTracks?: TrackOptions;
            /**
             * Context tracks to add globally, an array of either instrument
             * tracks, speech tracks, or a mix.
             *
             * @sample highcharts/demo/plotline-context
             *         Using contexts
             */
            globalContextTracks?: ContextTrackOptions;
            /**
             * Default sonification options for all instrument tracks.
             *
             * @sample highcharts/sonification/point-sonify
             *         Sonify points on click
             */
            defaultInstrumentOptions: InstrumentTrackOptions;
            /**
             * Default sonification options for all speech tracks.
             *
             * @sample highcharts/sonification/speak-values
             *         Speak values
             */
            defaultSpeechOptions: SpeechTrackOptions;
            /**
             * How long to wait between each recomputation of the
             * sonification, if the chart updates rapidly. Given in
             * milliseconds.
             *
             * @default 200
             */
            updateInterval: number;
        }
        interface SeriesSonificationOptions {
            /**
             * Context tracks for this series.
             */
            contextTracks?: ContextTrackOptions;
            /**
             * Default options for all this series' instrument tracks.
             */
            defaultInstrumentOptions?: InstrumentTrackOptions;
            /**
             * Default options for all this series' speech tracks.
             */
            defaultSpeechOptions?: SpeechTrackOptions;
            /**
             * Whether or not sonification is enabled for this series.
             */
            enabled?: boolean;
            /**
             * Sonification point grouping options for this series.
             */
            pointGrouping?: PointGroupingOptions;
            /**
             * Tracks for this series.
             */
            tracks?: TrackOptions;
        }
    }
}
declare module '../../Core/Options' {
    interface Options {
        /**
         * Options for configuring sonification and audio charts.
         *
         * @sample  highcharts/demo/all-instruments
         *          All predefined instruments
         * @sample  highcharts/demo/audio-boxplot
         *          Audio boxplots
         * @sample  highcharts/demo/plotline-context
         *          Context tracks
         * @sample  highcharts/demo/sonification-music
         *          Musical chart
         *
         * @since 11.0.0
         * @requires modules/sonification
         */
        sonification?: Sonification.ChartSonificationOptions;
    }
    interface LangOptions {
        /**
         * The text for the MIDI download menu item in the export menu.
         *
         * @default "Download MIDI"
         * @since 11.0.0
         * @requires modules/sonification
         */
        downloadMIDI?: string;
        /**
         * The text for the Play as sound menu item in the export menu.
         *
         * @default "Play as sound"
         * @since 11.0.0
         * @requires modules/sonification
         */
        playAsSound?: string;
    }
}
declare module '../../Core/Series/SeriesOptions' {
    interface SeriesOptions {
        /**
         * Sonification/audio chart options for a series.
         *
         * @since 11.0.0
         * @requires modules/sonification
         */
        sonification?: Sonification.SeriesSonificationOptions;
    }
}
declare const Options: DeepPartial<OptionsType>;
export {};
