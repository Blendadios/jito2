"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7949],{86215:function(e,t,n){n.d(t,{J:function(){return K}});var r,o,u=n(67294),i=n(32984),a=n(12351),l=n(23784),s=n(19946),c=n(61363),p=n(64103),d=n(84575),f=n(16567),m=n(14157),h=n(39650),v=n(15466),w=n(51074),y=n(14007),g=n(46045),b=n(73781),P=n(45662),M=n(3855),E=n(16723),S=n(65958),R=n(2740),I=((o=I||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),T=((r=T||{})[r.TogglePopover=0]="TogglePopover",r[r.ClosePopover=1]="ClosePopover",r[r.SetButton=2]="SetButton",r[r.SetButtonId=3]="SetButtonId",r[r.SetPanel=4]="SetPanel",r[r.SetPanelId=5]="SetPanelId",r);let A={0:e=>{let t={...e,popoverState:(0,i.E)(e.popoverState,{0:1,1:0})};return 0===t.popoverState&&(t.__demoMode=!1),t},1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},k=(0,u.createContext)(null);function x(e){let t=(0,u.useContext)(k);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}k.displayName="PopoverContext";let O=(0,u.createContext)(null);function q(e){let t=(0,u.useContext)(O);if(null===t){let t=new Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,q),t}return t}O.displayName="PopoverAPIContext";let B=(0,u.createContext)(null);function C(){return(0,u.useContext)(B)}B.displayName="PopoverGroupContext";let j=(0,u.createContext)(null);function F(e,t){return(0,i.E)(t.type,A,e,t)}j.displayName="PopoverPanelContext";let L=a.AN.RenderStrategy|a.AN.Static;let N=a.AN.RenderStrategy|a.AN.Static;let D=(0,a.yV)((function(e,t){var n;let{__demoMode:r=!1,...o}=e,s=(0,u.useRef)(null),c=(0,l.T)(t,(0,l.h)((e=>{s.current=e}))),p=(0,u.useRef)([]),m=(0,u.useReducer)(F,{__demoMode:r,popoverState:r?0:1,buttons:p,button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,u.createRef)(),afterPanelSentinel:(0,u.createRef)()}),[{popoverState:v,button:g,buttonId:P,panel:E,panelId:I,beforePanelSentinel:T,afterPanelSentinel:A},x]=m,q=(0,w.i)(null!=(n=s.current)?n:g),B=(0,u.useMemo)((()=>{if(!g||!E)return!1;for(let i of document.querySelectorAll("body > *"))if(Number(null==i?void 0:i.contains(g))^Number(null==i?void 0:i.contains(E)))return!0;let e=(0,d.GO)(),t=e.indexOf(g),n=(t+e.length-1)%e.length,r=(t+1)%e.length,o=e[n],u=e[r];return!E.contains(o)&&!E.contains(u)}),[g,E]),L=(0,M.E)(P),N=(0,M.E)(I),D=(0,u.useMemo)((()=>({buttonId:L,panelId:N,close:()=>x({type:1})})),[L,N,x]),G=C(),$=null==G?void 0:G.registerPopover,z=(0,b.z)((()=>{var e;return null!=(e=null==G?void 0:G.isFocusWithinPopoverGroup())?e:(null==q?void 0:q.activeElement)&&((null==g?void 0:g.contains(q.activeElement))||(null==E?void 0:E.contains(q.activeElement)))}));(0,u.useEffect)((()=>null==$?void 0:$(D)),[$,D]);let[_,K]=(0,R.k)(),U=(0,S.v)({mainTreeNodeRef:null==G?void 0:G.mainTreeNodeRef,portals:_,defaultContainers:[g,E]});(0,y.O)(null==q?void 0:q.defaultView,"focus",(e=>{var t,n,r,o;e.target!==window&&e.target instanceof HTMLElement&&0===v&&(z()||g&&E&&(U.contains(e.target)||null!=(n=null==(t=T.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=A.current)?void 0:r.contains)&&o.call(r,e.target)||x({type:1})))}),!0),(0,h.O)(U.resolveContainers,((e,t)=>{x({type:1}),(0,d.sP)(t,d.tJ.Loose)||(e.preventDefault(),null==g||g.focus())}),0===v);let V=(0,b.z)((e=>{x({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:g:g;null==t||t.focus()})),Z=(0,u.useMemo)((()=>({close:V,isPortalled:B})),[V,B]),H=(0,u.useMemo)((()=>({open:0===v,close:V})),[v,V]),W={ref:c};return u.createElement(j.Provider,{value:null},u.createElement(k.Provider,{value:m},u.createElement(O.Provider,{value:Z},u.createElement(f.up,{value:(0,i.E)(v,{0:f.ZM.Open,1:f.ZM.Closed})},u.createElement(K,null,(0,a.sY)({ourProps:W,theirProps:o,slot:H,defaultTag:"div",name:"Popover"}),u.createElement(U.MainTreeNode,null))))))})),G=(0,a.yV)((function(e,t){let n=(0,s.M)(),{id:r=`headlessui-popover-button-${n}`,...o}=e,[f,h]=x("Popover.Button"),{isPortalled:v}=q("Popover.Button"),y=(0,u.useRef)(null),M=`headlessui-focus-sentinel-${(0,s.M)()}`,E=C(),S=null==E?void 0:E.closeOthers,R=null!==(0,u.useContext)(j);(0,u.useEffect)((()=>{if(!R)return h({type:3,buttonId:r}),()=>{h({type:3,buttonId:null})}}),[R,r,h]);let[I]=(0,u.useState)((()=>Symbol())),T=(0,l.T)(y,t,R?null:e=>{if(e)f.buttons.current.push(I);else{let e=f.buttons.current.indexOf(I);-1!==e&&f.buttons.current.splice(e,1)}f.buttons.current.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&h({type:2,button:e})}),A=(0,l.T)(y,t),k=(0,w.i)(y),O=(0,b.z)((e=>{var t,n,r;if(R){if(1===f.popoverState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),null==(n=(t=e.target).click)||n.call(t),h({type:1}),null==(r=f.button)||r.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),1===f.popoverState&&(null==S||S(f.buttonId)),h({type:0});break;case c.R.Escape:if(0!==f.popoverState)return null==S?void 0:S(f.buttonId);if(!y.current||null!=k&&k.activeElement&&!y.current.contains(k.activeElement))return;e.preventDefault(),e.stopPropagation(),h({type:1})}})),B=(0,b.z)((e=>{R||e.key===c.R.Space&&e.preventDefault()})),F=(0,b.z)((t=>{var n,r;(0,p.P)(t.currentTarget)||e.disabled||(R?(h({type:1}),null==(n=f.button)||n.focus()):(t.preventDefault(),t.stopPropagation(),1===f.popoverState&&(null==S||S(f.buttonId)),h({type:0}),null==(r=f.button)||r.focus()))})),L=(0,b.z)((e=>{e.preventDefault(),e.stopPropagation()})),N=0===f.popoverState,D=(0,u.useMemo)((()=>({open:N})),[N]),G=(0,m.f)(e,y),$=R?{ref:A,type:G,onKeyDown:O,onClick:F}:{ref:T,id:f.buttonId,type:G,"aria-expanded":0===f.popoverState,"aria-controls":f.panel?f.panelId:void 0,onKeyDown:O,onKeyUp:B,onClick:F,onMouseDown:L},z=(0,P.l)(),_=(0,b.z)((()=>{let e=f.panel;e&&(0,i.E)(z.current,{[P.N.Forwards]:()=>(0,d.jA)(e,d.TO.First),[P.N.Backwards]:()=>(0,d.jA)(e,d.TO.Last)})===d.fE.Error&&(0,d.jA)((0,d.GO)().filter((e=>"true"!==e.dataset.headlessuiFocusGuard)),(0,i.E)(z.current,{[P.N.Forwards]:d.TO.Next,[P.N.Backwards]:d.TO.Previous}),{relativeTo:f.button})}));return u.createElement(u.Fragment,null,(0,a.sY)({ourProps:$,theirProps:o,slot:D,defaultTag:"button",name:"Popover.Button"}),N&&!R&&v&&u.createElement(g._,{id:M,features:g.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:_}))})),$=(0,a.yV)((function(e,t){let n=(0,s.M)(),{id:r=`headlessui-popover-overlay-${n}`,...o}=e,[{popoverState:i},c]=x("Popover.Overlay"),d=(0,l.T)(t),m=(0,f.oJ)(),h=null!==m?(m&f.ZM.Open)===f.ZM.Open:0===i,v=(0,b.z)((e=>{if((0,p.P)(e.currentTarget))return e.preventDefault();c({type:1})})),w=(0,u.useMemo)((()=>({open:0===i})),[i]);return(0,a.sY)({ourProps:{ref:d,id:r,"aria-hidden":!0,onClick:v},theirProps:o,slot:w,defaultTag:"div",features:L,visible:h,name:"Popover.Overlay"})})),z=(0,a.yV)((function(e,t){let n=(0,s.M)(),{id:r=`headlessui-popover-panel-${n}`,focus:o=!1,...p}=e,[m,h]=x("Popover.Panel"),{close:v,isPortalled:y}=q("Popover.Panel"),M=`headlessui-focus-sentinel-before-${(0,s.M)()}`,S=`headlessui-focus-sentinel-after-${(0,s.M)()}`,R=(0,u.useRef)(null),I=(0,l.T)(R,t,(e=>{h({type:4,panel:e})})),T=(0,w.i)(R);(0,E.e)((()=>(h({type:5,panelId:r}),()=>{h({type:5,panelId:null})})),[r,h]);let A=(0,f.oJ)(),k=null!==A?(A&f.ZM.Open)===f.ZM.Open:0===m.popoverState,O=(0,b.z)((e=>{var t;if(e.key===c.R.Escape){if(0!==m.popoverState||!R.current||null!=T&&T.activeElement&&!R.current.contains(T.activeElement))return;e.preventDefault(),e.stopPropagation(),h({type:1}),null==(t=m.button)||t.focus()}}));(0,u.useEffect)((()=>{var t;e.static||1===m.popoverState&&(null==(t=e.unmount)||t)&&h({type:4,panel:null})}),[m.popoverState,e.unmount,e.static,h]),(0,u.useEffect)((()=>{if(m.__demoMode||!o||0!==m.popoverState||!R.current)return;let e=null==T?void 0:T.activeElement;R.current.contains(e)||(0,d.jA)(R.current,d.TO.First)}),[m.__demoMode,o,R,m.popoverState]);let B=(0,u.useMemo)((()=>({open:0===m.popoverState,close:v})),[m,v]),C={ref:I,id:r,onKeyDown:O,onBlur:o&&0===m.popoverState?e=>{var t,n,r,o,u;let i=e.relatedTarget;i&&R.current&&(null!=(t=R.current)&&t.contains(i)||(h({type:1}),(null!=(r=null==(n=m.beforePanelSentinel.current)?void 0:n.contains)&&r.call(n,i)||null!=(u=null==(o=m.afterPanelSentinel.current)?void 0:o.contains)&&u.call(o,i))&&i.focus({preventScroll:!0})))}:void 0,tabIndex:-1},F=(0,P.l)(),L=(0,b.z)((()=>{let e=R.current;e&&(0,i.E)(F.current,{[P.N.Forwards]:()=>{var t;(0,d.jA)(e,d.TO.First)===d.fE.Error&&(null==(t=m.afterPanelSentinel.current)||t.focus())},[P.N.Backwards]:()=>{var e;null==(e=m.button)||e.focus({preventScroll:!0})}})})),D=(0,b.z)((()=>{let e=R.current;e&&(0,i.E)(F.current,{[P.N.Forwards]:()=>{var e;if(!m.button)return;let t=(0,d.GO)(),n=t.indexOf(m.button),r=t.slice(0,n+1),o=[...t.slice(n+1),...r];for(let u of o.slice())if("true"===u.dataset.headlessuiFocusGuard||null!=(e=m.panel)&&e.contains(u)){let e=o.indexOf(u);-1!==e&&o.splice(e,1)}(0,d.jA)(o,d.TO.First,{sorted:!1})},[P.N.Backwards]:()=>{var t;(0,d.jA)(e,d.TO.Previous)===d.fE.Error&&(null==(t=m.button)||t.focus())}})}));return u.createElement(j.Provider,{value:r},k&&y&&u.createElement(g._,{id:M,ref:m.beforePanelSentinel,features:g.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:L}),(0,a.sY)({ourProps:C,theirProps:p,slot:B,defaultTag:"div",features:N,visible:k,name:"Popover.Panel"}),k&&y&&u.createElement(g._,{id:S,ref:m.afterPanelSentinel,features:g.A.Focusable,"data-headlessui-focus-guard":!0,as:"button",type:"button",onFocus:D}))})),_=(0,a.yV)((function(e,t){let n=(0,u.useRef)(null),r=(0,l.T)(n,t),[o,i]=(0,u.useState)([]),s=(0,S.H)(),c=(0,b.z)((e=>{i((t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t}))})),p=(0,b.z)((e=>(i((t=>[...t,e])),()=>c(e)))),d=(0,b.z)((()=>{var e;let t=(0,v.r)(n);if(!t)return!1;let r=t.activeElement;return!(null==(e=n.current)||!e.contains(r))||o.some((e=>{var n,o;return(null==(n=t.getElementById(e.buttonId.current))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId.current))?void 0:o.contains(r))}))})),f=(0,b.z)((e=>{for(let t of o)t.buttonId.current!==e&&t.close()})),m=(0,u.useMemo)((()=>({registerPopover:p,unregisterPopover:c,isFocusWithinPopoverGroup:d,closeOthers:f,mainTreeNodeRef:s.mainTreeNodeRef})),[p,c,d,f,s.mainTreeNodeRef]),h=(0,u.useMemo)((()=>({})),[]),w=e,y={ref:r};return u.createElement(B.Provider,{value:m},(0,a.sY)({ourProps:y,theirProps:w,slot:h,defaultTag:"div",name:"Popover.Group"}),u.createElement(s.MainTreeNode,null))})),K=Object.assign(D,{Button:G,Overlay:$,Panel:z,Group:_})},51721:function(e,t,n){var r=n(67294);const o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"}))}));t.Z=o},20707:function(e,t,n){var r=n(67294);const o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"}))}));t.Z=o},82911:function(e,t,n){var r=n(67294);const o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4.5 12.75l6 6 9-13.5"}))}));t.Z=o},82313:function(e,t,n){var r=n(67294);const o=r.forwardRef((function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"}))}));t.Z=o},48961:function(e,t,n){n.d(t,{s$:function(){return G}});var r=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))l.call(t,n)&&s(e,n,t[n]);return e},p=(e,t)=>o(e,u(t)),d=(e,t,n)=>new Promise(((r,o)=>{var u=e=>{try{a(n.next(e))}catch(t){o(t)}},i=e=>{try{a(n.throw(e))}catch(t){o(t)}},a=e=>e.done?r(e.value):Promise.resolve(e.value).then(u,i);a((n=n.apply(e,t)).next())})),f="https://quote-api.jup.ag/v6".replace(/\/+$/,""),m=class{constructor(e={}){this.configuration=e}set config(e){this.configuration=e}get basePath(){return null!=this.configuration.basePath?this.configuration.basePath:f}get fetchApi(){return this.configuration.fetchApi}get middleware(){return this.configuration.middleware||[]}get queryParamsStringify(){return this.configuration.queryParamsStringify||E}get username(){return this.configuration.username}get password(){return this.configuration.password}get apiKey(){const e=this.configuration.apiKey;if(e)return"function"===typeof e?e:()=>e}get accessToken(){const e=this.configuration.accessToken;if(e)return"function"===typeof e?e:()=>d(this,null,(function*(){return e}))}get headers(){return this.configuration.headers}get credentials(){return this.configuration.credentials}},h=new m,v=class e{constructor(e=h){this.configuration=e,this.fetchApi=(e,t)=>d(this,null,(function*(){let n,r={url:e,init:t};for(const e of this.middleware)e.pre&&(r=(yield e.pre(c({fetch:this.fetchApi},r)))||r);try{n=yield(this.configuration.fetchApi||fetch)(r.url,r.init)}catch(o){for(const e of this.middleware)e.onError&&(n=(yield e.onError({fetch:this.fetchApi,url:r.url,init:r.init,error:o,response:n?n.clone():void 0}))||n);if(void 0===n)throw o instanceof Error?new b(o,"The request failed and the interceptors did not return an alternative response"):o}for(const e of this.middleware)e.post&&(n=(yield e.post({fetch:this.fetchApi,url:r.url,init:r.init,response:n.clone()}))||n);return n})),this.middleware=e.middleware}withMiddleware(...e){const t=this.clone();return t.middleware=t.middleware.concat(...e),t}withPreMiddleware(...e){const t=e.map((e=>({pre:e})));return this.withMiddleware(...t)}withPostMiddleware(...e){const t=e.map((e=>({post:e})));return this.withMiddleware(...t)}isJsonMime(t){return!!t&&e.jsonRegex.test(t)}request(e,t){return d(this,null,(function*(){const{url:n,init:r}=yield this.createFetchParams(e,t),o=yield this.fetchApi(n,r);if(o&&o.status>=200&&o.status<300)return o;throw new g(o,"Response returned an error code")}))}createFetchParams(e,t){return d(this,null,(function*(){let n=this.configuration.basePath+e.path;void 0!==e.query&&0!==Object.keys(e.query).length&&(n+="?"+this.configuration.queryParamsStringify(e.query));const r=Object.assign({},this.configuration.headers,e.headers);Object.keys(r).forEach((e=>void 0===r[e]?delete r[e]:{}));const o="function"===typeof t?t:()=>d(this,null,(function*(){return t})),u={method:e.method,headers:r,body:e.body,credentials:this.configuration.credentials},i=c(c({},u),yield o({init:u,context:e}));var a;return{url:n,init:p(c({},i),{body:(a=i.body,"undefined"!==typeof FormData&&a instanceof FormData||i.body instanceof URLSearchParams||y(i.body)?i.body:JSON.stringify(i.body))})}}))}clone(){const e=new(0,this.constructor)(this.configuration);return e.middleware=this.middleware.slice(),e}};v.jsonRegex=new RegExp("^(:?application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(:?;.*)?$","i");var w=v;function y(e){return"undefined"!==typeof Blob&&e instanceof Blob}var g=class extends Error{constructor(e,t){super(t),this.response=e,this.name="ResponseError"}},b=class extends Error{constructor(e,t){super(t),this.cause=e,this.name="FetchError"}},P=class extends Error{constructor(e,t){super(t),this.field=e,this.name="RequiredError"}};function M(e,t){const n=e[t];return null!==n&&void 0!==n}function E(e,t=""){return Object.keys(e).map((n=>S(n,e[n],t))).filter((e=>e.length>0)).join("&")}function S(e,t,n=""){const r=n+(n.length?`[${e}]`:e);if(t instanceof Array){const e=t.map((e=>encodeURIComponent(String(e)))).join(`&${encodeURIComponent(r)}=`);return`${encodeURIComponent(r)}=${e}`}if(t instanceof Set){return S(e,Array.from(t),n)}return t instanceof Date?`${encodeURIComponent(r)}=${encodeURIComponent(t.toISOString())}`:t instanceof Object?E(t,r):`${encodeURIComponent(r)}=${encodeURIComponent(String(t))}`}var R=class{constructor(e,t=(e=>e)){this.raw=e,this.transformer=t}value(){return d(this,null,(function*(){return this.transformer(yield this.raw.json())}))}};function I(e){return function(e,t){if(void 0===e||null===e)return e;return{pubkey:e.pubkey,isSigner:e.isSigner,isWritable:e.isWritable}}(e)}function T(e){return function(e,t){if(void 0===e||null===e)return e;return{programId:e.programId,accounts:e.accounts.map(I),data:e.data}}(e)}function A(e){return function(e,t){if(void 0===e||null===e)return e;return{amount:M(e,"amount")?e.amount:void 0,feeBps:M(e,"feeBps")?e.feeBps:void 0}}(e)}function k(e){if(void 0!==e)return null===e?null:{amount:e.amount,feeBps:e.feeBps}}function x(e){return function(e,t){if(void 0===e||null===e)return e;return{ammKey:e.ammKey,label:M(e,"label")?e.label:void 0,inputMint:e.inputMint,outputMint:e.outputMint,inAmount:e.inAmount,outAmount:e.outAmount,feeAmount:e.feeAmount,feeMint:e.feeMint}}(e)}function O(e){if(void 0!==e)return null===e?null:{ammKey:e.ammKey,label:e.label,inputMint:e.inputMint,outputMint:e.outputMint,inAmount:e.inAmount,outAmount:e.outAmount,feeAmount:e.feeAmount,feeMint:e.feeMint}}function q(e){return function(e,t){if(void 0===e||null===e)return e;return{swapInfo:x(e.swapInfo),percent:e.percent}}(e)}function B(e){if(void 0!==e)return null===e?null:{swapInfo:O(e.swapInfo),percent:e.percent}}function C(e){return function(e,t){return e}(e)}function j(e){return function(e,t){if(void 0===e||null===e)return e;return{inputMint:e.inputMint,inAmount:e.inAmount,outputMint:e.outputMint,outAmount:e.outAmount,otherAmountThreshold:e.otherAmountThreshold,swapMode:C(e.swapMode),slippageBps:e.slippageBps,platformFee:M(e,"platformFee")?A(e.platformFee):void 0,priceImpactPct:e.priceImpactPct,routePlan:e.routePlan.map(q),contextSlot:M(e,"contextSlot")?e.contextSlot:void 0,timeTaken:M(e,"timeTaken")?e.timeTaken:void 0}}(e)}function F(e){if(void 0!==e)return null===e?null:{inputMint:e.inputMint,inAmount:e.inAmount,outputMint:e.outputMint,outAmount:e.outAmount,otherAmountThreshold:e.otherAmountThreshold,swapMode:e.swapMode,slippageBps:e.slippageBps,platformFee:k(e.platformFee),priceImpactPct:e.priceImpactPct,routePlan:e.routePlan.map(B),contextSlot:e.contextSlot,timeTaken:e.timeTaken}}function L(e){return function(e,t){if(void 0===e||null===e)return e;return{tokenLedgerInstruction:M(e,"tokenLedgerInstruction")?T(e.tokenLedgerInstruction):void 0,computeBudgetInstructions:e.computeBudgetInstructions.map(T),setupInstructions:e.setupInstructions.map(T),swapInstruction:T(e.swapInstruction),cleanupInstruction:M(e,"cleanupInstruction")?T(e.cleanupInstruction):void 0,addressLookupTableAddresses:e.addressLookupTableAddresses}}(e)}function N(e){if(void 0!==e)return null===e?null:{userPublicKey:e.userPublicKey,wrapAndUnwrapSol:e.wrapAndUnwrapSol,useSharedAccounts:e.useSharedAccounts,feeAccount:e.feeAccount,computeUnitPriceMicroLamports:e.computeUnitPriceMicroLamports,asLegacyTransaction:e.asLegacyTransaction,useTokenLedger:e.useTokenLedger,destinationTokenAccount:e.destinationTokenAccount,quoteResponse:F(e.quoteResponse)}}var D=class extends w{indexedRouteMapGetRaw(e,t){return d(this,null,(function*(){const n={};void 0!==e.onlyDirectRoutes&&(n.onlyDirectRoutes=e.onlyDirectRoutes);const r=yield this.request({path:"/indexed-route-map",method:"GET",headers:{},query:n},t);return new R(r,(e=>function(e,t){return void 0===e||null===e?e:{mintKeys:e.mintKeys,indexedRouteMap:e.indexedRouteMap}}(e)))}))}indexedRouteMapGet(){return d(this,arguments,(function*(e={},t){const n=yield this.indexedRouteMapGetRaw(e,t);return yield n.value()}))}programIdToLabelGetRaw(e){return d(this,null,(function*(){const t=yield this.request({path:"/program-id-to-label",method:"GET",headers:{},query:{}},e);return new R(t)}))}programIdToLabelGet(e){return d(this,null,(function*(){const t=yield this.programIdToLabelGetRaw(e);return yield t.value()}))}quoteGetRaw(e,t){return d(this,null,(function*(){if(null===e.inputMint||void 0===e.inputMint)throw new P("inputMint","Required parameter requestParameters.inputMint was null or undefined when calling quoteGet.");if(null===e.outputMint||void 0===e.outputMint)throw new P("outputMint","Required parameter requestParameters.outputMint was null or undefined when calling quoteGet.");if(null===e.amount||void 0===e.amount)throw new P("amount","Required parameter requestParameters.amount was null or undefined when calling quoteGet.");const n={};void 0!==e.inputMint&&(n.inputMint=e.inputMint),void 0!==e.outputMint&&(n.outputMint=e.outputMint),void 0!==e.amount&&(n.amount=e.amount),void 0!==e.slippageBps&&(n.slippageBps=e.slippageBps),void 0!==e.swapMode&&(n.swapMode=e.swapMode),e.excludeDexes&&(n.excludeDexes=e.excludeDexes),void 0!==e.onlyDirectRoutes&&(n.onlyDirectRoutes=e.onlyDirectRoutes),void 0!==e.asLegacyTransaction&&(n.asLegacyTransaction=e.asLegacyTransaction),void 0!==e.platformFeeBps&&(n.platformFeeBps=e.platformFeeBps),void 0!==e.maxAccounts&&(n.maxAccounts=e.maxAccounts);const r=yield this.request({path:"/quote",method:"GET",headers:{},query:n},t);return new R(r,(e=>j(e)))}))}quoteGet(e,t){return d(this,null,(function*(){const n=yield this.quoteGetRaw(e,t);return yield n.value()}))}swapInstructionsPostRaw(e,t){return d(this,null,(function*(){if(null===e.swapRequest||void 0===e.swapRequest)throw new P("swapRequest","Required parameter requestParameters.swapRequest was null or undefined when calling swapInstructionsPost.");const n={"Content-Type":"application/json"},r=yield this.request({path:"/swap-instructions",method:"POST",headers:n,query:{},body:N(e.swapRequest)},t);return new R(r,(e=>L(e)))}))}swapInstructionsPost(e,t){return d(this,null,(function*(){const n=yield this.swapInstructionsPostRaw(e,t);return yield n.value()}))}swapPostRaw(e,t){return d(this,null,(function*(){if(null===e.swapRequest||void 0===e.swapRequest)throw new P("swapRequest","Required parameter requestParameters.swapRequest was null or undefined when calling swapPost.");const n={"Content-Type":"application/json"},r=yield this.request({path:"/swap",method:"POST",headers:n,query:{},body:N(e.swapRequest)},t);return new R(r,(e=>function(e,t){return void 0===e||null===e?e:{swapTransaction:e.swapTransaction,lastValidBlockHeight:e.lastValidBlockHeight}}(e)))}))}swapPost(e,t){return d(this,null,(function*(){const n=yield this.swapPostRaw(e,t);return yield n.value()}))}},G=e=>new D(new m(e))}}]);