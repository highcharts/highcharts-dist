/**
 * Highstock JS v13.1.1-modified (2026-10-30)
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
 */import*as t from"../highcharts.js";import*as i from"./stock.js";let e={};e.n=t=>{let i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var a in i)e.o(i,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:i[a]})},e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i);let a=t.default;var s=e.n(a);let h=i.default.Series.types.candlestick;var o=e.n(h);let n=o().prototype.pointClass,l=t.default.SeriesRegistry;var r=e.n(l);let{composed:p}=s();function c(){this.series.forEach(t=>{t.is("heikinashi")&&(t.heikinashiData.length=0,t.getHeikinashiData())})}function d(){let t=this.points,i=this.heikinashiData,e=this.cropStart||0;for(let a=0;a<t.length;a++){let s=t[a],h=i[a+e];s.open=h[0],s.high=h[1],s.low=h[2],s.close=h[3]}}function u(){this.heikinashiData.length&&(this.heikinashiData.length=0)}class f extends o(){constructor(){super(...arguments),this.heikinashiData=[]}static compose(t,i){o().compose(t),(0,a.pushUnique)(p,"HeikinAshi")&&((0,a.addEvent)(i,"postProcessData",c),(0,a.addEvent)(f,"afterTranslate",d),(0,a.addEvent)(f,"updatedData",u))}getHeikinashiData(){let t=this.allGroupedTable||this.dataTable,i=t.rowCount,e=this.heikinashiData;if(!e.length&&i){this.modifyFirstPointValue(t.getRowObject(0,this.pointArrayMap));for(let a=1;a<i;a++)this.modifyDataPoint(t.getRowObject(a,this.pointArrayMap),e[a-1])}this.heikinashiData=e}init(){super.init.apply(this,arguments),this.heikinashiData=[]}modifyFirstPointValue(t){let i=(t.open+t.high+t.low+t.close)/4,e=(t.open+t.close)/2;this.heikinashiData.push([i,t.high,t.low,e])}modifyDataPoint(t,i){let e=(i[0]+i[3])/2,a=(t.open+t.high+t.low+t.close)/4,s=Math.max(t.high,a,e),h=Math.min(t.low,a,e);this.heikinashiData.push([e,s,h,a])}}f.defaultOptions=(0,a.merge)(o().defaultOptions,{dataGrouping:{groupAll:!0}}),f.prototype.pointClass=class extends n{},r().registerSeriesType("heikinashi",f);let g=s();f.compose(g.Series,g.Axis);let k=s();export{k as default};