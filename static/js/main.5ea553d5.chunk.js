(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(4),o=n.n(a),i=(n(9),n(2)),u=n(0);var r=function(){var e=c.a.useState(""),t=Object(i.a)(e,2),n=t[0],s=t[1],a=c.a.useState(""),o=Object(i.a)(a,2),r=o[0],l=o[1],j=c.a.useState(!1),f=Object(i.a)(j,2),b=f[0],h=f[1],d=c.a.useState(0),m=Object(i.a)(d,2),O=m[0],_=m[1],p=c.a.useState(0),x=Object(i.a)(p,2),g=x[0],k=x[1],v=c.a.useState(""),N=Object(i.a)(v,2),q=N[0],w=N[1],S=[{question:"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442?",answer:"\u041c\u0430\u043a\u0441\u0438\u043c"},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c \u043b\u0435\u0442?",answer:"17"},{question:"\u0412\u0430\u0448 \u0433\u043e\u0440\u043e\u0434?",answer:"\u0410\u0441\u0442\u0430\u043d\u0430"},{question:"\u0412\u0430\u0448 \u0434\u043e\u043c?",answer:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439"},{question:"\u0420\u043e\u0441\u0442?",answer:"180"}];function T(e){e.preventDefault(),e.target.value===r?setTimeout((function(){h(!0),_(O+1),e.target.value="",w("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"),setTimeout((function(){h(!1),w("")}),1e3)}),500):h(!1)}var C=function(){console.log("\u0412\u043e\u043f\u0440\u043e\u0441 \u0438\u0437\u043c\u0435\u043d\u0435\u043d"),setTimeout((function(){!function(e,t){s(e[t].question),l(e[t].answer)}(S,function(e){return Math.floor(e.length*Math.random())}(S))}),1e3)};return c.a.useEffect((function(){C(),console.log("\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d...")}),[]),c.a.useEffect((function(){b&&C()}),[b]),Object(u.jsx)("div",{className:"page",children:Object(u.jsxs)("main",{className:"content",children:[Object(u.jsx)("h1",{className:"heading",children:"Quiz"}),Object(u.jsxs)("div",{className:"task",children:[Object(u.jsx)("h2",{className:"task__question ".concat(b?"task__question_correct":""),children:n}),Object(u.jsx)("p",{className:"task__response",children:q}),Object(u.jsx)("form",{className:"task__form",onSubmit:T,children:Object(u.jsx)("input",{className:"task__input ".concat(b?"task__input_correct":""),type:"text",placeholder:"\u041e\u0442\u0432\u0435\u0442",onChange:function(e){T(e)},onKeyDown:function(e){13===e.keyCode&&e.target.value!==r&&(k(g+1),w(r),C(),setTimeout((function(){w("")}),1e3))}})}),Object(u.jsxs)("p",{className:"task__correct-count",children:["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432: ",Object(u.jsx)("span",{children:O})]}),Object(u.jsxs)("p",{className:"task__incorrect-count",children:["\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432: ",Object(u.jsx)("span",{children:g})]}),Object(u.jsx)("button",{className:"task__skip",onClick:function(){C(),k(g+1),w(r),C(),setTimeout((function(){w("")}),1e3)},children:"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"})]})]})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(r,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.5ea553d5.chunk.js.map