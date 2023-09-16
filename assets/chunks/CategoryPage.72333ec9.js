import{_ as m}from"./ShopPrice.d0fb4919.js";import{d as h}from"./shop.data.5414bd8f.js";import{_ as x,o as a,c as n,a as t,t as u,h as _,m as f,u as p,l as y,F as v,r as $,q as w,d as S,k as b}from"./framework.40aa810a.js";const k=["href"],P=["href"],B={class:"p-0 min-w-50 relative",style:{flex:"0 0"}},C=["src"],N={class:"flex flex-col p-4 gap-2",style:{flex:"1 1 100px"}},L={class:"text-2xl font-bold items-center gap-2"},D={class:"text-md leading-normal"},F={__name:"ProductCard",props:{title:{type:String,default:""},description:{type:String,default:""},url:{type:String,default:""},cover:{type:String,default:""},slug:{type:String,default:""},price:{type:Number,default:""},stripe_id:{type:String,default:""},category:{type:Object,default:()=>({})},digital:{type:Boolean,default:!1},sort:{type:Number,default:""}},setup(e){const s=e;return(i,o)=>{var d,c;const r=m;return a(),n("div",{class:"overflow-hidden flex flex-col shadow-lg hover-shadow-xl transition flex-1 dark-bg-dark-300 bg-light-400 rounded",href:`/${(d=e.category)==null?void 0:d.slug}/${e.slug}/`,style:{flex:"1 1 auto"}},[t("a",{href:`/${(c=e.category)==null?void 0:c.slug}/${e.slug}/`},[t("div",B,[t("img",{style:{margin:"0"},src:`/products/${e.slug}.webp`},null,8,C)]),t("div",N,[t("div",L,u(e.title),1),t("div",D,u(e.description),1)])],8,P),_(r,f({class:"w-full"},s),null,16)],8,k)}}},V=x(F,[["__scopeId","data-v-ac30acfc"]]),j={class:"flex flex-wrap gap-16"},q={__name:"ProductList",setup(e){const{params:s,frontmatter:i}=p(),o=y(()=>h.categories.find(r=>r.slug==s.value.slug));return(r,d)=>{const c=V;return a(),n("div",j,[(a(!0),n(v,null,$([...S(o).products].sort((l,g)=>l.sort>g.sort?1:-1),l=>(a(),w(c,f({key:l},l),null,16))),128))])}}},E={class:"flex flex-col items-center max-w-130 gap-8"},A={__name:"CategoryPage",setup(e){return p(),(s,i)=>{const o=q;return a(),n("div",E,[b(s.$slots,"default"),_(o)])}}};export{A as _};
