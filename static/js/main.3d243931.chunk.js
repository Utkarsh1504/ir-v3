(this["webpackJsonpir-vthree"]=this["webpackJsonpir-vthree"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var n=c(4),r=c.n(n),s=c(2),j=c(1),u=c(0),i=function(){var e=Object(j.useState)(!0),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(u.jsx)("h1",{onClick:function(){return n(!c)},style:{color:c?"limegreen":"crimson"},children:"useState Example"})},a=function(){var e=Object(j.useState)(new Date),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(j.useEffect)((function(){var e=setTimeout((function(){return n(new Date)}),1e3);return function(){return clearTimeout(e)}})),Object(u.jsxs)("h1",{children:["useEffect Example: ",c.toLocaleTimeString()]})},b=Object(j.createContext)([{firstName:"Bob",lastName:"Bobberson",suffix:1,email:"bobbobberson@example.com"},function(e){return e}]),o=function(){var e=Object(j.useContext)(b),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h5",{children:"".concat(c.firstName," ").concat(c.lastName," the ").concat(c.suffix," born")}),Object(u.jsx)("button",{onClick:function(){n(Object.assign({},c,{suffix:c.suffix+1}))},children:"Increment"})]})},l=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"fourth level"}),Object(u.jsx)(o,{})]})},O=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"third level"}),Object(u.jsx)(l,{})]})},x=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"second level"}),Object(u.jsx)(O,{})]})},d=function(){var e=Object(j.useState)({firstName:"James",lastName:"Jameson",suffix:1,email:"jamesjameson@example.com"});return Object(u.jsxs)(b.Provider,{value:e,children:[Object(u.jsx)("h1",{children:"first level"}),Object(u.jsx)(x,{})]})},h=function(){var e=Object(j.useState)(0),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(j.useRef)(0);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"useRef Example"}),Object(u.jsx)("button",{onClick:function(){n(c+1),r.current++,setTimeout((function(){return alert("state: ".concat(c," | ref: ").concat(r.current))}),1e3)},children:"delay logging"}),Object(u.jsxs)("h4",{children:["state: ",c]}),Object(u.jsxs)("h4",{children:["ref: ",r.current]})]})},f=function(e){return e<0?0:e>255?255:e},m=50,v=function(e,t){switch(t.type){case"INCREMENT_R":return Object.assign({},e,{r:f(e.r+m)});case"DECREMENT_R":return Object.assign({},e,{r:f(e.r-m)});case"INCREMENT_G":return Object.assign({},e,{g:f(e.g+m)});case"DECREMENT_G":return Object.assign({},e,{g:f(e.g-m)});case"INCREMENT_B":return Object.assign({},e,{b:f(e.b+m)});case"DECREMENT_B":return Object.assign({},e,{b:f(e.b-m)});default:return e}},p=function(){var e=Object(j.useReducer)(v,{r:0,g:0,b:0}),t=Object(s.a)(e,2),c=t[0],n=c.r,r=c.g,i=c.b,a=t[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{style:{color:"rgb(".concat(n,", ").concat(r,", ").concat(i,")")},children:"useReducer Example"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"r"}),Object(u.jsx)("button",{onClick:function(){return a({type:"INCREMENT_R"})},children:"\u2795"}),Object(u.jsx)("button",{onClick:function(){return a({type:"DECREMENT_R"})},children:"\u2796"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"g"}),Object(u.jsx)("button",{onClick:function(){return a({type:"INCREMENT_G"})},children:"\u2795"}),Object(u.jsx)("button",{onClick:function(){return a({type:"DECREMENT_G"})},children:"\u2796"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{children:"b"}),Object(u.jsx)("button",{onClick:function(){return a({type:"INCREMENT_B"})},children:"\u2795"}),Object(u.jsx)("button",{onClick:function(){return a({type:"DECREMENT_B"})},children:"\u2796"})]})]})},E=function e(t){return t<=1?1:e(t-1)+e(t-2)},g=function(){var e=Object(j.useState)(1),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(j.useState)(!0),i=Object(s.a)(r,2),a=i[0],b=i[1],o=Object(j.useMemo)((function(){return E(c)}),[c]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{onClick:function(){return b(!a)},style:{color:a?"limegreen":"crimson"},children:"useMemo Example"}),Object(u.jsxs)("h2",{children:["Fibonacci of ",c," is ",o]}),Object(u.jsx)("button",{onClick:function(){return n(c+1)},children:"\u2795"})]})},C=Object(j.memo)((function(e){var t=e.compute,c=e.count;return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:["computed: ",t(c)]}),Object(u.jsxs)("h4",{children:["last re-render ",(new Date).toLocaleTimeString()]})]})})),R=function(){var e=Object(j.useState)(new Date),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(j.useState)(1),i=Object(s.a)(r,2),a=i[0],b=i[1];Object(j.useEffect)((function(){var e=setTimeout((function(){return n(new Date)}),1e3);return function(){return clearTimeout(e)}}));return Object(u.jsxs)("div",{children:[Object(u.jsxs)("h1",{children:["useCallback Example ",c.toLocaleTimeString()]}),Object(u.jsxs)("button",{onClick:function(){return b(a+1)},children:["current count: ",a]}),Object(u.jsx)(C,{compute:Object(j.useCallback)((function e(t){return t<=1?1:e(t-1)+e(t-2)}),[]),count:a})]})},N=function(){var e=Object(j.useState)(0),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(j.useState)(0),i=Object(s.a)(r,2),a=i[0],b=i[1],o=Object(j.useRef)();return Object(j.useLayoutEffect)((function(){n(o.current.clientWidth),b(o.current.clientHeight)})),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"useLayoutEffect Example"}),Object(u.jsxs)("h2",{children:["textarea width: ",c,"px"]}),Object(u.jsxs)("h2",{children:["textarea height: ",a,"px"]}),Object(u.jsx)("textarea",{onClick:function(){n(0)},ref:o})]})},y=Object(j.forwardRef)((function(e,t){var c=e.hasError,n=e.placeholder,r=e.value,s=e.update,i=Object(j.useRef)();return Object(j.useImperativeHandle)(t,(function(){return{focus:function(){i.current.focus()}}})),Object(u.jsx)("input",{ref:i,value:r,onChange:function(e){return s(e.target.value)},placeholder:n,style:{padding:"5px 15px",borderWidth:"3px",borderStyle:"solid",borderColor:c?"crimson":"#999",borderRadius:"5px",margin:"0 10px",textAlign:"center"}})})),S=function(){var e=Object(j.useState)("Seattle"),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(j.useState)("WA"),i=Object(s.a)(r,2),a=i[0],b=i[1],o=Object(j.useState)(""),l=Object(s.a)(o,2),O=l[0],x=l[1],d=Object(j.useRef)(),h=Object(j.useRef)();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"useImperativeHandle Example"}),Object(u.jsx)(y,{hasError:"city"===O,placeholder:"City",value:c,update:n,ref:d}),Object(u.jsx)(y,{hasError:"state"===O,placeholder:"State",value:a,update:b,ref:h}),Object(u.jsx)("button",{onClick:function(){return/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]+$/.test(c)?/^[A-Z]{2}$/.test(a)?(x(""),void alert("valid form!")):(x("state"),void h.current.focus()):(x("city"),void d.current.focus())},children:"Validate Form"})]})},T=function(){var e=function(){var e=Object(j.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];return Object(j.useEffect)((function(){n(Math.random()>.5)})),Object(j.useDebugValue)(c?"Is Raining":"Is Not Raining"),c}();return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"useDebugValue Example"}),Object(u.jsxs)("h2",{children:["Do you need a coat today? ",e?"yes":"maybe"]})]})};c(10);function k(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(i,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(a,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(d,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(h,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(p,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(g,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(R,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(N,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(S,{}),Object(u.jsx)("hr",{}),Object(u.jsx)(T,{})]})}var M=document.getElementById("root");r.a.render(Object(u.jsx)(k,{}),M)}},[[11,1,2]]]);
//# sourceMappingURL=main.3d243931.chunk.js.map