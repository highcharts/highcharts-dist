/*!*
 *
 *  Copyright (c) Highsoft AS. All rights reserved.
 *
 *!*/
import * as globals from "../globals.src";
import * as _Highcharts from "../highcharts.src";
/**
 * Adds the module to the imported Highcharts namespace.
 *
 * @param highcharts
 *        The imported Highcharts namespace to extend.
 */
export function factory(highcharts: typeof Highcharts): void;
declare module "../highcharts.src" {
    /**
     * Callback function for sonification events on chart.
     *
     * @param e
     *        Sonification chart event context
     */
    type SonificationChartEventCallback = (e: SonificationChartEventCallbackContext) => void;
    /**
     * Callback function for sonification events on series.
     *
     * @param e
     *        Sonification series event context
     */
    type SonificationSeriesEventCallback = (e: SonificationSeriesEventCallbackContext) => void;
    type SonificationSynthPreset = ("basic1"|"basic2"|"chop"|"chord"|"flute"|"kick"|"lead"|"noise"|"piano"|"plucked"|"sawsynth"|"sawtooth"|"saxophone"|"shaker"|"shortnote"|"sine"|"square"|"step"|
"triangle"|"trumpet"|"vibraphone"|"wind"|"wobble"|"filteredNoise"|"sineGlide");
    /**
     * Filter callback for filtering timeline events on a SonificationTimeline.
     *
     * @param e
     *        TimelineEvent being filtered
     *
     * @param ix
     *        Index of TimelineEvent in current event array
     *
     * @param arr
     *        The current event array
     *
     * @return The function should return true if the TimelineEvent should be
     *         included, false otherwise.
     */
    type SonificationTimelineFilterCallback = (e: SonificationTimelineEvent, ix: number, arr: Array<SonificationTimelineEvent>) => boolean;
    interface Chart {
        /**
         * Sonification capabilities for the chart.
         */
        sonification?: Sonification;
        /**
         * Play a sonification of a chart.
         *
         * @param onEnd
         *        Callback to call after play completed
         */
        sonify(onEnd?: SonificationChartEventCallback): void;
        /**
         * Play/pause sonification of a chart.
         *
         * @param reset
         *        Reset the playing cursor after play completed. Defaults to
         *        `true`.
         *
         * @param onEnd
         *        Callback to call after play completed
         */
        toggleSonify(reset?: boolean, onEnd?: SonificationChartEventCallback): void;
    }
    interface Point {
        /**
         * Play a sonification of a point.
         *
         * @param onEnd
         *        Callback to call after play completed
         */
        sonify(onEnd?: SonificationChartEventCallback): void;
    }
    interface Series {
        /**
         * Play a sonification of a series.
         *
         * @param onEnd
         *        Callback to call after play completed
         */
        sonify(onEnd?: SonificationChartEventCallback): void;
    }
    /**
     * Event context object sent to sonification chart events.
     */
    interface SonificationChartEventCallbackContext {
        /**
         * The relevant chart
         */
        chart?: Chart;
        /**
         * The points that were played, if any
         */
        pointsPlayed?: Array<Point>;
        /**
         * The playing timeline object with advanced and internal content
         */
        timeline?: object;
    }
    /**
     * Collection of Sonification classes and objects.
     */
    interface SonificationGlobalObject {
        /**
         * SynthPatch presets
         */
        InstrumentPresets?: Record<SonificationSynthPreset, SynthPatchOptionsObject>;
        /**
         * Musical scale presets
         */
        Scales?: SonificationScalePresetsObject;
        /**
         * SonificationInstrument class
         */
        SonificationInstrument?: SonificationInstrument;
        /**
         * SonificationSpeaker class
         */
        SonificationSpeaker?: SonificationSpeaker;
        /**
         * SynthPatch class
         */
        SynthPatch?: SynthPatch;
    }
    /**
     * Capabilities configuration for a SonificationInstrument.
     */
    interface SonificationInstrumentCapabilitiesOptionsObject {
        /**
         * Whether or not instrument should be able to use filter effects.
         * Defaults to `false`.
         */
        filters?: boolean;
        /**
         * Whether or not instrument should be able to pan. Defaults to `true`.
         */
        pan?: boolean;
        /**
         * Whether or not instrument should be able to use tremolo effects.
         * Defaults to `false`.
         */
        tremolo?: boolean;
    }
    /**
     * Configuration for a SonificationInstrument.
     */
    interface SonificationInstrumentOptionsObject {
        /**
         * Define additional capabilities for the instrument, such as panning,
         * filters, and tremolo effects.
         */
        capabilities?: SonificationInstrumentCapabilitiesOptionsObject;
        /**
         * A track name to use for this instrument in MIDI export.
         */
        midiTrackName?: string;
        /**
         * The synth configuration for the instrument. Can be either a string,
         * referencing the instrument presets, or an actual SynthPatch
         * configuration.
         */
        synthPatch: (SonificationSynthPreset|SynthPatchOptionsObject);
    }
    /**
     * Options for a scheduled event for a SonificationInstrument
     */
    interface SonificationInstrumentScheduledEventOptionsObject {
        /**
         * Note frequency in Hertz. Overrides note, if both are given.
         */
        frequency?: number;
        /**
         * Frequency of the highpass filter, in Hertz.
         */
        highpassFreq?: number;
        /**
         * Resonance of the highpass filter, in dB. Can be negative for a dip,
         * or positive for a bump.
         */
        highpassResonance?: number;
        /**
         * Frequency of the lowpass filter, in Hertz.
         */
        lowpassFreq?: number;
        /**
         * Resonance of the lowpass filter, in dB. Can be negative for a dip, or
         * positive for a bump.
         */
        lowpassResonance?: number;
        /**
         * Number of semitones from c0, or a note string - such as "c4" or
         * "F#6".
         */
        note?: (number|string);
        /**
         * Duration to play the note in milliseconds. If not given, the note
         * keeps playing indefinitely
         */
        noteDuration?: number;
        /**
         * Stereo panning value, from -1 (left) to 1 (right).
         */
        pan?: number;
        /**
         * Depth/intensity of the tremolo effect - which is a periodic change in
         * volume. From 0 to 1.
         */
        tremoloDepth?: number;
        /**
         * Speed of the tremolo effect, from 0 to 1.
         */
        tremoloSpeed?: number;
        /**
         * Volume of the instrument, from 0 to 1. Can be set independent of the
         * master/overall volume.
         */
        volume?: number;
    }
    /**
     * Preset scales for pitch mapping.
     */
    interface SonificationScalePresetsObject {
        /**
         * Dorian scale
         */
        dorian: Array<number>;
        /**
         * Harmonic minor scale
         */
        harmonicMinor: Array<number>;
        /**
         * Lydian scale
         */
        lydian: Array<number>;
        /**
         * Major (ionian) scale
         */
        major: Array<number>;
        /**
         * Major pentatonic scale
         */
        majorPentatonic: Array<number>;
        /**
         * Minor scale (aeolian)
         */
        minor: Array<number>;
        /**
         * Minor pentatonic scale
         */
        minorPentatonic: Array<number>;
        /**
         * Mixolydian scale
         */
        mixolydian: Array<number>;
        /**
         * Phrygian scale
         */
        phrygian: Array<number>;
    }
    /**
     * Event context object sent to sonification series events.
     */
    interface SonificationSeriesEventCallbackContext {
        /**
         * The relevant series
         */
        series?: Series;
        /**
         * The playing timeline object with advanced and internal content
         */
        timeline?: object;
    }
    /**
     * Configuration for a SonificationSpeaker.
     */
    interface SonificationSpeakerOptionsObject {
        /**
         * The language of the voice synthesis. Defaults to `"en-US"`.
         */
        language?: string;
        /**
         * Name of the voice synthesis to use. If not found, reverts to the
         * default voice for the language chosen.
         */
        name?: string;
        /**
         * The pitch modifier of the voice. Defaults to `1`. Set higher for a
         * higher voice pitch.
         */
        pitch?: number;
        /**
         * The speech rate modifier. Defaults to `1`.
         */
        rate?: number;
        /**
         * The speech volume, from 0 to 1. Defaults to `1`.
         */
        volume?: number;
    }
    /**
     * A TimelineEvent object represents a scheduled audio event to play for a
     * SonificationTimeline.
     */
    interface SonificationTimelineEvent {
        /**
         * Callback to call when playing the event.
         */
        callback?: Function;
        /**
         * Options for an instrument event to be played.
         */
        instrumentEventOptions?: SonificationInstrumentScheduledEventOptionsObject;
        /**
         * The message to speak for speech events.
         */
        message?: string;
        /**
         * A reference to a data point related to the TimelineEvent. Populated
         * when sonifying points.
         */
        relatedPoint?: Point;
        /**
         * Options for a speech event to be played.
         */
        speechOptions?: SonificationSpeakerOptionsObject;
        /**
         * Time is given in milliseconds, where 0 is now.
         */
        time: number;
    }
    /**
     * The Sonification class. This class represents a chart's sonification
     * capabilities. A chart automatically gets an instance of this class when
     * applicable.
     */
    class Sonification {
        /**
         * The Sonification class. This class represents a chart's sonification
         * capabilities. A chart automatically gets an instance of this class
         * when applicable.
         *
         * @param chart
         *        The chart to tie the sonification to
         */
        constructor(chart: Chart);
        /**
         * Cancel current playing audio and reset the timeline.
         */
        cancel(): void;
        /**
         * Start download of a MIDI file export of the timeline.
         */
        downloadMIDI(): void;
        /**
         * Get last played point
         *
         * @return The point, or null if none
         */
        getLastPlayedPoint(): (Point|null);
        /**
         * Check if sonification is playing currently
         *
         * @return `true` if currently playing, `false` if not
         */
        isPlaying(): boolean;
        /**
         * Play point(s)/event(s) adjacent to current timeline cursor location.
         *
         * @param next
         *        Pass `true` to play next point, `false` for previous
         *
         * @param onEnd
         *        Callback to call after play completed
         *
         * @param eventFilter
         *        Filter to apply to the events before finding adjacent to play
         */
        playAdjacent(next: number, onEnd?: SonificationChartEventCallback, eventFilter?: SonificationTimelineFilterCallback): void;
        /**
         * Play next/previous series, picking the point closest to a prop value
         * from last played point. By default picks the point in the adjacent
         * series with the closest x value as the last played point.
         *
         * @param next
         *        Pass `true` to play next series, `false` for previous
         *
         * @param prop
         *        Prop to find closest value of, defaults to `x`.
         *
         * @param onEnd
         *        Callback to call after play completed
         *
         * @return The played series, or `null` if none found
         */
        playAdjacentSeries(next: number, prop?: string, onEnd?: SonificationChartEventCallback): (Series|null);
        /**
         * Play point(s)/event(s) closest to a prop relative to a reference
         * value.
         *
         * @param prop
         *        Prop to compare.
         *
         * @param targetValue
         *        Target value to find closest value of.
         *
         * @param targetFilter
         *        Filter to apply to the events before finding closest point(s)
         *
         * @param onEnd
         *        Callback to call after play completed
         */
        playClosestToProp(prop: string, targetValue: number, targetFilter?: SonificationTimelineFilterCallback, onEnd?: SonificationChartEventCallback): void;
        /**
         * Play a note with a specific instrument, and optionally a time offset.
         *
         * @param instrument
         *        The instrument to play. Can be either a string referencing the
         *        instrument presets, or an actual SynthPatch configuration.
         *
         * @param options
         *        Configuration for the instrument event to play.
         *
         * @param delayMs
         *        Time offset from now, in milliseconds. Defaults to 0.
         */
        playNote(instrument: (SonificationSynthPreset|SynthPatchOptionsObject), options: SonificationInstrumentScheduledEventOptionsObject, delayMs?: number): void;
        /**
         * Divide timeline into 100 parts of equal time, and play one of them.
         * Can be used for scrubbing navigation.
         *
         * @param segment
         *        The segment to play, from 0 to 100
         *
         * @param onEnd
         *        Callback to call after play completed
         */
        playSegment(segment: number, onEnd?: SonificationChartEventCallback): void;
        /**
         * Set the audio destination node to something other than the default
         * output. This allows for inserting custom WebAudio chains after the
         * sonification.
         *
         * @param audioDestination
         *        The destination node
         */
        setAudioDestination(audioDestination: AudioDestinationNode): void;
        /**
         * Speak a text string, optionally with a custom speaker configuration
         *
         * @param text
         *        Text to announce
         *
         * @param speakerOptions
         *        Options for the announcement
         *
         * @param delayMs
         *        Time offset from now, in milliseconds. Defaults to 0.
         */
        speak(text: string, speakerOptions?: SonificationSpeakerOptionsObject, delayMs?: number): void;
    }
    /**
     * The SonificationInstrument class. This class represents an instrument
     * with mapping capabilities. The instrument wraps a SynthPatch object, and
     * extends it with functionality such as panning, tremolo, and global
     * low/highpass filters.
     */
    class SonificationInstrument {
        /**
         * The SonificationInstrument class. This class represents an instrument
         * with mapping capabilities. The instrument wraps a SynthPatch object,
         * and extends it with functionality such as panning, tremolo, and
         * global low/highpass filters.
         *
         * @param audioContext
         *        The AudioContext to use.
         *
         * @param outputNode
         *        The destination node to connect to.
         *
         * @param options
         *        Configuration for the instrument.
         */
        constructor(audioContext: AudioContext, outputNode: AudioNode, options: SonificationInstrumentOptionsObject);
        /**
         * Cancel currently playing sounds and any scheduled actions.
         */
        cancel(): void;
        /**
         * Stop instrument and destroy it, cleaning up used resources.
         */
        destroy(): void;
        /**
         * Convert a note value to a frequency.
         *
         * @param note
         *        Note to convert. Can be a string 'c0' to 'b8' or a number of
         *        semitones from c0.
         *
         * @return The converted frequency
         */
        musicalNoteToFrequency(note: (number|string)): number;
        /**
         * Schedule an instrument event at a given time offset, whether it is
         * playing a note or changing the parameters of the instrument.
         *
         * @param time
         *        Time is given in seconds, where 0 is now.
         *
         * @param params
         *        Parameters for the instrument event.
         */
        scheduleEventAtTime(time: number, params: SonificationInstrumentScheduledEventOptionsObject): void;
        /**
         * Set the overall volume.
         *
         * @param volume
         *        The volume to set, from 0 to 1.
         */
        setMasterVolume(volume: number): void;
        /**
         * Schedule silencing the instrument at a given time offset.
         *
         * @param time
         *        Time is given in seconds, where 0 is now.
         */
        silenceAtTime(time: number): void;
    }
    /**
     * The SonificationSpeaker class. This class represents an announcer using
     * speech synthesis. It allows for scheduling speech announcements, as well
     * as speech parameter changes - including rate, volume and pitch.
     */
    class SonificationSpeaker {
        /**
         * The SonificationSpeaker class. This class represents an announcer
         * using speech synthesis. It allows for scheduling speech
         * announcements, as well as speech parameter changes - including rate,
         * volume and pitch.
         *
         * @param options
         *        Configuration for the speaker
         */
        constructor(options: SonificationSpeakerOptionsObject);
        /**
         * Clear scheduled announcements, and stop current speech.
         */
        cancel(): void;
        /**
         * Say a message using the speaker voice. Interrupts other currently
         * speaking announcements from this speaker.
         *
         * @param message
         *        The message to speak.
         *
         * @param options
         *        Optionally override speaker configuration.
         */
        say(message: string, options?: SonificationSpeakerOptionsObject): void;
        /**
         * Schedule a message using the speaker voice.
         *
         * @param time
         *        The time offset to speak at, in milliseconds from now.
         *
         * @param message
         *        The message to speak.
         *
         * @param options
         *        Optionally override speaker configuration.
         */
        sayAtTime(time: number, message: string, options?: SonificationSpeakerOptionsObject): void;
        /**
         * Set speaker overall/master volume modifier. This affects all
         * announcements, and applies in addition to the individual announcement
         * volume.
         *
         * @param vol
         *        Volume from 0 to 1.
         */
        setMasterVolume(vol: number): void;
    }
    /**
     * The SynthPatch class. This class represents an instance and configuration
     * of the built-in Highcharts synthesizer. It can be used to play various
     * generated sounds.
     */
    class SynthPatch {
        /**
         * The SynthPatch class. This class represents an instance and
         * configuration of the built-in Highcharts synthesizer. It can be used
         * to play various generated sounds.
         *
         * @param audioContext
         *        The AudioContext to use.
         *
         * @param options
         *        Configuration for the synth.
         */
        constructor(audioContext: AudioContext, options: SynthPatchOptionsObject);
        /**
         * Cancel any scheduled actions
         */
        cancelScheduled(): void;
        /**
         * Connect the SynthPatch output to an audio node / destination.
         *
         * @param destinationNode
         *        The node to connect to.
         *
         * @return The destination node, to allow chaining.
         */
        connect(destinationNode: AudioNode): AudioNode;
        /**
         * Mute sound immediately.
         */
        mute(): void;
        /**
         * Mute sound at time (in seconds). Will still run release envelope.
         * Note: If scheduled multiple times in succession, the release envelope
         * will run, and that could make sound.
         *
         * @param time
         *        Time offset from now, in seconds
         */
        silenceAtTime(time: number): void;
        /**
         * Play a frequency at time (in seconds). Time denotes when the attack
         * ramp starts. Note duration is given in milliseconds. If note duration
         * is not given, the note plays indefinitely.
         *
         * @param time
         *        Time offset from now, in seconds
         *
         * @param frequency
         *        The frequency to play at
         *
         * @param noteDuration
         *        Duration to play, in milliseconds
         */
        silenceAtTime(time: number, frequency: number, noteDuration: (number|undefined)): void;
        /**
         * Start the oscillators, but don't output sound.
         */
        startSilently(): void;
        /**
         * Stop the synth. It can't be started again.
         */
        stop(): void;
    }
    /**
     * Global Sonification classes and objects.
     */
    let sonification: SonificationGlobalObject;
}
export default factory;
export let Highcharts: typeof _Highcharts;
