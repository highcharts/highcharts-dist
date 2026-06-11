// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/sonification
 * @requires highcharts
 *
 * Sonification module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Øystein Moseng
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Sonification from '../../Extensions/Sonification/Sonification.js';
import SynthPatch from '../../Extensions/Sonification/SynthPatch.js';
import InstrumentPresets from '../../Extensions/Sonification/InstrumentPresets.js';
import Scales from '../../Extensions/Sonification/Scales.js';
import SonificationInstrument from '../../Extensions/Sonification/SonificationInstrument.js';
import SonificationSpeaker from '../../Extensions/Sonification/SonificationSpeaker.js';
import SonificationTimeline from '../../Extensions/Sonification/SonificationTimeline.js';
const G = Highcharts;
// Global objects
G.sonification = {
    InstrumentPresets,
    Scales,
    SynthPatch,
    SonificationInstrument,
    SonificationSpeaker,
    SonificationTimeline,
    Sonification
};
Sonification.compose(G.Chart, G.Series, G.Point);
export default Highcharts;
