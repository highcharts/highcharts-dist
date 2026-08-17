/**
 * Highstock JS v13.0.1 (2026-08-17)
 * @module highcharts/indicators/disparity-index
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highstock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let a={};a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var i=t[r++],s=t[r++];a.o(e,i)?0===s&&r++:0===s?Object.defineProperty(e,i,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,i,{enumerable:!0,get:s})}else for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a);let t=e.default;var r=a.n(t);let i=e.default.SeriesRegistry;var s=a.n(i);let{sma:n}=s().seriesTypes;class l extends n{init(){let e=arguments,a=e[1].params,t=a&&a.average?a.average:void 0;this.averageIndicator=s().seriesTypes[t]||n,this.averageIndicator.prototype.init.apply(this,e)}calculateDisparityIndex(e,a){return(0,t.correctFloat)(e-a)/a*100}getValues(e,a){let r=a.index,i=e.xData,s=e.yData,n=s?s.length:0,l=[],o=[],p=[],d=this.averageIndicator,y=(0,t.isArray)(s[0]),u=d.prototype.getValues(e,a),g=u.yData,c=i.indexOf(u.xData[0]);if(g&&0!==g.length&&(0,t.defined)(r)&&!(s.length<=c)){for(let e=c;e<n;e++){let a=this.calculateDisparityIndex(y?s[e][r]:s[e],g[e-c]);l.push([i[e],a]),o.push(i[e]),p.push(a)}return{values:l,xData:o,yData:p}}}}l.defaultOptions=(0,t.merge)(n.defaultOptions,{params:{average:"sma",index:3},marker:{enabled:!1},dataGrouping:{approximation:"averages"}}),(0,t.extend)(l.prototype,{nameBase:"Disparity Index",nameComponents:["period","average"]}),s().registerSeriesType("disparityindex",l);let o=r();export{o as default};