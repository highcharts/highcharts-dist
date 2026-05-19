/**
 * Highcharts JS v13.0.0-beta.0 (2026-05-19)
 * @module highcharts/themes/grid-light
 * @requires highcharts
 *
 * (c) 2009-2026 Highsoft AS
 * Author: Torstein Hønsi
 *
 * A commercial license may be required depending on use,
 * see www.highcharts.com/license
 */import*as e from"../highcharts.js";var t,o,r={};r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);let l=e.default;var a=r.n(l);let{doc:s,win:i}=a();function n(e,t){let o;for(o in e||(e={}),t)e[o]=t[o];return e}Array.prototype.find;let{setOptions:c}=a();(t=o||(o={})).options={palette:{colorScheme:"light",light:{neutralColor:"#111100",colors:["#7cb5ec","#f7a35c","#90ee7e","#7798BF","#aaeeee","#ff0066","#eeaaee","#55BF3B","#DF5353","#7798BF","#aaeeee"]}},chart:{style:{fontFamily:"Dosis, sans-serif"}},title:{style:{fontSize:"16px",fontWeight:"bold",textTransform:"uppercase"}},tooltip:{borderWidth:0,shadow:!1,backgroundColor:"var(--highcharts-neutral-color-80)",style:{color:"var(--highcharts-background-color)"}},legend:{backgroundColor:"var(--highcharts-neutral-color-5)",itemStyle:{fontWeight:"bold",fontSize:"13px"}},xAxis:{gridLineWidth:1,labels:{style:{fontSize:"12px"}}},yAxis:{minorTickInterval:"auto",title:{style:{textTransform:"uppercase"}},labels:{style:{fontSize:"12px"}}}},t.apply=function(){var e,o;let r;e={href:"https://fonts.googleapis.com/css?family=Dosis:400,600",rel:"stylesheet",type:"text/css"},o=document.getElementsByTagName("head")[0],r=s.createElement("link"),e&&n(r,e),o&&o.appendChild(r),c(t.options)};let p=o;a().theme=p.options,p.apply();let h=a();export{h as default};