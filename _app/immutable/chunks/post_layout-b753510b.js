import{S as z,i as G,s as Q,k as I,l as O,m as P,h as g,n as h,b as L,D as E,E as J,F as ne,o as oe,a0 as fe,q as ce,a as H,r as ue,c as M,G as V,H as de,u as me,f as v,t as b,e as T,g as U,d as W,v as K,w as A,x as S,y as N,z as B,I as R,L as X,M as Y,N as re,O as se,P as ie,Q as ae}from"./index-cde6aa07.js";import{t as _e}from"./posts-13c6fd15.js";import{f as C}from"./title-ebf1743c.js";import{P as he}from"./post_card-f6d5db42.js";import{H as ge,F as pe}from"./footer-5e2520ed.js";function Z(i,e,n){const l=i.slice();return l[5]=e[n].depth,l[6]=e[n].title,l[7]=e[n].slug,l}function $(i){let e,n,l=i[6]+"",t,s,r,f,a,c,d;function w(){return i[4](i[7])}return{c(){e=I("li"),n=I("span"),t=ce(l),f=H(),this.h()},l(m){e=O(m,"LI",{id:!0,class:!0});var u=P(e);n=O(u,"SPAN",{dir:!0,id:!0,class:!0});var D=P(n);t=ue(D,l),D.forEach(g),f=M(u),u.forEach(g),this.h()},h(){h(n,"dir","ltr"),h(n,"id",s=`toc-link-${i[7]}`),h(n,"class",r="cursor-pointer border-l-4 border-transparent transition-all hover:border-primary hover:bg-base-content hover:bg-opacity-10 active:bg-primary active:text-primary-content active:font-bold pr-4 "+(i[5]<=2?"py-3":"py-2")),V(n,"pl-4",i[5]<=2),V(n,"pl-8",i[5]===3),V(n,"pl-12",i[5]===4),V(n,"pl-16",i[5]===5),V(n,"pl-20",i[5]===6),h(e,"id",a=`toc-item-${i[7]}`),h(e,"class","flex flex-col")},m(m,u){L(m,e,u),E(e,n),E(n,t),E(e,f),c||(d=de(n,"click",w),c=!0)},p(m,u){i=m,u&1&&l!==(l=i[6]+"")&&me(t,l),u&1&&s!==(s=`toc-link-${i[7]}`)&&h(n,"id",s),u&1&&r!==(r="cursor-pointer border-l-4 border-transparent transition-all hover:border-primary hover:bg-base-content hover:bg-opacity-10 active:bg-primary active:text-primary-content active:font-bold pr-4 "+(i[5]<=2?"py-3":"py-2"))&&h(n,"class",r),u&1&&V(n,"pl-4",i[5]<=2),u&1&&V(n,"pl-8",i[5]===3),u&1&&V(n,"pl-12",i[5]===4),u&1&&V(n,"pl-16",i[5]===5),u&1&&V(n,"pl-20",i[5]===6),u&1&&a!==(a=`toc-item-${i[7]}`)&&h(e,"id",a)},d(m){m&&g(e),c=!1,d()}}}function ve(i){let e,n,l,t=i[0],s=[];for(let r=0;r<t.length;r+=1)s[r]=$(Z(i,t,r));return{c(){e=I("aside"),n=I("nav"),l=I("ul");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=O(r,"ASIDE",{class:!0});var f=P(e);n=O(f,"NAV",{id:!0,"aria-label":!0,dir:!0,class:!0});var a=P(n);l=O(a,"UL",{dir:!0,id:!0});var c=P(l);for(let d=0;d<s.length;d+=1)s[d].l(c);c.forEach(g),a.forEach(g),f.forEach(g),this.h()},h(){h(l,"dir","ltr"),h(l,"id","toc-list-root"),h(n,"id","post-toc"),h(n,"aria-label","TableOfContent"),h(n,"dir","rtl"),h(n,"class","max-h-[calc(100vh-12rem)] overflow-y-hidden hover:overflow-y-auto"),h(e,"class","sticky top-16 py-8")},m(r,f){L(r,e,f),E(e,n),E(n,l);for(let a=0;a<s.length;a+=1)s[a].m(l,null)},p(r,[f]){if(f&1){t=r[0];let a;for(a=0;a<t.length;a+=1){const c=Z(r,t,a);s[a]?s[a].p(c,f):(s[a]=$(c),s[a].c(),s[a].m(l,null))}for(;a<s.length;a+=1)s[a].d(1);s.length=t.length}},i:J,o:J,d(r){r&&g(e),ne(s,r)}}}function be(i,e,n){let{toc:l}=e,t=[],s=!0,r=[];oe(()=>{if(window.screen.availWidth>=1280){const a=new IntersectionObserver(d=>d.forEach(w=>w.isIntersecting?t.push(w.target.id):n(1,t=t.filter(m=>m!==w.target.id))),{rootMargin:"-64px 0px 0px 0px"}),c=new IntersectionObserver(d=>n(2,s=d[0].isIntersecting));Array.from(document.querySelectorAll("main h2, main h3, main h4, main h5, main h6")).forEach(d=>a.observe(d)),c.observe(document.getElementsByTagName("main")[0])}}),fe(()=>{typeof headingsObserver<"u"&&headingsObserver.disconnect(),typeof articleObserver<"u"&&articleObserver.disconnect()});const f=a=>document.getElementById(a).scrollIntoView({behavior:"smooth"});return i.$$set=a=>{"toc"in a&&n(0,l=a.toc)},i.$$.update=()=>{i.$$.dirty&2&&t.length>0&&n(3,r=t),i.$$.dirty&4&&s===!1&&n(3,r=[]),i.$$.dirty&9&&r&&l.forEach(a=>{var c,d;return r.includes(a.slug)?(c=document.getElementById(`toc-link-${a.slug}`))==null?void 0:c.classList.add("!border-accent"):(d=document.getElementById(`toc-link-${a.slug}`))==null?void 0:d.classList.remove("!border-accent")})},[l,t,s,r,f]}class ye extends z{constructor(e){super(),G(this,e,be,ve,Q,{toc:0})}}function ee(i,e,n){const l=i.slice();return l[2]=e[n],l}function we(i){let e,n,l=Object.values(i[1]),t=[];for(let r=0;r<l.length;r+=1)t[r]=te(ee(i,l,r));const s=r=>b(t[r],1,1,()=>{t[r]=null});return{c(){for(let r=0;r<t.length;r+=1)t[r].c();e=T()},l(r){for(let f=0;f<t.length;f+=1)t[f].l(r);e=T()},m(r,f){for(let a=0;a<t.length;a+=1)t[a].m(r,f);L(r,e,f),n=!0},p(r,f){if(f&3){l=Object.values(r[1]);let a;for(a=0;a<l.length;a+=1){const c=ee(r,l,a);t[a]?(t[a].p(c,f),v(t[a],1)):(t[a]=te(c),t[a].c(),v(t[a],1),t[a].m(e.parentNode,e))}for(U(),a=l.length;a<t.length;a+=1)s(a);W()}},i(r){if(!n){for(let f=0;f<l.length;f+=1)v(t[f]);n=!0}},o(r){t=t.filter(Boolean);for(let f=0;f<t.length;f+=1)b(t[f]);n=!1},d(r){ne(t,r),r&&g(e)}}}function te(i){let e,n,l;var t=i[2].default;function s(r){return{props:{post:r[0]}}}return t&&(e=K(t,s(i))),{c(){e&&A(e.$$.fragment),n=T()},l(r){e&&S(e.$$.fragment,r),n=T()},m(r,f){e&&N(e,r,f),L(r,n,f),l=!0},p(r,f){const a={};if(f&1&&(a.post=r[0]),t!==(t=r[2].default)){if(e){U();const c=e;b(c.$$.fragment,1,0,()=>{B(c,1)}),W()}t?(e=K(t,s(r)),A(e.$$.fragment),v(e.$$.fragment,1),N(e,n.parentNode,n)):e=null}else t&&e.$set(a)},i(r){l||(e&&v(e.$$.fragment,r),l=!0)},o(r){e&&b(e.$$.fragment,r),l=!1},d(r){r&&g(n),e&&B(e,r)}}}function ke(i){let e,n=Object.keys(i[1]).length,l,t=n&&we(i);return{c(){e=I("div"),t&&t.c(),this.h()},l(s){e=O(s,"DIV",{class:!0});var r=P(e);t&&t.l(r),r.forEach(g),this.h()},h(){h(e,"class","sticky top-24 hidden xl:flex flex-col gap-4 w-fit h-[calc(100vh-12rem)] ml-auto mr-8 my-8 justify-center")},m(s,r){L(s,e,r),t&&t.m(e,null),l=!0},p(s,[r]){n&&t.p(s,r)},i(s){l||(v(t),l=!0)},o(s){b(t),l=!1},d(s){s&&g(e),t&&t.d()}}}function Ee(i,e,n){let{post:l}=e;const t=Object.assign({});return i.$$set=s=>{"post"in s&&n(0,l=s.post)},[l,t]}class Ie extends z{constructor(e){super(),G(this,e,Ee,ke,Q,{post:0})}}function Oe(i){let e,n;return e=new Ie({props:{post:i[0]}}),{c(){A(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,t){N(e,l,t),n=!0},p(l,t){const s={};t&1&&(s.post=l[0]),e.$set(s)},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function le(i){let e,n,l;return n=new ye({props:{toc:i[0].toc}}),{c(){e=I("div"),A(n.$$.fragment),this.h()},l(t){e=O(t,"DIV",{class:!0});var s=P(e);S(n.$$.fragment,s),s.forEach(g),this.h()},h(){h(e,"class","h-full hidden xl:block")},m(t,s){L(t,e,s),N(n,e,null),l=!0},p(t,s){const r={};s&1&&(r.toc=t[0].toc),n.$set(r)},i(t){l||(v(n.$$.fragment,t),l=!0)},o(t){b(n.$$.fragment,t),l=!1},d(t){t&&g(e),B(n)}}}function Pe(i){let e;const n=i[1].default,l=re(n,i,i[2],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&4)&&se(l,n,t,t[2],e?ae(n,t[2],s,null):ie(t[2]),null)},i(t){e||(v(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function De(i){let e,n,l,t,s,r,f,a,c,d,w,m,u,D,k,j;e=new ge({props:{post:i[0]}});let y=Oe(i),_=i[0].toc&&le(i);return u=new he({props:{post:i[0],$$slots:{default:[Pe]},$$scope:{ctx:i}}}),k=new pe({props:{sticky:!0}}),{c(){A(e.$$.fragment),n=H(),l=I("div"),t=I("div"),y&&y.c(),f=H(),a=I("div"),_&&_.c(),w=H(),m=I("div"),A(u.$$.fragment),D=H(),A(k.$$.fragment),this.h()},l(o){S(e.$$.fragment,o),n=M(o),l=O(o,"DIV",{class:!0});var p=P(l);t=O(p,"DIV",{class:!0});var F=P(t);y&&y.l(F),F.forEach(g),f=M(p),a=O(p,"DIV",{class:!0});var q=P(a);_&&_.l(q),q.forEach(g),w=M(p),m=O(p,"DIV",{class:!0});var x=P(m);S(u.$$.fragment,x),D=M(x),S(k.$$.fragment,x),x.forEach(g),p.forEach(g),this.h()},h(){h(t,"class","flex-1 w-full max-w-screen-md order-first ease-out transform mx-auto xl:mr-0"),h(a,"class","flex-1 w-full max-w-screen-md xl:order-last ease-out transform mx-auto xl:mr-0"),h(m,"class","flex-none w-full max-w-screen-md mx-auto xl:mx-0"),h(l,"class","flex flex-col flex-nowrap justify-center xl:flex-row xl:flex-wrap")},m(o,p){N(e,o,p),L(o,n,p),L(o,l,p),E(l,t),y&&y.m(t,null),E(l,f),E(l,a),_&&_.m(a,null),E(l,w),E(l,m),N(u,m,null),E(m,D),N(k,m,null),j=!0},p(o,[p]){const F={};p&1&&(F.post=o[0]),e.$set(F),y.p(o,p),o[0].toc?_?(_.p(o,p),p&1&&v(_,1)):(_=le(o),_.c(),v(_,1),_.m(a,null)):_&&(U(),b(_,1,1,()=>{_=null}),W());const q={};p&1&&(q.post=o[0]),p&4&&(q.$$scope={dirty:p,ctx:o}),u.$set(q)},i(o){j||(v(e.$$.fragment,o),v(y),R(()=>{r&&r.end(1),s=X(t,C,{x:25,duration:300,delay:500}),s.start()}),v(_),R(()=>{d&&d.end(1),c=X(a,C,{x:-25,duration:300,delay:500}),c.start()}),v(u.$$.fragment,o),v(k.$$.fragment,o),j=!0)},o(o){b(e.$$.fragment,o),b(y),s&&s.invalidate(),r=Y(t,C,{x:25,duration:300}),b(_),c&&c.invalidate(),d=Y(a,C,{x:-25,duration:300}),b(u.$$.fragment,o),b(k.$$.fragment,o),j=!1},d(o){B(e,o),o&&g(n),o&&g(l),y&&y.d(),o&&r&&r.end(),_&&_.d(),o&&d&&d.end(),B(u),B(k)}}}function Ve(i,e,n){let{$$slots:l={},$$scope:t}=e,{post:s}=e;return i.$$set=r=>{"post"in r&&n(0,s=r.post),"$$scope"in r&&n(2,t=r.$$scope)},[s,l,t]}class je extends z{constructor(e){super(),G(this,e,Ve,De,Q,{post:0})}}function Ae(i){let e;const n=i[13].default,l=re(n,i,i[14],null);return{c(){l&&l.c()},l(t){l&&l.l(t)},m(t,s){l&&l.m(t,s),e=!0},p(t,s){l&&l.p&&(!e||s&16384)&&se(l,n,t,t[14],e?ae(n,t[14],s,null):ie(t[14]),null)},i(t){e||(v(l,t),e=!0)},o(t){b(l,t),e=!1},d(t){l&&l.d(t)}}}function Ne(i){let e,n;return e=new je({props:{post:i[0],$$slots:{default:[Ae]},$$scope:{ctx:i}}}),{c(){A(e.$$.fragment)},l(l){S(e.$$.fragment,l)},m(l,t){N(e,l,t),n=!0},p(l,[t]){const s={};t&16384&&(s.$$scope={dirty:t,ctx:l}),e.$set(s)},i(l){n||(v(e.$$.fragment,l),n=!0)},o(l){b(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function Be(i,e,n){let{$$slots:l={},$$scope:t}=e,{path:s}=e,{slug:r}=e,{toc:f}=e,{created:a}=e,{updated:c}=e,{published:d}=e,{summary:w}=e,{tags:m}=e,{flags:u}=e,{title:D}=e,{image:k}=e,{in_reply_to:j}=e,y={path:s,slug:r,toc:f,created:a,updated:c,published:d,summary:w,tags:m,flags:u,title:D,image:k,in_reply_to:j},_={type:_e(y),...y};return i.$$set=o=>{"path"in o&&n(1,s=o.path),"slug"in o&&n(2,r=o.slug),"toc"in o&&n(3,f=o.toc),"created"in o&&n(4,a=o.created),"updated"in o&&n(5,c=o.updated),"published"in o&&n(6,d=o.published),"summary"in o&&n(7,w=o.summary),"tags"in o&&n(8,m=o.tags),"flags"in o&&n(9,u=o.flags),"title"in o&&n(10,D=o.title),"image"in o&&n(11,k=o.image),"in_reply_to"in o&&n(12,j=o.in_reply_to),"$$scope"in o&&n(14,t=o.$$scope)},[_,s,r,f,a,c,d,w,m,u,D,k,j,l,t]}class Me extends z{constructor(e){super(),G(this,e,Be,Ne,Q,{path:1,slug:2,toc:3,created:4,updated:5,published:6,summary:7,tags:8,flags:9,title:10,image:11,in_reply_to:12})}}export{Me as P};
