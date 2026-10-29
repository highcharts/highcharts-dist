!/**
 * Highstock JS v13.1.1-modified (2026-10-29)
 * @module highcharts/indicators/trendline
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/trendline",["highcharts/highcharts"],function(e){return t(e.Series.types.sma,e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/trendline"]=t(e._Highcharts.Series.types.sma,e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.Series.types.sma,e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t,r)=>(()=>{"use strict";var s={80(t){t.exports=e},512(e){e.exports=t},944(e){e.exports=r}};let i={};function n(e){let t=i[e];if(void 0!==t)return t.exports;let r=i[e]={exports:{}};return s[e](r,r.exports,n),r.exports}n.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};n.d(o,{default:()=>g});var a=n(944),h=n.n(a),l=n(80),p=n.n(l),d=n(512),c=n.n(d);class u extends p(){constructor(){super(...arguments),this.updateAllPoints=!0}getValues(e,t){let r=e.xData,s=e.yData,i=[],n=[],o=[],h=[],l=t.index,p=0,d=0,c=0,u=0,g=0;for(let e=0;e<r.length;e++)(0===e||r[e]!==r[e-1])&&g++,i.push(g);for(let e=0;e<i.length;e++)c+=i[e],u+=(0,a.isArray)(s[e])?s[e][l]:s[e];let f=c/i.length,y=u/s.length;for(let e=0;e<i.length;e++){let t=(0,a.isArray)(s[e])?s[e][l]:s[e];p+=(i[e]-f)*(t-y),d+=Math.pow(i[e]-f,2)}for(let e=0;e<i.length;e++){if(r[e]===o[o.length-1])continue;let t=r[e],s=y+p/d*(i[e]-f);n.push([t,s]),o.push(t),h.push(s)}return{xData:o,yData:h,values:n}}}u.defaultOptions=(0,a.merge)(p().defaultOptions,{params:{period:void 0,index:3}}),(0,a.extend)(u.prototype,{nameBase:"Trendline",nameComponents:void 0}),c().registerSeriesType("trendline",u);let g=h();return o.default})());