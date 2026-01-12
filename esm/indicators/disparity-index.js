/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/disparity-index
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * Indicator series type for Highstock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Rafal Sebestjanski
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var a={};a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a);let t=e.default;var r=a.n(t);let s=e.default.SeriesRegistry;var i=a.n(s);let{sma:n}=i().seriesTypes,{correctFloat:p,defined:l,extend:o,isArray:d,merge:u}=r();class y extends n{init(){let e=arguments,a=e[1].params,t=a&&a.average?a.average:void 0;this.averageIndicator=i().seriesTypes[t]||n,this.averageIndicator.prototype.init.apply(this,e)}calculateDisparityIndex(e,a){return p(e-a)/a*100}getValues(e,a){let t=a.index,r=e.xData,s=e.yData,i=s?s.length:0,n=[],p=[],o=[],u=this.averageIndicator,y=d(s[0]),g=u.prototype.getValues(e,a),h=g.yData,v=r.indexOf(g.xData[0]);if(h&&0!==h.length&&l(t)&&!(s.length<=v)){for(let e=v;e<i;e++){let a=this.calculateDisparityIndex(y?s[e][t]:s[e],h[e-v]);n.push([r[e],a]),p.push(r[e]),o.push(a)}return{values:n,xData:p,yData:o}}}}y.defaultOptions=u(n.defaultOptions,{params:{average:"sma",index:3},marker:{enabled:!1},dataGrouping:{approximation:"averages"}}),o(y.prototype,{nameBase:"Disparity Index",nameComponents:["period","average"]}),i().registerSeriesType("disparityindex",y);let g=r();export{g as default};