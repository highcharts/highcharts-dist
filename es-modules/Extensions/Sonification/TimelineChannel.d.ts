import type Point from '../../Core/Series/Point.js';
import type SonificationSpeaker from './SonificationSpeaker';
import SonificationInstrument from './SonificationInstrument.js';
declare global {
    namespace Sonification {
        /**
         * A TimelineEvent object represents a scheduled audio event to play for
         * a SonificationTimeline.
         * @requires modules/sonification
         * @interface Highcharts.SonificationTimelineEvent
         */
        interface TimelineEvent {
            /**
             * Time is given in milliseconds, where 0 is now.
             * @name Highcharts.SonificationTimelineEvent#time
             * @type {number}
             */
            time: number;
            /**
             * A reference to a data point related to the TimelineEvent.
             * Populated when sonifying points.
             * @name Highcharts.SonificationTimelineEvent#relatedPoint
             * @type {Highcharts.Point|undefined}
             */
            relatedPoint?: Point;
            /**
             * Options for an instrument event to be played.
             * @name Highcharts.SonificationTimelineEvent#instrumentEventOptions
             * @type {Highcharts.SonificationInstrumentScheduledEventOptionsObject|undefined}
             */
            instrumentEventOptions?: SonificationInstrument.ScheduledEventOptions;
            /**
             * Options for a speech event to be played.
             * @name Highcharts.SonificationTimelineEvent#speechOptions
             * @type {Highcharts.SonificationSpeakerOptionsObject|undefined}
             */
            speechOptions?: SonificationSpeaker.SpeakerOptions;
            /**
             * The message to speak for speech events.
             * @name Highcharts.SonificationTimelineEvent#message
             * @type {string|undefined}
             */
            message?: string;
            /**
             * Callback to call when playing the event.
             * @name Highcharts.SonificationTimelineEvent#callback
             * @type {Function|undefined}
             */
            callback?: Function;
        }
    }
}
