/**
 * Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/slow-stochastic
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 * @requires highcharts/indicators/stochastic
 *
 * Slow Stochastic series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Paweł Fus
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as t from"../highcharts.js";import"../modules/stock.js";import*as e from"./indicators.js";import*as a from"./stochastic.js";let s={};s.n=t=>{let e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);let r=t.default;var l=s.n(r);let o=e.default.Series.types.sma;var i=s.n(o);let c=a.default.Series.types.stochastic;var p=s.n(c);let n=t.default.SeriesRegistry;var u=s.n(n);class d extends p(){getValues(t,e){let a=e.periods,s=super.getValues.call(this,t,e),r={values:[],xData:[],yData:[]};if(!s)return;r.xData=s.xData.slice(a[1]-1);let l=s.yData.slice(a[1]-1),o=i().prototype.getValues.call(this,{xData:r.xData,yData:l},{index:1,period:a[2]});if(o){for(let t=0,e=r.xData.length;t<e;t++)r.yData[t]=[l[t][1],o.yData[t-a[2]+1]||null],r.values[t]=[r.xData[t],l[t][1],o.yData[t-a[2]+1]||null];return r}}}d.defaultOptions=(0,r.merge)(p().defaultOptions,{params:{periods:[14,3,3]}}),(0,r.extend)(d.prototype,{nameBase:"Slow Stochastic"}),u().registerSeriesType("slowstochastic",d);let f=l();export{f as default};