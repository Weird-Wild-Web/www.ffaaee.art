import{_ as f}from"./5u1I3Ibu.js";import{f as g,q as w,i as k,l as x,k as y,o,c,a as s,t as e,F as B,r as $,b as v,w as N,d as q,m as C}from"./B-9g4uoC.js";import{q as b}from"./Rpn2npK6.js";import{_ as P}from"./DlAUqK2U.js";const V={class:"wrapper"},A={class:"title"},D={class:"list"},E=["src","alt"],F={class:"card-item"},I={class:"card-desc"},L={class:"card-date"},H=g({__name:"BlogPosts",async setup(M){let t,n;const{locale:r}=w(),{data:d,refresh:i}=([t,n]=k(()=>x(()=>b().where({lang:{$eq:r.value}}).sort({date:-1}).find(),"$bMkErHolNh")),t=await t,n(),t);return y(()=>r.value,()=>{i()}),(_,S)=>{const m=f;return o(),c("div",V,[s("h1",A,e(_.$t("main-menu")),1),s("ul",D,[(o(!0),c(B,null,$(C(d),({_path:a,title:p,date:h,cover:l,description:u})=>(o(),c("li",{class:"card",key:a},[s("img",{class:"card-img",src:l,alt:`${a}${l.replace("..","")}`},null,8,E),s("div",F,[v(m,{to:a,class:"card-title"},{default:N(()=>[q(e(p),1)]),_:2},1032,["to"]),s("div",I,e(u),1),s("span",L,e(_.$d(h,"long").replace(/\s*г\./,"")),1)])]))),128))])])}}}),J=P(H,[["__scopeId","data-v-22ad2ed2"]]);export{J as B};