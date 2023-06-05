/* *
 * LimaLabs provider, used for tile map services
 * */
'use strict';
class LimaLabs {
    constructor() {
        this.themes = {
            Standard: {
                url: 'https://cdn.lima-labs.com/{zoom}/{x}/{y}.png?api={apikey}',
                minZoom: 0,
                maxZoom: 20
            }
        };
        this.initialProjectionName = 'WebMercator';
        this.defaultCredits = 'Map data \u00a92023 <a href="https://maps.lima-labs.com/">LimaLabs</a>';
        this.requiresApiKey = true;
    }
}
export default LimaLabs;
