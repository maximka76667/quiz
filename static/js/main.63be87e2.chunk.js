(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(16),i=n.n(a),o=(n(22),n(7)),u=n(8),r=n(2),j=n(1);function l(e){return Object(j.jsxs)("div",{className:"result",children:[Object(j.jsx)("p",{children:e.result?"\u0412\u044b \u0432\u044b\u0438\u0433\u0440\u0430\u043b\u0438":"\u0412\u044b \u043f\u0440\u043e\u0438\u0433\u0440\u0430\u043b\u0438"}),Object(j.jsx)(u.b,{to:"/game",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0441\u043d\u0430\u0447\u0430\u043b\u0430"}),Object(j.jsx)(u.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e"})]})}var b=function(){var e=s.a.useState(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=s.a.useState(""),i=Object(o.a)(a,2),b=i[0],h=i[1],d=s.a.useState(""),O=Object(o.a)(d,2),f=O[0],m=O[1],x=s.a.useState(!1),p=Object(o.a)(x,2),g=p[0],_=p[1],k=s.a.useState(0),v=Object(o.a)(k,2),w=v[0],q=v[1],N=s.a.useState(0),S=Object(o.a)(N,2),T=S[0],C=S[1],z=s.a.useState(""),y=Object(o.a)(z,2),E=y[0],F=y[1],D=s.a.useState(null),M=Object(o.a)(D,2),B=M[0],I=M[1],J=[{question:"\u041a\u0430\u043a \u0432\u0430\u0441 \u0437\u043e\u0432\u0443\u0442?",answer:"\u041c\u0430\u043a\u0441\u0438\u043c"},{question:"\u0421\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u0430\u043c \u043b\u0435\u0442?",answer:"17"},{question:"\u0412\u0430\u0448 \u0433\u043e\u0440\u043e\u0434?",answer:"\u0410\u0441\u0442\u0430\u043d\u0430"},{question:"\u0412\u0430\u0448 \u0434\u043e\u043c?",answer:"\u0411\u043e\u043b\u044c\u0448\u043e\u0439"},{question:"\u0420\u043e\u0441\u0442?",answer:"180"},{question:"\u0421\u0442\u043e\u043b\u0438\u0446\u0430 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430?",answer:"\u041d\u0443\u0440-\u0421\u0443\u043b\u0442\u0430\u043d"}];function L(e){e.preventDefault(),e.target.value===f?(_(!0),q(w+1),F("\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"),setTimeout((function(){_(!1),h(""),F("")}),1e3)):_(!1)}var P=function(){console.log("\u0412\u043e\u043f\u0440\u043e\u0441 \u0438\u0437\u043c\u0435\u043d\u0435\u043d"),setTimeout((function(){!function(e,t){c(e[t].question),m(e[t].answer)}(J,function(e){return Math.floor(e.length*Math.random())}(J))}),1e3)};return s.a.useEffect((function(){P(),console.log("\u0421\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d...")}),[]),s.a.useEffect((function(){g&&P()}),[g]),s.a.useEffect((function(){setTimeout((function(){T>=3&&w<3?(window.location.href="/quiz/#/game/result",q(0),C(0),I(!1)):w>=3&&T<3&&(window.location.href="/quiz/#/game/result",q(0),C(0),I(!0))}),1e3)}),[T,w]),Object(j.jsxs)("div",{className:"page",children:[Object(j.jsx)("header",{children:Object(j.jsx)(u.b,{to:"/",children:Object(j.jsx)("h1",{className:"heading",children:"Quiz"})})}),Object(j.jsx)("main",{className:"content",children:Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",children:Object(j.jsx)("div",{className:"game-menu",children:Object(j.jsx)(u.b,{to:"/game",children:"\u041d\u0430\u0447\u0430\u0442\u044c \u0438\u0433\u0440\u0443"})})}),Object(j.jsx)(r.a,{exact:!0,path:"/game",children:Object(j.jsxs)("div",{className:"task",children:[Object(j.jsx)("h2",{className:"task__question ".concat(g?"task__question_correct":""),children:n}),Object(j.jsx)("p",{className:"task__response",children:E}),Object(j.jsx)("form",{className:"task__form",onSubmit:L,children:Object(j.jsx)("input",{className:"task__input ".concat(g?"task__input_correct":""),type:"text",placeholder:"\u041e\u0442\u0432\u0435\u0442",onChange:function(e){h(e.target.value),L(e)},onKeyDown:function(e){13===e.keyCode&&e.target.value!==f&&(C(T+1),F(f),setTimeout((function(){P(),F("")}),1e3))},value:b})}),Object(j.jsxs)("p",{className:"task__correct-count",children:["\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432: ",Object(j.jsx)("span",{children:w})]}),Object(j.jsxs)("p",{className:"task__incorrect-count",children:["\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0432\u0435\u0442\u043e\u0432: ",Object(j.jsx)("span",{children:T})]}),Object(j.jsx)("button",{className:"task__skip",onClick:function(){P(),C(T+1),F(f),P(),setTimeout((function(){F("")}),1e3)},children:"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"})]})}),Object(j.jsx)(r.a,{exact:!0,path:"/game/result",children:Object(j.jsx)(l,{result:B})})]})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(u.a,{children:Object(j.jsx)(b,{})})}),document.getElementById("root")),h()}},[[29,1,2]]]);
//# sourceMappingURL=main.63be87e2.chunk.js.map