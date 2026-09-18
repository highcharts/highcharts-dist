!/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(e._Highcharts.SeriesRegistry,e._Highcharts):"function"==typeof define&&define.amd?define("highcharts/indicators/cci",["highcharts/highcharts"],function(e){return t(e.SeriesRegistry,e)}):"object"==typeof exports?exports["highcharts/indicators/cci"]=t(e._Highcharts.SeriesRegistry,e._Highcharts):e.Highcharts=t(e.Highcharts.SeriesRegistry,e.Highcharts)}("u"<typeof window?this:window,(e,t)=>(()=>{"use strict";var r={512(t){t.exports=e},944(e){e.exports=t}};let s={};function i(e){let t=s[e];if(void 0!==t)return t.exports;let o=s[e]={exports:{}};return r[e](o,o.exports,i),o.exports}i.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let o={};i.d(o,{default:()=>l});var a=i(944),n=i.n(a),h=i(512),c=i.n(h);let{sma:u}=c().seriesTypes;class p extends u{getValues(e,t){let r=t.period,s=e.xData,i=e.yData,o=i?i.length:0,n=[],h=[],c=[],u=[],p,l,d=[],f,g=1,y,x,b,m;if(!(s.length<=r)&&(0,a.isArray)(i[0])&&4===i[0].length){for(;g<r;)l=i[g-1],n.push((l[1]+l[2]+l[3])/3),g++;for(m=r;m<=o;m++)x=((l=i[m-1])[1]+l[2]+l[3])/3,f=n.push(x),y=(d=n.slice(f-r)).reduce(function(e,t){return e+t},0)/r,b=function(e,t){let r=e.length,s=0,i;for(i=0;i<r;i++)s+=Math.abs(t-e[i]);return s}(d,y)/r,p=(x-y)/(.015*b),h.push([s[m-1],p]),c.push(s[m-1]),u.push(p);return{values:h,xData:c,yData:u}}}}p.defaultOptions=(0,a.merge)(u.defaultOptions,{params:{index:void 0}}),c().registerSeriesType("cci",p);let l=n();return o.default})());