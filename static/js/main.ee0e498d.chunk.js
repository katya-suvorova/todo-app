(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var c,r=n(20),a=n.n(r),o=(n(30),n(31),n(32),n(12)),l=n(2),s=n(3),i=function(){return Object(s.jsx)("div",{className:"todoapp",children:Object(s.jsx)(l.b,{})})},u=n(19),d=n(8),p=n(4),j=n.n(p),b=n(6),f=n(5),h=n(9),O=n.n(h),m=n(0);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(c||(c={}));var x=function(e){var t=e.filterType,n=e.setFilterType,r=function(e){return function(){n(e)}};return Object(s.jsxs)("ul",{className:"filters","data-cy":"todosFilter",children:[Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/",className:O()({selected:t===c.All}),onClick:r(c.All),children:"All"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/active",className:O()({selected:t===c.Active}),onClick:r(c.Active),children:"Active"})}),Object(s.jsx)("li",{children:Object(s.jsx)(o.b,{to:"/completed",className:O()({selected:t===c.Completed}),onClick:r(c.Completed),children:"Completed"})})]})},v=function(e){var t=e.countNotCompleted,n=e.hasCompleted,c=e.filterType,r=e.setFilterType,a=e.handleClearCompleted;return Object(s.jsxs)("footer",{className:"footer",children:[Object(s.jsx)("span",{className:"todo-count","data-cy":"todosCounter",children:"".concat(t," items left")}),Object(s.jsx)(x,{filterType:c,setFilterType:r}),n&&Object(s.jsx)("button",{type:"button",className:"clear-completed",onClick:a,children:"Clear completed"})]})},N=function(e){var t=e.todo,n=e.deleteTodo,c=e.changeCheckbox,r=e.changeTitle,a=t.id,o=t.title,l=t.completed,i=Object(m.useState)(!1),u=Object(f.a)(i,2),d=u[0],p=u[1],j=Object(m.useState)(o),b=Object(f.a)(j,2),h=b[0],x=b[1],v=function(){""!==h?(o!==h&&r(a,h),p(!1)):n(a)};return Object(s.jsxs)("li",{className:O()({completed:l,editing:d}),children:[Object(s.jsxs)("div",{className:"view",children:[Object(s.jsx)("input",{type:"checkbox",className:"toggle",id:"toggle-view",checked:l,onChange:function(){c(a,l)}}),Object(s.jsx)("label",{onDoubleClick:function(){p(!0)},htmlFor:"toggle-view",children:o}),Object(s.jsx)("button",{type:"button","aria-label":"delete-button",className:"destroy","data-cy":"deleteTodo",onClick:function(){n(a)}})]}),d&&Object(s.jsx)("input",{type:"text",className:"edit",placeholder:"Edit todo",value:h,onChange:function(e){x(e.target.value)},onBlur:v,onKeyUp:function(e){"Escape"===e.key&&(p(!1),x(o)),"Enter"!==e.key&&""!==e.key||v()}})]})},g=function(e){var t=e.todos,n=e.deleteTodo,c=e.changeCheckbox,r=e.changeTitle;return Object(s.jsx)("ul",{className:"todo-list","data-cy":"todosList",children:t.map((function(e){return Object(s.jsx)(N,{todo:e,deleteTodo:n,changeCheckbox:c,changeTitle:r},e.id)}))})},y="https://mate.academy/students-api";function k(e){return new Promise((function(t){setTimeout(t,e)}))}function C(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:t};return n&&(c.body=JSON.stringify(n),c.headers={"Content-Type":"application/json; charset=UTF-8"}),k(300).then((function(){return fetch(y+e,c)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var T,E=function(e){return C(e)},w=function(e,t){return C(e,"POST",t)},A=function(e,t){return C(e,"PATCH",t)},D=function(e){return C(e,"DELETE")},S=function(e){return D("/todos/".concat(e))},U=function(e,t){return A("/todos/".concat(e),t)};!function(e){e.NONE="",e.ADD="Unable to add a todo",e.DELETE="Unable to delete a todo",e.LOAD="Unable to load a todo",e.INPUT="Title can't be empty",e.PATCH="Unable to update a todo",e.LoadUser="Unable to load a user"}(T||(T={}));var F=function(e){var t=e.error,n=Object(m.useState)(!0),c=Object(f.a)(n,2),r=c[0],a=c[1];return Object(s.jsxs)("div",{className:O()("notification is-danger is-light has-text-weight-normal",{hidden:!r}),children:[Object(s.jsx)("button",{type:"button",className:"delete","aria-label":"Mute volume",onClick:function(){a(!1)}}),t]})},L=function(){var e=Object(m.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(m.useState)(""),o=Object(f.a)(a,2),l=o[0],i=o[1],p=Object(m.useState)(c.All),h=Object(f.a)(p,2),x=h[0],N=h[1],y=Object(m.useState)(T.NONE),k=Object(f.a)(y,2),C=k[0],A=k[1],D=Object(m.useState)(null),L=Object(f.a)(D,2),P=L[0],I=L[1],H=n.some((function(e){return e.completed})),J=n.filter((function(e){return!e.completed})),B=n.filter((function(e){return e.completed})),M=n.every((function(e){return e.completed})),G=J.length,K=10278,W=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(T.NONE),e.prev=1,e.next=4,E("/users/".concat(K));case 4:t=e.sent,I(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),A(T.LoadUser);case 11:return e.prev=11,setTimeout((function(){return A(T.NONE)}),3e3),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(T.NONE),e.prev=1,e.next=4,E("/todos?userId=".concat(K));case 4:t=e.sent,r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),A(T.LOAD);case 11:return e.prev=11,setTimeout((function(){return A(T.NONE)}),3e3),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();Object(m.useEffect)((function(){W(),q()}),[]);var z=n.filter((function(e){switch(x){case c.Active:return!e.completed;case c.Completed:return e.completed;default:return e}})),Q=Object(m.useCallback)(function(){var e=Object(b.a)(j.a.mark((function e(t){var n,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A(T.NONE),e.prev=1,t.trim()){e.next=5;break}return A(T.INPUT),e.abrupt("return");case 5:return n={userId:K,title:t,completed:!1},e.next=8,w("/todos",n);case 8:c=e.sent,r((function(e){return[].concat(Object(d.a)(e),[c])})),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),A(T.ADD);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),[]),R=Object(m.useCallback)(function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(T.NONE),e.prev=1,e.next=4,S(t);case 4:r((function(e){return e.filter((function(e){return e.id!==t}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),A(T.DELETE);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),[]),V=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(T.NONE),e.prev=1,e.next=4,U(t,{completed:!n});case 4:r((function(e){return e.map((function(e){return e.id!==t?e:Object(u.a)(Object(u.a)({},e),{},{completed:!n})}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),A(T.PATCH);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(j.a.mark((function e(t,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(T.NONE),e.prev=1,e.next=4,U(t,{title:n});case 4:r((function(e){return e.map((function(e){return e.id!==t?e:Object(u.a)(Object(u.a)({},e),{},{title:n})}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),A(T.PATCH);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("h1",{children:"".concat(P?"".concat(P.name,"'s"):""," todos")}),Object(s.jsx)("form",{onSubmit:function(e){e.preventDefault(),""!==l&&Q(l),i("")},children:Object(s.jsx)("input",{type:"text","data-cy":"createTodo",className:"new-todo",placeholder:"What needs to be done?",value:l,onChange:function(e){i(e.target.value)}})})]}),Object(s.jsxs)("section",{className:"main",children:[n.length>0&&Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("input",{type:"checkbox",id:"toggle-all",className:O()("toggle-all",{"is-active":M}),"data-cy":"toggleAll",checked:M,onChange:function(){0===J.length?B.forEach((function(e){return V(e.id,e.completed)})):J.forEach((function(e){return V(e.id,e.completed)}))}}),Object(s.jsx)("label",{htmlFor:"toggle-all",children:"Mark all as complete"})]}),Object(s.jsx)(g,{todos:z,deleteTodo:R,changeCheckbox:V,changeTitle:X})]}),n.length>0&&Object(s.jsx)(v,{countNotCompleted:G,hasCompleted:H,filterType:x,setFilterType:N,handleClearCompleted:function(){B.forEach((function(e){return R(e.id)}))}}),C&&Object(s.jsx)(F,{error:C})]})};a.a.render(Object(s.jsx)(o.a,{children:Object(s.jsx)(l.e,{children:Object(s.jsxs)(l.c,{path:"/",element:Object(s.jsx)(i,{}),children:[Object(s.jsx)(l.c,{path:"home",element:Object(s.jsx)(l.a,{to:"/",replace:!0})}),Object(s.jsx)(l.c,{index:!0,element:Object(s.jsx)(L,{})}),Object(s.jsx)(l.c,{path:"active",element:Object(s.jsx)(L,{})}),Object(s.jsx)(l.c,{path:"completed",element:Object(s.jsx)(L,{})})]})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.ee0e498d.chunk.js.map