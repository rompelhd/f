import{S as Ze,i as Qe,s as xe,a as et,e as C,c as tt,b as H,g as he,t as F,d as me,f as J,h as G,j as nt,o as Se,k as rt,l as at,m as ot,n as ke,p as q,q as st,r as it,u as lt,v as Z,w as Q,x as Le,y as x,z as ee,A as Ge}from"./chunks/index-cde6aa07.js";import{g as Ke,f as Me,s as z,a as Oe,b as ct,i as ft}from"./chunks/singletons-3bc6e6ca.js";import{_ as X}from"./chunks/preload-helper-b21cceae.js";function ut(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function pt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const dt=["href","pathname","search","searchParams","toString","toJSON"];function ht(r,e){const n=new URL(r);for(const i of dt){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return mt(n),n}function mt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const gt="/__data.json";function _t(r){return r.replace(/\/$/,"")+gt}function wt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;de.delete(i)}return ge(r,e)};const de=new Map;function yt(r,e,n){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(s+=`[data-hash="${wt(n.body)}"]`);const g=document.querySelector(s);if(g!=null&&g.textContent){const{body:t,...u}=JSON.parse(g.textContent),m=g.getAttribute("data-ttl");return m&&de.set(e,{body:t,init:u,ttl:1e3*Number(m)}),Promise.resolve(new Response(t,u))}return ge(r,n)}function bt(r,e){const n=de.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);de.delete(r)}return ge(r,e)}const vt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Et(r){const e=[],n=[],i=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${Rt(r).map((t,u,m)=>{const d=decodeURIComponent(t),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(_)return e.push(_[1]),n.push(_[2]),i.push(!1),"(?:/(.*))?";const b=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(b)return e.push(b[1]),n.push(b[2]),i.push(!0),"(?:/([^/]+))?";const O=u===m.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((A,V)=>{if(V%2){const T=vt.exec(A);if(!T)throw new Error(`Invalid param: ${A}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,te,Y,ie,ne]=T;return e.push(ie),n.push(ne),i.push(!!te),Y?"(.*?)":te?"([^/]*)?":"([^/]+?)"}return O&&A.includes(".")&&(s=!1),A.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${s?"/?":""}$`),names:e,types:n,optional:i}}function kt(r){return!/^\([^)]+\)$/.test(r)}function Rt(r){return r.slice(1).split("/").filter(kt)}function St(r,{names:e,types:n,optional:i},s){const g={};for(let t=0;t<e.length;t+=1){const u=e[t],m=n[t];let d=r[t+1];if(d||!i[t]){if(m){const _=s[m];if(!_)throw new Error(`Missing "${m}" param matcher`);if(!_(d))return}g[u]=d!=null?d:""}}return g}function Ot(r,e,n,i){const s=new Set(e);return Object.entries(n).map(([u,[m,d,_]])=>{const{pattern:b,names:O,types:K,optional:M}=Et(u),A={id:u,exec:V=>{const T=b.exec(V);if(T)return St(T,{names:O,types:K,optional:M},i)},errors:[1,..._||[]].map(V=>r[V]),layouts:[0,...d||[]].map(t),leaf:g(m)};return A.errors.length=A.layouts.length=Math.max(A.errors.length,A.layouts.length),A});function g(u){const m=u<0;return m&&(u=~u),[m,r[u]]}function t(u){return u===void 0?u:[s.has(u),r[u]]}}function $t(r){let e,n,i;var s=r[0][0];function g(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=Z(s,g(r))),{c(){e&&Q(e.$$.fragment),n=C()},l(t){e&&Le(e.$$.fragment,t),n=C()},m(t,u){e&&x(e,t,u),H(t,n,u),i=!0},p(t,u){const m={};if(u&4&&(m.data=t[2]),u&2&&(m.form=t[1]),s!==(s=t[0][0])){if(e){he();const d=e;F(d.$$.fragment,1,0,()=>{ee(d,1)}),me()}s?(e=Z(s,g(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&ee(e,t)}}}function At(r){let e,n,i;var s=r[0][0];function g(t){return{props:{data:t[2],$$slots:{default:[It]},$$scope:{ctx:t}}}}return s&&(e=Z(s,g(r))),{c(){e&&Q(e.$$.fragment),n=C()},l(t){e&&Le(e.$$.fragment,t),n=C()},m(t,u){e&&x(e,t,u),H(t,n,u),i=!0},p(t,u){const m={};if(u&4&&(m.data=t[2]),u&523&&(m.$$scope={dirty:u,ctx:t}),s!==(s=t[0][0])){if(e){he();const d=e;F(d.$$.fragment,1,0,()=>{ee(d,1)}),me()}s?(e=Z(s,g(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&ee(e,t)}}}function It(r){let e,n,i;var s=r[0][1];function g(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=Z(s,g(r))),{c(){e&&Q(e.$$.fragment),n=C()},l(t){e&&Le(e.$$.fragment,t),n=C()},m(t,u){e&&x(e,t,u),H(t,n,u),i=!0},p(t,u){const m={};if(u&8&&(m.data=t[3]),u&2&&(m.form=t[1]),s!==(s=t[0][1])){if(e){he();const d=e;F(d.$$.fragment,1,0,()=>{ee(d,1)}),me()}s?(e=Z(s,g(t)),Q(e.$$.fragment),J(e.$$.fragment,1),x(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&ee(e,t)}}}function ze(r){let e,n=r[5]&&He(r);return{c(){e=rt("div"),n&&n.c(),this.h()},l(i){e=at(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ot(e);n&&n.l(s),s.forEach(G),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(i,s){H(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=He(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&G(e),n&&n.d()}}}function He(r){let e;return{c(){e=st(r[6])},l(n){e=it(n,r[6])},m(n,i){H(n,e,i)},p(n,i){i&64&&lt(e,n[6])},d(n){n&&G(e)}}}function Lt(r){let e,n,i,s,g;const t=[At,$t],u=[];function m(_,b){return _[0][1]?0:1}e=m(r),n=u[e]=t[e](r);let d=r[4]&&ze(r);return{c(){n.c(),i=et(),d&&d.c(),s=C()},l(_){n.l(_),i=tt(_),d&&d.l(_),s=C()},m(_,b){u[e].m(_,b),H(_,i,b),d&&d.m(_,b),H(_,s,b),g=!0},p(_,[b]){let O=e;e=m(_),e===O?u[e].p(_,b):(he(),F(u[O],1,1,()=>{u[O]=null}),me(),n=u[e],n?n.p(_,b):(n=u[e]=t[e](_),n.c()),J(n,1),n.m(i.parentNode,i)),_[4]?d?d.p(_,b):(d=ze(_),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(_){g||(J(n),g=!0)},o(_){F(n),g=!1},d(_){u[e].d(_),_&&G(i),d&&d.d(_),_&&G(s)}}}function jt(r,e,n){let{stores:i}=e,{page:s}=e,{components:g}=e,{form:t}=e,{data_0:u=null}=e,{data_1:m=null}=e;nt(i.page.notify);let d=!1,_=!1,b=null;return Se(()=>{const O=i.page.subscribe(()=>{d&&(n(5,_=!0),n(6,b=document.title||"untitled page"))});return n(4,d=!0),O}),r.$$set=O=>{"stores"in O&&n(7,i=O.stores),"page"in O&&n(8,s=O.page),"components"in O&&n(0,g=O.components),"form"in O&&n(1,t=O.form),"data_0"in O&&n(2,u=O.data_0),"data_1"in O&&n(3,m=O.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(s)},[g,t,u,m,d,_,b,i,s]}class Pt extends Ze{constructor(e){super(),Qe(this,e,jt,Lt,xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Nt={},_e=[()=>X(()=>import("./chunks/0-5ce377ff.js"),["./chunks/0-5ce377ff.js","./chunks/_layout-6783e6db.js","./components/pages/_layout.svelte-87533e6b.js","./chunks/index-cde6aa07.js","./chunks/title-ebf1743c.js","./chunks/posts-13c6fd15.js","./chunks/preload-helper-b21cceae.js","./chunks/icon-16d7657c.js","./assets/_layout-7695afdc.css"],import.meta.url),()=>X(()=>import("./chunks/1-9acfd51e.js"),["./chunks/1-9acfd51e.js","./components/pages/_error.svelte-afc54d98.js","./chunks/index-cde6aa07.js","./chunks/stores-17e3f45b.js","./chunks/singletons-3bc6e6ca.js","./chunks/footer-5e2520ed.js","./chunks/icon-16d7657c.js"],import.meta.url),()=>X(()=>import("./chunks/2-72e4aab5.js"),["./chunks/2-72e4aab5.js","./components/pages/_page.svelte-2d4b49bf.js","./chunks/index-cde6aa07.js","./chunks/title-ebf1743c.js","./chunks/stores-17e3f45b.js","./chunks/singletons-3bc6e6ca.js","./chunks/footer-5e2520ed.js","./chunks/icon-16d7657c.js","./chunks/post_card-f6d5db42.js"],import.meta.url),()=>X(()=>import("./chunks/3-da11058f.js"),["./chunks/3-da11058f.js","./components/pages/hello-world/_page.svelte.md-99aa6700.js","./chunks/index-cde6aa07.js","./chunks/post_layout-b753510b.js","./chunks/posts-13c6fd15.js","./chunks/title-ebf1743c.js","./chunks/post_card-f6d5db42.js","./chunks/icon-16d7657c.js","./chunks/footer-5e2520ed.js"],import.meta.url),()=>X(()=>import("./chunks/4-a8c714e2.js"),["./chunks/4-a8c714e2.js","./components/pages/hello-world/elements/_page.svelte.md-507a9e36.js","./chunks/index-cde6aa07.js","./chunks/post_layout-b753510b.js","./chunks/posts-13c6fd15.js","./chunks/title-ebf1743c.js","./chunks/post_card-f6d5db42.js","./chunks/icon-16d7657c.js","./chunks/footer-5e2520ed.js"],import.meta.url),()=>X(()=>import("./chunks/5-d41ea25e.js"),["./chunks/5-d41ea25e.js","./components/pages/hello-world/toc-disabled/_page.md-4a4cbd4b.js","./chunks/index-cde6aa07.js","./chunks/post_layout-b753510b.js","./chunks/posts-13c6fd15.js","./chunks/title-ebf1743c.js","./chunks/post_card-f6d5db42.js","./chunks/icon-16d7657c.js","./chunks/footer-5e2520ed.js"],import.meta.url)],Ut=[],Tt={"/":[2],"/hello-world":[3],"/hello-world/elements":[4],"/hello-world/toc-disabled":[5]},Dt={handleError:({error:r})=>{console.error(r)}};class $e{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ye{constructor(e,n){this.status=e,this.location=n}}async function Vt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const qt=-1,Bt=-2,Ct=-3,Ft=-4,Jt=-5,Gt=-6;function Kt(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(s,g=!1){if(s===qt)return;if(s===Ct)return NaN;if(s===Ft)return 1/0;if(s===Jt)return-1/0;if(s===Gt)return-0;if(g)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const m=new Set;n[s]=m;for(let b=1;b<t.length;b+=1)m.add(i(t[b]));break;case"Map":const d=new Map;n[s]=d;for(let b=1;b<t.length;b+=2)d.set(i(t[b]),i(t[b+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[s]=_;for(let b=1;b<t.length;b+=2)_[t[b]]=i(t[b+1]);break}else{const u=new Array(t.length);n[s]=u;for(let m=0;m<t.length;m+=1){const d=t[m];d!==Bt&&(u[m]=i(d))}}else{const u={};n[s]=u;for(const m in t){const d=t[m];u[m]=i(d)}}return n[s]}return i(0)}const Xe="sveltekit:scroll",B="sveltekit:index",fe=Ot(_e,Ut,Tt,Nt),Ae=_e[0],Ie=_e[1];Ae();Ie();let se={};try{se=JSON.parse(sessionStorage[Xe])}catch{}function Re(r){se[r]=Oe()}function Mt({target:r,base:e,trailing_slash:n}){var Ce;const i=[];let s=null;const g={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,m=!1,d=!0,_=!1,b=!1,O=!1,K=!1,M,A=(Ce=history.state)==null?void 0:Ce[B];A||(A=Date.now(),history.replaceState({...history.state,[B]:A},"",location.href));const V=se[A];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let T,te,Y;async function ie(){Y=Y||Promise.resolve(),await Y,Y=null;const a=new URL(location.href),l=be(a,!0);s=null,await Pe(l,a,[])}async function ne(a,{noScroll:l=!1,replaceState:f=!1,keepFocus:o=!1,state:c={},invalidateAll:p=!1},h,v){return typeof a=="string"&&(a=new URL(a,Ke(document))),ve({url:a,scroll:l?Oe():null,keepfocus:o,redirect_chain:h,details:{state:c,replaceState:f},nav_token:v,accepted:()=>{p&&(K=!0)},blocked:()=>{},type:"goto"})}async function je(a){const l=be(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return s={id:l.id,promise:Te(l)},s.promise}async function Pe(a,l,f,o,c={},p){var v,E;te=c;let h=a&&await Te(a);if(h||(h=await Be(l,{id:null},oe(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,te!==c)return!1;if(h.type==="redirect")if(f.length>10||f.includes(l.pathname))h=await le({status:500,error:oe(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return ne(new URL(h.location,l).href,{},[...f,l.pathname],c),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await z.updated.check()&&await ce(l);if(i.length=0,K=!1,_=!0,o&&o.details){const{details:w}=o,y=w.replaceState?0:1;w.state[B]=A+=y,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(s=null,m){t=h.state,h.props.page&&(h.props.page.url=l);const w=pe();M.$set(h.props),w()}else Ne(h);if(o){const{scroll:w,keepfocus:y}=o;if(!y){const R=document.body,j=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),j!==null?R.setAttribute("tabindex",j):R.removeAttribute("tabindex")}if(await Ge(),d){const R=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Ge();d=!0,h.props.page&&(T=h.props.page),p&&p(),_=!1}function Ne(a){var c,p;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),T=a.props.page;const f=pe();M=new Pt({target:r,props:{...a.props,stores:z},hydrate:!0}),f();const o={from:null,to:ue("to",{params:t.params,route:{id:(p=(c=t.route)==null?void 0:c.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};g.after_navigate.forEach(h=>h(o)),m=!0}async function re({url:a,params:l,branch:f,status:o,error:c,route:p,form:h}){var j;const v=f.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:f,error:c,route:p},props:{components:v.map($=>$.node.component)}};h!==void 0&&(E.props.form=h);let w={},y=!T;for(let $=0;$<v.length;$+=1){const N=v[$];w={...w,...N.data},(y||!t.branch.some(U=>U===N))&&(E.props[`data_${$}`]=w,y=y||Object.keys((j=N.data)!=null?j:{}).length>0)}if(y||(y=Object.keys(T.data).length!==Object.keys(w).length),!t.url||a.href!==t.url.href||t.error!==c||h!==void 0||y){E.props.page={error:c,params:l,route:p,status:o,url:a,form:h,data:y?w:T.data};const $=(N,U)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${U}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function we({loader:a,parent:l,url:f,params:o,route:c,server_data_node:p}){var w,y,R,j,$;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((w=E.shared)!=null&&w.load){let N=function(...S){for(const D of S){const{href:k}=new URL(D,f);v.dependencies.add(k)}};const U={route:{get id(){return v.route=!0,c.id}},params:new Proxy(o,{get:(S,D)=>(v.params.add(D),S[D])}),data:(y=p==null?void 0:p.data)!=null?y:null,url:ht(f,()=>{v.url=!0}),async fetch(S,D){let k;S instanceof Request?(k=S.url,D={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...D}):k=S;const I=new URL(k,f).href;return N(I),m?bt(I,D):yt(k,I,D)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,l()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(R=await E.shared.load.call(null,U))!=null?R:null,h=h?await Vt(h):null}return{node:E,loader:a,server:p,shared:(j=E.shared)!=null&&j.load?{type:"data",data:h,uses:v}:null,data:($=h!=null?h:p==null?void 0:p.data)!=null?$:null}}function Ue(a,l,f,o,c){if(K)return!0;if(!o)return!1;if(o.parent&&a||o.route&&l||o.url&&f)return!0;for(const p of o.params)if(c[p]!==t.params[p])return!0;for(const p of o.dependencies)if(i.some(h=>h(new URL(p))))return!0;return!1}function ye(a,l){var f,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((f=a.uses.dependencies)!=null?f:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Te({id:a,invalidating:l,url:f,params:o,route:c}){var D;if((s==null?void 0:s.id)===a)return s.promise;const{errors:p,layouts:h,leaf:v}=c,E=[...h,v];p.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const y=t.url?a!==t.url.pathname+t.url.search:!1,R=t.route?a!==t.route.id:!1,j=E.reduce((k,I,P)=>{var ae;const L=t.branch[P],W=!!(I!=null&&I[0])&&((L==null?void 0:L.loader)!==I[1]||Ue(k.some(Boolean),R,y,(ae=L.server)==null?void 0:ae.uses,o));return k.push(W),k},[]);if(j.some(Boolean)){try{w=await We(f,j)}catch(k){return le({status:500,error:oe(k,{url:f,params:o,route:{id:c.id}}),url:f,route:c})}if(w.type==="redirect")return w}const $=w==null?void 0:w.nodes;let N=!1;const U=E.map(async(k,I)=>{var ae;if(!k)return;const P=t.branch[I],L=$==null?void 0:$[I];if((!L||L.type==="skip")&&k[1]===(P==null?void 0:P.loader)&&!Ue(N,R,y,(ae=P.shared)==null?void 0:ae.uses,o))return P;if(N=!0,(L==null?void 0:L.type)==="error")throw L;return we({loader:k[1],url:f,params:o,route:c,parent:async()=>{var Je;const Fe={};for(let Ee=0;Ee<I;Ee+=1)Object.assign(Fe,(Je=await U[Ee])==null?void 0:Je.data);return Fe},server_data_node:ye(L===void 0&&k[0]?{type:"skip"}:L!=null?L:null,P==null?void 0:P.server)})});for(const k of U)k.catch(()=>{});const S=[];for(let k=0;k<E.length;k+=1)if(E[k])try{S.push(await U[k])}catch(I){if(I instanceof Ye)return{type:"redirect",location:I.location};let P=500,L;$!=null&&$.includes(I)?(P=(D=I.status)!=null?D:P,L=I.error):I instanceof $e?(P=I.status,L=I.body):L=oe(I,{params:o,url:f,route:{id:c.id}});const W=await De(k,S,p);return W?await re({url:f,params:o,branch:S.slice(0,W.idx).concat(W.node),status:P,error:L,route:c}):await Be(f,{id:c.id},L,P)}else S.push(void 0);return await re({url:f,params:o,branch:S,status:200,error:null,route:c,form:l?void 0:null})}async function De(a,l,f){for(;a--;)if(f[a]){let o=a;for(;!l[o];)o-=1;try{return{idx:o+1,node:{node:await f[a](),loader:f[a],data:{},server:null,shared:null}}}catch{continue}}}async function le({status:a,error:l,url:f,route:o}){var w;const c={},p=await Ae();let h=null;if(p.server)try{const y=await We(f,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;h=(w=y.nodes[0])!=null?w:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||u)&&await ce(f)}const v=await we({loader:Ae,url:f,params:c,route:o,parent:()=>Promise.resolve({}),server_data_node:ye(h)}),E={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await re({url:f,params:c,branch:[v,E],status:a,error:l,route:null})}function be(a,l){if(Ve(a))return;const f=decodeURI(a.pathname.slice(e.length)||"/");for(const o of fe){const c=o.exec(f);if(c){const p=new URL(a.origin+ut(a.pathname,n)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:l,route:o,params:pt(c),url:p}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function qe({url:a,type:l,intent:f,delta:o}){var v,E,w,y,R;let c=!1;const p={from:ue("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:ue("to",{params:(w=f==null?void 0:f.params)!=null?w:null,route:{id:(R=(y=f==null?void 0:f.route)==null?void 0:y.id)!=null?R:null},url:a}),willUnload:!f,type:l};o!==void 0&&(p.delta=o);const h={...p,cancel:()=>{c=!0}};return g.before_navigate.forEach(j=>j(h)),c?null:p}async function ve({url:a,scroll:l,keepfocus:f,redirect_chain:o,details:c,type:p,delta:h,nav_token:v,accepted:E,blocked:w}){const y=be(a,!1),R=qe({url:a,type:p,delta:h,intent:y});if(!R){w();return}Re(A),E(),b=!0,m&&z.navigating.set(R),await Pe(y,a,o,{scroll:l,keepfocus:f,details:c},v,()=>{b=!1,g.after_navigate.forEach(j=>j(R)),z.navigating.set(null)})}async function Be(a,l,f,o){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await le({status:o,error:f,url:a,route:l}):await ce(a)}function ce(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Se(()=>(g.after_navigate.push(a),()=>{const l=g.after_navigate.indexOf(a);g.after_navigate.splice(l,1)}))},before_navigate:a=>{Se(()=>(g.before_navigate.push(a),()=>{const l=g.before_navigate.indexOf(a);g.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!m)&&(d=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ne(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:l}=new URL(a,location.href);i.push(f=>f.href===l)}return ie()},invalidateAll:()=>(K=!0,ie()),prefetch:async a=>{const l=new URL(a,Ke(document));await je(l)},prefetch_routes:async a=>{const f=(a?fe.filter(o=>a.some(c=>o.exec(c))):fe).map(o=>Promise.all([...o.layouts,o.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(f)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:f,route:o}=t;if(!o)return;const c=await De(t.branch.length,f,o.errors);if(c){const p=await re({url:l,params:t.params,branch:f.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:o});t=p.state;const h=pe();M.$set(p.props),h()}}else if(a.type==="redirect")ne(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...T,form:a.data,status:a.status}},f=pe();M.$set(l),f()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var p,h;let c=!1;if(!b){const v={from:ue("from",{params:t.params,route:{id:(h=(p=t.route)==null?void 0:p.id)!=null?h:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};g.before_navigate.forEach(E=>E(v))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(A);try{sessionStorage[Xe]=JSON.stringify(se)}catch{}}});const a=o=>{const{url:c,options:p}=Me(o);if(c&&p.prefetch){if(Ve(c))return;je(c)}};let l;const f=o=>{clearTimeout(l),l=setTimeout(()=>{var c;(c=o.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:c,url:p,options:h}=Me(o);if(!c||!p)return;const v=c instanceof SVGAElement;if(!v&&p.protocol!==location.protocol&&!(p.protocol==="https:"||p.protocol==="http:")||c.hasAttribute("download"))return;if((c.getAttribute("rel")||"").split(/\s+/).includes("external")||h.reload||(v?c.target.baseVal:c.target)){qe({url:p,type:"link"})||o.preventDefault(),b=!0;return}const[w,y]=p.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){O=!0,Re(A),t.url=p,z.page.set({...T,url:p}),z.page.notify();return}ve({url:p,scroll:h.noscroll?Oe():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[B]===A)return;const c=o.state[B]-A;ve({url:new URL(location.href),scroll:se[o.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{A=o.state[B]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[B]:++A},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&z.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:f,params:o,route:c,data:p,form:h})=>{var w;u=!0;const v=new URL(location.href);let E;try{const y=f.map(async(R,j)=>{const $=p[j];return we({loader:_e[R],url:v,params:o,route:c,parent:async()=>{const N={};for(let U=0;U<j;U+=1)Object.assign(N,(await y[U]).data);return N},server_data_node:ye($)})});E=await re({url:v,params:o,branch:await Promise.all(y),status:a,error:l,form:h,route:(w=fe.find(({id:R})=>R===c.id))!=null?w:null})}catch(y){if(y instanceof Ye){await ce(new URL(y.location,location.href));return}E=await le({status:y instanceof $e?y.status:500,error:oe(y,{url:v,params:o,route:c}),url:v,route:c})}Ne(E)}}}async function We(r,e){var g;const n=new URL(r);n.pathname=_t(r.pathname);const i=await ge(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),s=await i.json();if(!i.ok)throw new Error(s);return(g=s.nodes)==null||g.forEach(t=>{var u,m;(t==null?void 0:t.type)==="data"&&(t.data=Kt(t.data),t.uses={dependencies:new Set((u=t.uses.dependencies)!=null?u:[]),params:new Set((m=t.uses.params)!=null?m:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function oe(r,e){var n;return r instanceof $e?r.body:(n=Dt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const zt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ue(r,e){for(const n of zt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function pe(){return()=>{}}async function Xt({env:r,hydrate:e,paths:n,target:i,trailing_slash:s}){ct(n);const g=Mt({target:i,base:n.base,trailing_slash:s});ft({client:g}),e?await g._hydrate(e):g.goto(location.href,{replaceState:!0}),g._start_router()}export{Xt as start};
