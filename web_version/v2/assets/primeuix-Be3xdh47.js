var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,r,s)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s;function a(e){return null==e||""===e||Array.isArray(e)&&0===e.length||!(e instanceof Date)&&"object"==typeof e&&0===Object.keys(e).length}function o(e){return!!(e&&e.constructor&&e.call&&e.apply)}function i(e){return!a(e)}function l(e,t=!0){return e instanceof Object&&e.constructor===Object&&(t||0!==Object.keys(e).length)}function c(e,...t){return o(e)?e(...t):e}function u(e,t=!0){return"string"==typeof e&&(t||""!==e)}function d(e){return u(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function m(e,t="",r={}){const s=d(t).split("."),n=s.shift();return n?l(e)?m(c(e[Object.keys(e).find((e=>d(e)===n))||""],r),s.join("."),r):void 0:c(e,r)}function h(e,t=!0){return Array.isArray(e)&&(t||0!==e.length)}function p(e){return i(e)&&!isNaN(e)}function f(e,t){if(t){const r=t.test(e);return t.lastIndex=0,r}return!1}function g(...e){const a=(e={},o={})=>{const i=((e,a)=>{for(var o in a||(a={}))r.call(a,o)&&n(e,o,a[o]);if(t)for(var o of t(a))s.call(a,o)&&n(e,o,a[o]);return e})({},e);return Object.keys(o).forEach((t=>{l(o[t])&&t in e&&l(e[t])?i[t]=a(e[t],o[t]):i[t]=o[t]})),i};return e.reduce(((e,t,r)=>0===r?t:a(e,t)),{})}function y(e){return e?e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":"):e}function v(e){return u(e,!1)?e[0].toUpperCase()+e.slice(1):e}function b(e){return u(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,((e,t)=>0===t?e:"-"+e.toLowerCase())).toLowerCase():e}function S(e){return u(e)?e.replace(/[A-Z]/g,((e,t)=>0===t?e:"."+e.toLowerCase())).toLowerCase():e}function $(){const e=new Map;return{on(t,r){let s=e.get(t);return s?s.push(r):s=[r],e.set(t,s),this},off(t,r){let s=e.get(t);return s&&s.splice(s.indexOf(r)>>>0,1),this},emit(t,r){let s=e.get(t);s&&s.slice().map((e=>{e(r)}))},clear(){e.clear()}}}var w=Object.defineProperty,k=Object.defineProperties,L=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&C(e,r,t[r]);if(N)for(var r of N(t))j.call(t,r)&&C(e,r,t[r]);return e},_=(e,t)=>k(e,L(t)),P=(e,t)=>{var r={};for(var s in e)O.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(null!=e&&N)for(var s of N(e))t.indexOf(s)<0&&j.call(e,s)&&(r[s]=e[s]);return r},T=$();function E(e,t){h(e)?e.push(...t||[]):l(e)&&Object.assign(e,t)}function A(e,t=""){if(!["opacity","z-index","line-height","font-weight","flex","flex-grow","flex-shrink","order"].some((e=>t.endsWith(e)))){return`${e}`.trim().split(" ").map((e=>p(e)?`${e}px`:e)).join(" ")}return e}function V(e="",t=""){return function(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}(`${u(e,!1)&&u(t,!1)?`${e}-`:e}${t}`)}function R(e="",t=""){return`--${V(e,t)}`}function F(e,t="",r="",s=[],n){if(u(e)){const a=/{([^}]*)}/g,o=e.trim();if(f(o,a)){const e=o.replaceAll(a,(e=>{const t=e.replace(/{|}/g,"").split(".").filter((e=>!s.some((t=>f(e,t)))));return`var(${R(r,b(t.join("-")))}${i(n)?`, ${n}`:""})`})),t=/(\d+\s+[\+\-\*\/]\s+\d+)/g,l=/var\([^)]+\)/g;return f(e.replace(l,"0"),t)?`calc(${e})`:e}return A(o,t)}if(p(e))return A(e,t)}function D(e,t){return e?`${e}{${t}}`:""}var W=(...e)=>z(I.getTheme(),...e),z=(e={},t,r,s="variable")=>{if(t){const{variable:n,options:a}=I.defaults||{},{prefix:o,transform:i}=(null==e?void 0:e.options)||a||{},l=f(t,/{([^}]*)}/g)?t:`{${t}}`;return"value"===s||"strict"===i?I.getTokenValue(t):F(l,void 0,o,[n.excludedKeyRegex],r)}return""};function H(e,t={}){const r=I.defaults.variable,{prefix:s=r.prefix,selector:n=r.selector,excludedKeyRegex:a=r.excludedKeyRegex}=t,o=(e,t="")=>Object.entries(e).reduce(((e,[r,n])=>{const i=f(r,a)?V(t):V(t,b(r)),c=function(e){return l(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}(n);if(l(c)){const{variables:t,tokens:r}=o(c,i);E(e.tokens,r),E(e.variables,t)}else e.tokens.push((s?i.replace(`${s}-`,""):i).replaceAll("-",".")),function(e,t,r){u(t,!1)&&e.push(`${t}:${r};`)}(e.variables,R(i),F(c,i,s,[a]));return e}),{variables:[],tokens:[]}),{variables:i,tokens:c}=o(e,s);return{value:i,tokens:c,declarations:i.join(""),css:D(n,i.join(""))}}var M={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve:e=>({type:"custom",selector:e,matched:!0})}},resolve(e){const t=Object.keys(this.rules).filter((e=>"custom"!==e)).map((e=>this.rules[e]));return[e].flat().map((e=>{var r;return null!=(r=t.map((t=>t.resolve(e))).find((e=>e.matched)))?r:this.rules.custom.resolve(e)}))}},_toVariables:(e,t)=>H(e,{prefix:null==t?void 0:t.prefix}),getCommon({name:e="",theme:t={},params:r,set:s,defaults:n}){var a,o,l,c;const{preset:u,options:d}=t;let m,h,p,f;if(i(u)){const{primitive:t,semantic:r}=u,g=r||{},{colorScheme:y}=g,v=P(g,["colorScheme"]),b=y||{},{dark:S}=b,$=P(b,["dark"]),w=i(t)?this._toVariables({primitive:t},d):{},k=i(v)?this._toVariables({semantic:v},d):{},L=i($)?this._toVariables({light:$},d):{},N=i(S)?this._toVariables({dark:S},d):{},[O,j]=[null!=(a=w.declarations)?a:"",w.tokens],[C,x]=[null!=(o=k.declarations)?o:"",k.tokens||[]],[_,T]=[null!=(l=L.declarations)?l:"",L.tokens||[]],[E,A]=[null!=(c=N.declarations)?c:"",N.tokens||[]];m=this.transformCSS(e,O,"light","variable",d,s,n),h=j;p=`${this.transformCSS(e,`${C}${_}color-scheme:light`,"light","variable",d,s,n)}${this.transformCSS(e,`${E}color-scheme:dark`,"dark","variable",d,s,n)}`,f=[...new Set([...x,...T,...A])]}return{primitive:{css:m,tokens:h},semantic:{css:p,tokens:f}}},getPreset({name:e="",preset:t={},options:r,params:s,set:n,defaults:a,selector:o}){var l,c,u;const d=e.replace("-directive",""),m=t,{colorScheme:h}=m,p=P(m,["colorScheme"]),f=h||{},{dark:g}=f,y=P(f,["dark"]),v=i(p)?this._toVariables({[d]:p},r):{},b=i(y)?this._toVariables({[d]:y},r):{},S=i(g)?this._toVariables({[d]:g},r):{},[$,w]=[null!=(l=v.declarations)?l:"",v.tokens||[]],[k,L]=[null!=(c=b.declarations)?c:"",b.tokens||[]],[N,O]=[null!=(u=S.declarations)?u:"",S.tokens||[]],j=[...new Set([...w,...L,...O])];return{css:`${this.transformCSS(d,`${$}${k}`,"light","variable",r,n,a,o)}${this.transformCSS(d,N,"dark","variable",r,n,a,o)}`,tokens:j}},getPresetC({name:e="",theme:t={},params:r,set:s,defaults:n}){var a;const{preset:o,options:i}=t,l=null==(a=null==o?void 0:o.components)?void 0:a[e];return this.getPreset({name:e,preset:l,options:i,params:r,set:s,defaults:n})},getPresetD({name:e="",theme:t={},params:r,set:s,defaults:n}){var a;const o=e.replace("-directive",""),{preset:i,options:l}=t,c=null==(a=null==i?void 0:i.directives)?void 0:a[o];return this.getPreset({name:o,preset:c,options:l,params:r,set:s,defaults:n})},getColorSchemeOption(e,t){var r;return this.regex.resolve(null!=(r=e.darkModeSelector)?r:t.options.darkModeSelector)},getLayerOrder(e,t={},r,s){const{cssLayer:n}=t;if(n){return`@layer ${c(n.order||"primeui",r)}`}return""},getCommonStyleSheet({name:e="",theme:t={},params:r,props:s={},set:n,defaults:a}){const o=this.getCommon({name:e,theme:t,params:r,set:n,defaults:a}),i=Object.entries(s).reduce(((e,[t,r])=>e.push(`${t}="${r}"`)&&e),[]).join(" ");return Object.entries(o||{}).reduce(((e,[t,r])=>{if(null==r?void 0:r.css){const s=y(null==r?void 0:r.css),n=`${t}-variables`;e.push(`<style type="text/css" data-primevue-style-id="${n}" ${i}>${s}</style>`)}return e}),[]).join("")},getStyleSheet({name:e="",theme:t={},params:r,props:s={},set:n,defaults:a}){var o;const i={name:e,theme:t,params:r,set:n,defaults:a},l=null==(o=e.includes("-directive")?this.getPresetD(i):this.getPresetC(i))?void 0:o.css,c=Object.entries(s).reduce(((e,[t,r])=>e.push(`${t}="${r}"`)&&e),[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${y(l)}</style>`:""},createTokens(e={},t,r="",s="",n={}){return Object.entries(e).forEach((([e,o])=>{const i=f(e,t.variable.excludedKeyRegex)?r:r?`${r}.${S(e)}`:S(e),c=s?`${s}.${e}`:e;l(o)?this.createTokens(o,t,i,c,n):(n[i]||(n[i]={paths:[],computed(e,t={}){if(e){const r=this.paths.find((t=>t.scheme===e))||this.paths.find((e=>"none"===e.scheme));return null==r?void 0:r.computed(e,t.binding)}return this.paths.map((e=>e.computed(e.scheme,t[e.scheme])))}}),n[i].paths.push({path:c,value:o,scheme:c.includes("colorScheme.light")?"light":c.includes("colorScheme.dark")?"dark":"none",computed(e,t={}){const r=/{([^}]*)}/g;let s=o;if(t.name=this.path,t.binding||(t.binding={}),f(o,r)){const a=o.trim().replaceAll(r,(r=>{var s,a;const o=r.replace(/{|}/g,"");return null==(a=null==(s=n[o])?void 0:s.computed(e,t))?void 0:a.value})),i=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,l=/var\([^)]+\)/g;s=f(a.replace(l,"0"),i)?`calc(${a})`:a}return a(t.binding)&&delete t.binding,{colorScheme:e,path:this.path,paths:t,value:s.includes("undefined")?void 0:s}}}))})),n},getTokenValue(e,t,r){var s;const n=t.split(".").filter((e=>!f(e.toLowerCase(),r.variable.excludedKeyRegex))).join(".");const a=t.includes("colorScheme.light")?"light":t.includes("colorScheme.dark")?"dark":void 0,o=[null==(s=e[n])?void 0:s.computed(a)].flat().filter((e=>e));return 1===o.length?o[0].value:o.reduce(((e={},t)=>{const r=t,{colorScheme:s}=r,n=P(r,["colorScheme"]);return e[s]=n,e}),void 0)},transformCSS(e,t,r,s,n={},a,o,u){if(i(t)){const{cssLayer:d}=n;if("style"!==s){const e=this.getColorSchemeOption(n,o),s=u?D(u,t):t;t="dark"===r?e.reduce(((e,{selector:t})=>(i(t)&&(e+=t.includes("[CSS]")?t.replace("[CSS]",s):D(t,s)),e)),""):D(null!=u?u:":root",t)}if(d){const r={name:"primeui",order:"primeui"};l(d)&&(r.name=c(d.name,{name:e,type:s})),i(r.name)&&(t=D(`@layer ${r.name}`,t),null==a||a.layerNames(r.name))}return t}return""}},I={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){const{theme:t}=e;t&&(this._theme=_(x({},t),{options:x(x({},this.defaults.options),t.options)}),this._tokens=M.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return(null==(e=this.theme)?void 0:e.preset)||{}},get options(){var e;return(null==(e=this.theme)?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),T.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=_(x({},this.theme),{preset:e}),this._tokens=M.createTokens(e,this.defaults),this.clearLoadedStyleNames(),T.emit("preset:change",e),T.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=_(x({},this.theme),{options:e}),this.clearLoadedStyleNames(),T.emit("options:change",e),T.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return M.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",t){return M.getCommon({name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",t){const r={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return M.getPresetC(r)},getDirective(e="",t){const r={name:e,theme:this.theme,params:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return M.getPresetD(r)},getCustomPreset(e="",t,r,s){const n={name:e,preset:t,options:this.options,selector:r,params:s,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return M.getPreset(n)},getLayerOrderCSS(e=""){return M.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",t,r="style",s){return M.transformCSS(e,t,s,r,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",t,r={}){return M.getCommonStyleSheet({name:e,theme:this.theme,params:t,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,t,r={}){return M.getStyleSheet({name:e,theme:this.theme,params:t,props:r,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:t}){this._loadingStyles.size&&(this._loadingStyles.delete(t),T.emit(`theme:${t}:load`,e),!this._loadingStyles.size&&T.emit("theme:load"))}};function B(e,t){return!!e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function K(e,t){if(e&&t){const r=t=>{B(e,t)||(e.classList?e.classList.add(t):e.className+=" "+t)};[t].flat().filter(Boolean).forEach((e=>e.split(" ").forEach(r)))}}function Z(e,t){if(e&&t){const r=t=>{e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")};[t].flat().filter(Boolean).forEach((e=>e.split(" ").forEach(r)))}}function q(){let e=window,t=document,r=t.documentElement,s=t.getElementsByTagName("body")[0];return{width:e.innerWidth||r.clientWidth||s.clientWidth,height:e.innerHeight||r.clientHeight||s.clientHeight}}function X(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function Y(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function U(e,t){if(e instanceof HTMLElement){return e.offsetWidth}return 0}function G(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName}function J(e,t={}){if(G(e)){const r=(t,s)=>{var n,a;const o=(null==(n=null==e?void 0:e.$attrs)?void 0:n[t])?[null==(a=null==e?void 0:e.$attrs)?void 0:a[t]]:[];return[s].flat().reduce(((e,s)=>{if(null!=s){const n=typeof s;if("string"===n||"number"===n)e.push(s);else if("object"===n){const n=Array.isArray(s)?r(t,s):Object.entries(s).map((([e,r])=>"style"!==t||!r&&0!==r?r?e:void 0:`${e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${r}`));e=n.length?e.concat(n.filter((e=>!!e))):e}}return e}),o)};Object.entries(t).forEach((([t,s])=>{if(null!=s){const n=t.match(/^on(.+)/);n?e.addEventListener(n[1].toLowerCase(),s):"p-bind"===t?J(e,s):(s="class"===t?[...new Set(r("class",s))].join(" ").trim():"style"===t?r("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[t]=s),e.setAttribute(t,s))}}))}}function Q(e,t={},...r){if(e){const s=document.createElement(e);return J(s,t),s.append(...r),s}}function ee(e,t){if(e){e.style.opacity="0";let r=+new Date,s="0",n=function(){s=""+(+e.style.opacity+((new Date).getTime()-r)/t),e.style.opacity=s,r=+new Date,+s<1&&(window.requestAnimationFrame&&requestAnimationFrame(n)||setTimeout(n,16))};n()}}function te(e,t){return G(e)?e.matches(t)?e:e.querySelector(t):null}function re(e,t){if(G(e)){const r=e.getAttribute(t);return isNaN(r)?"true"===r||"false"===r?"true"===r:r:+r}}function se(e){if(e){let t=e.offsetHeight,r=getComputedStyle(e);return t-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),t}return 0}function ne(e){if(e){let t=e.parentNode;return t&&t instanceof ShadowRoot&&t.host&&(t=t.host),t}return null}function ae(e){if(e){let t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function oe(e,t){if(e){return e.offsetHeight}return 0}function ie(e,t=[]){const r=ne(e);return null===r?t:ie(r,t.concat([r]))}function le(e){let t=[];if(e){let r=ie(e);const s=/(auto|scroll)/,n=e=>{try{let t=window.getComputedStyle(e,null);return s.test(t.getPropertyValue("overflow"))||s.test(t.getPropertyValue("overflowX"))||s.test(t.getPropertyValue("overflowY"))}catch(t){return!1}};for(let e of r){let r=1===e.nodeType&&e.dataset.scrollselectors;if(r){let s=r.split(",");for(let r of s){let s=te(e,r);s&&n(s)&&t.push(s)}}9!==e.nodeType&&n(e)&&t.push(e)}}return t}function ce(e){return!(null==e||!e.nodeName||!ne(e))}function ue(e){if(e){let t=e.offsetWidth,r=getComputedStyle(e);return t-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),t}return 0}function de(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}function me(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function he(e,t="",r){G(e)&&null!=r&&e.setAttribute(t,r)}var pe={};function fe(e="pui_id_"){return pe.hasOwnProperty(e)||(pe[e]=0),pe[e]++,`${e}${pe[e]}`}var ge=function(){let e=[];const t=(t,r,s=0)=>[...e].reverse().find((e=>!0))||{key:t,value:s},r=e=>e&&parseInt(e.style.zIndex,10)||0;return{get:r,set:(r,s,n)=>{s&&(s.style.zIndex=String(((r,s,n=999)=>{const a=t(r,s,n),o=a.value+(a.key===r?0:n)+1;return e.push({key:r,value:o}),o})(r,!0,n)))},clear:t=>{var s;t&&(s=r(t),e=e.filter((e=>e.value!==s)),t.style.zIndex="")},getCurrent:e=>(e=>t(e).value)(e)}}();export{U as A,oe as B,ae as C,K as D,$ as E,re as F,ee as G,me as H,X as I,Y as J,q as K,B as L,ge as Z,he as a,de as b,I as c,W as d,o as e,te as f,le as g,i as h,ce as i,T as j,m as k,u as l,y as m,h as n,a as o,l as p,v as q,c as r,J as s,d as t,fe as u,g as v,Q as w,Z as x,se as y,ue as z};