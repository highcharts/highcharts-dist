/**
 * Highstock JS v12.5.0 (2026-01-12)
 * @module highcharts/indicators/cmf
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Domas
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t={};t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var s=t.n(r);let l=e.default.SeriesRegistry;var a=t.n(l);let{sma:i}=a().seriesTypes,{merge:n}=s();class o extends i{constructor(){super(...arguments),this.nameBase="Chaikin Money Flow"}isValid(){let e=this.chart,t=this.options,r=this.linkedParent,s=this.volumeSeries||(this.volumeSeries=e.get(t.params.volumeSeriesID)),l=r?.pointArrayMap?.length===4;function a(e){return e.dataTable.rowCount>=t.params.period}return!!(r&&s&&a(r)&&a(s)&&l)}getValues(e,t){if(this.isValid())return this.getMoneyFlow(e.xData,e.yData,this.volumeSeries.getColumn("y"),t.period)}getMoneyFlow(e,t,r,s){let l=t.length,a=[],i=[],n=[],o=[],u,p,h=-1,d=0,f=0;function m(e,t){let r=e[1],s=e[2],l=e[3];return null!==t&&null!==r&&null!==s&&null!==l&&r!==s?(l-s-(r-l))/(r-s)*t:(h=u,null)}if(s>0&&s<=l){for(u=0;u<s;u++)a[u]=m(t[u],r[u]),d+=r[u],f+=a[u];for(i.push(e[u-1]),n.push(u-h>=s&&0!==d?f/d:null),o.push([i[0],n[0]]);u<l;u++)a[u]=m(t[u],r[u]),d-=r[u-s],d+=r[u],f-=a[u-s],f+=a[u],p=[e[u],u-h>=s?f/d:null],i.push(p[0]),n.push(p[1]),o.push([p[0],p[1]])}return{values:o,xData:i,yData:n}}}o.defaultOptions=n(i.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),a().registerSeriesType("cmf",o);let u=s();export{u as default};