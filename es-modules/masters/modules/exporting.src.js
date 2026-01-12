// SPDX-License-Identifier: LicenseRef-Highcharts
/**
 * @license Highcharts JS v12.5.0 (2026-01-12)
 * @module highcharts/modules/exporting
 * @requires highcharts
 *
 * Exporting module
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Torstein Honsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */
'use strict';
import Highcharts from '../../Core/Globals.js';
import Exporting from '../../Extensions/Exporting/Exporting.js';
import HttpUtilities from '../../Core/HttpUtilities.js';
const G = Highcharts;
// Class
G.Exporting = Exporting;
// Compatibility
G.HttpUtilities = G.HttpUtilities || HttpUtilities;
G.ajax = G.HttpUtilities.ajax;
G.getJSON = G.HttpUtilities.getJSON;
G.post = G.HttpUtilities.post;
// Compose
Exporting.compose(G.Chart, G.Renderer);
export default Highcharts;
