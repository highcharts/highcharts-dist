/**
 * Highstock JS v13.0.1 (2026-08-17)
 * @module highcharts/indicators/cmf
 * @requires highcharts
 * @requires highcharts/modules/stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Sebastian Domas
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";let t={};t.n=e=>{let r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{if(Array.isArray(r))for(var l=0;l<r.length;){var s=r[l++],a=r[l++];t.o(e,s)?0===a&&l++:0===a?Object.defineProperty(e,s,{enumerable:!0,value:r[l++]}):Object.defineProperty(e,s,{enumerable:!0,get:a})}else for(var s in r)t.o(r,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:r[s]})},t.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var l=t.n(r);let s=e.default.SeriesRegistry;var a=t.n(s);let{sma:n}=a().seriesTypes;class i extends n{constructor(){super(...arguments),this.nameBase="Chaikin Money Flow"}isValid(){let e=this.chart,t=this.options,r=this.linkedParent,l=this.volumeSeries||(this.volumeSeries=e.get(t.params.volumeSeriesID)),s=r?.pointArrayMap?.length===4;function a(e){return e.dataTable.rowCount>=t.params.period}return!!(r&&l&&a(r)&&a(l)&&s)}getValues(e,t){if(this.isValid())return this.getMoneyFlow(e.xData,e.yData,this.volumeSeries.getColumn("y"),t.period)}getMoneyFlow(e,t,r,l){let s=t.length,a=[],n=[],i=[],o=[],u,p,h=-1,d=0,f=0;function m(e,t){let r=e[1],l=e[2],s=e[3];return null!==t&&null!==r&&null!==l&&null!==s&&r!==l?(s-l-(r-s))/(r-l)*t:(h=u,null)}if(l>0&&l<=s){for(u=0;u<l;u++)a[u]=m(t[u],r[u]),d+=r[u],f+=a[u];for(n.push(e[u-1]),i.push(u-h>=l&&0!==d?f/d:null),o.push([n[0],i[0]]);u<s;u++)a[u]=m(t[u],r[u]),d-=r[u-l],d+=r[u],f-=a[u-l],f+=a[u],p=[e[u],u-h>=l?f/d:null],n.push(p[0]),i.push(p[1]),o.push([p[0],p[1]])}return{values:o,xData:n,yData:i}}}i.defaultOptions=(0,r.merge)(n.defaultOptions,{params:{index:void 0,volumeSeriesID:"volume"}}),a().registerSeriesType("cmf",i);let o=l();export{o as default};