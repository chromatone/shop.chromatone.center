import{e as x,c as d,_ as k,f as v}from"./theme.CTCRT_zz.js";import{k as b,L as _,j as w,c as S,o,e as l,f as e,g as c,K as N,m as u,G as C,T as $,h as T,d as a,F as p,n as V,J as B}from"./framework.C7hmV9_f.js";const D={key:0,class:"flex items-stretch flex-wrap relative bg-light-700 dark-bg-dark-400 dark-bg-opacity-80 select-none bg-opacity-20 backdrop-blur-lg",style:{"font-weight":"normal"}},j={class:"tracking-widest tabular-nums py-4 pl-4 text-2xl font-bold",style:{flex:"1 1 10px"}},F=["title"],I={class:"p-1 uppercase text-3 opacity-60"},L=e("div",{class:"i-la-shopping-bag text-2xl"},null,-1),Y=e("div",{class:"p-0 uppercase whitespace-nowrap"},"Add to cart",-1),A=e("div",{class:"i-la-check text-2xl"},null,-1),P=e("div",{class:"p-0 uppercase flex-auto"},"In cart",-1),E={__name:"ShopPrice",props:{title:{type:String,default:""},price:{type:Number,default:0},digital:{type:Boolean,default:!1},stripe_id:{type:String,default:""},color:{type:String,default:""},sort:{type:Number,default:0},material:{type:Array,default:()=>["VINYL"]},slug:{type:String,default:""},category:{type:Object,default:{}}},setup(t){const s=t,f=b(),g=_(),{isDark:y}=w(),h=S(()=>{var i;return s.color||`oklch(${y.value?60:92}% .18 ${s.sort*360/((i=x)==null?void 0:i.products.length)})`});return(i,r)=>{var n;const m=k;return t.title?(o(),l("div",D,[e("div",j,"$"+c(t.price),1),e("div",{class:"flex gap-2 items-center p-2 leading-5",title:t.digital?"This is a digital product. You will receive a link to download the PDF file and will have a personal licence to print it by yourself.":"This is a physical product, that was printed on high quality materials and is sent to our customers via international post delivery.",style:{flex:"100 1 50px"}},[e("div",I,c(((n=t.material)==null?void 0:n[0])||"VINYL"),1)],8,F),N(i.$slots,"default"),u($,{name:"fade",mode:"out-in"},{default:C(()=>[e("div",{class:"flex-auto font-bold transition-all duration-300 flex items-center gap-1 rounded shadow p-3 relative cursor-pointer flex items-center justify-start m-2",style:V([{backgroundColor:a(h)},{flex:"1 1 180px"}]),key:"add",onClick:r[0]||(r[0]=B(R=>t.stripe_id&&!a(d)[t.stripe_id]?a(v)(t.title,{id:s.stripe_id,path:a(f).path,...s,category:t.category.slug}):a(g).go("/cart/"),["prevent","stop"]))},[t.stripe_id&&!a(d)[t.stripe_id]?(o(),l(p,{key:0},[L,Y],64)):(o(),l(p,{key:1},[A,P,u(m,{id:t.stripe_id},null,8,["id"])],64))],4)]),_:1})])):T("",!0)}}};export{E as _};