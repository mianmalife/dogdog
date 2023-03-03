import{i as F,v as Xe,f as We,u as Ge,e as Ne,a as _e,x as Te,g as Le,E as R,_ as Pe,w as De,y as Ke,h as Ue}from"./base-040bad82.js";import{c as _,g as Je,u as o,a6 as Ze,r as C,h as de,a7 as ke,a8 as qe,s as Qe,w as be,D as Ae,o as Me,k as T,y as ce,x as y,z as N,V as x,n as w,m as we,a9 as et,B as O,l as $,F as ue,aa as tt,Z as je,q as nt,H as at,j as le,I as rt,J as ot,ab as st,A as it,E as lt,M as ct,_ as ut,Y as dt,S as ft}from"./index-77cb2389.js";import{m as Re,f as pt,s as mt,a as ht,g as vt,h as gt,c as yt,z as _t,i as bt,r as wt,j as Tt,k as U,E as K}from"./index-cc52930c.js";var St=typeof global=="object"&&global&&global.Object===Object&&global;const Ct=St;var kt=typeof self=="object"&&self&&self.Object===Object&&self,It=Ct||kt||Function("return this")();const fe=It;var xt=fe.Symbol;const J=xt;var Fe=Object.prototype,Et=Fe.hasOwnProperty,Ot=Fe.toString,ae=J?J.toStringTag:void 0;function $t(e){var t=Et.call(e,ae),n=e[ae];try{e[ae]=void 0;var a=!0}catch{}var s=Ot.call(e);return a&&(t?e[ae]=n:delete e[ae]),s}var zt=Object.prototype,Nt=zt.toString;function Lt(e){return Nt.call(e)}var Pt="[object Null]",Dt="[object Undefined]",Ie=J?J.toStringTag:void 0;function Be(e){return e==null?e===void 0?Dt:Pt:Ie&&Ie in Object(e)?$t(e):Lt(e)}function At(e){return e!=null&&typeof e=="object"}var Mt="[object Symbol]";function pe(e){return typeof e=="symbol"||At(e)&&Be(e)==Mt}function jt(e,t){for(var n=-1,a=e==null?0:e.length,s=Array(a);++n<a;)s[n]=t(e[n],n,e);return s}var Rt=Array.isArray;const Se=Rt;var Ft=1/0,xe=J?J.prototype:void 0,Ee=xe?xe.toString:void 0;function He(e){if(typeof e=="string")return e;if(Se(e))return jt(e,He)+"";if(pe(e))return Ee?Ee.call(e):"";var t=e+"";return t=="0"&&1/e==-Ft?"-0":t}var Bt=/\s/;function Ht(e){for(var t=e.length;t--&&Bt.test(e.charAt(t)););return t}var Yt=/^\s+/;function Vt(e){return e&&e.slice(0,Ht(e)+1).replace(Yt,"")}function Z(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Oe=0/0,Xt=/^[-+]0x[0-9a-f]+$/i,Wt=/^0b[01]+$/i,Gt=/^0o[0-7]+$/i,Kt=parseInt;function $e(e){if(typeof e=="number")return e;if(pe(e))return Oe;if(Z(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Z(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Vt(e);var n=Wt.test(e);return n||Gt.test(e)?Kt(e.slice(2),n?2:8):Xt.test(e)?Oe:+e}var Ut="[object AsyncFunction]",Jt="[object Function]",Zt="[object GeneratorFunction]",qt="[object Proxy]";function Qt(e){if(!Z(e))return!1;var t=Be(e);return t==Jt||t==Zt||t==Ut||t==qt}var en=fe["__core-js_shared__"];const ve=en;var ze=function(){var e=/[^.]+$/.exec(ve&&ve.keys&&ve.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function tn(e){return!!ze&&ze in e}var nn=Function.prototype,an=nn.toString;function rn(e){if(e!=null){try{return an.call(e)}catch{}try{return e+""}catch{}}return""}var on=/[\\^$.*+?()[\]{}|]/g,sn=/^\[object .+?Constructor\]$/,ln=Function.prototype,cn=Object.prototype,un=ln.toString,dn=cn.hasOwnProperty,fn=RegExp("^"+un.call(dn).replace(on,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function pn(e){if(!Z(e)||tn(e))return!1;var t=Qt(e)?fn:sn;return t.test(rn(e))}function mn(e,t){return e==null?void 0:e[t]}function Ye(e,t){var n=mn(e,t);return pn(n)?n:void 0}function hn(e,t){return e===t||e!==e&&t!==t}var vn=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,gn=/^\w*$/;function yn(e,t){if(Se(e))return!1;var n=typeof e;return n=="number"||n=="symbol"||n=="boolean"||e==null||pe(e)?!0:gn.test(e)||!vn.test(e)||t!=null&&e in Object(t)}var _n=Ye(Object,"create");const re=_n;function bn(){this.__data__=re?re(null):{},this.size=0}function wn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var Tn="__lodash_hash_undefined__",Sn=Object.prototype,Cn=Sn.hasOwnProperty;function kn(e){var t=this.__data__;if(re){var n=t[e];return n===Tn?void 0:n}return Cn.call(t,e)?t[e]:void 0}var In=Object.prototype,xn=In.hasOwnProperty;function En(e){var t=this.__data__;return re?t[e]!==void 0:xn.call(t,e)}var On="__lodash_hash_undefined__";function $n(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=re&&t===void 0?On:t,this}function V(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}V.prototype.clear=bn;V.prototype.delete=wn;V.prototype.get=kn;V.prototype.has=En;V.prototype.set=$n;function zn(){this.__data__=[],this.size=0}function me(e,t){for(var n=e.length;n--;)if(hn(e[n][0],t))return n;return-1}var Nn=Array.prototype,Ln=Nn.splice;function Pn(e){var t=this.__data__,n=me(t,e);if(n<0)return!1;var a=t.length-1;return n==a?t.pop():Ln.call(t,n,1),--this.size,!0}function Dn(e){var t=this.__data__,n=me(t,e);return n<0?void 0:t[n][1]}function An(e){return me(this.__data__,e)>-1}function Mn(e,t){var n=this.__data__,a=me(n,e);return a<0?(++this.size,n.push([e,t])):n[a][1]=t,this}function q(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}q.prototype.clear=zn;q.prototype.delete=Pn;q.prototype.get=Dn;q.prototype.has=An;q.prototype.set=Mn;var jn=Ye(fe,"Map");const Rn=jn;function Fn(){this.size=0,this.__data__={hash:new V,map:new(Rn||q),string:new V}}function Bn(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function he(e,t){var n=e.__data__;return Bn(t)?n[typeof t=="string"?"string":"hash"]:n.map}function Hn(e){var t=he(this,e).delete(e);return this.size-=t?1:0,t}function Yn(e){return he(this,e).get(e)}function Vn(e){return he(this,e).has(e)}function Xn(e,t){var n=he(this,e),a=n.size;return n.set(e,t),this.size+=n.size==a?0:1,this}function X(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var a=e[t];this.set(a[0],a[1])}}X.prototype.clear=Fn;X.prototype.delete=Hn;X.prototype.get=Yn;X.prototype.has=Vn;X.prototype.set=Xn;var Wn="Expected a function";function Ce(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Wn);var n=function(){var a=arguments,s=t?t.apply(this,a):a[0],c=n.cache;if(c.has(s))return c.get(s);var l=e.apply(this,a);return n.cache=c.set(s,l)||c,l};return n.cache=new(Ce.Cache||X),n}Ce.Cache=X;var Gn=500;function Kn(e){var t=Ce(e,function(a){return n.size===Gn&&n.clear(),a}),n=t.cache;return t}var Un=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Jn=/\\(\\)?/g,Zn=Kn(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(Un,function(n,a,s,c){t.push(s?c.replace(Jn,"$1"):a||n)}),t});const qn=Zn;function Qn(e){return e==null?"":He(e)}function ea(e,t){return Se(e)?e:yn(e,t)?[e]:qn(Qn(e))}var ta=1/0;function na(e){if(typeof e=="string"||pe(e))return e;var t=e+"";return t=="0"&&1/e==-ta?"-0":t}function aa(e,t){t=ea(t,e);for(var n=0,a=t.length;e!=null&&n<a;)e=e[na(t[n++])];return n&&n==a?e:void 0}function ra(e,t,n){var a=e==null?void 0:aa(e,t);return a===void 0?n:a}var oa=function(){return fe.Date.now()};const ge=oa;var sa="Expected a function",ia=Math.max,la=Math.min;function ca(e,t,n){var a,s,c,l,f,b,v=0,S=!1,g=!1,m=!0;if(typeof e!="function")throw new TypeError(sa);t=$e(t)||0,Z(n)&&(S=!!n.leading,g="maxWait"in n,c=g?ia($e(n.maxWait)||0,t):c,m="trailing"in n?!!n.trailing:m);function h(u){var k=a,D=s;return a=s=void 0,v=u,l=e.apply(D,k),l}function p(u){return v=u,f=setTimeout(P,t),S?h(u):l}function B(u){var k=u-b,D=u-v,Y=t-k;return g?la(Y,c-D):Y}function L(u){var k=u-b,D=u-v;return b===void 0||k>=t||k<0||g&&D>=c}function P(){var u=ge();if(L(u))return W(u);f=setTimeout(P,B(u))}function W(u){return f=void 0,m&&a?h(u):(a=s=void 0,l)}function H(){f!==void 0&&clearTimeout(f),v=0,a=b=s=f=void 0}function Q(){return f===void 0?l:W(ge())}function z(){var u=ge(),k=L(u);if(a=arguments,s=this,b=u,k){if(f===void 0)return p(b);if(g)return clearTimeout(f),f=setTimeout(P,t),h(b)}return f===void 0&&(f=setTimeout(P,t)),l}return z.cancel=H,z.flush=Q,z}var ua="Expected a function";function ye(e,t,n){var a=!0,s=!0;if(typeof e!="function")throw new TypeError(ua);return Z(n)&&(a="leading"in n?!!n.leading:a,s="trailing"in n?!!n.trailing:s),ca(e,t,{leading:a,maxWait:t,trailing:s})}const da=(e,t)=>{if(!F||!e||!t)return!1;const n=e.getBoundingClientRect();let a;return t instanceof Element?a=t.getBoundingClientRect():a={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},n.top<a.bottom&&n.bottom>a.top&&n.right>a.left&&n.left<a.right},fa=e=>Object.keys(e),pa=(e,t)=>{if(!F)return!1;const n={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(t)],a=Xe(e,n);return["scroll","auto","overlay"].some(s=>a.includes(s))},ma=(e,t)=>{if(!F)return;let n=e;for(;n;){if([window,document,document.documentElement].includes(n))return window;if(pa(n,t))return n;n=n.parentNode}return n},ha=["class","style"],va=/^on[A-Z]/,ga=(e={})=>{const{excludeListeners:t=!1,excludeKeys:n}=e,a=_(()=>((n==null?void 0:n.value)||[]).concat(ha)),s=Je();return s?_(()=>{var c;return We(Object.entries((c=s.proxy)==null?void 0:c.$attrs).filter(([l])=>!a.value.includes(l)&&!(t&&va.test(l))))}):_(()=>({}))};var ya={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const _a=e=>(t,n)=>ba(t,n,o(e)),ba=(e,t,n)=>ra(n,e,e).replace(/\{(\w+)\}/g,(a,s)=>{var c;return`${(c=t==null?void 0:t[s])!=null?c:`{${s}}`}`}),wa=e=>{const t=_(()=>o(e).name),n=Ze(e)?e:C(e);return{lang:t,locale:n,t:_a(e)}},Ve=()=>{const e=Ge("locale");return wa(_(()=>e.value||ya))},Ta=Ne({urlList:{type:_e(Array),default:()=>Re([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),Sa={close:()=>!0,switch:e=>Te(e)},Ca=["src"],ka=de({name:"ElImageViewer"}),Ia=de({...ka,props:Ta,emits:Sa,setup(e,{expose:t,emit:n}){const a=e,s={CONTAIN:{name:"contain",icon:ke(pt)},ORIGINAL:{name:"original",icon:ke(mt)}},{t:c}=Ve(),l=Le("image-viewer"),{nextZIndex:f}=ht(),b=C(),v=C([]),S=qe(),g=C(!0),m=C(a.initialIndex),h=Qe(s.CONTAIN),p=C({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),B=_(()=>{const{urlList:r}=a;return r.length<=1}),L=_(()=>m.value===0),P=_(()=>m.value===a.urlList.length-1),W=_(()=>a.urlList[m.value]),H=_(()=>{const{scale:r,deg:i,offsetX:d,offsetY:I,enableTransition:M}=p.value;let E=d/r,j=I/r;switch(i%360){case 90:case-270:[E,j]=[j,-E];break;case 180:case-180:[E,j]=[-E,-j];break;case 270:case-90:[E,j]=[-j,E];break}const G={transform:`scale(${r}) rotate(${i}deg) translate(${E}px, ${j}px)`,transition:M?"transform .3s":""};return h.value.name===s.CONTAIN.name&&(G.maxWidth=G.maxHeight="100%"),G}),Q=_(()=>Te(a.zIndex)?a.zIndex:f());function z(){k(),n("close")}function u(){const r=ye(d=>{switch(d.code){case K.esc:a.closeOnPressEscape&&z();break;case K.space:te();break;case K.left:se();break;case K.up:A("zoomIn");break;case K.right:ie();break;case K.down:A("zoomOut");break}}),i=ye(d=>{const I=d.deltaY||d.deltaX;A(I<0?"zoomIn":"zoomOut",{zoomRate:a.zoomRate,enableTransition:!1})});S.run(()=>{U(document,"keydown",r),U(document,"wheel",i)})}function k(){S.stop()}function D(){g.value=!1}function Y(r){g.value=!1,r.target.alt=c("el.image.error")}function oe(r){if(g.value||r.button!==0||!b.value)return;p.value.enableTransition=!1;const{offsetX:i,offsetY:d}=p.value,I=r.pageX,M=r.pageY,E=ye(G=>{p.value={...p.value,offsetX:i+G.pageX-I,offsetY:d+G.pageY-M}}),j=U(document,"mousemove",E);U(document,"mouseup",()=>{j()}),r.preventDefault()}function ee(){p.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function te(){if(g.value)return;const r=fa(s),i=Object.values(s),d=h.value.name,M=(i.findIndex(E=>E.name===d)+1)%r.length;h.value=s[r[M]],ee()}function ne(r){const i=a.urlList.length;m.value=(r+i)%i}function se(){L.value&&!a.infinite||ne(m.value-1)}function ie(){P.value&&!a.infinite||ne(m.value+1)}function A(r,i={}){if(g.value)return;const{zoomRate:d,rotateDeg:I,enableTransition:M}={zoomRate:a.zoomRate,rotateDeg:90,enableTransition:!0,...i};switch(r){case"zoomOut":p.value.scale>.2&&(p.value.scale=Number.parseFloat((p.value.scale/d).toFixed(3)));break;case"zoomIn":p.value.scale<7&&(p.value.scale=Number.parseFloat((p.value.scale*d).toFixed(3)));break;case"clockwise":p.value.deg+=I;break;case"anticlockwise":p.value.deg-=I;break}p.value.enableTransition=M}return be(W,()=>{Ae(()=>{const r=v.value[0];r!=null&&r.complete||(g.value=!0)})}),be(m,r=>{ee(),n("switch",r)}),Me(()=>{var r,i;u(),(i=(r=b.value)==null?void 0:r.focus)==null||i.call(r)}),t({setActiveItem:ne}),(r,i)=>(T(),ce(ot,{to:"body",disabled:!r.teleported},[y(rt,{name:"viewer-fade",appear:""},{default:N(()=>[x("div",{ref_key:"wrapper",ref:b,tabindex:-1,class:w(o(l).e("wrapper")),style:we({zIndex:o(Q)})},[x("div",{class:w(o(l).e("mask")),onClick:i[0]||(i[0]=et(d=>r.hideOnClickModal&&z(),["self"]))},null,2),O(" CLOSE "),x("span",{class:w([o(l).e("btn"),o(l).e("close")]),onClick:z},[y(o(R),null,{default:N(()=>[y(o(vt))]),_:1})],2),O(" ARROW "),o(B)?O("v-if",!0):(T(),$(ue,{key:0},[x("span",{class:w([o(l).e("btn"),o(l).e("prev"),o(l).is("disabled",!r.infinite&&o(L))]),onClick:se},[y(o(R),null,{default:N(()=>[y(o(gt))]),_:1})],2),x("span",{class:w([o(l).e("btn"),o(l).e("next"),o(l).is("disabled",!r.infinite&&o(P))]),onClick:ie},[y(o(R),null,{default:N(()=>[y(o(yt))]),_:1})],2)],64)),O(" ACTIONS "),x("div",{class:w([o(l).e("btn"),o(l).e("actions")])},[x("div",{class:w(o(l).e("actions__inner"))},[y(o(R),{onClick:i[1]||(i[1]=d=>A("zoomOut"))},{default:N(()=>[y(o(_t))]),_:1}),y(o(R),{onClick:i[2]||(i[2]=d=>A("zoomIn"))},{default:N(()=>[y(o(bt))]),_:1}),x("i",{class:w(o(l).e("actions__divider"))},null,2),y(o(R),{onClick:te},{default:N(()=>[(T(),ce(tt(o(h).icon)))]),_:1}),x("i",{class:w(o(l).e("actions__divider"))},null,2),y(o(R),{onClick:i[3]||(i[3]=d=>A("anticlockwise"))},{default:N(()=>[y(o(wt))]),_:1}),y(o(R),{onClick:i[4]||(i[4]=d=>A("clockwise"))},{default:N(()=>[y(o(Tt))]),_:1})],2)],2),O(" CANVAS "),x("div",{class:w(o(l).e("canvas"))},[(T(!0),$(ue,null,je(r.urlList,(d,I)=>nt((T(),$("img",{ref_for:!0,ref:M=>v.value[I]=M,key:d,src:d,style:we(o(H)),class:w(o(l).e("img")),onLoad:D,onError:Y,onMousedown:oe},null,46,Ca)),[[at,I===m.value]])),128))],2),le(r.$slots,"default")],6)]),_:3})],8,["disabled"]))}});var xa=Pe(Ia,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const Ea=De(xa),Oa=Ne({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:_e([String,Object])},previewSrcList:{type:_e(Array),default:()=>Re([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),$a={load:e=>e instanceof Event,error:e=>e instanceof Event,switch:e=>Te(e),close:()=>!0,show:()=>!0},za=["src","loading"],Na={key:0},La=de({name:"ElImage",inheritAttrs:!1}),Pa=de({...La,props:Oa,emits:$a,setup(e,{emit:t}){const n=e;let a="";const{t:s}=Ve(),c=Le("image"),l=st(),f=ga(),b=C(),v=C(!1),S=C(!0),g=C(!1),m=C(),h=C(),p=F&&"loading"in HTMLImageElement.prototype;let B,L;const P=_(()=>l.style),W=_(()=>{const{fit:r}=n;return F&&r?{objectFit:r}:{}}),H=_(()=>{const{previewSrcList:r}=n;return Array.isArray(r)&&r.length>0}),Q=_(()=>{const{previewSrcList:r,initialIndex:i}=n;let d=i;return i>r.length-1&&(d=0),d}),z=_(()=>n.loading==="eager"?!1:!p&&n.loading==="lazy"||n.lazy),u=()=>{F&&(S.value=!0,v.value=!1,b.value=n.src)};function k(r){S.value=!1,v.value=!1,t("load",r)}function D(r){S.value=!1,v.value=!0,t("error",r)}function Y(){da(m.value,h.value)&&(u(),te())}const oe=Ke(Y,200);async function ee(){var r;if(!F)return;await Ae();const{scrollContainer:i}=n;Ue(i)?h.value=i:lt(i)&&i!==""?h.value=(r=document.querySelector(i))!=null?r:void 0:m.value&&(h.value=ma(m.value)),h.value&&(B=U(h,"scroll",oe),setTimeout(()=>Y(),100))}function te(){!F||!h.value||!oe||(B==null||B(),h.value=void 0)}function ne(r){if(r.ctrlKey){if(r.deltaY<0)return r.preventDefault(),!1;if(r.deltaY>0)return r.preventDefault(),!1}}function se(){H.value&&(L=U("wheel",ne,{passive:!1}),a=document.body.style.overflow,document.body.style.overflow="hidden",g.value=!0,t("show"))}function ie(){L==null||L(),document.body.style.overflow=a,g.value=!1,t("close")}function A(r){t("switch",r)}return be(()=>n.src,()=>{z.value?(S.value=!0,v.value=!1,te(),ee()):u()}),Me(()=>{z.value?ee():u()}),(r,i)=>(T(),$("div",{ref_key:"container",ref:m,class:w([o(c).b(),r.$attrs.class]),style:we(o(P))},[b.value!==void 0&&!v.value?(T(),$("img",it({key:0},o(f),{src:b.value,loading:r.loading,style:o(W),class:[o(c).e("inner"),o(H)&&o(c).e("preview"),S.value&&o(c).is("loading")],onClick:se,onLoad:k,onError:D}),null,16,za)):O("v-if",!0),S.value||v.value?(T(),$("div",{key:1,class:w(o(c).e("wrapper"))},[S.value?le(r.$slots,"placeholder",{key:0},()=>[x("div",{class:w(o(c).e("placeholder"))},null,2)]):v.value?le(r.$slots,"error",{key:1},()=>[x("div",{class:w(o(c).e("error"))},ct(o(s)("el.image.error")),3)]):O("v-if",!0)],2)):O("v-if",!0),o(H)?(T(),$(ue,{key:2},[g.value?(T(),ce(o(Ea),{key:0,"z-index":r.zIndex,"initial-index":o(Q),infinite:r.infinite,"zoom-rate":r.zoomRate,"url-list":r.previewSrcList,"hide-on-click-modal":r.hideOnClickModal,teleported:r.previewTeleported,"close-on-press-escape":r.closeOnPressEscape,onClose:ie,onSwitch:A},{default:N(()=>[r.$slots.viewer?(T(),$("div",Na,[le(r.$slots,"viewer")])):O("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","zoom-rate","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):O("v-if",!0)],64)):O("v-if",!0)],6))}});var Da=Pe(Pa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const Aa=De(Da);const Ma={class:"breed__list"},ja={__name:"index",setup(e){const t=C([]),n=dt(),a="scale-down";return ft(async()=>{try{if(n.params.breed&&n.params.breed!=="undefined"){const c=await(await fetch(`https://dog.ceo/api/breed/${n.params.breed}/images`)).json();t.value=c.message.slice(0,50)}}catch{t.value=[]}}),(s,c)=>{const l=Aa;return T(),$("div",Ma,[(T(!0),$(ue,null,je(t.value,f=>(T(),$("div",{key:f},[(T(),ce(l,{style:{width:"100%",height:"100%"},src:f,key:f,fit:a,"zoom-rate":1.2,"preview-src-list":[f],loading:"lazy"},null,8,["src","zoom-rate","preview-src-list"]))]))),128))])}}},Ha=ut(ja,[["__scopeId","data-v-aa86449c"]]);export{Ha as default};
