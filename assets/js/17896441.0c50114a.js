"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7918],{8007:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(7294),a=n(814),O=n(1262),c=n(2949),_=n(373),L=n(4908);function o(t,e,n){t.addEventListener("resize",(()=>{const t=e.getBoundingClientRect();n(t.width,t.height)}),!0)}const s={3.8:async t=>{const e=await n.e(193).then(n.bind(n,193));return{module:e,createChart:(n,r)=>{const a=e.createChart(n,r);return o(t,n,a.resize.bind(a)),a}}},current:async()=>{const t=await n.e(9027).then(n.bind(n,9027));return{module:t,createChart:(e,n)=>{const r=t.createChart(e,n);return o(window,e,r.resize.bind(r)),r}}}},l="iframe_R_Fr";function i(t){const{script:e}=t,{preferredVersion:n}=(0,_.J)(),a=L&&L.length>0?L[0]:"",O=n?.name??a??"current",c=function(t){return`\n\t\t<style>\n\t\t\thtml,\n\t\t\tbody,\n\t\t\t#container {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\toverflow: hidden;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t</style>\n\t\t<div id="container"></div>\n\t\t<script>\n\t\t\twindow.run = () => {\n\t\t\t\t${t}\n\t\t\t};\n\t\t<\/script>\n\t`}(e),o=r.useRef(null);return r.useEffect((()=>{const t=o.current,e=t?.contentWindow,n=t?.contentDocument;if(null===t||!e||!n)return;const r=async()=>{try{const{module:t,createChart:n}=await s[O](e);Object.assign(e,t),e.createChart=n,e.run?.()}catch(t){console.error(t)}};if(void 0!==e.run)r();else{const e=()=>{r(),t.removeEventListener("load",e)};t.addEventListener("load",e)}}),[c]),r.createElement("iframe",{key:e,ref:o,srcDoc:c,className:l})}var R=n(3864);function E(){const[t,e]=(0,r.useState)("");return(0,r.useEffect)((()=>e(`${Math.random().toString(36).slice(2,11)}`)),[]),t}const C=Object.keys(R.l.DARK);const d=t=>{const{chart:e,replaceThemeConstants:n,hideableCode:_,...L}=t;let{children:o}=t;const{colorMode:s}=(0,c.I)(),d="dark"===s,u="string"==typeof A?A:E();var A;return n&&"string"==typeof o&&(o=function(t,e){const n=e?R.l.DARK:R.l.LIGHT;let r=t;for(const a of C)r=r.replace(new RegExp(a,"g"),`'${n[a]}'`);return r}(o,d)),e||_?r.createElement(r.Fragment,null,_&&r.createElement(r.Fragment,null,r.createElement("input",{id:u,type:"checkbox",className:"toggle-hidden-lines"}),r.createElement("label",{className:"toggle-label",htmlFor:u},"Show all code")),r.createElement(a.Z,L,o),e&&r.createElement(O.Z,{fallback:r.createElement("div",{className:l},"\xa0")},(()=>r.createElement(i,{script:o})))):r.createElement(a.Z,L,o)}},3864:(t,e,n)=>{n.d(e,{l:()=>r});const r={DARK:{CHART_BACKGROUND_COLOR:"black",CHART_BACKGROUND_RGB_COLOR:"0, 0, 0",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"white"},LIGHT:{CHART_BACKGROUND_COLOR:"white",CHART_BACKGROUND_RGB_COLOR:"255, 255, 255",LINE_LINE_COLOR:"#2962FF",AREA_TOP_COLOR:"#2962FF",AREA_BOTTOM_COLOR:"rgba(41, 98, 255, 0.28)",BAR_UP_COLOR:"#26a69a",BAR_DOWN_COLOR:"#ef5350",BASELINE_TOP_LINE_COLOR:"rgba( 38, 166, 154, 1)",BASELINE_TOP_FILL_COLOR1:"rgba( 38, 166, 154, 0.28)",BASELINE_TOP_FILL_COLOR2:"rgba( 38, 166, 154, 0.05)",BASELINE_BOTTOM_LINE_COLOR:"rgba( 239, 83, 80, 1)",BASELINE_BOTTOM_FILL_COLOR1:"rgba( 239, 83, 80, 0.05)",BASELINE_BOTTOM_FILL_COLOR2:"rgba( 239, 83, 80, 0.28)",HISTOGRAM_COLOR:"#26a69a",CHART_TEXT_COLOR:"black"}}},4908:t=>{t.exports=["3.8"]}}]);