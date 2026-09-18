/**
 * Highstock JS v13.1.0 (2026-09-18)
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
 */import*as e from"../highcharts.js";let a={};a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a);let t=e.default;var r=a.n(t);let i=e.default.SeriesRegistry;var s=a.n(i);let{sma:n}=s().seriesTypes;class l extends n{init(){let e=arguments,a=e[1].params,t=a&&a.average?a.average:void 0;this.averageIndicator=s().seriesTypes[t]||n,this.averageIndicator.prototype.init.apply(this,e)}calculateDisparityIndex(e,a){return(0,t.correctFloat)(e-a)/a*100}getValues(e,a){let r=a.index,i=e.xData,s=e.yData,n=s?s.length:0,l=[],p=[],o=[],d=this.averageIndicator,u=(0,t.isArray)(s[0]),y=d.prototype.getValues(e,a),g=y.yData,c=i.indexOf(y.xData[0]);if(g&&0!==g.length&&(0,t.defined)(r)&&!(s.length<=c)){for(let e=c;e<n;e++){let a=this.calculateDisparityIndex(u?s[e][r]:s[e],g[e-c]);l.push([i[e],a]),p.push(i[e]),o.push(a)}return{values:l,xData:p,yData:o}}}}l.defaultOptions=(0,t.merge)(n.defaultOptions,{params:{average:"sma",index:3},marker:{enabled:!1},dataGrouping:{approximation:"averages"}}),(0,t.extend)(l.prototype,{nameBase:"Disparity Index",nameComponents:["period","average"]}),s().registerSeriesType("disparityindex",l);let p=r();export{p as default};