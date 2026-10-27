/**
 * Highstock JS v13.1.1-modified (2026-10-27)
 * @module highcharts/indicators/cmf
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Domas
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let r={};r.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let s=e.default;var l=r.n(s);let a=t.default.Series.types.sma;var o=r.n(a);let i=e.default.SeriesRegistry;var n=r.n(i);class u extends o(){constructor(){super(...arguments),this.nameBase="Chaikin Money Flow"}isValid(){let e=this.chart,t=this.options,r=this.linkedParent,s=this.volumeSeries||(this.volumeSeries=e.get(t.params.volumeSeriesID)),l=r?.pointArrayMap?.length===4;function a(e){return e.dataTable.rowCount>=t.params.period}return!!(r&&s&&a(r)&&a(s)&&l)}getValues(e,t){if(this.isValid())return this.getMoneyFlow(e.xData,e.yData,this.volumeSeries.getColumn("y"),t.period)}getMoneyFlow(e,t,r,s){let l=t.length,a=[],o=[],i=[],n=[],u,p,h=-1,d=0,m=0;function f(e,t){let r=e[1],s=e[2],l=e[3];return null!==t&&null!==r&&null!==s&&null!==l&&r!==s?(l-s-(r-l))/(r-s)*t:(h=u,null)}if(s>0&&s<=l){for(u=0;u<s;u++)a[u]=f(t[u],r[u]),d+=r[u],m+=a[u];for(o.push(e[u-1]),i.push(u-h>=s&&0!==d?m/d:null),n.push([o[0],i[0]]);u<l;u++)a[u]=f(t[u],r[u]),d-=r[u-s],d+=r[u],m-=a[u-s],m+=a[u],p=[e[u],u-h>=s?m/d:null],o.push(p[0]),i.push(p[1]),n.push([p[0],p[1]])}return{values:n,xData:o,yData:i}}}u.defaultOptions=(0,s.merge)(o().defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),n().registerSeriesType("cmf",u);let p=l();export{p as default};