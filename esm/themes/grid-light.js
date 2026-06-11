/**
 * Highcharts JS v13.0.0 (2026-06-11)
 * @module highcharts/themes/grid-light
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t,o,l={};l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var o in t)l.o(t,o)&&!l.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let r=e.default;var a=l.n(r);let{setOptions:s}=a();(t=o||(o={})).options={palette:{colorScheme:"light",light:{neutralColor:"#111100",colors:["#7cb5ec","#f7a35c","#90ee7e","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"]}},chart:{style:{fontFamily:"Dosis, sans-serif"}},title:{style:{fontSize:"16px",fontWeight:"bold",textTransform:"uppercase"}},tooltip:{borderWidth:0,shadow:!1,backgroundColor:"var(--highcharts-neutral-color-80)",style:{color:"var(--highcharts-background-color)"}},legend:{backgroundColor:"var(--highcharts-neutral-color-5)",itemStyle:{fontWeight:"bold",fontSize:"13px"}},xAxis:{gridLineWidth:1,labels:{style:{fontSize:"12px"}}},yAxis:{minorTickInterval:"auto",title:{style:{textTransform:"uppercase"}},labels:{style:{fontSize:"12px"}}}},t.apply=function(){(0,r.createElement)("link",{href:"https://fonts.googleapis.com/css?family=Dosis:400,600",rel:"stylesheet",type:"text/css"},null,document.getElementsByTagName("head")[0]),s(t.options)};let i=o;a().theme=i.options,i.apply();let n=a();export{n as default};