/**
 * Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/modules/pareto
 * @requires highcharts
 *
 * Pareto series type for Highcharts
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Bochan
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t,s={};s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let i=e.default;var r=s.n(i);let a=e.default.Series;var n=s.n(a);let{noop:o}=r();!function(e){function t(){n().prototype.init.apply(this,arguments),this.initialised=!1,this.baseSeries=null,this.eventRemovers=[],this.addEvents()}function s(){let e=this.chart,t=this.options.baseSeries,s=(0,i.defined)(t)&&(e.series[t]||e.get(t));this.baseSeries=s||null}function r(){this.eventRemovers.push((0,i.addEvent)(this.chart,"afterLinkSeries",()=>{this.setBaseSeries(),this.baseSeries&&!this.initialised&&(this.setDerivedData(),this.addBaseSeriesEvents(),this.initialised=!0)}))}function a(){this.eventRemovers.push((0,i.addEvent)(this.baseSeries,"updatedData",()=>{this.setDerivedData()}),(0,i.addEvent)(this.baseSeries,"destroy",()=>{this.baseSeries=null,this.initialised=!1}))}function d(){this.eventRemovers.forEach(e=>{e()}),n().prototype.destroy.apply(this,arguments)}e.hasDerivedData=!0,e.setDerivedData=o,e.compose=function(e){let i=e.prototype;return i.addBaseSeriesEvents=a,i.addEvents=r,i.destroy=d,i.init=t,i.setBaseSeries=s,e},e.init=t,e.setBaseSeries=s,e.addEvents=r,e.addBaseSeriesEvents=a,e.destroy=d}(t||(t={}));let d=t,l=e.default.SeriesRegistry;var h=s.n(l);let{line:u}=h().seriesTypes;class p extends u{sumPointsPercents(e,t,s,r){let a=[],n=0,o=0,d=0,l;for(let h of e)null!==h&&(r?o+=h:(l=h/s*100,a.push([t[n],(0,i.correctFloat)(d+l)]),d+=l)),++n;return r?o:a}setDerivedData(){let e=this.baseSeries?.getColumn("x")||[],t=this.baseSeries?.getColumn("y")||[],s=this.sumPointsPercents(t,e,null,!0);this.setData(this.sumPointsPercents(t,e,s,!1),!1)}}p.defaultOptions=(0,i.merge)(u.defaultOptions,{zIndex:3}),(0,i.extend)(p.prototype,{hasDerivedData:d.hasDerivedData}),d.compose(p),h().registerSeriesType("pareto",p);let v=r();export{v as default};