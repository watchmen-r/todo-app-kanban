(this["webpackJsonptodo-app-kanban"]=this["webpackJsonptodo-app-kanban"]||[]).push([[0],{74:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),c=n(27),r=n.n(c),a=(n(74),n(15)),i=n(10),d=n(5),l=n(112),j=n(9),b=n(100),p=n(111),x=n(114),u=n(115),O=n(110),f=n(108),h=n(60),g=n.n(h),m=n(2),v=Object(j.a)("div")((function(e){var t,n=e.theme;return t={position:"relative",borderRadius:n.shape.borderRadius,backgroundColor:Object(b.a)(n.palette.common.white,.15),"&:hover":{backgroundColor:Object(b.a)(n.palette.common.white,.25)},marginRight:n.spacing(2),width:"100%",display:"flex",justifyContent:"space-between"},Object(d.a)(t,n.breakpoints.up("sm"),{width:"auto"}),Object(d.a)(t,n.breakpoints.down("md"),{width:"100%",margin:0}),t})),k=Object(j.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),C=Object(j.a)(f.a)((function(e){var t,n=e.theme;return{color:"inherit","& .MuiInputBase-input":(t={padding:n.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(n.spacing(4),")"),transition:n.transitions.create("width"),width:"100%"},Object(d.a)(t,n.breakpoints.up("md"),{width:"auto"}),Object(d.a)(t,n.breakpoints.down("md"),{width:"10ch"}),t)}})),S=function(e){var t=e.todo,n=e.setTodo,s=e.handleTodo,c=e.handleClear,r=Object(o.useState)(!1),a=Object(i.a)(r,2),d=a[0],j=a[1];return Object(m.jsx)(p.a,{sx:{flexGrow:1},children:Object(m.jsx)(l.a,{position:"static",sx:{backgroundColor:"#6988A9"},children:Object(m.jsxs)(x.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(m.jsx)(u.a,{variant:"h6",noWrap:!0,component:"div",sx:{display:{xs:"none",sm:"block"},ml:10,fontWeight:700},children:"\u304b\u3093\u3070\u3093\u30a2\u30d7\u30ea"}),Object(m.jsxs)(v,{children:[Object(m.jsx)(k,{children:Object(m.jsx)(g.a,{})}),Object(m.jsx)(C,{placeholder:"\u30bf\u30b9\u30af\u5165\u529b",inputProps:{"aria-label":"search"},value:t,onCompositionEnd:function(){return j(!1)},onCompositionStart:function(){return j(!0)},onChange:function(e){return n(e.target.value)},onKeyDown:function(e){d||"Enter"===e.key&&s(e)}}),Object(m.jsxs)(p.a,{children:[Object(m.jsx)(O.a,{variant:"text",sx:{color:"#f1f1f1",pr:0,pl:0},onClick:function(e){s(e)},children:"\u767b\u9332"}),Object(m.jsx)(O.a,{variant:"text",sx:{color:"#f1f1f1",pr:0,pl:0},onClick:function(e){c()},children:"\u30af\u30ea\u30a2"})]})]}),Object(m.jsx)(p.a,{sx:{width:180,display:{xs:"none",sm:"block"}}})]})})})},T=n(19),w=n(113),y=n(116),I=n(24),P=n(62),E=n.n(P),J=n(117),L=function(e){var t=e.index,n=e.todo,o=e.todos,s=e.setTodos;return Object(m.jsx)(I.b,{draggableId:n.id.toString(),index:t,children:function(e,t){return Object(m.jsx)("div",Object(T.a)(Object(T.a)(Object(T.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:Object(m.jsx)(y.a,{sx:{minWidth:275,backgroundColor:"#6988A9"},children:Object(m.jsxs)(p.a,{sx:{display:"flex",justifyContent:"space-between",p:1,m:1,backgroundColor:"#6988A9"},children:[Object(m.jsx)(u.a,{variant:"h6",component:"div",sx:{mt:.5,color:"#f1f1f1"},children:n.todo}),Object(m.jsx)(J.a,{className:"icon",onClick:function(){return e=n.id,void s(o.filter((function(t){return t.id!==e})));var e},children:Object(m.jsx)(E.a,{})})]})})}))}})},N=function(e){var t=e.todos,n=e.setTodos,o=e.progressTasks,s=e.setProgressTasks,c=e.completedTasks,r=e.setCompletedTasks;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(p.a,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap","& > :not(style)":{m:3,width:300,height:300}},children:[Object(m.jsx)(I.c,{droppableId:"TodosList",children:function(e,o){return Object(m.jsx)("div",Object(T.a)(Object(T.a)({ref:e.innerRef},e.droppableProps),{},{children:Object(m.jsxs)(w.a,{elevation:3,children:[Object(m.jsx)(p.a,{sx:{p:1},children:Object(m.jsx)(u.a,{sx:{fontSize:20,m:2,fontWeight:700},color:"text.secondary",gutterBottom:!0,children:"\u672a\u51e6\u7406"})}),t.map((function(e,o){return Object(m.jsx)(p.a,{sx:{p:1},children:Object(m.jsx)(L,{index:o,todo:e,todos:t,setTodos:n})})})),e.placeholder]})}))}}),Object(m.jsx)(I.c,{droppableId:"ProgressList",children:function(e,t){return Object(m.jsx)("div",Object(T.a)(Object(T.a)({ref:e.innerRef},e.droppableProps),{},{children:Object(m.jsxs)(w.a,{elevation:3,children:[Object(m.jsx)(p.a,{sx:{p:1},children:Object(m.jsx)(u.a,{sx:{fontSize:20,m:2,fontWeight:700},color:"text.secondary",gutterBottom:!0,children:"\u9032\u884c\u4e2d"})}),o.map((function(e,t){return Object(m.jsx)(p.a,{sx:{p:1},children:Object(m.jsx)(L,{index:t,todo:e,todos:o,setTodos:s})})})),e.placeholder]})}))}}),Object(m.jsx)(I.c,{droppableId:"CompletedList",children:function(e,t){return Object(m.jsx)("div",Object(T.a)(Object(T.a)({ref:e.innerRef},e.droppableProps),{},{children:Object(m.jsxs)(w.a,{elevation:3,children:[Object(m.jsx)(p.a,{sx:{p:1},children:Object(m.jsx)(u.a,{sx:{fontSize:20,m:2,fontWeight:700},color:"text.secondary",gutterBottom:!0,children:"\u5b8c\u4e86"})}),c.map((function(e,t){return Object(m.jsx)(p.a,{sx:{p:1},children:Object(m.jsx)(L,{index:t,todo:e,todos:c,setTodos:r})})})),e.placeholder]})}))}})]})})};var R=function(){var e=Object(o.useState)(""),t=Object(i.a)(e,2),n=t[0],s=t[1],c=Object(o.useState)([]),r=Object(i.a)(c,2),d=r[0],l=r[1],j=Object(o.useState)([]),b=Object(i.a)(j,2),p=b[0],x=b[1],u=Object(o.useState)([]),O=Object(i.a)(u,2),f=O[0],h=O[1];return Object(o.useEffect)((function(){var e=localStorage.getItem("localTodos"),t=localStorage.getItem("localProgress"),n=localStorage.getItem("localCompleted");null!==e&&l(JSON.parse(e)),null!==t&&x(JSON.parse(t)),null!==n&&h(JSON.parse(n))}),[]),Object(o.useEffect)((function(){localStorage.setItem("localTodos",JSON.stringify(d))}),[d]),Object(o.useEffect)((function(){localStorage.setItem("localProgress",JSON.stringify(p))}),[p]),Object(o.useEffect)((function(){localStorage.setItem("localCompleted",JSON.stringify(f))}),[f]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(S,{todo:n,setTodo:s,handleTodo:function(e){if(e.preventDefault(),n){var t=[].concat(Object(a.a)(d),[{id:Date.now(),todo:n,isDone:!1}]);l(t),s("")}},handleClear:function(){s(""),l([]),x([]),h([])}}),Object(m.jsx)(I.a,{onDragEnd:function(e){var t=e.destination,n=e.source;if(console.log(e),t&&(t.droppableId!==n.droppableId||t.index!==n.index)){var o,s=Object(a.a)(d),c=Object(a.a)(p),r=Object(a.a)(f);"TodosList"===n.droppableId?(o=s[n.index],s.splice(n.index,1)):"ProgressList"===n.droppableId?(o=c[n.index],c.splice(n.index,1)):(o=r[n.index],r.splice(n.index,1)),"TodosList"===t.droppableId?s.splice(t.index,0,o):"ProgressList"===t.droppableId?c.splice(t.index,0,o):r.splice(t.index,0,o),l(s),x(c),h(r)}},children:Object(m.jsx)(N,{todos:d,setTodos:l,progressTasks:p,setProgressTasks:x,completedTasks:f,setCompletedTasks:h})})]})};r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.806de3e5.chunk.js.map