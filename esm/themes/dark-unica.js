/**
 * Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/themes/dark-unica
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t,a,o={};o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let l=e.default;var r=o.n(l);let{setOptions:s}=r();(t=a||(a={})).options={palette:{colorScheme:"dark",dark:{backgroundColor:"#3e3e40",neutralColor:"#f0f0f3",highlightColor:"#75fffd",colors:["#2b908f","#90ee7e","#f45b5b","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"]}},chart:{backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},style:{fontFamily:"'Unica One', sans-serif"}},title:{style:{textTransform:"uppercase",fontSize:"20px"}},subtitle:{style:{textTransform:"uppercase"}},plotOptions:{series:{dataLabels:{style:{fontSize:"13px"}}}},legend:{backgroundColor:"#00000388"},global:{buttonTheme:{states:{hover:{fill:"#707073"},select:{fill:"#000003"}}}}},t.apply=function(){(0,l.createElement)("link",{href:"https://fonts.googleapis.com/css?family=Unica+One",rel:"stylesheet",type:"text/css"},void 0,document.getElementsByTagName("head")[0]),s(t.options)};let n=a;r().theme=n.options,n.apply();let i=r();export{i as default};