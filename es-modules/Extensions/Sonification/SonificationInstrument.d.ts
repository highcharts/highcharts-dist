import SynthPatch from './SynthPatch.js';
import InstrumentPresets from './InstrumentPresets.js';
interface SonificationInstrumentCapabilitiesOptions {
    filters?: boolean;
    tremolo?: boolean;
    pan: boolean;
}
interface SonificationInstrumentOptions {
    synthPatch: keyof typeof InstrumentPresets | SynthPatch.SynthPatchOptions;
    capabilities?: SonificationInstrumentCapabilitiesOptions;
    midiTrackName?: string;
}
declare namespace SonificationInstrument {
    interface ScheduledEventOptions {
        note?: number | string;
        frequency?: number;
        noteDuration?: number;
        tremoloDepth?: number;
        tremoloSpeed?: number;
        pan?: number;
        volume?: number;
        lowpassFreq?: number;
        lowpassResonance?: number;
        highpassFreq?: number;
        highpassResonance?: number;
    }
}
/**
 * The SonificationInstrument class. This class represents an instrument with
 * mapping capabilities. The instrument wraps a SynthPatch object, and extends
 * it with functionality such as panning, tremolo, and global low/highpass
 * filters.
 *
 * @sample highcharts/sonification/instrument-raw
 *         Using SonificationInstrument directly, with no chart.
 *
 * @requires modules/sonification
 *
 * @class
 * @name Highcharts.SonificationInstrument
 *
 * @param {AudioContext} audioContext
 *        The AudioContext to use.
 * @param {AudioNode} outputNode
 *        The destination node to connect to.
 * @param {Highcharts.SonificationInstrumentOptionsObject} options
 *        Configuration for the instrument.
 */
declare class SonificationInstrument {
    private audioContext;
    constructor(audioContext: AudioContext, outputNode: AudioNode, options: SonificationInstrumentOptions);
    /**
     * Set the overall volume.
     * @function Highcharts.SonificationInstrument#setMasterVolume
     * @param {number} volume The volume to set, from 0 to 1.
     */
    setMasterVolume(volume: number): void;
    /**
     * Schedule an instrument event at a given time offset, whether it is
     * playing a note or changing the parameters of the instrument.
     * @function Highcharts.SonificationInstrument#scheduleEventAtTime
     * @param {number} time Time is given in seconds, where 0 is now.
     * @param {Highcharts.SonificationInstrumentScheduledEventOptionsObject} params
     * Parameters for the instrument event.
     */
    scheduleEventAtTime(time: number, params: SonificationInstrument.ScheduledEventOptions): void;
    /**
     * Schedule silencing the instrument at a given time offset.
     * @function Highcharts.SonificationInstrument#silenceAtTime
     * @param {number} time Time is given in seconds, where 0 is now.
     */
    silenceAtTime(time: number): void;
    /**
     * Cancel currently playing sounds and any scheduled actions.
     * @function Highcharts.SonificationInstrument#cancel
     */
    cancel(): void;
    /**
     * Stop instrument and destroy it, cleaning up used resources.
     * @function Highcharts.SonificationInstrument#destroy
     */
    destroy(): void;
    /**
     * Convert a note value to a frequency.
     * @static
     * @function Highcharts.SonificationInstrument#musicalNoteToFrequency
     * @param {string|number} note
     * Note to convert. Can be a string 'c0' to 'b8' or a number of semitones
     * from c0.
     * @return {number} The converted frequency
     */
    static musicalNoteToFrequency(note: string | number): number;
}
export default SonificationInstrument;
