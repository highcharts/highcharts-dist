/**
 * Highstock JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/heikinashi
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * HeikinAshi series type for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Karol Kołodziej
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as t from"../highcharts.js";var i={};i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var a in e)i.o(e,a)&&!i.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},i.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i);let e=t.default;var a=i.n(e);let s=t.default.SeriesRegistry;var h=i.n(s);let{candlestick:{prototype:{pointClass:o}},hlc:{prototype:{pointClass:n}}}=h().seriesTypes,{composed:r}=a(),{candlestick:l}=h().seriesTypes;function p(){this.series.forEach(t=>{t.is("heikinashi")&&(t.heikinashiData.length=0,t.getHeikinashiData())})}function c(){let t=this.points,i=this.heikinashiData,e=this.cropStart||0;for(let a=0;a<t.length;a++){let s=t[a],h=i[a+e];s.open=h[0],s.high=h[1],s.low=h[2],s.close=h[3]}}function d(){this.heikinashiData.length&&(this.heikinashiData.length=0)}class u extends l{constructor(){super(...arguments),this.heikinashiData=[]}static compose(t,i){l.compose(t),(0,e.pushUnique)(r,"HeikinAshi")&&((0,e.addEvent)(i,"postProcessData",p),(0,e.addEvent)(u,"afterTranslate",c),(0,e.addEvent)(u,"updatedData",d))}getHeikinashiData(){let t=this.allGroupedTable||this.dataTable,i=t.rowCount,e=this.heikinashiData;if(!e.length&&i){this.modifyFirstPointValue(t.getRowObject(0,this.pointArrayMap));for(let a=1;a<i;a++)this.modifyDataPoint(t.getRowObject(a,this.pointArrayMap),e[a-1])}this.heikinashiData=e}init(){super.init.apply(this,arguments),this.heikinashiData=[]}modifyFirstPointValue(t){let i=(t.open+t.high+t.low+t.close)/4,e=(t.open+t.close)/2;this.heikinashiData.push([i,t.high,t.low,e])}modifyDataPoint(t,i){let e=(i[0]+i[3])/2,a=(t.open+t.high+t.low+t.close)/4,s=Math.max(t.high,a,e),h=Math.min(t.low,a,e);this.heikinashiData.push([e,s,h,a])}}u.defaultOptions=(0,e.merge)(l.defaultOptions,{dataGrouping:{groupAll:!0}}),u.prototype.pointClass=class extends o{},h().registerSeriesType("heikinashi",u);let f=a();u.compose(f.Series,f.Axis);let g=a();export{g as default};