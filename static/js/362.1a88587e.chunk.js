"use strict";(self.webpackChunkreact_06_redux=self.webpackChunkreact_06_redux||[]).push([[362],{362:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(434),r="container_container__hbpDN",o="container_title__yXjoA",i=n(184),l=function(e){var t=e.title,n=e.children;return(0,i.jsxs)("div",{className:r,children:[(0,i.jsx)("h2",{className:o,children:t}),n]})},u=n(942),c=n(413),s=n(885),d=n(791),h=function(e){var t=e.initialState,n=e.onSubmit,a=(0,d.useState)((0,c.Z)({},t)),r=(0,s.Z)(a,2),o=r[0],i=r[1];return{state:o,setState:i,handleChange:function(e){var t=e.target,n=t.name,a=t.value,r=t.type,o=t.checked,l="checkbox"===r?o:a;i((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,u.Z)({},n,l))}))},handleSubmit:function(e){e.preventDefault(),n((0,c.Z)({},o)),i((0,c.Z)({},t))}}},f="form-add-book_group__h2qZ5",m="form-add-book_label__lhOuF",x="form-add-book_input__kI5LD",b={title:"",author:"",favourite:!1},v=function(e){var t=e.onSubmit,n=h({initialState:b,onSubmit:t}),a=n.state,r=n.handleChange,o=n.handleSubmit,l=a.title,u=a.author,c=a.favourite;return(0,i.jsxs)("form",{action:"",onSubmit:o,children:[(0,i.jsxs)("div",{className:f,children:[(0,i.jsx)("label",{className:m,htmlFor:"",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"}),(0,i.jsx)("input",{value:l,name:"title",onChange:r,className:x,type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"})]}),(0,i.jsxs)("div",{className:f,children:[(0,i.jsx)("label",{className:m,htmlFor:"",children:"\u0410\u0432\u0442\u043e\u0440:"}),(0,i.jsx)("input",{value:u,name:"author",onChange:r,className:x,type:"text",placeholder:"\u0410\u0432\u0442\u043e\u0440 \u043a\u043d\u0438\u0433\u0438"})]}),(0,i.jsxs)("div",{className:f,children:[(0,i.jsx)("label",{className:m,htmlFor:"",children:"\u041b\u044e\u0431\u0438\u043c\u0430\u044f:"}),(0,i.jsx)("input",{name:"favourite",checked:c,onChange:r,type:"checkbox"})]}),(0,i.jsx)("div",{className:f,children:(0,i.jsx)("button",{type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]})},p="book-list_item__-wOGI",_="book-list_btn__I4W30",j=function(e){var t=e.books,n=e.removeBook,a=t.map((function(e){var t=e.id,a=e.title,r=e.author;return(0,i.jsxs)("li",{className:p,children:[a,". \u0410\u0432\u0442\u043e\u0440: ",r,".",(0,i.jsx)("button",{type:"button",className:_,onClick:function(){return n(t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},t)}));return(0,i.jsx)("ul",{children:a})},k=n(984),N=n(605),y=n(351),S="my-books_books__JQoYc",g=function(){var e=(0,a.v9)((function(e){return e.books})),t=(0,a.v9)(y.zK),n=(0,a.I0)();return(0,i.jsxs)("div",{className:S,children:[(0,i.jsx)(l,{title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443",children:(0,i.jsx)(v,{onSubmit:function(e){var t=function(e){return{type:N.eY,payload:(0,c.Z)({id:(0,k.x0)()},e)}}(e);n(t),console.log(t)}})}),(0,i.jsxs)(l,{title:"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043d\u0438\u0433",children:[(0,i.jsx)("input",{onChange:function(e){var t,a=e.target;n((t=a.value,{type:N.YA,payload:t}))},value:t,name:"filter",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 "}),(0,i.jsx)(j,{books:e,removeBook:function(e){n(function(e){return{type:N.P,payload:e}}(e))}})]})]})},C=function(){return(0,i.jsx)("div",{className:"container",children:(0,i.jsx)(g,{})})}},351:function(e,t,n){n.d(t,{in:function(){return a},zK:function(){return r}});var a=function(e){return e.books.filter((function(e){return e.favourite}))},r=function(e){return e.filter}}}]);
//# sourceMappingURL=362.1a88587e.chunk.js.map