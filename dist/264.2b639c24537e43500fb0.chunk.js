"use strict";(self.webpackChunktodo_app=self.webpackChunktodo_app||[]).push([[264],{5264:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var r=n(6540),o=n(1448),l=n(3707),a=n(126),i=n(4073),c=n(9067),u=n(804),m=n(6990),f=n(3198),d=n(538),s=n(4137),p=n(6627),y=n(6798),b=n(4774),g=n(3884),A=n(1641),v=n(8407),E=n(889),h=n(1730);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){k(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=S(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=S(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==S(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){return function(e){if(Array.isArray(e))return T(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||P(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l,a,i=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw o}}return i}}(e,t)||P(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){if(e){if("string"==typeof e)return T(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(e,t):void 0}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var I=(0,n(8210).A)({completed:{backgroundColor:"lightgreen"},tableContainer:{maxHeight:400}});const x=function(){var e=I(),t=(0,o.wA)(),n=(0,o.d4)((function(e){return e.todos.todos})),S=C((0,r.useState)([]),2),O=S[0],k=S[1],P=C((0,r.useState)("all"),2),T=P[0],x=P[1],D=C((0,r.useState)(""),2),N=D[0],B=D[1];(0,r.useEffect)((function(){t((0,l.Tk)())}),[t]),(0,r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("localTodos"))||[];k(e)}),[]),(0,r.useEffect)((function(){localStorage.setItem("localTodos",JSON.stringify(O))}),[O]);var M=function(e){x(e)},H=function(){if(""!==N.trim()){var e=[].concat(w(n),w(O)),t={id:(e.length?Math.max.apply(Math,w(e.map((function(e){return e.id})))):0)+1,todo:N,completed:!1,userId:1};k([].concat(w(O),[t])),B("")}},J=[].concat(w(n),w(O)).filter((function(e){return"pending"===T?!e.completed:"completed"!==T||e.completed}));return r.createElement(a.A,{maxWidth:"md"},r.createElement(i.A,{variant:"h4",align:"center",gutterBottom:!0},"Todo List"),r.createElement(c.A,{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2},r.createElement(u.A,{label:"Add New Task",variant:"outlined",fullWidth:!0,value:N,onChange:function(e){return B(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&H()}}),r.createElement(m.A,{variant:"contained",color:"primary",onClick:H},"Add Task")),r.createElement(c.A,{display:"flex",justifyContent:"center",marginBottom:2},r.createElement(m.A,{variant:"all"===T?"contained":"outlined",color:"primary",onClick:function(){return M("all")},style:{marginRight:"10px"}},"All Tasks"),r.createElement(m.A,{variant:"pending"===T?"contained":"outlined",color:"secondary",onClick:function(){return M("pending")},style:{marginRight:"10px"}},"Pending"),r.createElement(m.A,{variant:"completed"===T?"contained":"outlined",color:"success",onClick:function(){return M("completed")}},"Completed")),r.createElement(f.A,{component:d.A,className:e.tableContainer},r.createElement(s.A,{stickyHeader:!0},r.createElement(p.A,null,r.createElement(y.A,null,r.createElement(b.A,null,"ID"),r.createElement(b.A,null,"Task"),r.createElement(b.A,null,"Status"),r.createElement(b.A,null,"Action"))),r.createElement(g.A,null,J.map((function(n){return r.createElement(y.A,{key:n.id,className:n.completed?e.completed:""},r.createElement(b.A,null,n.id),r.createElement(b.A,null,n.todo),r.createElement(b.A,null,n.completed?"Completed":"Pending"),r.createElement(b.A,null,r.createElement(A.A,{"aria-label":"toggle-complete",onClick:function(){return function(e,n,r){if(r)k(O.map((function(t){return t.id===e?j(j({},t),{},{completed:!n}):t})));else{var o={completed:!n};t((0,l.uy)(e,o))}}(n.id,n.completed,O.some((function(e){return e.id===n.id})))}},n.completed?r.createElement(E.A,null):r.createElement(v.A,null)),r.createElement(A.A,{"aria-label":"delete",onClick:function(){return e=n.id,void(O.some((function(e){return e.id===n.id}))?k(O.filter((function(t){return t.id!==e}))):t((0,l.Ys)(e)));var e}},r.createElement(h.A,null))))}))))))}}}]);