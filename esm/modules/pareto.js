/**
 * Highcharts JS v13.1.1-modified (2026-10-29)
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
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let s=e&&e.__esModule?()=>e.default:()=>e;return t.d(s,{a:s}),s},t.d=(e,s)=>{for(var i in s)t.o(s,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:s[i]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var i,a=t.n(s);let r=e.default.Series;var n=t.n(r);let{noop:o}=a();!function(e){function t(){n().prototype.init.apply(this,arguments),this.initialised=!1,this.baseSeries=null,this.eventRemovers=[],this.addEvents()}function i(){let e=this.chart,t=this.options.baseSeries,i=(0,s.defined)(t)&&(e.series[t]||e.get(t));this.baseSeries=i||null}function a(){this.eventRemovers.push((0,s.addEvent)(this.chart,"afterLinkSeries",()=>{this.setBaseSeries(),this.baseSeries&&!this.initialised&&(this.setDerivedData(),this.addBaseSeriesEvents(),this.initialised=!0)}))}function r(){this.eventRemovers.push((0,s.addEvent)(this.baseSeries,"updatedData",()=>{this.setDerivedData()}),(0,s.addEvent)(this.baseSeries,"destroy",()=>{this.baseSeries=null,this.initialised=!1}))}function d(){this.eventRemovers.forEach(e=>{e()}),n().prototype.destroy.apply(this,arguments)}e.hasDerivedData=!0,e.setDerivedData=o,e.compose=function(e){let s=e.prototype;return s.addBaseSeriesEvents=r,s.addEvents=a,s.destroy=d,s.init=t,s.setBaseSeries=i,e},e.init=t,e.setBaseSeries=i,e.addEvents=a,e.addBaseSeriesEvents=r,e.destroy=d}(i||(i={}));let d=i,l=e.default.Series.types.line;var h=t.n(l);let u=e.default.SeriesRegistry;var p=t.n(u);class v extends h(){sumPointsPercents(e,t,i,a){let r=[],n=0,o=0,d=0,l;for(let h of e)null!==h&&(a?o+=h:(l=h/i*100,r.push([t[n],(0,s.correctFloat)(d+l)]),d+=l)),++n;return a?o:r}setDerivedData(){let e=this.baseSeries?.getColumn("x")||[],t=this.baseSeries?.getColumn("y")||[],s=this.sumPointsPercents(t,e,null,!0);this.setData(this.sumPointsPercents(t,e,s,!1),!1)}}v.defaultOptions=(0,s.merge)(h().defaultOptions,{zIndex:3}),(0,s.extend)(v.prototype,{hasDerivedData:d.hasDerivedData}),d.compose(v),p().registerSeriesType("pareto",v);let c=a();export{c as default};