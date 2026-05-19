declare global {
    namespace Sonification {
        /**
         * Preset scales for pitch mapping.
         * @requires modules/sonification
         * @interface Highcharts.SonificationScalePresetsObject
         */
        interface ScalePresetsObject {
            /**
             * Minor scale (aeolian)
             * @name Highcharts.SonificationScalePresetsObject#minor
             * @type {Array<number>}
             */
            minor: number[];
            /**
             * Dorian scale
             * @name Highcharts.SonificationScalePresetsObject#dorian
             * @type {Array<number>}
             */
            dorian: number[];
            /**
             * Harmonic minor scale
             * @name Highcharts.SonificationScalePresetsObject#harmonicMinor
             * @type {Array<number>}
             */
            harmonicMinor: number[];
            /**
             * Phrygian scale
             * @name Highcharts.SonificationScalePresetsObject#phrygian
             * @type {Array<number>}
             */
            phrygian: number[];
            /**
             * Major (ionian) scale
             * @name Highcharts.SonificationScalePresetsObject#major
             * @type {Array<number>}
             */
            major: number[];
            /**
             * Lydian scale
             * @name Highcharts.SonificationScalePresetsObject#lydian
             * @type {Array<number>}
             */
            lydian: number[];
            /**
             * Mixolydian scale
             * @name Highcharts.SonificationScalePresetsObject#mixolydian
             * @type {Array<number>}
             */
            mixolydian: number[];
            /**
             * Major pentatonic scale
             * @name Highcharts.SonificationScalePresetsObject#majorPentatonic
             * @type {Array<number>}
             */
            majorPentatonic: number[];
            /**
             * Minor pentatonic scale
             * @name Highcharts.SonificationScalePresetsObject#minorPentatonic
             * @type {Array<number>}
             */
            minorPentatonic: number[];
        }
    }
}
declare const Scales: Sonification.ScalePresetsObject;
export default Scales;
