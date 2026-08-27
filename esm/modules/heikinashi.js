/**
 * Highstock JS v13.0.2 (2026-08-27)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let i=e&&e.__esModule?()=>e.default:()=>e;return t.d(i,{a:i}),i},t.d=(e,i)=>{if(Array.isArray(i))for(var a=0;a<i.length;){var s=i[a++],h=i[a++];t.o(e,s)?0===h&&a++:0===h?Object.defineProperty(e,s,{enumerable:!0,value:i[a++]}):Object.defineProperty(e,s,{enumerable:!0,get:h})}else for(var s in i)t.o(i,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:i[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i=e.default;var a=t.n(i);let s=e.default.SeriesRegistry;var h=t.n(s);let{candlestick:{prototype:{pointClass:o}},hlc:{prototype:{pointClass:n}}}=h().seriesTypes,{composed:r}=a(),{candlestick:l}=h().seriesTypes;function p(){this.series.forEach(e=>{e.is("heikinashi")&&(e.heikinashiData.length=0,e.getHeikinashiData())})}function c(){let e=this.points,t=this.heikinashiData,i=this.cropStart||0;for(let a=0;a<e.length;a++){let s=e[a],h=t[a+i];s.open=h[0],s.high=h[1],s.low=h[2],s.close=h[3]}}function d(){this.heikinashiData.length&&(this.heikinashiData.length=0)}class u extends l{constructor(){super(...arguments),this.heikinashiData=[]}static compose(e,t){l.compose(e),(0,i.pushUnique)(r,"HeikinAshi")&&((0,i.addEvent)(t,"postProcessData",p),(0,i.addEvent)(u,"afterTranslate",c),(0,i.addEvent)(u,"updatedData",d))}getHeikinashiData(){let e=this.allGroupedTable||this.dataTable,t=e.rowCount,i=this.heikinashiData;if(!i.length&&t){this.modifyFirstPointValue(e.getRowObject(0,this.pointArrayMap));for(let a=1;a<t;a++)this.modifyDataPoint(e.getRowObject(a,this.pointArrayMap),i[a-1])}this.heikinashiData=i}init(){super.init.apply(this,arguments),this.heikinashiData=[]}modifyFirstPointValue(e){let t=(e.open+e.high+e.low+e.close)/4,i=(e.open+e.close)/2;this.heikinashiData.push([t,e.high,e.low,i])}modifyDataPoint(e,t){let i=(t[0]+t[3])/2,a=(e.open+e.high+e.low+e.close)/4,s=Math.max(e.high,a,i),h=Math.min(e.low,a,i);this.heikinashiData.push([i,s,h,a])}}u.defaultOptions=(0,i.merge)(l.defaultOptions,{dataGrouping:{groupAll:!0}}),u.prototype.pointClass=class extends o{},h().registerSeriesType("heikinashi",u);let f=a();u.compose(f.Series,f.Axis);let g=a();export{g as default};