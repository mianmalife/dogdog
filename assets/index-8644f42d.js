import{e as y,g as h,E as v,_ as b,w as C}from"./base-040bad82.js";import{h as m,c as g,k as o,l as r,y as u,z as k,aa as E,u as l,B as c,n as p,j as f,_ as $,X as B,W as _,x as w}from"./index-77cb2389.js";import{i as x}from"./icon-9a48b87a.js";const I=y({type:{type:String,values:["primary","success","warning","info","danger","default"],default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},href:{type:String,default:""},icon:{type:x}}),N={click:t=>t instanceof MouseEvent},L=["href"],P=m({name:"ElLink"}),S=m({...P,props:I,emits:N,setup(t,{emit:a}){const n=t,s=h("link"),d=g(()=>[s.b(),s.m(n.type),s.is("disabled",n.disabled),s.is("underline",n.underline&&!n.disabled)]);function i(e){n.disabled||a("click",e)}return(e,D)=>(o(),r("a",{class:p(l(d)),href:e.disabled||!e.href?void 0:e.href,onClick:i},[e.icon?(o(),u(l(v),{key:0},{default:k(()=>[(o(),u(E(e.icon)))]),_:1})):c("v-if",!0),e.$slots.default?(o(),r("span",{key:1,class:p(l(s).e("inner"))},[f(e.$slots,"default")],2)):c("v-if",!0),e.$slots.icon?f(e.$slots,"icon",{key:2}):c("v-if",!0)],10,L))}});var T=b(S,[["__file","/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);const V=C(T);const z={class:"notfound"},j={__name:"index",setup(t){const a=B();function n(){a.back()}return(s,d)=>{const i=V;return o(),r("div",z,[_(" 404 not found "),w(i,{type:"primary",onClick:n},{default:k(()=>[_("back to Index")]),_:1})])}}},W=$(j,[["__scopeId","data-v-48c0c875"]]);export{W as default};
