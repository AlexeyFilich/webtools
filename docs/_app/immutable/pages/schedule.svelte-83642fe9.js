import{S as P,i as Q,s as R,l as p,u as E,a as L,m as v,p as y,v as $,h as f,c as O,q as A,b,J as h,w as D,n as m,L as B,M as Z,e as I,K as x,N as ee,f as T,t as w,r as te,g as X,d as Y,x as le,y as se,z as oe,C as ae}from"../chunks/index-4af589cf.js";var j;(r=>{r.dayOfTheWeek=["\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A","\u0412\u0442\u043E\u0440\u043D\u0438\u043A","\u0421\u0440\u0435\u0434\u0430","\u0427\u0435\u0442\u0432\u0435\u0440\u0433","\u041F\u044F\u0442\u043D\u0438\u0446\u0430","\u0421\u0443\u0431\u0431\u043E\u0442\u0430"]})(j||(j={}));const ne=4,re=j.dayOfTheWeek.length;function K(r,l,n){const o=r.slice();return o[2]=l[n],o}function ce(r){let l,n;return{c(){l=p("li"),n=E("No professor")},l(o){l=v(o,"LI",{});var e=y(l);n=$(e,"No professor"),e.forEach(f)},m(o,e){b(o,l,e),h(l,n)},p:m,d(o){o&&f(l)}}}function ue(r){let l,n=`${r[2].professor.lastName} ${r[2].professor.firstName} ${r[2].professor.patronymic}`,o;return{c(){l=p("li"),o=E(n)},l(e){l=v(e,"LI",{});var c=y(l);o=$(c,n),c.forEach(f)},m(e,c){b(e,l,c),h(l,o)},p(e,c){c&2&&n!==(n=`${e[2].professor.lastName} ${e[2].professor.firstName} ${e[2].professor.patronymic}`)&&D(o,n)},d(e){e&&f(l)}}}function V(r){let l,n,o=`[${r[2].classType}] ${r[2].className}`,e,c,s,a=`${r[2].startTime} - ${r[2].endTime}`,t,i,u,k=r[2].auditory+"",N,C,W;function F(d,_){return d[2].professor?ue:ce}let S=F(r),g=S(r);return{c(){l=p("ul"),n=p("li"),e=E(o),c=L(),s=p("li"),t=E(a),i=L(),u=p("li"),N=E(k),C=L(),g.c(),W=L(),this.h()},l(d){l=v(d,"UL",{class:!0});var _=y(l);n=v(_,"LI",{});var H=y(n);e=$(H,o),H.forEach(f),c=O(_),s=v(_,"LI",{});var q=y(s);t=$(q,a),q.forEach(f),i=O(_),u=v(_,"LI",{});var G=y(u);N=$(G,k),G.forEach(f),C=O(_),g.l(_),W=O(_),_.forEach(f),this.h()},h(){A(l,"class","class svelte-1hv0kas")},m(d,_){b(d,l,_),h(l,n),h(n,e),h(l,c),h(l,s),h(s,t),h(l,i),h(l,u),h(u,N),h(l,C),g.m(l,null),h(l,W)},p(d,_){_&2&&o!==(o=`[${d[2].classType}] ${d[2].className}`)&&D(e,o),_&2&&a!==(a=`${d[2].startTime} - ${d[2].endTime}`)&&D(t,a),_&2&&k!==(k=d[2].auditory+"")&&D(N,k),S===(S=F(d))&&g?g.p(d,_):(g.d(1),g=S(d),g&&(g.c(),g.m(l,W)))},d(d){d&&f(l),g.d()}}}function ie(r){let l,n,o,e,c,s=r[1],a=[];for(let t=0;t<s.length;t+=1)a[t]=V(K(r,s,t));return{c(){l=p("div"),n=p("div"),o=p("h1"),e=E(r[0]),c=L();for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){l=v(t,"DIV",{});var i=y(l);n=v(i,"DIV",{class:!0});var u=y(n);o=v(u,"H1",{});var k=y(o);e=$(k,r[0]),k.forEach(f),c=O(u);for(let N=0;N<a.length;N+=1)a[N].l(u);u.forEach(f),i.forEach(f),this.h()},h(){A(n,"class","day svelte-1hv0kas")},m(t,i){b(t,l,i),h(l,n),h(n,o),h(o,e),h(n,c);for(let u=0;u<a.length;u+=1)a[u].m(n,null)},p(t,[i]){if(i&1&&D(e,t[0]),i&2){s=t[1];let u;for(u=0;u<s.length;u+=1){const k=K(t,s,u);a[u]?a[u].p(k,i):(a[u]=V(k),a[u].c(),a[u].m(n,null))}for(;u<a.length;u+=1)a[u].d(1);a.length=s.length}},i:m,o:m,d(t){t&&f(l),B(a,t)}}}function fe(r,l,n){let{dayOfWeek:o}=l,{classes:e}=l;return r.$$set=c=>{"dayOfWeek"in c&&n(0,o=c.dayOfWeek),"classes"in c&&n(1,e=c.classes)},[o,e]}class he extends P{constructor(l){super(),Q(this,l,fe,ie,R,{dayOfWeek:0,classes:1})}}async function _e(){var o;let r=Array.from({length:ne},()=>{let e={};return j.dayOfTheWeek.forEach(c=>e[c]=[]),e});const n=await(await fetch("https://iis.bsuir.by/api/v1/schedule?studentGroup=050702")).json();for(const[e,c]of Object.entries(n.schedules))for(const s of c){const a=e;s.auditories.length>1&&s.employees.length>1&&console.log("Something went wrong");const t=s.employees[0]?{lastName:s.employees[0].lastName,firstName:s.employees[0].firstName,patronymic:s.employees[0].middleName}:void 0,i={classType:s.lessonTypeAbbrev,className:`${s.subject} - ${s.subjectFullName}`,startTime:s.startLessonTime,endTime:s.endLessonTime,auditory:s.auditories[0]||"No auditory",professor:t};for(const u of s.weekNumber)(o=r[u-1][a])==null||o.push(i)}return r}function z(r,l,n){const o=r.slice();return o[2]=l[n],o}function U(r,l,n){const o=r.slice();return o[5]=l[n][0],o[6]=l[n][1],o}function de(r){return{c:m,l:m,m,p:m,i:m,o:m,d:m}}function me(r){let l,n,o=r[1],e=[];for(let s=0;s<o.length;s+=1)e[s]=M(z(r,o,s));const c=s=>w(e[s],1,1,()=>{e[s]=null});return{c(){l=p("div");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){l=v(s,"DIV",{class:!0,style:!0});var a=y(l);for(let t=0;t<e.length;t+=1)e[t].l(a);a.forEach(f),this.h()},h(){A(l,"class","scheduleGrid svelte-z9vts1"),te(l,"grid-template-columns","repeat("+re+", 1fr)")},m(s,a){b(s,l,a);for(let t=0;t<e.length;t+=1)e[t].m(l,null);n=!0},p(s,a){if(a&1){o=s[1];let t;for(t=0;t<o.length;t+=1){const i=z(s,o,t);e[t]?(e[t].p(i,a),T(e[t],1)):(e[t]=M(i),e[t].c(),T(e[t],1),e[t].m(l,null))}for(X(),t=o.length;t<e.length;t+=1)c(t);Y()}},i(s){if(!n){for(let a=0;a<o.length;a+=1)T(e[a]);n=!0}},o(s){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)w(e[a]);n=!1},d(s){s&&f(l),B(e,s)}}}function J(r){let l,n;return l=new he({props:{dayOfWeek:r[5],classes:r[6]}}),{c(){le(l.$$.fragment)},l(o){se(l.$$.fragment,o)},m(o,e){oe(l,o,e),n=!0},p:m,i(o){n||(T(l.$$.fragment,o),n=!0)},o(o){w(l.$$.fragment,o),n=!1},d(o){ae(l,o)}}}function M(r){let l,n,o=Object.entries(r[2]),e=[];for(let s=0;s<o.length;s+=1)e[s]=J(U(r,o,s));const c=s=>w(e[s],1,1,()=>{e[s]=null});return{c(){for(let s=0;s<e.length;s+=1)e[s].c();l=I()},l(s){for(let a=0;a<e.length;a+=1)e[a].l(s);l=I()},m(s,a){for(let t=0;t<e.length;t+=1)e[t].m(s,a);b(s,l,a),n=!0},p(s,a){if(a&1){o=Object.entries(s[2]);let t;for(t=0;t<o.length;t+=1){const i=U(s,o,t);e[t]?(e[t].p(i,a),T(e[t],1)):(e[t]=J(i),e[t].c(),T(e[t],1),e[t].m(l.parentNode,l))}for(X(),t=o.length;t<e.length;t+=1)c(t);Y()}},i(s){if(!n){for(let a=0;a<o.length;a+=1)T(e[a]);n=!0}},o(s){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)w(e[a]);n=!1},d(s){B(e,s),s&&f(l)}}}function pe(r){let l,n;return{c(){l=p("h1"),n=E("Loading")},l(o){l=v(o,"H1",{});var e=y(l);n=$(e,"Loading"),e.forEach(f)},m(o,e){b(o,l,e),h(l,n)},p:m,i:m,o:m,d(o){o&&f(l)}}}function ve(r){let l,n,o,e,c,s,a={ctx:r,current:null,token:null,hasCatch:!1,pending:pe,then:me,catch:de,value:1,blocks:[,,,]};return Z(r[0],a),{c(){l=L(),n=p("h1"),o=E("Schedule"),e=L(),c=I(),a.block.c(),this.h()},l(t){x('[data-svelte="svelte-aktc38"]',document.head).forEach(f),l=O(t),n=v(t,"H1",{});var u=y(n);o=$(u,"Schedule"),u.forEach(f),e=O(t),c=I(),a.block.l(t),this.h()},h(){document.title="Web Tools"},m(t,i){b(t,l,i),b(t,n,i),h(n,o),b(t,e,i),b(t,c,i),a.block.m(t,a.anchor=i),a.mount=()=>c.parentNode,a.anchor=c,s=!0},p(t,[i]){r=t,ee(a,r,i)},i(t){s||(T(a.block),s=!0)},o(t){for(let i=0;i<3;i+=1){const u=a.blocks[i];w(u)}s=!1},d(t){t&&f(l),t&&f(n),t&&f(e),t&&f(c),a.block.d(t),a.token=null,a=null}}}function ye(r){return[_e()]}class ge extends P{constructor(l){super(),Q(this,l,ye,ve,R,{})}}export{ge as default};
