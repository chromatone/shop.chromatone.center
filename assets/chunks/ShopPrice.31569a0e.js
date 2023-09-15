import{_ as f}from"./ShopCartIcon.0229a112.js";import{s as g,o as i,c as a,a as e,t as h,d as s,k as _,g as r,i as b,u as o,x as m,T as k}from"./framework.7102fc9b.js";import{c as n,e as y}from"./cart.caeddd5b.js";const v={key:0,class:"flex items-center gap-2 relative p-2",style:{"font-weight":"normal"}},x={class:"tracking-widest tabular-nums p-2 text-2xl bg-light-200 bg-opacity-70 rounded-md dark-bg-dark-400 dark-bg-opacity-70 backdrop-blur-lg font-bold"},w={key:0,class:"price p-2 text-2xl bg-light-200 bg-opacity-70 rounded-md dark-bg-dark-400 dark-bg-opacity-70 backdrop-blur-lg font-bold",title:"This is a digital good. You will receive a link to download the file and will be able to print it by yourself."},S=e("div",{class:"i-la-file-download"},null,-1),B=[S],C=e("div",{class:"flex-1"},null,-1),N=e("div",{class:"p-0",style:{flex:"1000"}},null,-1),T=e("div",{class:"i-la-shopping-cart"},null,-1),$=e("div",{class:"p-0"},"Add to cart",-1),V={class:"font-bold transition-all duration-300 flex items-center gap-1 bg-purple-300 dark-bg-purple-700 rounded-lg shadow p-2 relative cursor-pointer",style:{flex:"1 1 90px"},key:"view",href:"/cart/"},j=e("div",{class:"i-la-check"},null,-1),A=e("div",{class:"p-0"},"In cart",-1),D=[j,A],P={__name:"ShopPrice",props:{title:{type:String,default:""},price:{type:Number,default:0},digital:{type:Boolean,default:!1},stripe_id:{type:String,default:""}},setup(t){const l=t,c=g();return(p,d)=>{const u=f;return t.title?(i(),a("div",v,[e("div",x,"$"+h(t.price),1),t.digital?(i(),a("div",w,B)):s("",!0),C,_(p.$slots,"default"),N,r(k,{name:"fade"},{default:b(()=>[t.stripe_id&&!o(n)[t.stripe_id]?(i(),a("div",{class:"flex-auto font-bold ml-2 transition-all duration-300 flex items-center gap-1 bg-purple-300 dark-bg-purple-500 rounded-lg shadow p-2 relative cursor-pointer flex items-center justify-center",key:"add",onClick:d[0]||(d[0]=m(E=>o(y)(t.title,{...l,id:l.stripe_id,path:o(c).path}),["prevent","stop"]))},[T,$,r(u,{id:t.stripe_id},null,8,["id"])])):s("",!0),o(n)[t.stripe_id]?(i(),a("a",V,D)):s("",!0)]),_:1})])):s("",!0)}}};export{P as _};
