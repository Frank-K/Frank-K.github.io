(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],f=0,p=[];f<i.length;f++)s=i[f],r[s]&&p.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/website/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"066a":function(t,e,n){t.exports=n.p+"img/cafe.928f9203.png"},"0a4b":function(t,e,n){},"1a03":function(t,e,n){"use strict";var a=n("5de3"),r=n.n(a);r.a},"493d":function(t,e,n){"use strict";var a=n("7613"),r=n.n(a);r.a},4967:function(t,e,n){"use strict";var a=n("5f6b"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("a45e"),o=n.n(r),s=n("85fe"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("full-page",{ref:"fullpage",attrs:{options:t.options,id:"fullpage"}},[n("div",{staticClass:"section"},[n("Landing")],1),n("div",{staticClass:"section"},[n("Intro")],1),n("div",{staticClass:"section"},[n("Work")],1),n("div",{staticClass:"section"},[n("Projects")],1),n("div",{staticClass:"section"},[n("Contact")],1),n("div",{staticClass:"section fp-auto-height"},[n("Footer")],1)])],1)},c=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.visibilityChanged,once:!0},expression:"{callback: visibilityChanged, once: true,}"}],staticClass:"landing"},[a("transition",{attrs:{name:"fade"}},[t.show?a("img",{staticStyle:{"animation-duration":"1.5s"},attrs:{src:n("bcef")}}):t._e()]),a("div",{staticClass:"text"},[a("transition",{attrs:{name:"fade"}},[t.show?a("h1",{staticClass:"title",staticStyle:{"animation-duration":"1.5s"}},[t._v(t._s(this.name))]):t._e()]),a("transition",{attrs:{name:"fade"}},[t.show?a("h4",{staticClass:"subtitle",staticStyle:{"animation-duration":"1.5s"}},[t._v(t._s(this.intro))]):t._e()])],1)],1)},l=[],f=n("cebc"),p=n("2f62"),d={name:"Landing",computed:Object(f["a"])({},Object(p["b"])(["name","intro"])),data:function(){return{show:!1}},methods:{visibilityChanged:function(t){this.show=t}}},b=d,m=(n("1a03"),n("2877")),h=Object(m["a"])(b,u,l,!1,null,"32e479ca",null),v=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"intro"},[a("div",{staticClass:"text"},[a("h4",{staticClass:"title"},[t._v(t._s(this.bio))]),a("h5",{staticClass:"subtitle"},[t._v(t._s(this.courses))])]),a("img",{attrs:{src:n("fbf5")}})])},j=[],C={name:"Intro",computed:Object(f["a"])({},Object(p["b"])(["bio","courses"]))},_=C,y=(n("493d"),Object(m["a"])(_,g,j,!1,null,"08002d08",null)),k=y.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"work"},[a("img",{attrs:{src:n("794c")}}),a("div",{staticClass:"text"},[a("h1",{staticClass:"title"},[t._v(t._s(this.work))]),a("h4",{staticClass:"subtitle",domProps:{innerHTML:t._s(this.experience)}})])])},x=[],O={name:"Work",computed:Object(f["a"])({},Object(p["b"])(["work","experience"]))},S=O,P=(n("fa30"),Object(m["a"])(S,w,x,!1,null,"46204f5e",null)),I=P.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"projects"},[a("div",{staticClass:"text"},[a("h4",{staticClass:"title",domProps:{innerHTML:t._s(this.projects)}}),a("h5",{staticClass:"subtitle",domProps:{innerHTML:t._s(this.projects2)}})]),a("img",{attrs:{src:n("066a")}})])},T=[],E={name:"Projects",computed:Object(f["a"])({},Object(p["b"])(["projects","projects2"]))},D=E,L=(n("f732"),Object(m["a"])(D,F,T,!1,null,"d114d0a0",null)),M=L.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contact"},[a("img",{attrs:{src:n("7e64")}}),a("div",{staticClass:"text"},[a("h1",{staticClass:"title",domProps:{innerHTML:t._s(this.jobs)}}),a("h4",{staticClass:"subtitle",domProps:{innerHTML:t._s(this.contact)}})])])},A=[],H={name:"Contact",computed:Object(f["a"])({},Object(p["b"])(["jobs","contact"]))},W=H,K=(n("4967"),Object(m["a"])(W,$,A,!1,null,"a56ba692",null)),J=K.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contact"},[n("p",[t._v(t._s(t.footer))])])},R=[],B={name:"Contact",computed:Object(f["a"])({},Object(p["b"])(["footer"]))},Q=B,U=(n("7ee3"),Object(m["a"])(Q,N,R,!1,null,"c850bfb0",null)),V=U.exports,q={name:"app",components:{Landing:v,Intro:k,Work:I,Projects:M,Contact:J,Footer:V},data:function(){return{options:{anchors:["Landing","Introduction","Experience","Projects","Contact","Footer"],navigation:!0,sectionsColor:["#77A6F7","#F77676","#F7B476","#76D0F7","#F776D5","#F776D5"]}}}},z=q,G=(n("034f"),Object(m["a"])(z,i,c,!1,null,null,null)),X=G.exports;n("7f7f");a["a"].use(p["a"]);var Y=new p["a"].Store({state:{name:"Frank Karunaratna",intro:"A software developer based in Toronto",bio:"I'm currently a Computer Science student at the University of Toronto.",courses:"I've taken courses in Data Structures, Algorithm Design, Software Engineering, Databases, Operating Systems, Parallel Programming, Artificial Intelligence and Web Development.",work:"I also have previous work experience as a Software Developer Intern.",experience:'I interned at <a href="http://modiface.com/">Modiface Inc.</a> in Toronto on the Web Team and Special Projects Team. During my internship I developed full stack applications and REST APIs. I used tools / technologies like Python (Flask), PHP (Lumen, Slim), Node.js + Express.js, Vue.js, MySQL, AWS (RDS, S3, EC2) and CI (Jenkins).',projects:'During my free time I\'ve worked on a variety of projects that can be found on my <a href="https://github.com/Frank-K">github.</a>',projects2:'Some projects I\'ve worked on include a <a href="https://github.com/Frank-K/Chat-Server">chat application</a> using web sockets, a <a href="https://github.com/Frank-K/Shop-API">store api</a> for a hypothetical store using Node.js with Express.js, and an application to detect plagiarism in code using python.',jobs:'I am currently looking for new grad positions starting in <span class"underline">Spring 2020</span>.',contact:'If you would like to contact me or set up a meeting, feel free to send me an email at <a href="mailto:frank.karunaratna@gmail.com">frank.karunaratna@gmail.com</a>',footer:"Created by Frank Karunaratna 🦄"},mutations:{},actions:{},getters:{name:function(t){return t.name},intro:function(t){return t.intro},bio:function(t){return t.bio},courses:function(t){return t.courses},work:function(t){return t.work},experience:function(t){return t.experience},projects:function(t){return t.projects},projects2:function(t){return t.projects2},jobs:function(t){return t.jobs},contact:function(t){return t.contact},footer:function(t){return t.footer}}});a["a"].config.productionTip=!1,a["a"].use(s["a"]),a["a"].use(o.a),new a["a"]({store:Y,render:function(t){return t(X)}}).$mount("#app")},"5de3":function(t,e,n){},"5f6b":function(t,e,n){},"64a9":function(t,e,n){},7613:function(t,e,n){},"794c":function(t,e,n){t.exports=n.p+"img/office.fb01cb36.png"},"7e64":function(t,e,n){t.exports=n.p+"img/meeting.24b701b9.png"},"7ee3":function(t,e,n){"use strict";var a=n("0a4b"),r=n.n(a);r.a},bcef:function(t,e,n){t.exports=n.p+"img/avatar2.27fb12b0.png"},e224:function(t,e,n){},f59b:function(t,e,n){},f732:function(t,e,n){"use strict";var a=n("f59b"),r=n.n(a);r.a},fa30:function(t,e,n){"use strict";var a=n("e224"),r=n.n(a);r.a},fbf5:function(t,e,n){t.exports=n.p+"img/home.ced9a391.png"}});
//# sourceMappingURL=app.c25de525.js.map