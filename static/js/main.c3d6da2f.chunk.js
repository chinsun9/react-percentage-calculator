(this["webpackJsonptodo-react-typescript"]=this["webpackJsonptodo-react-typescript"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c),u=a(1),o=function(e){var t=e.result,a=e.hideResult;return l.a.createElement("div",{className:"row mb-4"},l.a.createElement("div",{className:"hide"===t.mode?"hide":void 0},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("strong",null,t.vlaue))),l.a.createElement("div",null,l.a.createElement("input",{onClick:function(e){e.preventDefault(),a()},type:"button",value:"\ucd08\uae30\ud654"}))))},i={value1:"",value2:""},m=function(e){e.id;var t=e.calResult,a=e.calFuntion,c=Object(n.useState)(i),r=Object(u.a)(c,2),o=r[0],m=r[1];return l.a.createElement("li",null,l.a.createElement("input",{placeholder:a.calInfo.placeholder1,type:"number",onChange:function(e){m({value1:e.target.value,value2:o.value2})}}),l.a.createElement("span",null,a.calInfo.text1),l.a.createElement("input",{placeholder:a.calInfo.placeholder2,type:"number",onChange:function(e){m({value1:o.value1,value2:e.target.value})}}),l.a.createElement("span",null,a.calInfo.text2),l.a.createElement("button",{type:"button",className:"btn btn-outline-primary",onClick:function(e){e.preventDefault();var n=o.value1,l=o.value2;if(0!==n.length&&0!==l.length){var c=a.calfuntion(parseInt(n),parseInt(l));t(c)}else console.log("\ube44\uc5b4\uc788\uc74c")}},"\uacc4\uc0b0"))},s=function(e){var t=e.calFunctions,a=e.calResult;return l.a.createElement("div",{className:"row mt-3"},l.a.createElement("ul",null,t.map((function(e,t){return l.a.createElement(m,{key:t,id:t,calResult:a,calFuntion:e})}))))},d=function(){return l.a.createElement("div",{className:"sidetab"},l.a.createElement("div",{className:"sideItem"},l.a.createElement("a",{href:"https://github.com/chinsun9/react-percentage-calculator",target:"chinsun9 github"},l.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false",className:"","data-icon":"github",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l.a.createElement("path",{d:"M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"})))))},p=(a(9),a(10),{vlaue:0,mode:"hide"}),v=[{calInfo:{placeholder1:"\uc804\uccb4\uac12 \uc608)10000",placeholder2:"\ube44\uc728\uac12 \uc608)20",text1:"\uc758",text2:"%\ub294 \uc5bc\ub9c8?"},calfuntion:function(e,t){return e*t*.01+""}},{calInfo:{placeholder1:"\uc804\uccb4\uac12 \uc608)10000",placeholder2:"\uc77c\ubd80\uac12 \uc608)500",text1:"\uc758",text2:"\uc740 \uba87%"},calfuntion:function(e,t){return t/e*100+"%"}},{calInfo:{placeholder1:"\uc804\uccb4\uac12 \uc608)10000",placeholder2:"\uc99d\uac10\uac12 \uc608)25000",text1:"\uc774/\uac00",text2:"\uc73c\ub85c \ubcc0\ud558\uba74?"},calfuntion:function(e,t){return(t-e)/e*100+"%"}},{calInfo:{placeholder1:"\uc804\uccb4\uac12 \uc608)10000",placeholder2:"\ube44\uc728\uac12 \uc608)25",text1:"\uc774/\uac00",text2:"% \uc99d\uac00\ud558\uba74?"},calfuntion:function(e,t){return e+e*t*.01+""}}],f=function(){var e=Object(n.useState)(p),t=Object(u.a)(e,2),a=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"card container w-80 border border-primary rounded"},l.a.createElement("div",{className:"card-header"},l.a.createElement("h1",null,"\ud37c\uc13c\ud2b8 \uacc4\uc0b0\uae30")),l.a.createElement(s,{calResult:function(e){c({vlaue:e,mode:"display"})},calFunctions:v}),l.a.createElement(o,{result:a,hideResult:function(){c({vlaue:0,mode:"hide"})}})),l.a.createElement(d,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(f,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a(11)}},[[4,1,2]]]);
//# sourceMappingURL=main.c3d6da2f.chunk.js.map