(this["webpackJsonpfirst-react-app"]=this["webpackJsonpfirst-react-app"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(17),r=a.n(n),i=(a(25),a(19)),l=a(20),o=(a.p,a(26),a(9)),d=a(0);function b(e){return Object(d.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(d.jsxs)("div",{className:"container-fluid",children:[Object(d.jsx)(o.b,{className:"navbar-brand",to:"/firstReactApp/",children:e.Mytitle}),Object(d.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(d.jsx)("span",{className:"navbar-toggler-icon"})}),Object(d.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(d.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{className:"nav-link",to:"/firstReactApp/about",children:"About"})})]}),e.searchBar?Object(d.jsxs)("form",{className:"d-flex",children:[Object(d.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(d.jsx)("button",{className:"btn btn-outline-primary",type:"submit",children:"Search"})]}):""]})]})})}b.defaultProps={Mytitle:"Hello TODO",searchBar:!1};var j,h=a(7);function m(e){return Object(d.jsx)("div",{className:"card m-3",style:{borderRadius:"10px"},children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:e.title}),Object(d.jsx)("p",{className:"card-text",children:e.disc}),Object(d.jsx)("a",{href:"#",className:"btn btn-primary",onClick:function(){e.Ondelete(e.mainItem)},children:"Delete"})]})})}var p=j=function(e){var t=e.todos;return 0===t.length?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"d-grid gap-2 col-6 my-3 mx-auto rounded border border-primary",children:Object(d.jsx)("h3",{className:" text-center m-3",style:{color:"#0d6efd"},children:"No TODO to display"})})}):t.map((function(t){return Object(d.jsx)(m,{title:t.work_title,mainItem:t,disc:t.work_discription,Ondelete:function(t){e.Ondelete(t)}},t.id)}))};function u(){return Object(d.jsx)("footer",{className:"container-fluid bg-dark my-0 mx-0 text-light",style:{display:"flex",position:"relative",bottom:0,padding:0,width:"100vw !important",justifyContent:"center",placeItems:"center",height:"10vh"},children:Object(d.jsx)("p",{className:"text-center",children:"Copyright \xa9 TODOs list App"})})}function O(e){return Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("div",{className:"card",style:{borderRadius:"10px"},children:[Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h5",{className:"card-title",children:"Add TODO"}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{className:"form-label",children:"Work Title"}),Object(d.jsx)("input",{type:"email",className:"form-control",id:"todo_work"})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{className:"form-label",children:"Discription"}),Object(d.jsx)("textarea",{className:"form-control",id:"todo_discription",rows:"3"})]})]}),Object(d.jsxs)("a",{id:"button",className:"btn btn-primary m-3 ",style:{width:"160px",textAlign:"justify"},onClick:function(){var t=document.getElementById("todo_work").value,a=document.getElementById("todo_discription").value,c={id:e.list.length+1,work_title:t,work_discription:a};t&&a?(e.onchange(c),document.getElementById("todo_work").value="",document.getElementById("todo_discription").value=""):alert("Work or discription cannot be empty!!!")},children:[Object(d.jsxs)("svg",{width:"20",height:"20",fill:"currentColor",style:{transform:"scale(1.3)"},className:"d-inline  mr-3 pl-2",children:[Object(d.jsx)("path",{d:"M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),Object(d.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})]}),"\xa0 Add to List"]})]})})}j.propTypes={todos:a.n(h).a.array};var x=a(2);function f(){return Object(d.jsxs)("div",{style:{minHeight:"85vh"},children:[Object(d.jsx)("h1",{className:"m-3 fs-1 text-center",children:"About"}),Object(d.jsx)("div",{className:"text-center lh-lg",children:Object(d.jsx)("p",{className:"m-5 fs-5 font-monospace  position-absolute",style:{height:"50vh",overflowY:"scroll"},children:"This is about page of my todo app. Now this the first time I'am using react, well actually I'am following tutorial and learning the basics of React I'am amazed by the routing feature of React. This power of react helps to create WebApps flawlessly and Enjoyfully."})})]})}var v=function(){window.innerHeight;var e=Object(c.useState)(localStorage.Todos?JSON.parse(localStorage.Todos):[]),t=Object(l.a)(e,2),a=t[0],s=t[1];return Object(c.useEffect)((function(){localStorage.Todos=JSON.stringify(a)}),[a]),Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b,{Mytitle:"TODOs List"}),Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{exact:!0,path:"/firstReactApp/",children:Object(d.jsxs)("div",{id:"todowrap",children:[Object(d.jsx)(O,{list:a,onchange:function(e){var t;t=e,s([].concat(Object(i.a)(a),[t]))}}),Object(d.jsx)(p,{todos:a,Ondelete:function(e){!function(e){console.log("delete todo",e),s(a.filter((function(t){return t!=e})))}(e)}})]})}),Object(d.jsx)(x.a,{exact:!0,path:"/firstReactApp/about",children:Object(d.jsx)(f,{})})]}),Object(d.jsx)(u,{})]})},g=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,34)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.a78d9ca5.chunk.js.map