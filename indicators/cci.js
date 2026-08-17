!/**
 * Highstock JS v13.0.1 (2026-08-17)
 * @module highcharts/indicators/cci
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts,e._Highcharts.SeriesRegistry):"function"==typeof define&&define.amd?define("highcharts/indicators/cci",["highcharts/highcharts"],function(e){return t(e,e.SeriesRegistry)}):"object"==typeof exports?exports["highcharts/indicators/cci"]=t(e._Highcharts,e._Highcharts.SeriesRegistry):e.Highcharts=t(e.Highcharts,e.Highcharts.SeriesRegistry)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(e){e.exports=t},944(t){t.exports=e}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],o=t[r++];i.o(e,s)?0===o&&r++:0===o?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:o})}else for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>p});var a=i(944),n=i.n(a),h=i(512),c=i.n(h);let{sma:u}=c().seriesTypes;class l extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,n=[],h=[],c=[],u=[],l,p,f=[],d,g=1,y,x,b,m;if(!(s.length<=r)&&(0,a.isArray)(i[0])&&4===i[0].length){for(;g<r;)p=i[g-1],n.push((p[1]+p[2]+p[3])/3),g++;for(m=r;m<=o;m++)x=((p=i[m-1])[1]+p[2]+p[3])/3,d=n.push(x),y=(f=n.slice(d-r)).reduce(function(e,t){return e+t},0)/r,b=function(e,t){let r=e.length,s=0,i;for(i=0;i<r;i++)s+=Math.abs(t-e[i]);return s}(f,y)/r,l=(x-y)/(.015*b),h.push([s[m-1],l]),c.push(s[m-1]),u.push(l);return{values:h,xData:c,yData:u}}}}l.defaultOptions=(0,a.merge)(u.defaultOptions,{params:{index:void 0}}),c().registerSeriesType("cci",l);let p=n();return o.default})());