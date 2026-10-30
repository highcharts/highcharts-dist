/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/disparity-index
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Indicator series type for Highstock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafał Sebestjański
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as a from"./indicators.js";let t={};t.n=e=>{let a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a:a}),a},t.d=(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a);let r=e.default;var s=t.n(r);let i=a.default.Series.types.sma;var n=t.n(i);let o=e.default.SeriesRegistry;var l=t.n(o);class p extends n(){init(){let e=arguments,a=e[1].params,t=a&&a.average?a.average:void 0;this.averageIndicator=l().seriesTypes[t]||n(),this.averageIndicator.prototype.init.apply(this,e)}calculateDisparityIndex(e,a){return(0,r.correctFloat)(e-a)/a*100}getValues(e,a){let t=a.index,s=e.xData,i=e.yData,n=i?i.length:0,o=[],l=[],p=[],d=this.averageIndicator,u=(0,r.isArray)(i[0]),c=d.prototype.getValues(e,a),y=c.yData,g=s.indexOf(c.xData[0]);if(y&&0!==y.length&&(0,r.defined)(t)&&!(i.length<=g)){for(let e=g;e<n;e++){let a=this.calculateDisparityIndex(u?i[e][t]:i[e],y[e-g]);o.push([s[e],a]),l.push(s[e]),p.push(a)}return{values:o,xData:l,yData:p}}}}p.defaultOptions=(0,r.merge)(n().defaultOptions,{params:{average:"sma",index:3},marker:{enabled:!1},dataGrouping:{approximation:"averages"}}),(0,r.extend)(p.prototype,{nameBase:"Disparity Index",nameComponents:["period","average"]}),l().registerSeriesType("disparityindex",p);let d=s();export{d as default};