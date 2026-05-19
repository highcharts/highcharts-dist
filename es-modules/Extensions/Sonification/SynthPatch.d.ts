declare namespace SynthPatch {
    /**
     * A point in a synth envelope.
     *
     * @requires modules/sonification
     */
    type SynthEnvelopePoint = Record<'t' | 'vol', number>;
    /**
     * A synth envelope defined as an array of time/volume points.
     *
     * @requires modules/sonification
     */
    type SynthEnvelope = Array<SynthEnvelopePoint>;
    /**
     * Oscillator waveform type.
     *
     * @requires modules/sonification
     */
    type OscillatorType = 'sine' | 'square' | 'sawtooth' | 'triangle' | 'whitenoise' | 'pulse';
    /**
     * An EQ filter definition for a bell filter.
     *
     * @requires modules/sonification
     */
    interface EQFilter {
        /**
         * Filter frequency.
         *
         */
        frequency?: number;
        /**
         * Filter gain.
         *
         * @default 0
         *
         */
        gain?: number;
        /**
         * Filter Q.
         *
         * @default 1
         *
         */
        Q?: number;
    }
    /**
     * Configuration for an oscillator for the synth.
     *
     * @requires modules/sonification
     */
    interface OscillatorOptions {
        /**
         * Volume envelope for note attack, specific to this oscillator.
         *
         */
        attackEnvelope?: SynthEnvelope;
        /**
         * Applies a detuning of all frequencies. Set in cents.
         *
         * @default 0
         *
         */
        detune?: number;
        /**
         * A multiplier for the input frequency of the oscillator.
         *
         * @default 1
         *
         */
        freqMultiplier?: number;
        /**
         * Play a fixed frequency for the oscillator - ignoring input
         * frequency.
         *
         */
        fixedFrequency?: number;
        /**
         * Index of another oscillator to use as a frequency modulator.
         *
         */
        fmOscillator?: number;
        /**
         * Highpass filter options for the oscillator.
         *
         */
        highpass?: PassFilter;
        /**
         * Lowpass filter options for the oscillator.
         *
         */
        lowpass?: PassFilter;
        /**
         * Width of the pulse waveform.
         *
         * @default 0.5
         *
         */
        pulseWidth?: number;
        /**
         * Volume envelope for note release, specific to this oscillator.
         *
         */
        releaseEnvelope?: SynthEnvelope;
        /**
         * The type of oscillator.
         *
         */
        type?: OscillatorType;
        /**
         * Index of another oscillator to use as a volume modulator.
         *
         */
        vmOscillator?: number;
        /**
         * A volume modifier for the oscillator.
         *
         * @default 1
         *
         */
        volume?: number;
        /**
         * A tracking multiplier used for frequency dependent volume behavior.
         *
         */
        volumePitchTrackingMultiplier?: number;
    }
    /**
     * An EQ filter definition for a low/highpass filter.
     *
     * @requires modules/sonification
     */
    interface PassFilter {
        /**
         * Filter frequency.
         *
         */
        frequency?: number;
        /**
         * A pitch tracking multiplier similarly to the one for oscillator
         * volume. Affects the filter frequency.
         *
         */
        frequencyPitchTrackingMultiplier?: number;
        /**
         * Filter resonance bump/dip in dB.
         *
         * @default 0
         *
         */
        Q?: number;
    }
    /**
     * A set of options for the SynthPatch class.
     *
     * @requires modules/sonification
     */
    interface SynthPatchOptions {
        /**
         * Master EQ filters for the synth, affecting the overall sound.
         *
         */
        eq?: Array<EQFilter>;
        /**
         * Volume envelope for the overall attack of a note - what happens to
         * the volume when a note first plays. If the volume goes to 0 in the
         * attack envelope, the synth will not be able to play the note
         * continuously/sustained, and the notes will be staccato.
         *
         */
        masterAttackEnvelope?: SynthEnvelope;
        /**
         * Volume envelope for the overall release of a note - what happens to
         * the volume when a note stops playing. If the release envelope starts
         * at a higher volume than the attack envelope ends, the volume will
         * first rise to that volume before falling when releasing a note. If
         * the note is released while the attack envelope is still in effect,
         * the attack envelope is interrupted, and the release envelope plays
         * instead.
         *
         */
        masterReleaseEnvelope?: SynthEnvelope;
        /**
         * Global volume modifier for the synth. Note that if the total volume
         * of all oscillators is too high, the browser's audio engine can
         * distort.
         *
         * @default 1
         *
         */
        masterVolume?: number;
        /**
         * Time in milliseconds to glide between notes. Causes a glissando
         * effect.
         *
         */
        noteGlideDuration?: number;
        /**
         * Array of oscillators to add to the synth.
         *
         */
        oscillators?: Array<OscillatorOptions>;
        /**
         * MIDI instrument ID for the synth. Used with MIDI export of Timelines
         * to have tracks open with a similar instrument loaded when imported
         * into other applications.
         *
         * @default 1
         *
         */
        midiInstrument?: number;
    }
}
/**
 * The SynthPatch class. This class represents an instance and configuration
 * of the built-in Highcharts synthesizer. It can be used to play various
 * generated sounds.
 *
 * @sample highcharts/sonification/manual-using-synth
 *         Using Synth directly to sonify manually
 * @sample highcharts/sonification/custom-instrument
 *         Using custom Synth options with chart
 *
 * @requires modules/sonification
 *
 * @class
 * @name Highcharts.SynthPatch
 *
 * @param {AudioContext} audioContext
 *        The AudioContext to use.
 * @param {Highcharts.SynthPatchOptionsObject} options
 *        Configuration for the synth.
 */
declare class SynthPatch {
    private audioContext;
    private options;
    static stopRampTime: number;
    readonly midiInstrument: number;
    private outputNode;
    private eqNodes;
    private oscillators;
    constructor(audioContext: AudioContext, options: SynthPatch.SynthPatchOptions);
    /**
     * Start the oscillators, but don't output sound.
     * @function Highcharts.SynthPatch#startSilently
     */
    startSilently(): void;
    /**
     * Stop the synth. It can't be started again.
     * @function Highcharts.SynthPatch#stop
     */
    stop(): void;
    /**
     * Mute sound at time (in seconds).
     * Will still run release envelope. Note: If scheduled multiple times in
     * succession, the release envelope will run, and that could make sound.
     * @function Highcharts.SynthPatch#silenceAtTime
     * @param {number} time Time offset from now, in seconds
     */
    silenceAtTime(time: number): void;
    /**
     * Mute sound immediately.
     * @function Highcharts.SynthPatch#mute
     */
    mute(): void;
    /**
     * Play a frequency at time (in seconds).
     * Time denotes when the attack ramp starts. Note duration is given in
     * milliseconds. If note duration is not given, the note plays indefinitely.
     * @function Highcharts.SynthPatch#silenceAtTime
     * @param {number} time Time offset from now, in seconds
     * @param {number} frequency The frequency to play at
     * @param {number|undefined} noteDuration Duration to play, in milliseconds
     */
    playFreqAtTime(time: number, frequency: number, noteDuration?: number): void;
    /**
     * Cancel any scheduled actions
     * @function Highcharts.SynthPatch#cancelScheduled
     */
    cancelScheduled(): void;
    /**
     * Connect the SynthPatch output to an audio node / destination.
     * @function Highcharts.SynthPatch#connect
     * @param {AudioNode} destinationNode The node to connect to.
     * @return {AudioNode} The destination node, to allow chaining.
     */
    connect(destinationNode: AudioNode): AudioNode;
}
export default SynthPatch;
