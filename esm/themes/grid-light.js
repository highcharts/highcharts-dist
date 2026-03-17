/**
 * Highcharts JS v12.5.0-modified (2026-03-17)
 * @module highcharts/themes/grid-light
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Honsi
 *
 * A commercial license may be required depending on use.
 * See www.highcharts.com/license
 */import*as e from"../highcharts.js";var t,o,l={};l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=l.n(r);let{doc:s,win:n}=a();function i(e,t){let o;for(o in e||(e={}),t)e[o]=t[o];return e}Array.prototype.find;let{setOptions:p}=a();(t=o||(o={})).options={colors:["#7cb5ec","#f7a35c","#90ee7e","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"],chart:{backgroundColor:null,style:{fontFamily:"Dosis, sans-serif"}},title:{style:{fontSize:"16px",fontWeight:"bold",textTransform:"uppercase"}},tooltip:{borderWidth:0,backgroundColor:"rgba(219,219,216,0.8)",shadow:!1},legend:{backgroundColor:"#F0F0EA",itemStyle:{fontWeight:"bold",fontSize:"13px"}},xAxis:{gridLineWidth:1,labels:{style:{fontSize:"12px"}}},yAxis:{minorTickInterval:"auto",title:{style:{textTransform:"uppercase"}},labels:{style:{fontSize:"12px"}}},plotOptions:{candlestick:{lineColor:"#404048"}}},t.apply=function(){var e,o;let l;e={href:"https://fonts.googleapis.com/css?family=Dosis:400,600",rel:"stylesheet",type:"text/css"},o=document.getElementsByTagName("head")[0],l=s.createElement("link"),e&&i(l,e),o&&o.appendChild(l),p(t.options)};let c=o;a().theme=c.options,c.apply();let f=a();export{f as default};