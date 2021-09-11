(this["webpackJsonpmath-solver-frontend"]=this["webpackJsonpmath-solver-frontend"]||[]).push([[0],{13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),s=n.n(c),r=n(4),i=n(6),l=n(0),o=function(e){var t=e.value,n=e.handler;return["(",")","^","/","*","var","n!",".","sqrt"].includes(t)?Object(l.jsx)("button",{className:"btn btn-light calc-keys fw-bold border-2",value:t,onClick:n,disabled:!0,children:t}):Object(l.jsx)("button",{className:"btn btn-light calc-keys fw-bold border-2",value:t,onClick:n,children:t})},d=function(e){Array.from(document.getElementsByClassName("active-screen-input")).forEach((function(e){e.classList.remove("active-screen-input")})),e.target.classList.add("active-screen-input")},u=function(){return Object(l.jsxs)("div",{className:"d-inline-block px-1",children:[Object(l.jsx)("div",{className:"border-bottom border-dark",onClick:d,children:"1"}),Object(l.jsx)("div",{className:"",onClick:d,children:"1"})]})},m=function(e){var t=e.input;return Object(l.jsx)("div",{className:"d-inline-block fs-3","data-value":t,onClick:d,children:t})},b=function(e){var t=e.input;return Object(l.jsx)("div",{className:"d-inline-block superscript","data-value":t,onClick:d,children:t})};function j(){var e=Array.from(document.getElementById("screen").children).map((function(e){return e.getAttribute("data-value")})).join("");console.log(e),fetch("https://salty-temple-04255.herokuapp.com/solve/linearequation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({equation:e})}).then((function(e){return e.json()})).then((function(e){document.getElementById("lineareq-solvedeq").value=e.equation,document.getElementById("lineareq-slope").value=e.slope,document.getElementById("lineareq-yintercept").value=e.yIntercept,function(e,t){e=Number(e),t=Number(t);var n=[],a=[];(function(e,t,n,a){for(var c=-10;c<11;c++)e.push(c),t.push(c*n+a)})(n,a,e,t),n.forEach((function(e){return String(e)})),function(e,t){var n={chartName:"Linear Equation Graph",xAxisLabel:"X Axis",yAxisLabel:"Y Axis",seriesName:"",yAxisValues:t,xAxisValues:e,width:600,height:400};fetch("https://pacific-castle-72671.herokuapp.com/basic/linegraph",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.text()})).then((function(e){document.getElementById("lineareq-graph").setAttribute("src","data:image/png;base64,".concat(e))}))}(n,a)}(e.slope,e.yIntercept)}))}var h=function(){var e=[["(",")","^","/","x"],["7","8","9","*","y"],["4","5","6","-","var"],["1","2","3","+","n!"],["del","0",".","=","sqrt"]],t=Object(a.useState)([]),n=Object(r.a)(t,2),c=n[0],s=n[1];function h(e){var t;t=e.key?e.key:e.target.value;var n=Array.from(document.getElementsByClassName("active-screen-input"));if(1===n.length&&"screen"!==n[0].id){if("del"===t||"Delete"===t||"Backspace"===t){var a=n[0].textContent.slice(0,n[0].textContent.length-1);n[0].textContent=a}else n[0].textContent+=t;if(""===n[0].textContent){document.getElementById("screen").click();var r=Object(i.a)(c);r.pop(),s(r)}}else{var l=Object(i.a)(c);"del"===t||"Delete"===t||"Backspace"===t?l.pop():l.push(t),s(l)}}return Object(a.useEffect)((function(){return document.addEventListener("keydown",h),function(){return document.removeEventListener("keydown",h)}})),Object(l.jsxs)("div",{className:"col-md-12 col-lg-3 bg-secondary rounded shadow border-dark",children:[Object(l.jsx)("div",{className:"h-25 w-100 mt-3 p-2 bg-white rounded border d-flex align-items-center active-screen-input",id:"screen",onClick:d,children:c.map((function(e,t){return function(e,t){switch(e){case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case"(":case")":case"+":case"-":case"*":case".":case"=":case"x":case"y":return Object(l.jsx)(m,{input:e},t);case"/":return Object(l.jsx)(u,{input:e},t);case"^":return Object(l.jsx)(b,{input:e},t);default:return}}(e,t)}))}),Object(l.jsxs)("div",{className:"h-75 d-flex flex-column justify-content-evenly",children:[e.map((function(e,t){return Object(l.jsx)("div",{className:"d-flex justify-content-around",children:e.map((function(e,t){return Object(l.jsx)(o,{value:e,handler:h},t)}))},t)})),Object(l.jsx)("div",{className:"d-grid mx-4",children:Object(l.jsx)("button",{className:"btn btn-light fw-bold border-2",type:"button",onClick:j,children:"SOLVE"})})]})]})},p=function(e){var t=e.item;return Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link fw-bold",href:"#",children:t})})},x=function(e){var t=e.list;return Object(l.jsx)("ul",{className:"navbar-nav",children:t.map((function(e){return Object(l.jsx)(p,{item:e})}))})},f=function(){return Object(l.jsx)("nav",{className:"navbar navbar-expand-md shadow-sm",children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsxs)("a",{href:"#",className:"navbar-brand",children:[Object(l.jsx)("img",{src:"./images/logo.svg",width:"60",height:"60",className:"d-inline-block align-text-bottom"}),Object(l.jsx)("span",{className:"fs-1 text-light",children:"Pizza Math"})]}),Object(l.jsx)("div",{children:Object(l.jsx)(x,{list:["Linear Equation","Solve for x","Quadratic Equation","Other"]})})]})})},v=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2);t[0],t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(f,{}),Object(l.jsx)("main",{className:"container-fluid p-5",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(h,{}),Object(l.jsxs)("div",{className:"d-flex justify-content-end flex-column col-md-12 col-lg-8 ms-auto",children:[Object(l.jsxs)("div",{children:[Object(l.jsxs)("span",{className:"d-inline-block w-25 ms-5 me-5",children:[Object(l.jsx)("label",{htmlFor:"lineareq-solvedeq",className:"from-label",children:"Solved Linear Equation"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"lineareq-solvedeq",disabled:!0})]}),Object(l.jsxs)("span",{className:"d-inline-block w-25 me-5",children:[Object(l.jsx)("label",{htmlFor:"lineareq-slope",className:"from-label",children:"Slope"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"lineareq-slope",disabled:!0})]}),Object(l.jsxs)("span",{className:"d-inline-block w-25 me-5",children:[Object(l.jsx)("label",{htmlFor:"lineareq-yintercept",className:"from-label",children:"Y-intercept"}),Object(l.jsx)("input",{type:"text",className:"form-control",id:"lineareq-yintercept",disabled:!0})]})]}),Object(l.jsx)("img",{id:"lineareq-graph",src:"./images/empty-graph.svg",alt:"graph will appear here",className:"img-thumbnail mt-2"})]})]})})]})};s.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.9493dcd4.chunk.js.map