/**
 * Highstock JS v13.1.1-modified (2026-10-30)
 * @module highcharts/indicators/psar
 * @requires highcharts
 * @requires highcharts/modules/stock
 * @requires highcharts/indicators/indicators
 *
 * Parabolic SAR Indicator for Highcharts Stock
 *
 * (c) 2010-2026 Highsoft AS
 * Author: Grzegorz Blachliński
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";import"../modules/stock.js";import*as t from"./indicators.js";let a={};a.n=e=>{let t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var i=a.n(r);let l=t.default.Series.types.sma;var n=a.n(l);let s=e.default.SeriesRegistry;var o=a.n(s);function c(e,t){return parseFloat(e.toFixed(t))}class u extends n(){constructor(){super(...arguments),this.nameComponents=void 0}getValues(e,t){let a=e.xData,r=e.yData,i=t.maxAccelerationFactor,l=t.increment,n=t.initialAccelerationFactor,s=t.decimals,o=t.index,u=[],d=[],m=[],p=t.initialAccelerationFactor,h,f=r[0][1],x,v,g,y=1,F,M,A,j,O=r[0][2],b,D,P,S;if(!(o>=r.length)){for(S=0;S<o;S++)f=Math.max(r[S][1],f),O=Math.min(r[S][2],c(O,s));for(h=r[S][1]>O?1:-1,x=f-O,v=(p=t.initialAccelerationFactor)*x,u.push([a[o],O]),d.push(a[o]),m.push(c(O,s)),S=o+1;S<r.length;S++)if(F=r[S-1][2],M=r[S-2][2],A=r[S-1][1],j=r[S-2][1],D=r[S][1],P=r[S][2],null!==M&&null!==j&&null!==F&&null!==A&&null!==D&&null!==P){var _,k,W,w,C,R,T,V,q,z,B,E,G,H,I,J,K,L,N,Q,U;C=h,R=y,T=O,V=v,q=M,z=F,B=A,E=j,G=f,O=C===R?1===C?T+V<Math.min(q,z)?T+V:Math.min(q,z):T+V>Math.max(E,B)?T+V:Math.max(E,B):G,_=h,k=f,b=1===_?D>k?D:k:P<k?P:k,W=y,w=O,H=g=1===W&&P>w||-1===W&&D>w?1:-1,I=h,J=b,K=f,L=p,N=l,Q=i,U=n,v=(p=H===I?1===H&&J>K||-1===H&&J<K?L===Q?Q:c(L+N,2):L:U)*(x=b-O),u.push([a[S],c(O,s)]),d.push(a[S]),m.push(c(O,s)),y=h,h=g,f=b}return{values:u,xData:d,yData:m}}}}u.defaultOptions=(0,r.merge)(n().defaultOptions,{lineWidth:0,marker:{enabled:!0},states:{hover:{lineWidthPlus:0}},params:{period:void 0,initialAccelerationFactor:.02,maxAccelerationFactor:.2,increment:.02,index:2,decimals:4}}),o().registerSeriesType("psar",u);let d=i();export{d as default};